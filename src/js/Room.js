 const params = new URLSearchParams(window.location.search);
 const hostel = new URLSearchParams(window.location.search).get("hostel");
 const room = new URLSearchParams(window.location.search).get("room");

 for (let i = 1; i <= 4; i++) {
   const slot = document.createElement("button");
   slot.className = "occupant-slot";
   slot.innerText = `Slot ${i}`;
   slot.dataset.slot = i;

   slot.onclick = () => {
     window.location.href = `assign.html?hostel=${hostel}&room=${room}&slot=${i}`;
   };

   document.getElementById("occupantsList").appendChild(slot);
 }

    const titleEl = document.getElementById("roomTitle");
    const occupantsList = document.getElementById("occupantsList");

    if (hostel && room) {
      const hostelName = hostel.charAt(0).toUpperCase() + hostel.slice(1);
      titleEl.innerText = `Room ${room} - ${hostelName} Hostel`;

    } else {
      titleEl.innerText = "Room not found.";
    }

    // for (let i = 1; i <= 4; i++) {
    //     //     const slot = document.createElement("div");
    //     //     slot.className = "occupant-slot empty";
    //     //     slot.innerText = `Empty Slot ${i}`;
    //     //     occupantsList.appendChild(slot);
    //     //   }