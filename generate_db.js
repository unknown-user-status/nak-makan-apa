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
      let cal = 400; let pro = 15; let carb = 45; let fat = 15; let score = 5;
      let comment = "A tasty choice!"; let prep = 10; let cook = 20;
      let advice = "";
      
      const cat = (d.category || "").toLowerCase();
      const name = (d.name || "").toLowerCase();
      
      if (cat.includes('drinks') || name.includes('kopi') || name.includes('teh') || name.includes('milo') || name.includes('sirap') || name.includes('ais')) {
         cal = 150; pro = 2; carb = 30; fat = 2; score = 4;
         comment = "Sweet and refreshing!";
         prep = 5; cook = 0;
         advice = `This is a perfect drink recipe for ${d.name}! Boil some hot water, add your powder, tea, or syrup base, sweeten it with some condensed milk or sugar to taste, and serve it ice cold!`;
      } else if (cat.includes('dessert') || name.includes('cendol') || name.includes('kuih') || name.includes('abc') || name.includes('bubur')) {
         cal = 350; pro = 5; carb = 55; fat = 15; score = 3;
         comment = "Sugar rush incoming!";
         prep = 10; cook = 10;
         advice = `A delicious dessert recipe for ${d.name}. Prepare your sweet base (like coconut milk, gula melaka, or syrup). Add ice if it's a cold dessert, or steam perfectly if it's a hot kuih!`;
      } else if (cat.includes('malay') || cat.includes('rice') || name.includes('nasi') || name.includes('ayam')) {
         cal = 650; pro = 25; carb = 80; fat = 25; score = 5;
         comment = "Rich and flavorful, but heavy on the carbs!";
         prep = 15; cook = 30;
         advice = `This is a hearty recipe for ${d.name}. Ensure your rice is cooked perfectly. Heat your pan or wok, cook your protein (chicken, beef, or fish) until tender, and mix well with lots of sambal and spices!`;
      } else if (cat.includes('noodle') || name.includes('mee') || name.includes('laksa') || name.includes('kway teow')) {
         cal = 550; pro = 18; carb = 70; fat = 20; score = 5;
         comment = "Slurp-tastic goodness!";
         prep = 10; cook = 15;
         advice = `This is a noodle recipe for ${d.name}. Boil your noodles until springy. Toss them in a very hot wok with soy sauce, fresh veggies, egg, and your favorite protein. Serve hot!`;
      } else if (cat.includes('indian') || name.includes('roti') || name.includes('curry') || name.includes('tandoori')) {
         cal = 600; pro = 25; carb = 65; fat = 25; score = 5;
         comment = "Spicy and incredibly fragrant.";
         prep = 20; cook = 30;
         advice = `This is an Indian-style recipe for ${d.name}. Knead your dough or prepare your marinades! Use plenty of fragrant spices like cumin, coriander, and turmeric, and cook until golden brown!`;
      } else if (cat.includes('seafood') || name.includes('ikan') || name.includes('udang')) {
         cal = 380; pro = 30; carb = 10; fat = 20; score = 7;
         comment = "Fresh from the sea and high in protein!";
         prep = 15; cook = 20;
         advice = `This is a seafood recipe for ${d.name}. Make sure your seafood is super fresh. Marinate with lime, salt, and chili, then grill or pan-fry until perfectly cooked!`;
      } else if (cat.includes('fast food') || name.includes('kfc') || name.includes('mcd')) {
         cal = 900; pro = 25; carb = 80; fat = 45; score = 2;
         comment = "Greasy, salty, and totally worth it today.";
         prep = 5; cook = 15;
         advice = `A fast food cheat meal for ${d.name}. Heat up your deep fryer, batter your ingredients, and fry until they are extremely crispy and golden brown!`;
      } else if (cat.includes('healthy') || name.includes('salad') || name.includes('buah')) {
         cal = 250; pro = 5; carb = 30; fat = 5; score = 9;
         comment = "Super healthy and light!";
         prep = 5; cook = 0;
         advice = `A very healthy recipe for ${d.name}. Keep it raw or lightly steamed to preserve the nutrients. Toss together with a light, low-calorie dressing!`;
      } else {
         cal = 500; pro = 20; carb = 50; fat = 20; score = 5;
         comment = "A comforting classic.";
         prep = 15; cook = 20;
         advice = `This is a custom recipe for ${d.name}. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!`;
      }

      // Slightly randomize to make it feel unique
      cal += Math.floor(Math.random() * 40) - 20;
      
      const emoji = d.emoji || "🍽️";
      
      const recipe = `<h3>Homemade ${d.name} ${emoji}</h3>
<p><b>Prep:</b> ${prep} mins | <b>Cook:</b> ${cook} mins</p>
<b>Chef's Advice:</b>
<p>${advice}</p>`;
      
      dbContent += `  "${d.name}": {
    calories: ${cal}, protein: "${pro}g", carbs: "${carb}g", fats: "${fat}g", healthScore: ${score},
    comment: "${comment}",
    recipe: \`${recipe}\`
  },\n`;
    });
    
    dbContent += `};

function getKnowledge(foodName, category = '') {
  for (let key in knowledgeDB) {
    if (foodName.toLowerCase().includes(key.toLowerCase())) {
      return knowledgeDB[key];
    }
  }
  const lowerCat = category.toLowerCase();
  if (lowerCat.includes('healthy') || lowerCat.includes('salad')) {
    return {
      calories: 350, protein: "20g", carbs: "40g", fats: "10g", healthScore: 8,
      comment: "A very healthy and nutritious choice!",
      recipe: \`<h3>Homemade \${foodName} 🥗</h3><p><b>Prep:</b> 10 mins | <b>Cook:</b> 15 mins</p><b>Chef's Advice:</b><p>This is a healthy, improvised recipe for \${foodName}! Steam your protein and veggies, and serve over brown rice for a nutritious meal!</p>\`
    };
  }
  return {
    calories: 650, protein: "15g", carbs: "70g", fats: "30g", healthScore: 3,
    comment: "It's cheat day, enjoy the grease!",
    recipe: \`<h3>Homemade \${foodName} 🍟</h3><p><b>Prep:</b> 5 mins | <b>Cook:</b> 20 mins</p><b>Chef's Advice:</b><p>This is a fun, improvised recipe for \${foodName}! Heat up your pan or air fryer, and cook it up until it is golden and perfectly delicious!</p>\`
  };
}
`;

    // Fix emoji encoding issues by keeping unicode
    fs.writeFileSync('knowledgeDB.js', dbContent, 'utf8');
    console.log("Successfully generated knowledgeDB.js with " + dishes.length + " entries!");
  });
}).on('error', (e) => {
  console.error(e);
});
