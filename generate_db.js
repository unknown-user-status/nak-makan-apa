const https = require('https');
const fs = require('fs');

https.get('https://nak-makan-apa-default-rtdb.asia-southeast1.firebasedatabase.app/dishes.json', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const dishesObj = JSON.parse(data);
    const dishes = Object.values(dishesObj);
    
    let dbContent = `const knowledgeDB = {\n`;
    
    dishes.forEach(d => {
      let cal = 400;
      let pro = 15;
      let carb = 45;
      let fat = 15;
      let score = 5;
      let comment = "A tasty choice!";
      let prep = 10;
      let cook = 20;
      
      const cat = (d.category || "").toLowerCase();
      const name = (d.name || "").toLowerCase();
      
      if (cat.includes('malay') || cat.includes('rice') || name.includes('nasi')) {
         cal = 650; pro = 20; carb = 80; fat = 25; score = 4;
         comment = "Rich and flavorful, but heavy on the carbs!";
         prep = 15; cook = 30;
      } else if (cat.includes('noodle') || name.includes('mee') || name.includes('laksa')) {
         cal = 550; pro = 18; carb = 70; fat = 20; score = 5;
         comment = "Slurp-tastic goodness!";
         prep = 10; cook = 15;
      } else if (cat.includes('western') || name.includes('burger') || name.includes('pizza') || name.includes('chop')) {
         cal = 800; pro = 35; carb = 50; fat = 40; score = 3;
         comment = "A hearty meal. Maybe go for a walk afterwards.";
         prep = 15; cook = 20;
      } else if (cat.includes('healthy') || name.includes('salad') || name.includes('buah')) {
         cal = 250; pro = 5; carb = 30; fat = 5; score = 9;
         comment = "Super healthy and light!";
         prep = 5; cook = 0;
      } else if (cat.includes('indian') || name.includes('roti') || name.includes('curry') || name.includes('tandoori')) {
         cal = 600; pro = 25; carb = 65; fat = 25; score = 5;
         comment = "Spicy and incredibly fragrant.";
         prep = 20; cook = 30;
      } else if (cat.includes('chinese') || name.includes('dim sum') || name.includes('rice')) {
         cal = 500; pro = 20; carb = 60; fat = 15; score = 6;
         comment = "A comforting classic.";
         prep = 15; cook = 20;
      } else if (cat.includes('fast food') || name.includes('kfc') || name.includes('mcd')) {
         cal = 900; pro = 25; carb = 80; fat = 45; score = 2;
         comment = "Greasy, salty, and totally worth it today.";
         prep = 5; cook = 15;
      } else if (cat.includes('dessert') || name.includes('ice cream') || name.includes('cake') || name.includes('sweet')) {
         cal = 450; pro = 5; carb = 60; fat = 20; score = 2;
         comment = "Sugar rush incoming!";
         prep = 10; cook = 10;
      }

      // Slightly randomize to make it feel unique
      cal += Math.floor(Math.random() * 40) - 20;
      
      const recipe = `<h3>Homemade ${d.name} ${d.emoji}</h3>
             <p><b>Prep:</b> ${prep} mins | <b>Cook:</b> ${cook} mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for ${d.name}. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`;
      
      dbContent += `  "${d.name}": {
    calories: ${cal}, protein: "${pro}g", carbs: "${carb}g", fats: "${fat}g", healthScore: ${score},
    comment: "${comment}",
    recipe: \`${recipe}\`
  },\n`;
    });
    
    // Add fallbacks
    dbContent += `  "fallback_healthy": {
    calories: 350, protein: "20g", carbs: "40g", fats: "10g", healthScore: 8,
    comment: "A very healthy and nutritious choice!",
    recipe: "<h3>Healthy Chef's Special 🥗</h3><p><b>Prep:</b> 10 mins | <b>Cook:</b> 15 mins</p><p>Steam your protein and veggies, serve over brown rice!</p>"
  },
  "fallback_junk": {
    calories: 650, protein: "15g", carbs: "70g", fats: "30g", healthScore: 3,
    comment: "It's cheat day, enjoy the grease!",
    recipe: "<h3>The Chef's Cheat Meal 🍟</h3><p><b>Prep:</b> 5 mins | <b>Cook:</b> 20 mins</p><p>Deep fry until golden and crispy!</p>"
  }
};

function getKnowledge(foodName, category = '') {
  for (let key in knowledgeDB) {
    if (foodName.toLowerCase().includes(key.toLowerCase())) {
      return knowledgeDB[key];
    }
  }
  const lowerCat = category.toLowerCase();
  if (lowerCat.includes('healthy') || lowerCat.includes('salad')) return knowledgeDB['fallback_healthy'];
  return knowledgeDB['fallback_junk'];
}
`;

    fs.writeFileSync('knowledgeDB.js', dbContent, 'utf8');
    console.log("Successfully generated knowledgeDB.js with " + dishes.length + " entries!");
  });
}).on('error', (e) => {
  console.error(e);
});
