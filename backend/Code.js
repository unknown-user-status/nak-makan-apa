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
    sheet.appendRow([payload.name, payload.emoji, finalCategory, 0, '']);
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
    const data = sheet.getDataRange().getValues();
    for (let i = 1; i < data.length; i++) {
      if (data[i][0] === payload.name) {
        const currentReviews = data[i][4] ? data[i][4].toString() : '';
        const newReview = payload.rating + "⭐: " + payload.comment;
        const updatedReviews = currentReviews ? currentReviews + ' | ' + newReview : newReview;
        sheet.getRange(i + 1, 5).setValue(updatedReviews);
        break;
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
        pickCount: Number(data[i][3]) || 0
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
        reviews: data[i][4] || '' // Full access!
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
