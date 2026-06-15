// Auto-managed by Antigravity IDE via Clasp
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  const payload = JSON.parse(e.postData.contents);
  const action = payload.action || 'add_dish';
  
  if (action === 'add_dish') {
    sheet.appendRow([payload.name, payload.emoji, payload.category || 'Any', 0, '']);
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
        pickCount: Number(data[i][3]) || 0,
        reviews: data[i][4] || ''
      });
    }
  }
  return ContentService.createTextOutput(JSON.stringify(dishes)).setMimeType(ContentService.MimeType.JSON);
}
