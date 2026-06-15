const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbwMpuM0MoZvOO1SZvswjfAh7w49F1s4AnjEMDRucfOUXlHXogkwZhVCACF4ODB0hJhI/exec';

const foods = [
  { name: 'Nasi Lemak', emoji: '🍚', category: 'Breakfast' },
  { name: 'Nasi Kerabu', emoji: '🥗', category: 'Lunch' },
  { name: 'Nasi Dagang', emoji: '🍛', category: 'Breakfast' },
  { name: 'Satay', emoji: '🍢', category: 'Dinner' },
  { name: 'Roti Canai', emoji: '🥐', category: 'Breakfast' },
  { name: 'Laksa', emoji: '🍜', category: 'Lunch' },
  { name: 'Rendang', emoji: '🥘', category: 'Dinner' },
  { name: 'Mee Goreng', emoji: '🍝', category: 'Lunch' },
  { name: 'Nasi Goreng Kampung', emoji: '🍚', category: 'Dinner' },
  { name: 'Ikan Bakar', emoji: '🐟', category: 'Dinner' },
  { name: 'Ayam Penyet', emoji: '🍗', category: 'Lunch' },
  { name: 'Kuih Lapis', emoji: '🍰', category: 'Dessert' },
  { name: 'Onde-Onde', emoji: '🍡', category: 'Dessert' },
  { name: 'Karipap', emoji: '🥟', category: 'Snack' },
  { name: 'Pisang Goreng', emoji: '🍌', category: 'Snack' },
  { name: 'Cendol', emoji: '🍧', category: 'Dessert' },
  { name: 'Teh Tarik', emoji: '☕', category: 'Drinks' },
  { name: 'Kopi O', emoji: '☕', category: 'Drinks' },
  { name: 'Sirap Bandung', emoji: '🍹', category: 'Drinks' },
  { name: 'Ayam Masak Merah', emoji: '🍲', category: 'Lunch' },
  { name: 'Sambal Udang', emoji: '🍤', category: 'Dinner' },
  { name: 'Ketupat', emoji: '🍘', category: 'Snack' },
  { name: 'Kuih Keria', emoji: '🍩', category: 'Dessert' },
  { name: 'Apam Balik', emoji: '🥞', category: 'Snack' },
  { name: 'Roti Jala', emoji: '🥞', category: 'Breakfast' },
  { name: 'Murtabak', emoji: '🌮', category: 'Dinner' },
  { name: 'Sup Tulang', emoji: '🥣', category: 'Dinner' },
  { name: 'Mee Rebus', emoji: '🍜', category: 'Lunch' },
  { name: 'Lontong', emoji: '🍲', category: 'Breakfast' },
  { name: 'Asam Pedas', emoji: '🥘', category: 'Lunch' },
  { name: 'Kuih Bingka', emoji: '🥧', category: 'Dessert' },
  { name: 'Seri Muka', emoji: '🥮', category: 'Dessert' },
  { name: 'Cucur Udang', emoji: '🍤', category: 'Snack' }
];

async function seed() {
  console.log("Starting to seed database...");
  for (const f of foods) {
    try {
      await fetch(WEB_APP_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ action: 'add_dish', name: f.name, emoji: f.emoji, category: f.category })
      });
      console.log('Added', f.name);
      await new Promise(r => setTimeout(r, 600)); // Delay to prevent Apps Script rate limit
    } catch(e) {
      console.log('Failed', f.name, e);
    }
  }
  console.log("Finished seeding!");
}

seed();
