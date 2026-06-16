// Auto-managed by Antigravity IDE via Clasp

// =========== POST (fire-and-forget; response is opaque) ===========
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  const payload = JSON.parse(e.postData.contents);
  const action = payload.action || 'add_dish';
  
  if (action === 'add_dish') {
    let finalCategory = payload.category;
    if (!finalCategory || finalCategory === 'Any') {
      const name = payload.name.toLowerCase();
      finalCategory = 'Snack'; // Default
      if (name.includes('kuih') || name.includes('cake') || name.includes('ice cream') || name.includes('cendol') || name.includes('lapis')) {
        finalCategory = 'Dessert';
      } else if (name.includes('kopi') || name.includes('teh') || name.includes('sirap') || name.includes('juice') || name.includes('air')) {
        finalCategory = 'Drinks';
      } else if (name.includes('nasi') && name.includes('lemak')) {
        finalCategory = 'Breakfast';
      } else if (name.includes('roti') || name.includes('pancake')) {
        finalCategory = 'Breakfast';
      } else if (name.includes('nasi') || name.includes('mee') || name.includes('ayam') || name.includes('ikan') || name.includes('laksa') || name.includes('sup')) {
        finalCategory = 'Lunch'; 
      } else if (name.includes('burger') || name.includes('pizza') || name.includes('steak') || name.includes('satay')) {
        finalCategory = 'Dinner';
      }
    }
    const budget = payload.budget || 'Any';
    sheet.appendRow([payload.name, payload.emoji, finalCategory, 0, '', budget]);
    return json({ result: 'success' });
  }
  
  if (action === 'increment_pick') {
    const data = sheet.getDataRange().getValues();
    for (let i = 1; i < data.length; i++) {
      if (data[i][0] === payload.name) {
        const currentCount = Number(data[i][3]) || 0;
        sheet.getRange(i + 1, 4).setValue(currentCount + 1);
        break;
      }
    }
    return json({ result: 'success' });
  }
  
  if (action === 'add_review') {
    let photoUrl = '';
    if (payload.photoBase64) {
      try {
        const splitBase = payload.photoBase64.split(',');
        const type = splitBase[0].split(';')[0].replace('data:', '');
        const byteCharacters = Utilities.base64Decode(splitBase[1]);
        const blob = Utilities.newBlob(byteCharacters, type, "Review_" + Date.now() + ".jpg");
        const file = DriveApp.createFile(blob);
        file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
        photoUrl = file.getDownloadUrl();
      } catch(e) {
        photoUrl = '[Photo Upload Failed]';
      }
    }

    const data = sheet.getDataRange().getValues();
    for (let i = 1; i < data.length; i++) {
      if (data[i][0] === payload.name) {
        const currentReviews = data[i][4] ? data[i][4].toString() : '';
        let newReview = payload.rating + "⭐: " + payload.comment;
        if (photoUrl && photoUrl !== '[Photo Upload Failed]') {
          newReview += ` (Photo: <a href="${photoUrl}" target="_blank">View</a>)`;
        }
        const updatedReviews = currentReviews ? currentReviews + ' | ' + newReview : newReview;
        sheet.getRange(i + 1, 5).setValue(updatedReviews);
        break;
      }
    }
    return json({ result: 'success' });
  }

  if (action === 'set_live_spin') {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let multiSheet = ss.getSheetByName("multiplayer");
    if (!multiSheet) {
      multiSheet = ss.insertSheet("multiplayer");
      multiSheet.appendRow(["timestamp", "winnerName", "winnerEmoji", "vetoCount", "whoPaysPool", "whoPaysLoser", "emojiStream", "battleState"]);
    }
    multiSheet.getRange(2, 1).setValue(Date.now());
    multiSheet.getRange(2, 2).setValue(payload.winnerName);
    multiSheet.getRange(2, 3).setValue(payload.winnerEmoji);
    // Reset room state
    multiSheet.getRange(2, 4).setValue(0); // vetoCount
    multiSheet.getRange(2, 5).setValue('[]'); // whoPaysPool
    multiSheet.getRange(2, 6).setValue(''); // whoPaysLoser
    multiSheet.getRange(2, 8).setValue(''); // battleState
    return json({ result: 'success' });
  }

  if (action === 'send_emoji') {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const multiSheet = ss.getSheetByName("multiplayer");
    if (multiSheet) {
      let stream = [];
      try { stream = JSON.parse(multiSheet.getRange(2, 7).getValue() || '[]'); } catch(e){}
      stream.push({ emoji: payload.emoji, time: Date.now(), x: payload.x });
      const now = Date.now();
      stream = stream.filter(e => now - e.time < 10000).slice(-20);
      multiSheet.getRange(2, 7).setValue(JSON.stringify(stream));
    }
    return json({ result: 'success' });
  }

  if (action === 'veto') {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const multiSheet = ss.getSheetByName("multiplayer");
    if (multiSheet) {
      let count = Number(multiSheet.getRange(2, 4).getValue() || 0) + 1;
      multiSheet.getRange(2, 4).setValue(count);
      if (count >= 3) {
        multiSheet.getRange(2, 1).setValue(1); // Force reset timestamp
        multiSheet.getRange(2, 2).setValue('');
        multiSheet.getRange(2, 3).setValue('');
      }
    }
    return json({ result: 'success' });
  }

  if (action === 'join_pay') {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const multiSheet = ss.getSheetByName("multiplayer");
    if (multiSheet) {
      let pool = [];
      try { pool = JSON.parse(multiSheet.getRange(2, 5).getValue() || '[]'); } catch(e){}
      if (!pool.includes(payload.name)) pool.push(payload.name);
      multiSheet.getRange(2, 5).setValue(JSON.stringify(pool));
    }
    return json({ result: 'success' });
  }

  if (action === 'spin_pay') {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const multiSheet = ss.getSheetByName("multiplayer");
    if (multiSheet) {
      let pool = [];
      try { pool = JSON.parse(multiSheet.getRange(2, 5).getValue() || '[]'); } catch(e){}
      if (pool.length > 0) {
        const loser = pool[Math.floor(Math.random() * pool.length)];
        multiSheet.getRange(2, 6).setValue(loser);
      }
    }
    return json({ result: 'success' });
  }

  if (action === 'start_battle') {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const multiSheet = ss.getSheetByName("multiplayer");
    if (multiSheet) {
      const state = { left: payload.left, right: payload.right, leftVotes: 0, rightVotes: 0 };
      multiSheet.getRange(2, 8).setValue(JSON.stringify(state));
      // Force room view
      multiSheet.getRange(2, 1).setValue(Date.now());
      multiSheet.getRange(2, 2).setValue('BATTLE_ROYALE');
    }
    return json({ result: 'success' });
  }

  if (action === 'vote_battle') {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const multiSheet = ss.getSheetByName("multiplayer");
    if (multiSheet) {
      let state = null;
      try { state = JSON.parse(multiSheet.getRange(2, 8).getValue() || '{}'); } catch(e){}
      if (state && state.left) {
        if (payload.side === 'left') state.leftVotes++;
        if (payload.side === 'right') state.rightVotes++;
        multiSheet.getRange(2, 8).setValue(JSON.stringify(state));
      }
    }
    return json({ result: 'success' });
  }

  return json({ result: 'unknown action' });
}

