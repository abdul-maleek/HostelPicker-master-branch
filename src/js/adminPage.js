const hostels = [
    { name: "Tijani Hostel", total: 40 },
    { name: "Dangote  Hostel", total: 40 },
    { name: "Almaroof Hostel", total: 40 },
    { name: "Saudi Hostel", total: 40 },
    { name: "Zakariya private Hostel", total: 20 },
    { name: "Bungalow1 private Hostel", total: 20 },
    { name: "Bungalow2 private Hostel", total: 20 },
    { name: "Bungalow3 private Hostel", total: 20 },
   
  ];
  
  const hostelGrid = document.getElementById('hostelGrid');
  
  hostels.forEach(hostel => {
    const card = document.createElement('div');
    card.className = 'hostel-card';

    const hostelParam = encodeURIComponent(hostel.name.split(' ')[0].toLowerCase());

  
    card.innerHTML = `
    <img src="https://img.icons8.com/ios-filled/100/ffffff/home.png" alt="Hostel Icon">
    <a href="details.html?hostel=${hostelParam}">${hostel.name}</a>
    <div class="occupancy">0/${hostel.total}</div>
  `;

    hostelGrid.appendChild(card);
  });
  