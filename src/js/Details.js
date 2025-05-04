const urlParams = new URLSearchParams(window.location.search);
const hostel = urlParams.get('hostel');

if (hostel) { 
  const hostelName = hostel.charAt(0).toUpperCase() + hostel.slice(1) + " Hostel";
  document.getElementById('hostelTitle').innerText = hostelName;
  document.getElementById('hostelInfo').innerText = `Welcome to ${hostelName}! Occupancy information and details will be displayed here.`;
} else {
  document.getElementById('hostelTitle').innerText = "Hostel Not Found";
  document.getElementById('hostelInfo').innerText = "No hostel selected."
}
const hostelData = {
    tijani: { name: "Tijani Hostel", totalRooms: 40 },
    dangote: { name: "Dangote Hostel", totalRooms: 40 },
    almaroof: { name: "Almaroof Hostel", totalRooms: 40 },
    saudi:    { name: "Saudi Hostel", totalRooms: 40 },
    zakariya: { name: "Zakariya private Hostel", totalRooms: 20 },
    bungalow1: { name: "Bungalow1 Private Hostel", totalRooms: 20 },
    bungalow2: { name: "Bungalow2 Private Hostel", totalRooms: 20 },
    bungalow3: { name: "Bungalow3 Private Hostel", totalRooms: 20 }
  };
  
  const params = new URLSearchParams(window.location.search);
  const hostelKey = params.get("hostel");
  
  const titleEl = document.getElementById("hostelTitle");
  const infoEl = document.getElementById("hostelInfo");
  
  if (hostelKey && hostelData[hostelKey]) {
    const hostel = hostelData[hostelKey];
    titleEl.innerText = hostel.name;
  
    // let roomsHTML = "";
    // for (let i = 1; i <= hostel.totalRooms; i++) {
    //   roomsHTML += `<div class="room">Room ${i}</div>`;
    // }
    let roomsHTML = "";
for (let i = 1; i <= hostel.totalRooms; i++) {
  roomsHTML += `<a class="room" href="room.html?hostel=${hostelKey}&room=${i}">Room ${i}</a>`;
}

  
    infoEl.innerHTML = `<div class="room-grid">${roomsHTML}</div>`;
  } else {
    titleEl.innerText = "Hostel Not Found";
    infoEl.innerHTML = `<p>No hostel selected. Please go back to the <a href="adminPage.html">Admin Page</a>.</p>`;
  }
  