// =========== GET (returns data the browser can actually read) ===========
function doGet(e) {
  const p = e.parameter;

  if (p.action === "login") return login(p);

  if (p.action === "get_admin_data") {
    const user = validateToken(p.token);
    if (!user) return json({ ok: false, error: "invalid token" });
    return getAdminData(user);
  }

  if (p.action === "get_live_spin") {
    // Legacy support
    return json({ timestamp: 0 });
  }

  if (p.action === "get_room_state") {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const multiSheet = ss.getSheetByName("multiplayer");
    if (!multiSheet) return json({ timestamp: 0 });
    
    // Read A2:H2
    const row = multiSheet.getRange("A2:H2").getValues()[0];
    return json({ 
      timestamp: row[0] || 0, 
      winnerName: row[1] || '', 
      winnerEmoji: row[2] || '',
      vetoCount: row[3] || 0,
      whoPaysPool: row[4] || '[]',
      whoPaysLoser: row[5] || '',
      emojiStream: row[6] || '[]',
      battleState: row[7] || ''
    });
  }

  // Public GET (no token needed, hides reviews)
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  const data = sheet.getDataRange().getValues();
  const dishes = [];
  for (let i = 1; i < data.length; i++) {
    if (data[i][0]) {
      dishes.push({ 
        name: data[i][0], 
        emoji: data[i][1],
        category: data[i][2] || 'Any',
        pickCount: Number(data[i][3]) || 0,
        budget: data[i][5] || 'Any'
      });
    }
  }
  return json(dishes);
}

