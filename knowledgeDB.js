const knowledgeDB = {
  "Nasi Lemak": {
    calories: 632, protein: "25g", carbs: "80g", fats: "25g", healthScore: 5,
    comment: "Rich and flavorful, but heavy on the carbs!",
    recipe: `<h3>Homemade Nasi Lemak 🍚</h3>
<p><b>Prep:</b> 15 mins | <b>Cook:</b> 30 mins</p>
<b>Chef's Advice:</b>
<p>This is a hearty recipe for Nasi Lemak. Ensure your rice is cooked perfectly. Heat your pan or wok, cook your protein (chicken, beef, or fish) until tender, and mix well with lots of sambal and spices!</p>`
  },
  "Roti Canai": {
    calories: 618, protein: "25g", carbs: "65g", fats: "25g", healthScore: 5,
    comment: "Spicy and incredibly fragrant.",
    recipe: `<h3>Homemade Roti Canai 🥞</h3>
<p><b>Prep:</b> 20 mins | <b>Cook:</b> 30 mins</p>
<b>Chef's Advice:</b>
<p>This is an Indian-style recipe for Roti Canai. Knead your dough or prepare your marinades! Use plenty of fragrant spices like cumin, coriander, and turmeric, and cook until golden brown!</p>`
  },
  "Milo": {
    calories: 130, protein: "2g", carbs: "30g", fats: "2g", healthScore: 4,
    comment: "Sweet and refreshing!",
    recipe: `<h3>Homemade Milo 🥪</h3>
<p><b>Prep:</b> 5 mins | <b>Cook:</b> 0 mins</p>
<b>Chef's Advice:</b>
<p>This is a perfect drink recipe for Milo! Boil some hot water, add your powder, tea, or syrup base, sweeten it with some condensed milk or sugar to taste, and serve it ice cold!</p>`
  },
  "Ikan Bakar": {
    calories: 389, protein: "30g", carbs: "10g", fats: "20g", healthScore: 7,
    comment: "Fresh from the sea and high in protein!",
    recipe: `<h3>Homemade Ikan Bakar ✨</h3>
<p><b>Prep:</b> 15 mins | <b>Cook:</b> 20 mins</p>
<b>Chef's Advice:</b>
<p>This is a seafood recipe for Ikan Bakar. Make sure your seafood is super fresh. Marinate with lime, salt, and chili, then grill or pan-fry until perfectly cooked!</p>`
  },
  "Ayam Bakar": {
    calories: 649, protein: "25g", carbs: "80g", fats: "25g", healthScore: 5,
    comment: "Rich and flavorful, but heavy on the carbs!",
    recipe: `<h3>Homemade Ayam Bakar 🍕</h3>
<p><b>Prep:</b> 15 mins | <b>Cook:</b> 30 mins</p>
<b>Chef's Advice:</b>
<p>This is a hearty recipe for Ayam Bakar. Ensure your rice is cooked perfectly. Heat your pan or wok, cook your protein (chicken, beef, or fish) until tender, and mix well with lots of sambal and spices!</p>`
  },
  "Ayam Goreng": {
    calories: 664, protein: "25g", carbs: "80g", fats: "25g", healthScore: 5,
    comment: "Rich and flavorful, but heavy on the carbs!",
    recipe: `<h3>Homemade Ayam Goreng 🍔</h3>
<p><b>Prep:</b> 15 mins | <b>Cook:</b> 30 mins</p>
<b>Chef's Advice:</b>
<p>This is a hearty recipe for Ayam Goreng. Ensure your rice is cooked perfectly. Heat your pan or wok, cook your protein (chicken, beef, or fish) until tender, and mix well with lots of sambal and spices!</p>`
  },
  "Nasi Kerabu": {
    calories: 641, protein: "25g", carbs: "80g", fats: "25g", healthScore: 5,
    comment: "Rich and flavorful, but heavy on the carbs!",
    recipe: `<h3>Homemade Nasi Kerabu 🥗</h3>
<p><b>Prep:</b> 15 mins | <b>Cook:</b> 30 mins</p>
<b>Chef's Advice:</b>
<p>This is a hearty recipe for Nasi Kerabu. Ensure your rice is cooked perfectly. Heat your pan or wok, cook your protein (chicken, beef, or fish) until tender, and mix well with lots of sambal and spices!</p>`
  },
  "Nasi Dagang": {
    calories: 642, protein: "25g", carbs: "80g", fats: "25g", healthScore: 5,
    comment: "Rich and flavorful, but heavy on the carbs!",
    recipe: `<h3>Homemade Nasi Dagang 🍛</h3>
<p><b>Prep:</b> 15 mins | <b>Cook:</b> 30 mins</p>
<b>Chef's Advice:</b>
<p>This is a hearty recipe for Nasi Dagang. Ensure your rice is cooked perfectly. Heat your pan or wok, cook your protein (chicken, beef, or fish) until tender, and mix well with lots of sambal and spices!</p>`
  },
  "Satay": {
    calories: 509, protein: "20g", carbs: "50g", fats: "20g", healthScore: 5,
    comment: "A comforting classic.",
    recipe: `<h3>Homemade Satay 🍢</h3>
<p><b>Prep:</b> 15 mins | <b>Cook:</b> 20 mins</p>
<b>Chef's Advice:</b>
<p>This is a custom recipe for Satay. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Roti Canai": {
    calories: 617, protein: "25g", carbs: "65g", fats: "25g", healthScore: 5,
    comment: "Spicy and incredibly fragrant.",
    recipe: `<h3>Homemade Roti Canai 🥐</h3>
<p><b>Prep:</b> 20 mins | <b>Cook:</b> 30 mins</p>
<b>Chef's Advice:</b>
<p>This is an Indian-style recipe for Roti Canai. Knead your dough or prepare your marinades! Use plenty of fragrant spices like cumin, coriander, and turmeric, and cook until golden brown!</p>`
  },
  "Laksa": {
    calories: 532, protein: "18g", carbs: "70g", fats: "20g", healthScore: 5,
    comment: "Slurp-tastic goodness!",
    recipe: `<h3>Homemade Laksa 🍜</h3>
<p><b>Prep:</b> 10 mins | <b>Cook:</b> 15 mins</p>
<b>Chef's Advice:</b>
<p>This is a noodle recipe for Laksa. Boil your noodles until springy. Toss them in a very hot wok with soy sauce, fresh veggies, egg, and your favorite protein. Serve hot!</p>`
  },
  "Rendang": {
    calories: 504, protein: "20g", carbs: "50g", fats: "20g", healthScore: 5,
    comment: "A comforting classic.",
    recipe: `<h3>Homemade Rendang 🥘</h3>
<p><b>Prep:</b> 15 mins | <b>Cook:</b> 20 mins</p>
<b>Chef's Advice:</b>
<p>This is a custom recipe for Rendang. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Laksa": {
    calories: 535, protein: "18g", carbs: "70g", fats: "20g", healthScore: 5,
    comment: "Slurp-tastic goodness!",
    recipe: `<h3>Homemade Laksa 🍜</h3>
<p><b>Prep:</b> 10 mins | <b>Cook:</b> 15 mins</p>
<b>Chef's Advice:</b>
<p>This is a noodle recipe for Laksa. Boil your noodles until springy. Toss them in a very hot wok with soy sauce, fresh veggies, egg, and your favorite protein. Serve hot!</p>`
  },
  "Mee Goreng": {
    calories: 546, protein: "18g", carbs: "70g", fats: "20g", healthScore: 5,
    comment: "Slurp-tastic goodness!",
    recipe: `<h3>Homemade Mee Goreng 🍝</h3>
<p><b>Prep:</b> 10 mins | <b>Cook:</b> 15 mins</p>
<b>Chef's Advice:</b>
<p>This is a noodle recipe for Mee Goreng. Boil your noodles until springy. Toss them in a very hot wok with soy sauce, fresh veggies, egg, and your favorite protein. Serve hot!</p>`
  },
  "Nasi Goreng Kampung": {
    calories: 655, protein: "25g", carbs: "80g", fats: "25g", healthScore: 5,
    comment: "Rich and flavorful, but heavy on the carbs!",
    recipe: `<h3>Homemade Nasi Goreng Kampung 🍚</h3>
<p><b>Prep:</b> 15 mins | <b>Cook:</b> 30 mins</p>
<b>Chef's Advice:</b>
<p>This is a hearty recipe for Nasi Goreng Kampung. Ensure your rice is cooked perfectly. Heat your pan or wok, cook your protein (chicken, beef, or fish) until tender, and mix well with lots of sambal and spices!</p>`
  },
  "Ikan Bakar": {
    calories: 389, protein: "30g", carbs: "10g", fats: "20g", healthScore: 7,
    comment: "Fresh from the sea and high in protein!",
    recipe: `<h3>Homemade Ikan Bakar 🐟</h3>
<p><b>Prep:</b> 15 mins | <b>Cook:</b> 20 mins</p>
<b>Chef's Advice:</b>
<p>This is a seafood recipe for Ikan Bakar. Make sure your seafood is super fresh. Marinate with lime, salt, and chili, then grill or pan-fry until perfectly cooked!</p>`
  },
  "Ayam Penyet": {
    calories: 653, protein: "25g", carbs: "80g", fats: "25g", healthScore: 5,
    comment: "Rich and flavorful, but heavy on the carbs!",
    recipe: `<h3>Homemade Ayam Penyet 🍗</h3>
<p><b>Prep:</b> 15 mins | <b>Cook:</b> 30 mins</p>
<b>Chef's Advice:</b>
<p>This is a hearty recipe for Ayam Penyet. Ensure your rice is cooked perfectly. Heat your pan or wok, cook your protein (chicken, beef, or fish) until tender, and mix well with lots of sambal and spices!</p>`
  },
  "Kuih Lapis": {
    calories: 345, protein: "5g", carbs: "55g", fats: "15g", healthScore: 3,
    comment: "Sugar rush incoming!",
    recipe: `<h3>Homemade Kuih Lapis 🍰</h3>
<p><b>Prep:</b> 10 mins | <b>Cook:</b> 10 mins</p>
<b>Chef's Advice:</b>
<p>A delicious dessert recipe for Kuih Lapis. Prepare your sweet base (like coconut milk, gula melaka, or syrup). Add ice if it's a cold dessert, or steam perfectly if it's a hot kuih!</p>`
  },
  "Onde-Onde": {
    calories: 363, protein: "5g", carbs: "55g", fats: "15g", healthScore: 3,
    comment: "Sugar rush incoming!",
    recipe: `<h3>Homemade Onde-Onde 🍡</h3>
<p><b>Prep:</b> 10 mins | <b>Cook:</b> 10 mins</p>
<b>Chef's Advice:</b>
<p>A delicious dessert recipe for Onde-Onde. Prepare your sweet base (like coconut milk, gula melaka, or syrup). Add ice if it's a cold dessert, or steam perfectly if it's a hot kuih!</p>`
  },
  "Karipap": {
    calories: 504, protein: "20g", carbs: "50g", fats: "20g", healthScore: 5,
    comment: "A comforting classic.",
    recipe: `<h3>Homemade Karipap 🥟</h3>
<p><b>Prep:</b> 15 mins | <b>Cook:</b> 20 mins</p>
<b>Chef's Advice:</b>
<p>This is a custom recipe for Karipap. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Pisang Goreng": {
    calories: 487, protein: "20g", carbs: "50g", fats: "20g", healthScore: 5,
    comment: "A comforting classic.",
    recipe: `<h3>Homemade Pisang Goreng 🍌</h3>
<p><b>Prep:</b> 15 mins | <b>Cook:</b> 20 mins</p>
<b>Chef's Advice:</b>
<p>This is a custom recipe for Pisang Goreng. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Cendol": {
    calories: 343, protein: "5g", carbs: "55g", fats: "15g", healthScore: 3,
    comment: "Sugar rush incoming!",
    recipe: `<h3>Homemade Cendol 🍧</h3>
<p><b>Prep:</b> 10 mins | <b>Cook:</b> 10 mins</p>
<b>Chef's Advice:</b>
<p>A delicious dessert recipe for Cendol. Prepare your sweet base (like coconut milk, gula melaka, or syrup). Add ice if it's a cold dessert, or steam perfectly if it's a hot kuih!</p>`
  },
  "Teh Tarik": {
    calories: 147, protein: "2g", carbs: "30g", fats: "2g", healthScore: 4,
    comment: "Sweet and refreshing!",
    recipe: `<h3>Homemade Teh Tarik ☕</h3>
<p><b>Prep:</b> 5 mins | <b>Cook:</b> 0 mins</p>
<b>Chef's Advice:</b>
<p>This is a perfect drink recipe for Teh Tarik! Boil some hot water, add your powder, tea, or syrup base, sweeten it with some condensed milk or sugar to taste, and serve it ice cold!</p>`
  },
  "Satay": {
    calories: 493, protein: "20g", carbs: "50g", fats: "20g", healthScore: 5,
    comment: "A comforting classic.",
    recipe: `<h3>Homemade Satay 🍢</h3>
<p><b>Prep:</b> 15 mins | <b>Cook:</b> 20 mins</p>
<b>Chef's Advice:</b>
<p>This is a custom recipe for Satay. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Kopi O": {
    calories: 161, protein: "2g", carbs: "30g", fats: "2g", healthScore: 4,
    comment: "Sweet and refreshing!",
    recipe: `<h3>Homemade Kopi O ☕</h3>
<p><b>Prep:</b> 5 mins | <b>Cook:</b> 0 mins</p>
<b>Chef's Advice:</b>
<p>This is a perfect drink recipe for Kopi O! Boil some hot water, add your powder, tea, or syrup base, sweeten it with some condensed milk or sugar to taste, and serve it ice cold!</p>`
  },
  "Sirap Bandung": {
    calories: 165, protein: "2g", carbs: "30g", fats: "2g", healthScore: 4,
    comment: "Sweet and refreshing!",
    recipe: `<h3>Homemade Sirap Bandung 🍹</h3>
<p><b>Prep:</b> 5 mins | <b>Cook:</b> 0 mins</p>
<b>Chef's Advice:</b>
<p>This is a perfect drink recipe for Sirap Bandung! Boil some hot water, add your powder, tea, or syrup base, sweeten it with some condensed milk or sugar to taste, and serve it ice cold!</p>`
  },
  "Ayam Masak Merah": {
    calories: 634, protein: "25g", carbs: "80g", fats: "25g", healthScore: 5,
    comment: "Rich and flavorful, but heavy on the carbs!",
    recipe: `<h3>Homemade Ayam Masak Merah 🍲</h3>
<p><b>Prep:</b> 15 mins | <b>Cook:</b> 30 mins</p>
<b>Chef's Advice:</b>
<p>This is a hearty recipe for Ayam Masak Merah. Ensure your rice is cooked perfectly. Heat your pan or wok, cook your protein (chicken, beef, or fish) until tender, and mix well with lots of sambal and spices!</p>`
  },
  "Sambal Udang": {
    calories: 397, protein: "30g", carbs: "10g", fats: "20g", healthScore: 7,
    comment: "Fresh from the sea and high in protein!",
    recipe: `<h3>Homemade Sambal Udang 🍤</h3>
<p><b>Prep:</b> 15 mins | <b>Cook:</b> 20 mins</p>
<b>Chef's Advice:</b>
<p>This is a seafood recipe for Sambal Udang. Make sure your seafood is super fresh. Marinate with lime, salt, and chili, then grill or pan-fry until perfectly cooked!</p>`
  },
  "Ketupat": {
    calories: 486, protein: "20g", carbs: "50g", fats: "20g", healthScore: 5,
    comment: "A comforting classic.",
    recipe: `<h3>Homemade Ketupat 🍘</h3>
<p><b>Prep:</b> 15 mins | <b>Cook:</b> 20 mins</p>
<b>Chef's Advice:</b>
<p>This is a custom recipe for Ketupat. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Kuih Keria": {
    calories: 360, protein: "5g", carbs: "55g", fats: "15g", healthScore: 3,
    comment: "Sugar rush incoming!",
    recipe: `<h3>Homemade Kuih Keria 🍩</h3>
<p><b>Prep:</b> 10 mins | <b>Cook:</b> 10 mins</p>
<b>Chef's Advice:</b>
<p>A delicious dessert recipe for Kuih Keria. Prepare your sweet base (like coconut milk, gula melaka, or syrup). Add ice if it's a cold dessert, or steam perfectly if it's a hot kuih!</p>`
  },
  "Apam Balik": {
    calories: 482, protein: "20g", carbs: "50g", fats: "20g", healthScore: 5,
    comment: "A comforting classic.",
    recipe: `<h3>Homemade Apam Balik 🥞</h3>
<p><b>Prep:</b> 15 mins | <b>Cook:</b> 20 mins</p>
<b>Chef's Advice:</b>
<p>This is a custom recipe for Apam Balik. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Roti Jala": {
    calories: 602, protein: "25g", carbs: "65g", fats: "25g", healthScore: 5,
    comment: "Spicy and incredibly fragrant.",
    recipe: `<h3>Homemade Roti Jala 🥞</h3>
<p><b>Prep:</b> 20 mins | <b>Cook:</b> 30 mins</p>
<b>Chef's Advice:</b>
<p>This is an Indian-style recipe for Roti Jala. Knead your dough or prepare your marinades! Use plenty of fragrant spices like cumin, coriander, and turmeric, and cook until golden brown!</p>`
  },
  "Murtabak": {
    calories: 503, protein: "20g", carbs: "50g", fats: "20g", healthScore: 5,
    comment: "A comforting classic.",
    recipe: `<h3>Homemade Murtabak 🌮</h3>
<p><b>Prep:</b> 15 mins | <b>Cook:</b> 20 mins</p>
<b>Chef's Advice:</b>
<p>This is a custom recipe for Murtabak. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Sup Tulang": {
    calories: 495, protein: "20g", carbs: "50g", fats: "20g", healthScore: 5,
    comment: "A comforting classic.",
    recipe: `<h3>Homemade Sup Tulang 🥣</h3>
<p><b>Prep:</b> 15 mins | <b>Cook:</b> 20 mins</p>
<b>Chef's Advice:</b>
<p>This is a custom recipe for Sup Tulang. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Mee Goreng": {
    calories: 567, protein: "18g", carbs: "70g", fats: "20g", healthScore: 5,
    comment: "Slurp-tastic goodness!",
    recipe: `<h3>Homemade Mee Goreng 🍝</h3>
<p><b>Prep:</b> 10 mins | <b>Cook:</b> 15 mins</p>
<b>Chef's Advice:</b>
<p>This is a noodle recipe for Mee Goreng. Boil your noodles until springy. Toss them in a very hot wok with soy sauce, fresh veggies, egg, and your favorite protein. Serve hot!</p>`
  },
  "Mee Rebus": {
    calories: 531, protein: "18g", carbs: "70g", fats: "20g", healthScore: 5,
    comment: "Slurp-tastic goodness!",
    recipe: `<h3>Homemade Mee Rebus 🍜</h3>
<p><b>Prep:</b> 10 mins | <b>Cook:</b> 15 mins</p>
<b>Chef's Advice:</b>
<p>This is a noodle recipe for Mee Rebus. Boil your noodles until springy. Toss them in a very hot wok with soy sauce, fresh veggies, egg, and your favorite protein. Serve hot!</p>`
  },
  "Lontong": {
    calories: 493, protein: "20g", carbs: "50g", fats: "20g", healthScore: 5,
    comment: "A comforting classic.",
    recipe: `<h3>Homemade Lontong 🍲</h3>
<p><b>Prep:</b> 15 mins | <b>Cook:</b> 20 mins</p>
<b>Chef's Advice:</b>
<p>This is a custom recipe for Lontong. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Asam Pedas": {
    calories: 480, protein: "20g", carbs: "50g", fats: "20g", healthScore: 5,
    comment: "A comforting classic.",
    recipe: `<h3>Homemade Asam Pedas 🥘</h3>
<p><b>Prep:</b> 15 mins | <b>Cook:</b> 20 mins</p>
<b>Chef's Advice:</b>
<p>This is a custom recipe for Asam Pedas. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Kuih Bingka": {
    calories: 351, protein: "5g", carbs: "55g", fats: "15g", healthScore: 3,
    comment: "Sugar rush incoming!",
    recipe: `<h3>Homemade Kuih Bingka 🥧</h3>
<p><b>Prep:</b> 10 mins | <b>Cook:</b> 10 mins</p>
<b>Chef's Advice:</b>
<p>A delicious dessert recipe for Kuih Bingka. Prepare your sweet base (like coconut milk, gula melaka, or syrup). Add ice if it's a cold dessert, or steam perfectly if it's a hot kuih!</p>`
  },
  "Seri Muka": {
    calories: 369, protein: "5g", carbs: "55g", fats: "15g", healthScore: 3,
    comment: "Sugar rush incoming!",
    recipe: `<h3>Homemade Seri Muka 🥮</h3>
<p><b>Prep:</b> 10 mins | <b>Cook:</b> 10 mins</p>
<b>Chef's Advice:</b>
<p>A delicious dessert recipe for Seri Muka. Prepare your sweet base (like coconut milk, gula melaka, or syrup). Add ice if it's a cold dessert, or steam perfectly if it's a hot kuih!</p>`
  },
  "Cucur Udang": {
    calories: 381, protein: "30g", carbs: "10g", fats: "20g", healthScore: 7,
    comment: "Fresh from the sea and high in protein!",
    recipe: `<h3>Homemade Cucur Udang 🍤</h3>
<p><b>Prep:</b> 15 mins | <b>Cook:</b> 20 mins</p>
<b>Chef's Advice:</b>
<p>This is a seafood recipe for Cucur Udang. Make sure your seafood is super fresh. Marinate with lime, salt, and chili, then grill or pan-fry until perfectly cooked!</p>`
  },
  "Nasi Campur": {
    calories: 641, protein: "25g", carbs: "80g", fats: "25g", healthScore: 5,
    comment: "Rich and flavorful, but heavy on the carbs!",
    recipe: `<h3>Homemade Nasi Campur 🍛</h3>
<p><b>Prep:</b> 15 mins | <b>Cook:</b> 30 mins</p>
<b>Chef's Advice:</b>
<p>This is a hearty recipe for Nasi Campur. Ensure your rice is cooked perfectly. Heat your pan or wok, cook your protein (chicken, beef, or fish) until tender, and mix well with lots of sambal and spices!</p>`
  },
  "Nasi Tomato": {
    calories: 660, protein: "25g", carbs: "80g", fats: "25g", healthScore: 5,
    comment: "Rich and flavorful, but heavy on the carbs!",
    recipe: `<h3>Homemade Nasi Tomato 🍚</h3>
<p><b>Prep:</b> 15 mins | <b>Cook:</b> 30 mins</p>
<b>Chef's Advice:</b>
<p>This is a hearty recipe for Nasi Tomato. Ensure your rice is cooked perfectly. Heat your pan or wok, cook your protein (chicken, beef, or fish) until tender, and mix well with lots of sambal and spices!</p>`
  },
  "Nasi Minyak": {
    calories: 641, protein: "25g", carbs: "80g", fats: "25g", healthScore: 5,
    comment: "Rich and flavorful, but heavy on the carbs!",
    recipe: `<h3>Homemade Nasi Minyak 🍚</h3>
<p><b>Prep:</b> 15 mins | <b>Cook:</b> 30 mins</p>
<b>Chef's Advice:</b>
<p>This is a hearty recipe for Nasi Minyak. Ensure your rice is cooked perfectly. Heat your pan or wok, cook your protein (chicken, beef, or fish) until tender, and mix well with lots of sambal and spices!</p>`
  },
  "Ikan Bakar Petai": {
    calories: 371, protein: "30g", carbs: "10g", fats: "20g", healthScore: 7,
    comment: "Fresh from the sea and high in protein!",
    recipe: `<h3>Homemade Ikan Bakar Petai 🐟</h3>
<p><b>Prep:</b> 15 mins | <b>Cook:</b> 20 mins</p>
<b>Chef's Advice:</b>
<p>This is a seafood recipe for Ikan Bakar Petai. Make sure your seafood is super fresh. Marinate with lime, salt, and chili, then grill or pan-fry until perfectly cooked!</p>`
  },
  "Cendol": {
    calories: 342, protein: "5g", carbs: "55g", fats: "15g", healthScore: 3,
    comment: "Sugar rush incoming!",
    recipe: `<h3>Homemade Cendol 🍧</h3>
<p><b>Prep:</b> 10 mins | <b>Cook:</b> 10 mins</p>
<b>Chef's Advice:</b>
<p>A delicious dessert recipe for Cendol. Prepare your sweet base (like coconut milk, gula melaka, or syrup). Add ice if it's a cold dessert, or steam perfectly if it's a hot kuih!</p>`
  },
  "Sayur Lodeh": {
    calories: 516, protein: "20g", carbs: "50g", fats: "20g", healthScore: 5,
    comment: "A comforting classic.",
    recipe: `<h3>Homemade Sayur Lodeh 🥣</h3>
<p><b>Prep:</b> 15 mins | <b>Cook:</b> 20 mins</p>
<b>Chef's Advice:</b>
<p>This is a custom recipe for Sayur Lodeh. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Pajeri Nenas": {
    calories: 504, protein: "20g", carbs: "50g", fats: "20g", healthScore: 5,
    comment: "A comforting classic.",
    recipe: `<h3>Homemade Pajeri Nenas 🍍</h3>
<p><b>Prep:</b> 15 mins | <b>Cook:</b> 20 mins</p>
<b>Chef's Advice:</b>
<p>This is a custom recipe for Pajeri Nenas. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Keropok Lekor": {
    calories: 505, protein: "20g", carbs: "50g", fats: "20g", healthScore: 5,
    comment: "A comforting classic.",
    recipe: `<h3>Homemade Keropok Lekor 🥖</h3>
<p><b>Prep:</b> 15 mins | <b>Cook:</b> 20 mins</p>
<b>Chef's Advice:</b>
<p>This is a custom recipe for Keropok Lekor. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Otak-Otak": {
    calories: 484, protein: "20g", carbs: "50g", fats: "20g", healthScore: 5,
    comment: "A comforting classic.",
    recipe: `<h3>Homemade Otak-Otak 🍥</h3>
<p><b>Prep:</b> 15 mins | <b>Cook:</b> 20 mins</p>
<b>Chef's Advice:</b>
<p>This is a custom recipe for Otak-Otak. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Satar": {
    calories: 516, protein: "20g", carbs: "50g", fats: "20g", healthScore: 5,
    comment: "A comforting classic.",
    recipe: `<h3>Homemade Satar 🍢</h3>
<p><b>Prep:</b> 15 mins | <b>Cook:</b> 20 mins</p>
<b>Chef's Advice:</b>
<p>This is a custom recipe for Satar. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Nasi Ulam": {
    calories: 668, protein: "25g", carbs: "80g", fats: "25g", healthScore: 5,
    comment: "Rich and flavorful, but heavy on the carbs!",
    recipe: `<h3>Homemade Nasi Ulam 🥗</h3>
<p><b>Prep:</b> 15 mins | <b>Cook:</b> 30 mins</p>
<b>Chef's Advice:</b>
<p>This is a hearty recipe for Nasi Ulam. Ensure your rice is cooked perfectly. Heat your pan or wok, cook your protein (chicken, beef, or fish) until tender, and mix well with lots of sambal and spices!</p>`
  },
  "Pulut Panggang": {
    calories: 498, protein: "20g", carbs: "50g", fats: "20g", healthScore: 5,
    comment: "A comforting classic.",
    recipe: `<h3>Homemade Pulut Panggang 🌯</h3>
<p><b>Prep:</b> 15 mins | <b>Cook:</b> 20 mins</p>
<b>Chef's Advice:</b>
<p>This is a custom recipe for Pulut Panggang. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Char Kway Teow": {
    calories: 561, protein: "18g", carbs: "70g", fats: "20g", healthScore: 5,
    comment: "Slurp-tastic goodness!",
    recipe: `<h3>Homemade Char Kway Teow 🍝</h3>
<p><b>Prep:</b> 10 mins | <b>Cook:</b> 15 mins</p>
<b>Chef's Advice:</b>
<p>This is a noodle recipe for Char Kway Teow. Boil your noodles until springy. Toss them in a very hot wok with soy sauce, fresh veggies, egg, and your favorite protein. Serve hot!</p>`
  },
  "Hainanese Chicken Rice": {
    calories: 481, protein: "20g", carbs: "50g", fats: "20g", healthScore: 5,
    comment: "A comforting classic.",
    recipe: `<h3>Homemade Hainanese Chicken Rice 🍗</h3>
<p><b>Prep:</b> 15 mins | <b>Cook:</b> 20 mins</p>
<b>Chef's Advice:</b>
<p>This is a custom recipe for Hainanese Chicken Rice. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Hokkien Mee": {
    calories: 541, protein: "18g", carbs: "70g", fats: "20g", healthScore: 5,
    comment: "Slurp-tastic goodness!",
    recipe: `<h3>Homemade Hokkien Mee 🍜</h3>
<p><b>Prep:</b> 10 mins | <b>Cook:</b> 15 mins</p>
<b>Chef's Advice:</b>
<p>This is a noodle recipe for Hokkien Mee. Boil your noodles until springy. Toss them in a very hot wok with soy sauce, fresh veggies, egg, and your favorite protein. Serve hot!</p>`
  },
  "Rendang": {
    calories: 511, protein: "20g", carbs: "50g", fats: "20g", healthScore: 5,
    comment: "A comforting classic.",
    recipe: `<h3>Homemade Rendang 🍛</h3>
<p><b>Prep:</b> 15 mins | <b>Cook:</b> 20 mins</p>
<b>Chef's Advice:</b>
<p>This is a custom recipe for Rendang. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Wonton Mee": {
    calories: 554, protein: "18g", carbs: "70g", fats: "20g", healthScore: 5,
    comment: "Slurp-tastic goodness!",
    recipe: `<h3>Homemade Wonton Mee 🍜</h3>
<p><b>Prep:</b> 10 mins | <b>Cook:</b> 15 mins</p>
<b>Chef's Advice:</b>
<p>This is a noodle recipe for Wonton Mee. Boil your noodles until springy. Toss them in a very hot wok with soy sauce, fresh veggies, egg, and your favorite protein. Serve hot!</p>`
  },
  "Pan Mee": {
    calories: 540, protein: "18g", carbs: "70g", fats: "20g", healthScore: 5,
    comment: "Slurp-tastic goodness!",
    recipe: `<h3>Homemade Pan Mee 🍜</h3>
<p><b>Prep:</b> 10 mins | <b>Cook:</b> 15 mins</p>
<b>Chef's Advice:</b>
<p>This is a noodle recipe for Pan Mee. Boil your noodles until springy. Toss them in a very hot wok with soy sauce, fresh veggies, egg, and your favorite protein. Serve hot!</p>`
  },
  "Chee Cheong Fun": {
    calories: 484, protein: "20g", carbs: "50g", fats: "20g", healthScore: 5,
    comment: "A comforting classic.",
    recipe: `<h3>Homemade Chee Cheong Fun 🍥</h3>
<p><b>Prep:</b> 15 mins | <b>Cook:</b> 20 mins</p>
<b>Chef's Advice:</b>
<p>This is a custom recipe for Chee Cheong Fun. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Dim Sum": {
    calories: 500, protein: "20g", carbs: "50g", fats: "20g", healthScore: 5,
    comment: "A comforting classic.",
    recipe: `<h3>Homemade Dim Sum 🥟</h3>
<p><b>Prep:</b> 15 mins | <b>Cook:</b> 20 mins</p>
<b>Chef's Advice:</b>
<p>This is a custom recipe for Dim Sum. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Yong Tau Foo": {
    calories: 488, protein: "20g", carbs: "50g", fats: "20g", healthScore: 5,
    comment: "A comforting classic.",
    recipe: `<h3>Homemade Yong Tau Foo 🍲</h3>
<p><b>Prep:</b> 15 mins | <b>Cook:</b> 20 mins</p>
<b>Chef's Advice:</b>
<p>This is a custom recipe for Yong Tau Foo. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Curry Mee": {
    calories: 539, protein: "18g", carbs: "70g", fats: "20g", healthScore: 5,
    comment: "Slurp-tastic goodness!",
    recipe: `<h3>Homemade Curry Mee 🍜</h3>
<p><b>Prep:</b> 10 mins | <b>Cook:</b> 15 mins</p>
<b>Chef's Advice:</b>
<p>This is a noodle recipe for Curry Mee. Boil your noodles until springy. Toss them in a very hot wok with soy sauce, fresh veggies, egg, and your favorite protein. Serve hot!</p>`
  },
  "Roti Tissue": {
    calories: 601, protein: "25g", carbs: "65g", fats: "25g", healthScore: 5,
    comment: "Spicy and incredibly fragrant.",
    recipe: `<h3>Homemade Roti Tissue 🥞</h3>
<p><b>Prep:</b> 20 mins | <b>Cook:</b> 30 mins</p>
<b>Chef's Advice:</b>
<p>This is an Indian-style recipe for Roti Tissue. Knead your dough or prepare your marinades! Use plenty of fragrant spices like cumin, coriander, and turmeric, and cook until golden brown!</p>`
  },
  "Tosai": {
    calories: 504, protein: "20g", carbs: "50g", fats: "20g", healthScore: 5,
    comment: "A comforting classic.",
    recipe: `<h3>Homemade Tosai 🥞</h3>
<p><b>Prep:</b> 15 mins | <b>Cook:</b> 20 mins</p>
<b>Chef's Advice:</b>
<p>This is a custom recipe for Tosai. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Nasi Kandar": {
    calories: 650, protein: "25g", carbs: "80g", fats: "25g", healthScore: 5,
    comment: "Rich and flavorful, but heavy on the carbs!",
    recipe: `<h3>Homemade Nasi Kandar 🍛</h3>
<p><b>Prep:</b> 15 mins | <b>Cook:</b> 30 mins</p>
<b>Chef's Advice:</b>
<p>This is a hearty recipe for Nasi Kandar. Ensure your rice is cooked perfectly. Heat your pan or wok, cook your protein (chicken, beef, or fish) until tender, and mix well with lots of sambal and spices!</p>`
  },
  "Maggi Goreng": {
    calories: 509, protein: "20g", carbs: "50g", fats: "20g", healthScore: 5,
    comment: "A comforting classic.",
    recipe: `<h3>Homemade Maggi Goreng 🍝</h3>
<p><b>Prep:</b> 15 mins | <b>Cook:</b> 20 mins</p>
<b>Chef's Advice:</b>
<p>This is a custom recipe for Maggi Goreng. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Teh Tarik": {
    calories: 166, protein: "2g", carbs: "30g", fats: "2g", healthScore: 4,
    comment: "Sweet and refreshing!",
    recipe: `<h3>Homemade Teh Tarik ☕</h3>
<p><b>Prep:</b> 5 mins | <b>Cook:</b> 0 mins</p>
<b>Chef's Advice:</b>
<p>This is a perfect drink recipe for Teh Tarik! Boil some hot water, add your powder, tea, or syrup base, sweeten it with some condensed milk or sugar to taste, and serve it ice cold!</p>`
  },
  "Pasembur": {
    calories: 492, protein: "20g", carbs: "50g", fats: "20g", healthScore: 5,
    comment: "A comforting classic.",
    recipe: `<h3>Homemade Pasembur 🥗</h3>
<p><b>Prep:</b> 15 mins | <b>Cook:</b> 20 mins</p>
<b>Chef's Advice:</b>
<p>This is a custom recipe for Pasembur. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Banana Leaf Rice": {
    calories: 489, protein: "20g", carbs: "50g", fats: "20g", healthScore: 5,
    comment: "A comforting classic.",
    recipe: `<h3>Homemade Banana Leaf Rice 🍛</h3>
<p><b>Prep:</b> 15 mins | <b>Cook:</b> 20 mins</p>
<b>Chef's Advice:</b>
<p>This is a custom recipe for Banana Leaf Rice. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Chapati": {
    calories: 487, protein: "20g", carbs: "50g", fats: "20g", healthScore: 5,
    comment: "A comforting classic.",
    recipe: `<h3>Homemade Chapati 🫓</h3>
<p><b>Prep:</b> 15 mins | <b>Cook:</b> 20 mins</p>
<b>Chef's Advice:</b>
<p>This is a custom recipe for Chapati. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Tandoori Chicken": {
    calories: 596, protein: "25g", carbs: "65g", fats: "25g", healthScore: 5,
    comment: "Spicy and incredibly fragrant.",
    recipe: `<h3>Homemade Tandoori Chicken 🍗</h3>
<p><b>Prep:</b> 20 mins | <b>Cook:</b> 30 mins</p>
<b>Chef's Advice:</b>
<p>This is an Indian-style recipe for Tandoori Chicken. Knead your dough or prepare your marinades! Use plenty of fragrant spices like cumin, coriander, and turmeric, and cook until golden brown!</p>`
  },
  "Vadai": {
    calories: 487, protein: "20g", carbs: "50g", fats: "20g", healthScore: 5,
    comment: "A comforting classic.",
    recipe: `<h3>Homemade Vadai 🍩</h3>
<p><b>Prep:</b> 15 mins | <b>Cook:</b> 20 mins</p>
<b>Chef's Advice:</b>
<p>This is a custom recipe for Vadai. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
  "Nyonya Laksa": {
    calories: 559, protein: "18g", carbs: "70g", fats: "20g", healthScore: 5,
    comment: "Slurp-tastic goodness!",
    recipe: `<h3>Homemade Nyonya Laksa 🍜</h3>
<p><b>Prep:</b> 10 mins | <b>Cook:</b> 15 mins</p>
<b>Chef's Advice:</b>
<p>This is a noodle recipe for Nyonya Laksa. Boil your noodles until springy. Toss them in a very hot wok with soy sauce, fresh veggies, egg, and your favorite protein. Serve hot!</p>`
  },
  "Ayam Pongteh": {
    calories: 136, protein: "2g", carbs: "30g", fats: "2g", healthScore: 4,
    comment: "Sweet and refreshing!",
    recipe: `<h3>Homemade Ayam Pongteh 🍲</h3>
<p><b>Prep:</b> 5 mins | <b>Cook:</b> 0 mins</p>
<b>Chef's Advice:</b>
<p>This is a perfect drink recipe for Ayam Pongteh! Boil some hot water, add your powder, tea, or syrup base, sweeten it with some condensed milk or sugar to taste, and serve it ice cold!</p>`
  },
  "Kuih Pie Tee": {
    calories: 352, protein: "5g", carbs: "55g", fats: "15g", healthScore: 3,
    comment: "Sugar rush incoming!",
    recipe: `<h3>Homemade Kuih Pie Tee 🧁</h3>
<p><b>Prep:</b> 10 mins | <b>Cook:</b> 10 mins</p>
<b>Chef's Advice:</b>
<p>A delicious dessert recipe for Kuih Pie Tee. Prepare your sweet base (like coconut milk, gula melaka, or syrup). Add ice if it's a cold dessert, or steam perfectly if it's a hot kuih!</p>`
  },
  "Ayam Buah Keluak": {
    calories: 638, protein: "25g", carbs: "80g", fats: "25g", healthScore: 5,
    comment: "Rich and flavorful, but heavy on the carbs!",
    recipe: `<h3>Homemade Ayam Buah Keluak 🥘</h3>
<p><b>Prep:</b> 15 mins | <b>Cook:</b> 30 mins</p>
<b>Chef's Advice:</b>
<p>This is a hearty recipe for Ayam Buah Keluak. Ensure your rice is cooked perfectly. Heat your pan or wok, cook your protein (chicken, beef, or fish) until tender, and mix well with lots of sambal and spices!</p>`
  },
  "Udang Masak Lemak": {
    calories: 393, protein: "30g", carbs: "10g", fats: "20g", healthScore: 7,
    comment: "Fresh from the sea and high in protein!",
    recipe: `<h3>Homemade Udang Masak Lemak 🍤</h3>
<p><b>Prep:</b> 15 mins | <b>Cook:</b> 20 mins</p>
<b>Chef's Advice:</b>
<p>This is a seafood recipe for Udang Masak Lemak. Make sure your seafood is super fresh. Marinate with lime, salt, and chili, then grill or pan-fry until perfectly cooked!</p>`
  },
  "Mee Rebus": {
    calories: 547, protein: "18g", carbs: "70g", fats: "20g", healthScore: 5,
    comment: "Slurp-tastic goodness!",
    recipe: `<h3>Homemade Mee Rebus 🍲</h3>
<p><b>Prep:</b> 10 mins | <b>Cook:</b> 15 mins</p>
<b>Chef's Advice:</b>
<p>This is a noodle recipe for Mee Rebus. Boil your noodles until springy. Toss them in a very hot wok with soy sauce, fresh veggies, egg, and your favorite protein. Serve hot!</p>`
  },
  "Ais Kacang (ABC)": {
    calories: 145, protein: "2g", carbs: "30g", fats: "2g", healthScore: 4,
    comment: "Sweet and refreshing!",
    recipe: `<h3>Homemade Ais Kacang (ABC) 🍧</h3>
<p><b>Prep:</b> 5 mins | <b>Cook:</b> 0 mins</p>
<b>Chef's Advice:</b>
<p>This is a perfect drink recipe for Ais Kacang (ABC)! Boil some hot water, add your powder, tea, or syrup base, sweeten it with some condensed milk or sugar to taste, and serve it ice cold!</p>`
  },
  "Milo Dinosaur": {
    calories: 149, protein: "2g", carbs: "30g", fats: "2g", healthScore: 4,
    comment: "Sweet and refreshing!",
    recipe: `<h3>Homemade Milo Dinosaur 🥤</h3>
<p><b>Prep:</b> 5 mins | <b>Cook:</b> 0 mins</p>
<b>Chef's Advice:</b>
<p>This is a perfect drink recipe for Milo Dinosaur! Boil some hot water, add your powder, tea, or syrup base, sweeten it with some condensed milk or sugar to taste, and serve it ice cold!</p>`
  },
  "Sirap Limau": {
    calories: 137, protein: "2g", carbs: "30g", fats: "2g", healthScore: 4,
    comment: "Sweet and refreshing!",
    recipe: `<h3>Homemade Sirap Limau 🍹</h3>
<p><b>Prep:</b> 5 mins | <b>Cook:</b> 0 mins</p>
<b>Chef's Advice:</b>
<p>This is a perfect drink recipe for Sirap Limau! Boil some hot water, add your powder, tea, or syrup base, sweeten it with some condensed milk or sugar to taste, and serve it ice cold!</p>`
  },
  "Kopi Ping": {
    calories: 147, protein: "2g", carbs: "30g", fats: "2g", healthScore: 4,
    comment: "Sweet and refreshing!",
    recipe: `<h3>Homemade Kopi Ping 🧊</h3>
<p><b>Prep:</b> 5 mins | <b>Cook:</b> 0 mins</p>
<b>Chef's Advice:</b>
<p>This is a perfect drink recipe for Kopi Ping! Boil some hot water, add your powder, tea, or syrup base, sweeten it with some condensed milk or sugar to taste, and serve it ice cold!</p>`
  },
  "Teh C Peng": {
    calories: 158, protein: "2g", carbs: "30g", fats: "2g", healthScore: 4,
    comment: "Sweet and refreshing!",
    recipe: `<h3>Homemade Teh C Peng 🧋</h3>
<p><b>Prep:</b> 5 mins | <b>Cook:</b> 0 mins</p>
<b>Chef's Advice:</b>
<p>This is a perfect drink recipe for Teh C Peng! Boil some hot water, add your powder, tea, or syrup base, sweeten it with some condensed milk or sugar to taste, and serve it ice cold!</p>`
  },
  "Limau Ais": {
    calories: 147, protein: "2g", carbs: "30g", fats: "2g", healthScore: 4,
    comment: "Sweet and refreshing!",
    recipe: `<h3>Homemade Limau Ais 🍋</h3>
<p><b>Prep:</b> 5 mins | <b>Cook:</b> 0 mins</p>
<b>Chef's Advice:</b>
<p>This is a perfect drink recipe for Limau Ais! Boil some hot water, add your powder, tea, or syrup base, sweeten it with some condensed milk or sugar to taste, and serve it ice cold!</p>`
  },
  "Tangyuan": {
    calories: 347, protein: "5g", carbs: "55g", fats: "15g", healthScore: 3,
    comment: "Sugar rush incoming!",
    recipe: `<h3>Homemade Tangyuan 🍡</h3>
<p><b>Prep:</b> 10 mins | <b>Cook:</b> 10 mins</p>
<b>Chef's Advice:</b>
<p>A delicious dessert recipe for Tangyuan. Prepare your sweet base (like coconut milk, gula melaka, or syrup). Add ice if it's a cold dessert, or steam perfectly if it's a hot kuih!</p>`
  },
  "Tau Fu Fah": {
    calories: 349, protein: "5g", carbs: "55g", fats: "15g", healthScore: 3,
    comment: "Sugar rush incoming!",
    recipe: `<h3>Homemade Tau Fu Fah 🍮</h3>
<p><b>Prep:</b> 10 mins | <b>Cook:</b> 10 mins</p>
<b>Chef's Advice:</b>
<p>A delicious dessert recipe for Tau Fu Fah. Prepare your sweet base (like coconut milk, gula melaka, or syrup). Add ice if it's a cold dessert, or steam perfectly if it's a hot kuih!</p>`
  },
  "Bubur Cha Cha": {
    calories: 335, protein: "5g", carbs: "55g", fats: "15g", healthScore: 3,
    comment: "Sugar rush incoming!",
    recipe: `<h3>Homemade Bubur Cha Cha 🥣</h3>
<p><b>Prep:</b> 10 mins | <b>Cook:</b> 10 mins</p>
<b>Chef's Advice:</b>
<p>A delicious dessert recipe for Bubur Cha Cha. Prepare your sweet base (like coconut milk, gula melaka, or syrup). Add ice if it's a cold dessert, or steam perfectly if it's a hot kuih!</p>`
  },
  "Pengat Pisang": {
    calories: 345, protein: "5g", carbs: "55g", fats: "15g", healthScore: 3,
    comment: "Sugar rush incoming!",
    recipe: `<h3>Homemade Pengat Pisang 🥣</h3>
<p><b>Prep:</b> 10 mins | <b>Cook:</b> 10 mins</p>
<b>Chef's Advice:</b>
<p>A delicious dessert recipe for Pengat Pisang. Prepare your sweet base (like coconut milk, gula melaka, or syrup). Add ice if it's a cold dessert, or steam perfectly if it's a hot kuih!</p>`
  },
  "Nasi Kerabu": {
    calories: 665, protein: "25g", carbs: "80g", fats: "25g", healthScore: 5,
    comment: "Rich and flavorful, but heavy on the carbs!",
    recipe: `<h3>Homemade Nasi Kerabu 🥗</h3>
<p><b>Prep:</b> 15 mins | <b>Cook:</b> 30 mins</p>
<b>Chef's Advice:</b>
<p>This is a hearty recipe for Nasi Kerabu. Ensure your rice is cooked perfectly. Heat your pan or wok, cook your protein (chicken, beef, or fish) until tender, and mix well with lots of sambal and spices!</p>`
  },
  "Nasi ayam": {
    calories: 630, protein: "25g", carbs: "80g", fats: "25g", healthScore: 5,
    comment: "Rich and flavorful, but heavy on the carbs!",
    recipe: `<h3>Homemade Nasi ayam 🍗</h3>
<p><b>Prep:</b> 15 mins | <b>Cook:</b> 30 mins</p>
<b>Chef's Advice:</b>
<p>This is a hearty recipe for Nasi ayam. Ensure your rice is cooked perfectly. Heat your pan or wok, cook your protein (chicken, beef, or fish) until tender, and mix well with lots of sambal and spices!</p>`
  },
  "Telur goreng": {
    calories: 515, protein: "20g", carbs: "50g", fats: "20g", healthScore: 5,
    comment: "A comforting classic.",
    recipe: `<h3>Homemade Telur goreng 🐣</h3>
<p><b>Prep:</b> 15 mins | <b>Cook:</b> 20 mins</p>
<b>Chef's Advice:</b>
<p>This is a custom recipe for Telur goreng. Heat your pan, add your favorite base, toss in your protein and veggies, and season heavily with local spices until fragrant!</p>`
  },
};

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
      recipe: `<h3>Homemade ${foodName} 🥗</h3><p><b>Prep:</b> 10 mins | <b>Cook:</b> 15 mins</p><b>Chef's Advice:</b><p>This is a healthy, improvised recipe for ${foodName}! Steam your protein and veggies, and serve over brown rice for a nutritious meal!</p>`
    };
  }
  return {
    calories: 650, protein: "15g", carbs: "70g", fats: "30g", healthScore: 3,
    comment: "It's cheat day, enjoy the grease!",
    recipe: `<h3>Homemade ${foodName} 🍟</h3><p><b>Prep:</b> 5 mins | <b>Cook:</b> 20 mins</p><b>Chef's Advice:</b><p>This is a fun, improvised recipe for ${foodName}! Heat up your pan or air fryer, and cook it up until it is golden and perfectly delicious!</p>`
  };
}
