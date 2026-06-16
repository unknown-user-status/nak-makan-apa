const knowledgeDB = {
  // --- RICE DISHES ---
  "Nasi Lemak": {
    calories: 644, protein: "14g", carbs: "80g", fats: "25g", healthScore: 4,
    comment: "Delicious, but a fast-track to a food coma!",
    recipe: `<h3>Nasi Lemak Recipe 🥥</h3>
             <p><b>Prep:</b> 15 mins | <b>Cook:</b> 30 mins</p>
             <b>Grocery List:</b>
             <ul><li>2 cups Rice</li><li>1 cup Coconut Milk</li><li>Pandan leaves</li><li>Anchovies (Ikan Bilis)</li><li>Peanuts</li><li>Sambal paste</li><li>Cucumber</li><li>Eggs</li></ul>
             <b>Instructions:</b>
             <ol>
               <li>Cook the rice with coconut milk, pandan leaves, and a pinch of salt.</li>
               <li>Fry the anchovies and peanuts until crispy.</li>
               <li>Hard-boil the eggs and slice the cucumber.</li>
               <li>Serve the fragrant rice with sambal, anchovies, peanuts, eggs, and cucumber slices!</li>
             </ol>`
  },
  "Nasi Goreng Kampung": {
    calories: 550, protein: "18g", carbs: "65g", fats: "22g", healthScore: 5,
    comment: "Spicy, savory, and perfectly greasy.",
    recipe: `<h3>Nasi Goreng Kampung 🍳</h3>
             <p><b>Prep:</b> 10 mins | <b>Cook:</b> 15 mins</p>
             <b>Grocery List:</b>
             <ul><li>Day-old rice</li><li>Anchovies</li><li>Water spinach (Kangkung)</li><li>Bird's eye chilies</li><li>Garlic & Shallots</li><li>Shrimp paste (Belacan)</li></ul>
             <b>Instructions:</b>
             <ol>
               <li>Pound chilies, garlic, shallots, and belacan into a paste.</li>
               <li>Fry the anchovies until crispy and set aside.</li>
               <li>Stir-fry the paste until fragrant, then add the rice and kangkung.</li>
               <li>Toss well on high heat and mix the crispy anchovies back in!</li>
             </ol>`
  },
  
  // --- NOODLES ---
  "Mee Goreng Mamak": {
    calories: 600, protein: "15g", carbs: "75g", fats: "20g", healthScore: 4,
    comment: "Carb-heavy, spicy goodness from your favorite Mamak.",
    recipe: `<h3>Mee Goreng Mamak 🍜</h3>
             <p><b>Prep:</b> 10 mins | <b>Cook:</b> 15 mins</p>
             <b>Grocery List:</b>
             <ul><li>Yellow noodles</li><li>Tofu</li><li>Potatoes (boiled)</li><li>Eggs</li><li>Soy sauce & Chili paste</li><li>Bean sprouts</li></ul>
             <b>Instructions:</b>
             <ol>
               <li>Fry tofu and boiled potatoes until golden.</li>
               <li>Stir-fry chili paste, add noodles, soy sauce, and a splash of water.</li>
               <li>Push noodles aside, crack an egg, and scramble it.</li>
               <li>Toss everything together with bean sprouts and serve hot with a squeeze of lime!</li>
             </ol>`
  },

  // --- WESTERN FAST FOOD ---
  "Burger": {
    calories: 550, protein: "25g", carbs: "45g", fats: "30g", healthScore: 3,
    comment: "A classic juicy treat. Your diet starts tomorrow.",
    recipe: `<h3>Classic Cheeseburger 🍔</h3>
             <p><b>Prep:</b> 10 mins | <b>Cook:</b> 10 mins</p>
             <b>Grocery List:</b>
             <ul><li>Ground beef (80/20)</li><li>Burger buns</li><li>Cheddar cheese</li><li>Lettuce, Tomato, Onion</li><li>Ketchup & Mustard</li></ul>
             <b>Instructions:</b>
             <ol>
               <li>Form ground beef into patties and season generously with salt and pepper.</li>
               <li>Sear in a hot pan for 3-4 minutes per side. Add cheese in the last minute to melt.</li>
               <li>Toast the buns slightly.</li>
               <li>Assemble: Bun, sauce, patty, lettuce, tomato, onion, and top bun. Enjoy!</li>
             </ol>`
  },
  "Pizza": {
    calories: 800, protein: "35g", carbs: "90g", fats: "35g", healthScore: 3,
    comment: "One slice is never enough.",
    recipe: `<h3>Homemade Pizza 🍕</h3>
             <p><b>Prep:</b> 20 mins | <b>Cook:</b> 15 mins</p>
             <b>Grocery List:</b>
             <ul><li>Pizza dough (store-bought or homemade)</li><li>Tomato sauce</li><li>Mozzarella cheese</li><li>Pepperoni (or your favorite toppings)</li></ul>
             <b>Instructions:</b>
             <ol>
               <li>Preheat your oven to its highest setting (usually 500°F / 260°C).</li>
               <li>Stretch out the pizza dough on a floured surface.</li>
               <li>Spread an even layer of tomato sauce and top with lots of mozzarella and pepperoni.</li>
               <li>Bake for 10-15 minutes until the crust is golden and cheese is bubbly.</li>
             </ol>`
  },

  // --- FALLBACK DEFAULTS ---
  "fallback_healthy": {
    calories: 350, protein: "20g", carbs: "40g", fats: "10g", healthScore: 8,
    comment: "A very healthy and nutritious choice!",
    recipe: `<h3>Healthy Chef's Special 🥗</h3>
             <p><b>Prep:</b> 10 mins | <b>Cook:</b> 15 mins</p>
             <b>Grocery List:</b>
             <ul><li>Your choice of lean protein (chicken/tofu)</li><li>Mixed vegetables (broccoli, carrots)</li><li>Brown rice or quinoa</li><li>Olive oil & light soy sauce</li></ul>
             <b>Instructions:</b>
             <ol>
               <li>Steam or pan-sear your lean protein with a tiny bit of olive oil.</li>
               <li>Stir-fry or steam the mixed vegetables until tender-crisp.</li>
               <li>Serve everything over a bed of warm brown rice and drizzle lightly with soy sauce!</li>
             </ol>`
  },
  "fallback_junk": {
    calories: 650, protein: "15g", carbs: "70g", fats: "30g", healthScore: 3,
    comment: "It's cheat day, enjoy the grease!",
    recipe: `<h3>The Chef's Cheat Meal 🍟</h3>
             <p><b>Prep:</b> 5 mins | <b>Cook:</b> 20 mins</p>
             <b>Grocery List:</b>
             <ul><li>Your favorite frozen fries or nuggets</li><li>Cooking oil</li><li>Salt & seasonings</li><li>Dipping sauces</li></ul>
             <b>Instructions:</b>
             <ol>
               <li>Heat up a large pan of oil or turn on your Air Fryer.</li>
               <li>Deep fry or air fry the food until perfectly crispy and golden brown.</li>
               <li>Drain the excess oil and season immediately with salt.</li>
               <li>Serve hot with a giant bowl of dipping sauce!</li>
             </ol>`
  }
};

function getKnowledge(foodName, category = '') {
  // Try exact match first
  for (let key in knowledgeDB) {
    if (foodName.toLowerCase().includes(key.toLowerCase())) {
      return knowledgeDB[key];
    }
  }

  // Fallback based on keywords or category
  const lowerName = foodName.toLowerCase();
  const lowerCat = category.toLowerCase();

  if (lowerName.includes('salad') || lowerName.includes('buah') || lowerName.includes('sayur') || lowerCat.includes('healthy') || lowerCat.includes('vegan')) {
    return knowledgeDB['fallback_healthy'];
  } else {
    return knowledgeDB['fallback_junk'];
  }
}