// =========== AUTHENTICATION ===========
function login({ username, password }) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const usersSheet = ss.getSheetByName("users");
  if (!usersSheet) return json({ ok: false, error: "Database not initialized. Please run initAuth()." });

  const rows = usersSheet.getDataRange().getValues();
  rows.shift(); // drop headers

  const user = rows.find(r => r[0] === username && r[1] === password);
  if (!user) return json({ ok: false, error: "wrong credentials" });

  const token = Utilities.getUuid();
  const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days
  ss.getSheetByName("sessions").appendRow([token, user[0], expires]);
  return json({ ok: true, token });
}

function validateToken(token) {
  if (!token) return null;
  const sessionsSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("sessions");
  if (!sessionsSheet) return null;

  const rows = sessionsSheet.getDataRange().getValues();
  rows.shift();

  const now = new Date();
  for (const [t, userId, expires] of rows) {
    if (t === token && new Date(expires) > now) return { id: userId };
  }
  return null;
}

function getAdminData(user) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  const data = sheet.getDataRange().getValues();
  const adminDishes = [];
  for (let i = 1; i < data.length; i++) {
    if (data[i][0]) {
      adminDishes.push({ 
        name: data[i][0], 
        emoji: data[i][1],
        category: data[i][2] || 'Any',
        pickCount: Number(data[i][3]) || 0,
        reviews: data[i][4] || '', // Full access!
        budget: data[i][5] || 'Any'
      });
    }
  }
  return json({ ok: true, dishes: adminDishes });
}

// =========== HELPERS & SETUP ===========
function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function authorizeDrive() {
  // Run this function once manually in the Apps Script Editor 
  // so Google asks you for permission to save photos to your Google Drive!
  DriveApp.getRootFolder();
}

function initAuth() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  if (!ss.getSheetByName("users")) {
    const sheet = ss.insertSheet("users");
    sheet.appendRow(["username", "password"]);
    sheet.appendRow(["admin", "makan123"]);
  }
  if (!ss.getSheetByName("sessions")) {
    const sheet = ss.insertSheet("sessions");
    sheet.appendRow(["token", "username", "expires"]);
  }
  if (!ss.getSheetByName("multiplayer")) {
    const sheet = ss.insertSheet("multiplayer");
    sheet.appendRow(["timestamp", "winnerName", "winnerEmoji", "vetoCount", "whoPaysPool", "whoPaysLoser", "emojiStream", "battleState"]);
  }
}

// Robot script to fix old categories
function fixCategories() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  const data = sheet.getDataRange().getValues();
  
  for (let i = 1; i < data.length; i++) {
    const name = data[i][0].toString().toLowerCase();
    const currentCategory = data[i][2];
    
    // Only fix if it's empty or says "Any"
    if (!currentCategory || currentCategory === 'Any') {
      let newCat = 'Snack'; // Default
      
      if (name.includes('kuih') || name.includes('cake') || name.includes('ice cream') || name.includes('cendol') || name.includes('lapis')) {
        newCat = 'Dessert';
      } else if (name.includes('kopi') || name.includes('teh') || name.includes('sirap') || name.includes('juice') || name.includes('air')) {
        newCat = 'Drinks';
      } else if (name.includes('nasi') && name.includes('lemak')) {
        newCat = 'Breakfast';
      } else if (name.includes('roti') || name.includes('pancake')) {
        newCat = 'Breakfast';
      } else if (name.includes('nasi') || name.includes('mee') || name.includes('ayam') || name.includes('ikan') || name.includes('laksa') || name.includes('sup')) {
        newCat = 'Lunch'; 
      } else if (name.includes('burger') || name.includes('pizza') || name.includes('steak') || name.includes('satay')) {
        newCat = 'Dinner';
      }
      
      // Update Column C
      sheet.getRange(i + 1, 3).setValue(newCat);
    }
  }
}

// Robot script to assign automatic budgets to old dishes
function fixBudgets() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  const data = sheet.getDataRange().getValues();
  
  for (let i = 1; i < data.length; i++) {
    const name = data[i][0].toString().toLowerCase();
    const currentBudget = data[i][5];
    
    // Only fix if it's empty or says "Any"
    if (!currentBudget || currentBudget === 'Any') {
      let newBudget = '💲💲'; // Default Average
      
      // Cheap foods
      if (name.includes('nasi') || name.includes('roti') || name.includes('kuih') || name.includes('air') || name.includes('mee') || name.includes('burger')) {
        newBudget = '💲'; 
      } 
      // Expensive foods
      else if (name.includes('steak') || name.includes('sushi') || name.includes('seafood') || name.includes('wagyu') || name.includes('crab')) {
        newBudget = '💲💲💲';
      }
      
      // Update Column F (6th column)
      sheet.getRange(i + 1, 6).setValue(newBudget);
    }
  }
}
