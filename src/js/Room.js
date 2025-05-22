//  const params = new URLSearchParams(window.location.search);
//  const hostel = new URLSearchParams(window.location.search).get("hostel");
//  const room = new URLSearchParams(window.location.search).get("room");

// for (let i = 1; i <= 4; i++) {
//   const slot = document.createElement("button");
//   slot.className = "occupant-slot";

//   const key = `${hostel}_${room}_Slot${i}`;
//   const storedData = localStorage.getItem(key);

//   if (storedData) {
//     const student = JSON.parse(storedData);
//     slot.innerHTML = `<strong>${student.studentName}</strong><br>${student.matricNo}`;
//   } else {
//     slot.innerText = `Slot ${i}`;
//   }

//   slot.dataset.slot = i;

//   slot.onclick = () => {
//     window.location.href = `assign.html?hostel=${hostel}&room=${room}&slot=Slot${i}`;
//   };

//    document.getElementById("occupantsList").appendChild(slot);
//  }

//     const titleEl = document.getElementById("roomTitle");
//     const occupantsList = document.getElementById("occupantsList");

//     if (hostel && room) {
//       const hostelName = hostel.charAt(0).toUpperCase() + hostel.slice(1);
//       titleEl.innerText = `Room ${room} - ${hostelName} Hostel`;

//     } else {
//       titleEl.innerText = "Room not found.";
//     }
  

const params = new URLSearchParams(window.location.search);
const hostel = params.get("hostel");
const room = params.get("room");

for (let i = 1; i <= 4; i++) {
  const slotContainer = document.createElement("div");
  slotContainer.className = "slot-wrapper";

  const slot = document.createElement("button");
  slot.className = "occupant-slot";

  const key = `${hostel}_${room}_Slot${i}`;
  const storedData = localStorage.getItem(key);

  if (storedData) {
    const student = JSON.parse(storedData);
    slot.innerHTML = `<strong>${student.studentName}</strong><br>${student.matricNo}`;
  } else {
    slot.innerText = `Slot ${i}`;
  }

  slot.dataset.slot = i;
  slot.onclick = () => {
    window.location.href = `assign.html?hostel=${hostel}&room=${room}&slot=Slot${i}`;
  };

  const removeBtn = document.createElement("button");
  removeBtn.innerText = "✖";
  removeBtn.className = "remove-btn";
  removeBtn.title = "Clear this slot";
  removeBtn.onclick = (e) => {
    e.stopPropagation(); // Prevent redirect
    localStorage.removeItem(key);
    location.reload(); // Refresh page to reflect changes
  };

  slotContainer.appendChild(slot);
  slotContainer.appendChild(removeBtn);
  document.getElementById("occupantsList").appendChild(slotContainer);
}

const titleEl = document.getElementById("roomTitle");
if (hostel && room) {
  const hostelName = hostel.charAt(0).toUpperCase() + hostel.slice(1);
  titleEl.innerText = `Room ${room} - ${hostelName} Hostel`;
} else {
  titleEl.innerText = "Room not found.";
}
