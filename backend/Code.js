// Auto-managed by Antigravity IDE via Clasp
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
    return ContentService.createTextOutput(JSON.stringify({ result: 'success' })).setMimeType(ContentService.MimeType.JSON);
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
    return ContentService.createTextOutput(JSON.stringify({ result: 'success' })).setMimeType(ContentService.MimeType.JSON);
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
    return ContentService.createTextOutput(JSON.stringify({ result: 'success' })).setMimeType(ContentService.MimeType.JSON);
  }
  
  if (action === 'get_admin_data') {
    if (payload.password !== 'makan123') {
      return ContentService.createTextOutput(JSON.stringify({ error: 'Incorrect Password' })).setMimeType(ContentService.MimeType.JSON);
    }
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
    return ContentService.createTextOutput(JSON.stringify(adminDishes)).setMimeType(ContentService.MimeType.JSON);
  }

  return ContentService.createTextOutput(JSON.stringify({ result: 'unknown action' })).setMimeType(ContentService.MimeType.JSON);
}

function doGet(e) {
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
        // REVIEWS ARE DELIBERATELY HIDDEN FROM PUBLIC DOGET
      });
    }
  }
  return ContentService.createTextOutput(JSON.stringify(dishes)).setMimeType(ContentService.MimeType.JSON);
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
