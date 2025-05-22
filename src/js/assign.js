const params = new URLSearchParams(window.location.search);
  const hostel = params.get("hostel");
  const room = params.get("room");
  const slot = params.get("slot");

  document.querySelector('[name=hostel]').value = hostel;
  document.querySelector('[name=room]').value = room;
  document.querySelector('[name=slot]').value = slot;

  const form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const studentName = form.student_name.value.trim();
    const matricNo = form.matric_no.value.trim();
    const dept = form.dept.value.trim();

    if (studentName && matricNo && dept) {
      const key = `${hostel}_${room}_${slot}`;
      const studentData = { studentName, matricNo,dept };

      localStorage.setItem(key, JSON.stringify(studentData));

      // Go back to the room page
      window.location.href = `Details.html?hostel=${hostel}`;
    }
  });
