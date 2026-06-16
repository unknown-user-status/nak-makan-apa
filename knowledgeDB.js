const knowledgeDB = {
  "Nasi Lemak": {
    calories: 656, protein: "20g", carbs: "80g", fats: "25g", healthScore: 4,
    comment: "Rich and flavorful, but heavy on the carbs!",
    recipe: `<h3>Homemade Nasi Lemak 🍚</h3>
             <p><b>Prep:</b> 15 mins | <b>Cook:</b> 30 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Nasi Lemak. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Roti Canai": {
    calories: 613, protein: "25g", carbs: "65g", fats: "25g", healthScore: 5,
    comment: "Spicy and incredibly fragrant.",
    recipe: `<h3>Homemade Roti Canai 🥞</h3>
             <p><b>Prep:</b> 20 mins | <b>Cook:</b> 30 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Roti Canai. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Milo": {
    calories: 399, protein: "15g", carbs: "45g", fats: "15g", healthScore: 5,
    comment: "A tasty choice!",
    recipe: `<h3>Homemade Milo 🥪</h3>
             <p><b>Prep:</b> 10 mins | <b>Cook:</b> 20 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Milo. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Ikan Bakar": {
    calories: 380, protein: "15g", carbs: "45g", fats: "15g", healthScore: 5,
    comment: "A tasty choice!",
    recipe: `<h3>Homemade Ikan Bakar ✨</h3>
             <p><b>Prep:</b> 10 mins | <b>Cook:</b> 20 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Ikan Bakar. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Ayam Bakar": {
    calories: 402, protein: "15g", carbs: "45g", fats: "15g", healthScore: 5,
    comment: "A tasty choice!",
    recipe: `<h3>Homemade Ayam Bakar 🍕</h3>
             <p><b>Prep:</b> 10 mins | <b>Cook:</b> 20 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Ayam Bakar. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Ayam Goreng": {
    calories: 401, protein: "15g", carbs: "45g", fats: "15g", healthScore: 5,
    comment: "A tasty choice!",
    recipe: `<h3>Homemade Ayam Goreng 🍔</h3>
             <p><b>Prep:</b> 10 mins | <b>Cook:</b> 20 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Ayam Goreng. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Nasi Kerabu": {
    calories: 638, protein: "20g", carbs: "80g", fats: "25g", healthScore: 4,
    comment: "Rich and flavorful, but heavy on the carbs!",
    recipe: `<h3>Homemade Nasi Kerabu 🥗</h3>
             <p><b>Prep:</b> 15 mins | <b>Cook:</b> 30 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Nasi Kerabu. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Nasi Dagang": {
    calories: 631, protein: "20g", carbs: "80g", fats: "25g", healthScore: 4,
    comment: "Rich and flavorful, but heavy on the carbs!",
    recipe: `<h3>Homemade Nasi Dagang 🍛</h3>
             <p><b>Prep:</b> 15 mins | <b>Cook:</b> 30 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Nasi Dagang. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Satay": {
    calories: 383, protein: "15g", carbs: "45g", fats: "15g", healthScore: 5,
    comment: "A tasty choice!",
    recipe: `<h3>Homemade Satay 🍢</h3>
             <p><b>Prep:</b> 10 mins | <b>Cook:</b> 20 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Satay. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Roti Canai": {
    calories: 616, protein: "25g", carbs: "65g", fats: "25g", healthScore: 5,
    comment: "Spicy and incredibly fragrant.",
    recipe: `<h3>Homemade Roti Canai 🥐</h3>
             <p><b>Prep:</b> 20 mins | <b>Cook:</b> 30 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Roti Canai. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Laksa": {
    calories: 531, protein: "18g", carbs: "70g", fats: "20g", healthScore: 5,
    comment: "Slurp-tastic goodness!",
    recipe: `<h3>Homemade Laksa 🍜</h3>
             <p><b>Prep:</b> 10 mins | <b>Cook:</b> 15 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Laksa. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Rendang": {
    calories: 389, protein: "15g", carbs: "45g", fats: "15g", healthScore: 5,
    comment: "A tasty choice!",
    recipe: `<h3>Homemade Rendang 🥘</h3>
             <p><b>Prep:</b> 10 mins | <b>Cook:</b> 20 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Rendang. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Laksa": {
    calories: 544, protein: "18g", carbs: "70g", fats: "20g", healthScore: 5,
    comment: "Slurp-tastic goodness!",
    recipe: `<h3>Homemade Laksa 🍜</h3>
             <p><b>Prep:</b> 10 mins | <b>Cook:</b> 15 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Laksa. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Mee Goreng": {
    calories: 546, protein: "18g", carbs: "70g", fats: "20g", healthScore: 5,
    comment: "Slurp-tastic goodness!",
    recipe: `<h3>Homemade Mee Goreng 🍝</h3>
             <p><b>Prep:</b> 10 mins | <b>Cook:</b> 15 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Mee Goreng. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Nasi Goreng Kampung": {
    calories: 657, protein: "20g", carbs: "80g", fats: "25g", healthScore: 4,
    comment: "Rich and flavorful, but heavy on the carbs!",
    recipe: `<h3>Homemade Nasi Goreng Kampung 🍚</h3>
             <p><b>Prep:</b> 15 mins | <b>Cook:</b> 30 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Nasi Goreng Kampung. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Ikan Bakar": {
    calories: 402, protein: "15g", carbs: "45g", fats: "15g", healthScore: 5,
    comment: "A tasty choice!",
    recipe: `<h3>Homemade Ikan Bakar 🐟</h3>
             <p><b>Prep:</b> 10 mins | <b>Cook:</b> 20 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Ikan Bakar. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Ayam Penyet": {
    calories: 397, protein: "15g", carbs: "45g", fats: "15g", healthScore: 5,
    comment: "A tasty choice!",
    recipe: `<h3>Homemade Ayam Penyet 🍗</h3>
             <p><b>Prep:</b> 10 mins | <b>Cook:</b> 20 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Ayam Penyet. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Kuih Lapis": {
    calories: 436, protein: "5g", carbs: "60g", fats: "20g", healthScore: 2,
    comment: "Sugar rush incoming!",
    recipe: `<h3>Homemade Kuih Lapis 🍰</h3>
             <p><b>Prep:</b> 10 mins | <b>Cook:</b> 10 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Kuih Lapis. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Onde-Onde": {
    calories: 455, protein: "5g", carbs: "60g", fats: "20g", healthScore: 2,
    comment: "Sugar rush incoming!",
    recipe: `<h3>Homemade Onde-Onde 🍡</h3>
             <p><b>Prep:</b> 10 mins | <b>Cook:</b> 10 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Onde-Onde. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Karipap": {
    calories: 406, protein: "15g", carbs: "45g", fats: "15g", healthScore: 5,
    comment: "A tasty choice!",
    recipe: `<h3>Homemade Karipap 🥟</h3>
             <p><b>Prep:</b> 10 mins | <b>Cook:</b> 20 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Karipap. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Pisang Goreng": {
    calories: 393, protein: "15g", carbs: "45g", fats: "15g", healthScore: 5,
    comment: "A tasty choice!",
    recipe: `<h3>Homemade Pisang Goreng 🍌</h3>
             <p><b>Prep:</b> 10 mins | <b>Cook:</b> 20 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Pisang Goreng. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Cendol": {
    calories: 430, protein: "5g", carbs: "60g", fats: "20g", healthScore: 2,
    comment: "Sugar rush incoming!",
    recipe: `<h3>Homemade Cendol 🍧</h3>
             <p><b>Prep:</b> 10 mins | <b>Cook:</b> 10 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Cendol. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Teh Tarik": {
    calories: 385, protein: "15g", carbs: "45g", fats: "15g", healthScore: 5,
    comment: "A tasty choice!",
    recipe: `<h3>Homemade Teh Tarik ☕</h3>
             <p><b>Prep:</b> 10 mins | <b>Cook:</b> 20 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Teh Tarik. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Satay": {
    calories: 389, protein: "15g", carbs: "45g", fats: "15g", healthScore: 5,
    comment: "A tasty choice!",
    recipe: `<h3>Homemade Satay 🍢</h3>
             <p><b>Prep:</b> 10 mins | <b>Cook:</b> 20 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Satay. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Kopi O": {
    calories: 382, protein: "15g", carbs: "45g", fats: "15g", healthScore: 5,
    comment: "A tasty choice!",
    recipe: `<h3>Homemade Kopi O ☕</h3>
             <p><b>Prep:</b> 10 mins | <b>Cook:</b> 20 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Kopi O. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Sirap Bandung": {
    calories: 399, protein: "15g", carbs: "45g", fats: "15g", healthScore: 5,
    comment: "A tasty choice!",
    recipe: `<h3>Homemade Sirap Bandung 🍹</h3>
             <p><b>Prep:</b> 10 mins | <b>Cook:</b> 20 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Sirap Bandung. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Ayam Masak Merah": {
    calories: 385, protein: "15g", carbs: "45g", fats: "15g", healthScore: 5,
    comment: "A tasty choice!",
    recipe: `<h3>Homemade Ayam Masak Merah 🍲</h3>
             <p><b>Prep:</b> 10 mins | <b>Cook:</b> 20 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Ayam Masak Merah. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Sambal Udang": {
    calories: 391, protein: "15g", carbs: "45g", fats: "15g", healthScore: 5,
    comment: "A tasty choice!",
    recipe: `<h3>Homemade Sambal Udang 🍤</h3>
             <p><b>Prep:</b> 10 mins | <b>Cook:</b> 20 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Sambal Udang. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Ketupat": {
    calories: 419, protein: "15g", carbs: "45g", fats: "15g", healthScore: 5,
    comment: "A tasty choice!",
    recipe: `<h3>Homemade Ketupat 🍘</h3>
             <p><b>Prep:</b> 10 mins | <b>Cook:</b> 20 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Ketupat. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Kuih Keria": {
    calories: 434, protein: "5g", carbs: "60g", fats: "20g", healthScore: 2,
    comment: "Sugar rush incoming!",
    recipe: `<h3>Homemade Kuih Keria 🍩</h3>
             <p><b>Prep:</b> 10 mins | <b>Cook:</b> 10 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Kuih Keria. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Apam Balik": {
    calories: 415, protein: "15g", carbs: "45g", fats: "15g", healthScore: 5,
    comment: "A tasty choice!",
    recipe: `<h3>Homemade Apam Balik 🥞</h3>
             <p><b>Prep:</b> 10 mins | <b>Cook:</b> 20 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Apam Balik. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Roti Jala": {
    calories: 607, protein: "25g", carbs: "65g", fats: "25g", healthScore: 5,
    comment: "Spicy and incredibly fragrant.",
    recipe: `<h3>Homemade Roti Jala 🥞</h3>
             <p><b>Prep:</b> 20 mins | <b>Cook:</b> 30 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Roti Jala. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Murtabak": {
    calories: 417, protein: "15g", carbs: "45g", fats: "15g", healthScore: 5,
    comment: "A tasty choice!",
    recipe: `<h3>Homemade Murtabak 🌮</h3>
             <p><b>Prep:</b> 10 mins | <b>Cook:</b> 20 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Murtabak. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Sup Tulang": {
    calories: 389, protein: "15g", carbs: "45g", fats: "15g", healthScore: 5,
    comment: "A tasty choice!",
    recipe: `<h3>Homemade Sup Tulang 🥣</h3>
             <p><b>Prep:</b> 10 mins | <b>Cook:</b> 20 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Sup Tulang. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Mee Goreng": {
    calories: 543, protein: "18g", carbs: "70g", fats: "20g", healthScore: 5,
    comment: "Slurp-tastic goodness!",
    recipe: `<h3>Homemade Mee Goreng 🍝</h3>
             <p><b>Prep:</b> 10 mins | <b>Cook:</b> 15 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Mee Goreng. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Mee Rebus": {
    calories: 562, protein: "18g", carbs: "70g", fats: "20g", healthScore: 5,
    comment: "Slurp-tastic goodness!",
    recipe: `<h3>Homemade Mee Rebus 🍜</h3>
             <p><b>Prep:</b> 10 mins | <b>Cook:</b> 15 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Mee Rebus. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Lontong": {
    calories: 415, protein: "15g", carbs: "45g", fats: "15g", healthScore: 5,
    comment: "A tasty choice!",
    recipe: `<h3>Homemade Lontong 🍲</h3>
             <p><b>Prep:</b> 10 mins | <b>Cook:</b> 20 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Lontong. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Asam Pedas": {
    calories: 392, protein: "15g", carbs: "45g", fats: "15g", healthScore: 5,
    comment: "A tasty choice!",
    recipe: `<h3>Homemade Asam Pedas 🥘</h3>
             <p><b>Prep:</b> 10 mins | <b>Cook:</b> 20 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Asam Pedas. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Kuih Bingka": {
    calories: 432, protein: "5g", carbs: "60g", fats: "20g", healthScore: 2,
    comment: "Sugar rush incoming!",
    recipe: `<h3>Homemade Kuih Bingka 🥧</h3>
             <p><b>Prep:</b> 10 mins | <b>Cook:</b> 10 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Kuih Bingka. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Seri Muka": {
    calories: 438, protein: "5g", carbs: "60g", fats: "20g", healthScore: 2,
    comment: "Sugar rush incoming!",
    recipe: `<h3>Homemade Seri Muka 🥮</h3>
             <p><b>Prep:</b> 10 mins | <b>Cook:</b> 10 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Seri Muka. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Cucur Udang": {
    calories: 411, protein: "15g", carbs: "45g", fats: "15g", healthScore: 5,
    comment: "A tasty choice!",
    recipe: `<h3>Homemade Cucur Udang 🍤</h3>
             <p><b>Prep:</b> 10 mins | <b>Cook:</b> 20 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Cucur Udang. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Nasi Campur": {
    calories: 649, protein: "20g", carbs: "80g", fats: "25g", healthScore: 4,
    comment: "Rich and flavorful, but heavy on the carbs!",
    recipe: `<h3>Homemade Nasi Campur 🍛</h3>
             <p><b>Prep:</b> 15 mins | <b>Cook:</b> 30 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Nasi Campur. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Nasi Tomato": {
    calories: 656, protein: "20g", carbs: "80g", fats: "25g", healthScore: 4,
    comment: "Rich and flavorful, but heavy on the carbs!",
    recipe: `<h3>Homemade Nasi Tomato 🍚</h3>
             <p><b>Prep:</b> 15 mins | <b>Cook:</b> 30 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Nasi Tomato. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Nasi Minyak": {
    calories: 640, protein: "20g", carbs: "80g", fats: "25g", healthScore: 4,
    comment: "Rich and flavorful, but heavy on the carbs!",
    recipe: `<h3>Homemade Nasi Minyak 🍚</h3>
             <p><b>Prep:</b> 15 mins | <b>Cook:</b> 30 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Nasi Minyak. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Ikan Bakar Petai": {
    calories: 399, protein: "15g", carbs: "45g", fats: "15g", healthScore: 5,
    comment: "A tasty choice!",
    recipe: `<h3>Homemade Ikan Bakar Petai 🐟</h3>
             <p><b>Prep:</b> 10 mins | <b>Cook:</b> 20 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Ikan Bakar Petai. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Cendol": {
    calories: 455, protein: "5g", carbs: "60g", fats: "20g", healthScore: 2,
    comment: "Sugar rush incoming!",
    recipe: `<h3>Homemade Cendol 🍧</h3>
             <p><b>Prep:</b> 10 mins | <b>Cook:</b> 10 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Cendol. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Sayur Lodeh": {
    calories: 413, protein: "15g", carbs: "45g", fats: "15g", healthScore: 5,
    comment: "A tasty choice!",
    recipe: `<h3>Homemade Sayur Lodeh 🥣</h3>
             <p><b>Prep:</b> 10 mins | <b>Cook:</b> 20 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Sayur Lodeh. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Pajeri Nenas": {
    calories: 387, protein: "15g", carbs: "45g", fats: "15g", healthScore: 5,
    comment: "A tasty choice!",
    recipe: `<h3>Homemade Pajeri Nenas 🍍</h3>
             <p><b>Prep:</b> 10 mins | <b>Cook:</b> 20 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Pajeri Nenas. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Keropok Lekor": {
    calories: 381, protein: "15g", carbs: "45g", fats: "15g", healthScore: 5,
    comment: "A tasty choice!",
    recipe: `<h3>Homemade Keropok Lekor 🥖</h3>
             <p><b>Prep:</b> 10 mins | <b>Cook:</b> 20 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Keropok Lekor. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Otak-Otak": {
    calories: 397, protein: "15g", carbs: "45g", fats: "15g", healthScore: 5,
    comment: "A tasty choice!",
    recipe: `<h3>Homemade Otak-Otak 🍥</h3>
             <p><b>Prep:</b> 10 mins | <b>Cook:</b> 20 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Otak-Otak. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Satar": {
    calories: 396, protein: "15g", carbs: "45g", fats: "15g", healthScore: 5,
    comment: "A tasty choice!",
    recipe: `<h3>Homemade Satar 🍢</h3>
             <p><b>Prep:</b> 10 mins | <b>Cook:</b> 20 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Satar. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Nasi Ulam": {
    calories: 641, protein: "20g", carbs: "80g", fats: "25g", healthScore: 4,
    comment: "Rich and flavorful, but heavy on the carbs!",
    recipe: `<h3>Homemade Nasi Ulam 🥗</h3>
             <p><b>Prep:</b> 15 mins | <b>Cook:</b> 30 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Nasi Ulam. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Pulut Panggang": {
    calories: 386, protein: "15g", carbs: "45g", fats: "15g", healthScore: 5,
    comment: "A tasty choice!",
    recipe: `<h3>Homemade Pulut Panggang 🌯</h3>
             <p><b>Prep:</b> 10 mins | <b>Cook:</b> 20 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Pulut Panggang. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Char Kway Teow": {
    calories: 414, protein: "15g", carbs: "45g", fats: "15g", healthScore: 5,
    comment: "A tasty choice!",
    recipe: `<h3>Homemade Char Kway Teow 🍝</h3>
             <p><b>Prep:</b> 10 mins | <b>Cook:</b> 20 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Char Kway Teow. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Hainanese Chicken Rice": {
    calories: 510, protein: "20g", carbs: "60g", fats: "15g", healthScore: 6,
    comment: "A comforting classic.",
    recipe: `<h3>Homemade Hainanese Chicken Rice 🍗</h3>
             <p><b>Prep:</b> 15 mins | <b>Cook:</b> 20 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Hainanese Chicken Rice. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Hokkien Mee": {
    calories: 550, protein: "18g", carbs: "70g", fats: "20g", healthScore: 5,
    comment: "Slurp-tastic goodness!",
    recipe: `<h3>Homemade Hokkien Mee 🍜</h3>
             <p><b>Prep:</b> 10 mins | <b>Cook:</b> 15 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Hokkien Mee. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Rendang": {
    calories: 408, protein: "15g", carbs: "45g", fats: "15g", healthScore: 5,
    comment: "A tasty choice!",
    recipe: `<h3>Homemade Rendang 🍛</h3>
             <p><b>Prep:</b> 10 mins | <b>Cook:</b> 20 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Rendang. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Wonton Mee": {
    calories: 562, protein: "18g", carbs: "70g", fats: "20g", healthScore: 5,
    comment: "Slurp-tastic goodness!",
    recipe: `<h3>Homemade Wonton Mee 🍜</h3>
             <p><b>Prep:</b> 10 mins | <b>Cook:</b> 15 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Wonton Mee. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Pan Mee": {
    calories: 549, protein: "18g", carbs: "70g", fats: "20g", healthScore: 5,
    comment: "Slurp-tastic goodness!",
    recipe: `<h3>Homemade Pan Mee 🍜</h3>
             <p><b>Prep:</b> 10 mins | <b>Cook:</b> 15 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Pan Mee. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Chee Cheong Fun": {
    calories: 396, protein: "15g", carbs: "45g", fats: "15g", healthScore: 5,
    comment: "A tasty choice!",
    recipe: `<h3>Homemade Chee Cheong Fun 🍥</h3>
             <p><b>Prep:</b> 10 mins | <b>Cook:</b> 20 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Chee Cheong Fun. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Dim Sum": {
    calories: 493, protein: "20g", carbs: "60g", fats: "15g", healthScore: 6,
    comment: "A comforting classic.",
    recipe: `<h3>Homemade Dim Sum 🥟</h3>
             <p><b>Prep:</b> 15 mins | <b>Cook:</b> 20 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Dim Sum. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Yong Tau Foo": {
    calories: 381, protein: "15g", carbs: "45g", fats: "15g", healthScore: 5,
    comment: "A tasty choice!",
    recipe: `<h3>Homemade Yong Tau Foo 🍲</h3>
             <p><b>Prep:</b> 10 mins | <b>Cook:</b> 20 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Yong Tau Foo. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Curry Mee": {
    calories: 553, protein: "18g", carbs: "70g", fats: "20g", healthScore: 5,
    comment: "Slurp-tastic goodness!",
    recipe: `<h3>Homemade Curry Mee 🍜</h3>
             <p><b>Prep:</b> 10 mins | <b>Cook:</b> 15 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Curry Mee. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Roti Tissue": {
    calories: 588, protein: "25g", carbs: "65g", fats: "25g", healthScore: 5,
    comment: "Spicy and incredibly fragrant.",
    recipe: `<h3>Homemade Roti Tissue 🥞</h3>
             <p><b>Prep:</b> 20 mins | <b>Cook:</b> 30 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Roti Tissue. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Tosai": {
    calories: 417, protein: "15g", carbs: "45g", fats: "15g", healthScore: 5,
    comment: "A tasty choice!",
    recipe: `<h3>Homemade Tosai 🥞</h3>
             <p><b>Prep:</b> 10 mins | <b>Cook:</b> 20 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Tosai. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Nasi Kandar": {
    calories: 657, protein: "20g", carbs: "80g", fats: "25g", healthScore: 4,
    comment: "Rich and flavorful, but heavy on the carbs!",
    recipe: `<h3>Homemade Nasi Kandar 🍛</h3>
             <p><b>Prep:</b> 15 mins | <b>Cook:</b> 30 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Nasi Kandar. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Maggi Goreng": {
    calories: 388, protein: "15g", carbs: "45g", fats: "15g", healthScore: 5,
    comment: "A tasty choice!",
    recipe: `<h3>Homemade Maggi Goreng 🍝</h3>
             <p><b>Prep:</b> 10 mins | <b>Cook:</b> 20 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Maggi Goreng. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Teh Tarik": {
    calories: 385, protein: "15g", carbs: "45g", fats: "15g", healthScore: 5,
    comment: "A tasty choice!",
    recipe: `<h3>Homemade Teh Tarik ☕</h3>
             <p><b>Prep:</b> 10 mins | <b>Cook:</b> 20 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Teh Tarik. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Pasembur": {
    calories: 419, protein: "15g", carbs: "45g", fats: "15g", healthScore: 5,
    comment: "A tasty choice!",
    recipe: `<h3>Homemade Pasembur 🥗</h3>
             <p><b>Prep:</b> 10 mins | <b>Cook:</b> 20 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Pasembur. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Banana Leaf Rice": {
    calories: 482, protein: "20g", carbs: "60g", fats: "15g", healthScore: 6,
    comment: "A comforting classic.",
    recipe: `<h3>Homemade Banana Leaf Rice 🍛</h3>
             <p><b>Prep:</b> 15 mins | <b>Cook:</b> 20 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Banana Leaf Rice. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Chapati": {
    calories: 409, protein: "15g", carbs: "45g", fats: "15g", healthScore: 5,
    comment: "A tasty choice!",
    recipe: `<h3>Homemade Chapati 🫓</h3>
             <p><b>Prep:</b> 10 mins | <b>Cook:</b> 20 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Chapati. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Tandoori Chicken": {
    calories: 609, protein: "25g", carbs: "65g", fats: "25g", healthScore: 5,
    comment: "Spicy and incredibly fragrant.",
    recipe: `<h3>Homemade Tandoori Chicken 🍗</h3>
             <p><b>Prep:</b> 20 mins | <b>Cook:</b> 30 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Tandoori Chicken. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Vadai": {
    calories: 402, protein: "15g", carbs: "45g", fats: "15g", healthScore: 5,
    comment: "A tasty choice!",
    recipe: `<h3>Homemade Vadai 🍩</h3>
             <p><b>Prep:</b> 10 mins | <b>Cook:</b> 20 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Vadai. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Nyonya Laksa": {
    calories: 553, protein: "18g", carbs: "70g", fats: "20g", healthScore: 5,
    comment: "Slurp-tastic goodness!",
    recipe: `<h3>Homemade Nyonya Laksa 🍜</h3>
             <p><b>Prep:</b> 10 mins | <b>Cook:</b> 15 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Nyonya Laksa. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Ayam Pongteh": {
    calories: 390, protein: "15g", carbs: "45g", fats: "15g", healthScore: 5,
    comment: "A tasty choice!",
    recipe: `<h3>Homemade Ayam Pongteh 🍲</h3>
             <p><b>Prep:</b> 10 mins | <b>Cook:</b> 20 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Ayam Pongteh. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Kuih Pie Tee": {
    calories: 411, protein: "15g", carbs: "45g", fats: "15g", healthScore: 5,
    comment: "A tasty choice!",
    recipe: `<h3>Homemade Kuih Pie Tee 🧁</h3>
             <p><b>Prep:</b> 10 mins | <b>Cook:</b> 20 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Kuih Pie Tee. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Ayam Buah Keluak": {
    calories: 249, protein: "5g", carbs: "30g", fats: "5g", healthScore: 9,
    comment: "Super healthy and light!",
    recipe: `<h3>Homemade Ayam Buah Keluak 🥘</h3>
             <p><b>Prep:</b> 5 mins | <b>Cook:</b> 0 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Ayam Buah Keluak. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Udang Masak Lemak": {
    calories: 384, protein: "15g", carbs: "45g", fats: "15g", healthScore: 5,
    comment: "A tasty choice!",
    recipe: `<h3>Homemade Udang Masak Lemak 🍤</h3>
             <p><b>Prep:</b> 10 mins | <b>Cook:</b> 20 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Udang Masak Lemak. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Mee Rebus": {
    calories: 556, protein: "18g", carbs: "70g", fats: "20g", healthScore: 5,
    comment: "Slurp-tastic goodness!",
    recipe: `<h3>Homemade Mee Rebus 🍲</h3>
             <p><b>Prep:</b> 10 mins | <b>Cook:</b> 15 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Mee Rebus. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Ais Kacang (ABC)": {
    calories: 451, protein: "5g", carbs: "60g", fats: "20g", healthScore: 2,
    comment: "Sugar rush incoming!",
    recipe: `<h3>Homemade Ais Kacang (ABC) 🍧</h3>
             <p><b>Prep:</b> 10 mins | <b>Cook:</b> 10 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Ais Kacang (ABC). To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Milo Dinosaur": {
    calories: 413, protein: "15g", carbs: "45g", fats: "15g", healthScore: 5,
    comment: "A tasty choice!",
    recipe: `<h3>Homemade Milo Dinosaur 🥤</h3>
             <p><b>Prep:</b> 10 mins | <b>Cook:</b> 20 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Milo Dinosaur. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Sirap Limau": {
    calories: 417, protein: "15g", carbs: "45g", fats: "15g", healthScore: 5,
    comment: "A tasty choice!",
    recipe: `<h3>Homemade Sirap Limau 🍹</h3>
             <p><b>Prep:</b> 10 mins | <b>Cook:</b> 20 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Sirap Limau. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Kopi Ping": {
    calories: 394, protein: "15g", carbs: "45g", fats: "15g", healthScore: 5,
    comment: "A tasty choice!",
    recipe: `<h3>Homemade Kopi Ping 🧊</h3>
             <p><b>Prep:</b> 10 mins | <b>Cook:</b> 20 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Kopi Ping. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Teh C Peng": {
    calories: 416, protein: "15g", carbs: "45g", fats: "15g", healthScore: 5,
    comment: "A tasty choice!",
    recipe: `<h3>Homemade Teh C Peng 🧋</h3>
             <p><b>Prep:</b> 10 mins | <b>Cook:</b> 20 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Teh C Peng. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Limau Ais": {
    calories: 406, protein: "15g", carbs: "45g", fats: "15g", healthScore: 5,
    comment: "A tasty choice!",
    recipe: `<h3>Homemade Limau Ais 🍋</h3>
             <p><b>Prep:</b> 10 mins | <b>Cook:</b> 20 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Limau Ais. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Tangyuan": {
    calories: 444, protein: "5g", carbs: "60g", fats: "20g", healthScore: 2,
    comment: "Sugar rush incoming!",
    recipe: `<h3>Homemade Tangyuan 🍡</h3>
             <p><b>Prep:</b> 10 mins | <b>Cook:</b> 10 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Tangyuan. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Tau Fu Fah": {
    calories: 469, protein: "5g", carbs: "60g", fats: "20g", healthScore: 2,
    comment: "Sugar rush incoming!",
    recipe: `<h3>Homemade Tau Fu Fah 🍮</h3>
             <p><b>Prep:</b> 10 mins | <b>Cook:</b> 10 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Tau Fu Fah. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Bubur Cha Cha": {
    calories: 451, protein: "5g", carbs: "60g", fats: "20g", healthScore: 2,
    comment: "Sugar rush incoming!",
    recipe: `<h3>Homemade Bubur Cha Cha 🥣</h3>
             <p><b>Prep:</b> 10 mins | <b>Cook:</b> 10 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Bubur Cha Cha. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Pengat Pisang": {
    calories: 452, protein: "5g", carbs: "60g", fats: "20g", healthScore: 2,
    comment: "Sugar rush incoming!",
    recipe: `<h3>Homemade Pengat Pisang 🥣</h3>
             <p><b>Prep:</b> 10 mins | <b>Cook:</b> 10 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Pengat Pisang. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Nasi Kerabu": {
    calories: 635, protein: "20g", carbs: "80g", fats: "25g", healthScore: 4,
    comment: "Rich and flavorful, but heavy on the carbs!",
    recipe: `<h3>Homemade Nasi Kerabu 🥗</h3>
             <p><b>Prep:</b> 15 mins | <b>Cook:</b> 30 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Nasi Kerabu. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Nasi ayam": {
    calories: 659, protein: "20g", carbs: "80g", fats: "25g", healthScore: 4,
    comment: "Rich and flavorful, but heavy on the carbs!",
    recipe: `<h3>Homemade Nasi ayam 🍗</h3>
             <p><b>Prep:</b> 15 mins | <b>Cook:</b> 30 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Nasi ayam. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Telur goreng": {
    calories: 413, protein: "15g", carbs: "45g", fats: "15g", healthScore: 5,
    comment: "A tasty choice!",
    recipe: `<h3>Homemade Telur goreng 🐣</h3>
             <p><b>Prep:</b> 10 mins | <b>Cook:</b> 20 mins</p>
             <b>Chef's Advice:</b>
             <p>This is a custom recipe generated for Telur goreng. To make this perfectly, ensure your ingredients are fresh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "fallback_healthy": {
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
