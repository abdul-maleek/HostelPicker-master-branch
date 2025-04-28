const hostels = [
    { name: "Tijani Hostel", total: 30 },
    { name: "Dangote  Hostel", total: 25 },
    { name: "Almaroof Hostel", total: 30 },
    { name: "Saudi Hostel", total: 40 },
    { name: "Zakariya(private) Hostel", total: 25 },
    { name: "Bungalow1 (private) Hostel", total: 20 },
    { name: "Bungalow2 (private) Hostel", total: 21 },
    { name: "Bungalow3 (private) Hostel", total: 30 },
   
  ];
  
  const hostelGrid = document.getElementById('hostelGrid');
  
  hostels.forEach(hostel => {
    const card = document.createElement('div');
    card.className = 'hostel-card';
  
    card.innerHTML = `
      <img src="https://img.icons8.com/ios-filled/100/ffffff/home.png" alt="Hostel Icon">
      <a href="#">${hostel.name}</a>
      <div class="occupancy">0/${hostel.total}</div>
    `;
  
    hostelGrid.appendChild(card);
  });
  