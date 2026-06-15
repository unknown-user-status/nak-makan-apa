const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbwMpuM0MoZvOO1SZvswjfAh7w49F1s4AnjEMDRucfOUXlHXogkwZhVCACF4ODB0hJhI/exec';

const foods = [
  // More Malay Classics
  { name: 'Nasi Campur', emoji: '🍛', category: 'Lunch' },
  { name: 'Nasi Tomato', emoji: '🍚', category: 'Lunch' },
  { name: 'Nasi Minyak', emoji: '🍚', category: 'Dinner' },
  { name: 'Ikan Bakar Petai', emoji: '🐟', category: 'Dinner' },
  { name: 'Sayur Lodeh', emoji: '🥣', category: 'Lunch' },
  { name: 'Pajeri Nenas', emoji: '🍍', category: 'Lunch' },
  { name: 'Keropok Lekor', emoji: '🥖', category: 'Snack' },
  { name: 'Otak-Otak', emoji: '🍥', category: 'Snack' },
  { name: 'Satar', emoji: '🍢', category: 'Snack' },
  { name: 'Nasi Ulam', emoji: '🥗', category: 'Lunch' },
  { name: 'Pulut Panggang', emoji: '🌯', category: 'Snack' },

  // Chinese Malaysian
  { name: 'Char Kway Teow', emoji: '🍝', category: 'Lunch' },
  { name: 'Hainanese Chicken Rice', emoji: '🍗', category: 'Lunch' },
  { name: 'Hokkien Mee', emoji: '🍜', category: 'Dinner' },
  { name: 'Wonton Mee', emoji: '🍜', category: 'Lunch' },
  { name: 'Pan Mee', emoji: '🍜', category: 'Lunch' },
  { name: 'Chee Cheong Fun', emoji: '🍥', category: 'Breakfast' },
  { name: 'Dim Sum', emoji: '🥟', category: 'Breakfast' },
  { name: 'Yong Tau Foo', emoji: '🍲', category: 'Lunch' },
  { name: 'Curry Mee', emoji: '🍜', category: 'Lunch' },

  // Indian Malaysian & Mamak
  { name: 'Roti Tissue', emoji: '🥞', category: 'Snack' },
  { name: 'Tosai', emoji: '🥞', category: 'Breakfast' },
  { name: 'Nasi Kandar', emoji: '🍛', category: 'Dinner' },
  { name: 'Maggi Goreng', emoji: '🍝', category: 'Lunch' },
  { name: 'Pasembur', emoji: '🥗', category: 'Snack' },
  { name: 'Banana Leaf Rice', emoji: '🍛', category: 'Lunch' },
  { name: 'Chapati', emoji: '🫓', category: 'Breakfast' },
  { name: 'Tandoori Chicken', emoji: '🍗', category: 'Dinner' },
  { name: 'Vadai', emoji: '🍩', category: 'Snack' },

  // Nyonya / Peranakan
  { name: 'Nyonya Laksa', emoji: '🍜', category: 'Lunch' },
  { name: 'Ayam Pongteh', emoji: '🍲', category: 'Dinner' },
  { name: 'Kuih Pie Tee', emoji: '🧁', category: 'Snack' },
  { name: 'Ayam Buah Keluak', emoji: '🥘', category: 'Dinner' },
  { name: 'Udang Masak Lemak', emoji: '🍤', category: 'Dinner' },

  // More Desserts & Drinks
  { name: 'Ais Kacang (ABC)', emoji: '🍧', category: 'Dessert' },
  { name: 'Milo Dinosaur', emoji: '🥤', category: 'Drinks' },
  { name: 'Sirap Limau', emoji: '🍹', category: 'Drinks' },
  { name: 'Kopi Ping', emoji: '🧊', category: 'Drinks' },
  { name: 'Teh C Peng', emoji: '🧋', category: 'Drinks' },
  { name: 'Limau Ais', emoji: '🍋', category: 'Drinks' },
  { name: 'Tangyuan', emoji: '🍡', category: 'Dessert' },
  { name: 'Tau Fu Fah', emoji: '🍮', category: 'Dessert' },
  { name: 'Bubur Cha Cha', emoji: '🥣', category: 'Dessert' },
  { name: 'Pengat Pisang', emoji: '🥣', category: 'Dessert' }
];

async function seed() {
  console.log("Starting to seed Part 2...");
  for (const f of foods) {
    try {
      await fetch(WEB_APP_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ action: 'add_dish', name: f.name, emoji: f.emoji, category: f.category })
      });
      console.log('Added', f.name);
      await new Promise(r => setTimeout(r, 600)); // Delay to prevent rate limit
    } catch(e) {
      console.log('Failed', f.name, e);
    }
  }
  console.log("Finished seeding Part 2!");
}

seed();
