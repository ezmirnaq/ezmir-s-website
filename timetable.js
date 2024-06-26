document.addEventListener("DOMContentLoaded", function() {
  // Tooltips for course details
  const courseDetails = {
      "Principles of IT Security": "Section: 6, Instructor: Hafizah Mansor",
      "System Analysis and Design": "Section: 1, Instructor: Zahidah Zulkifli",
      "Multimedia Technology": "Section: 2, Instructor: Suhaila Samsuri",
      "Web technologies": "Section: 2, Instructor: Syarqawy Hamzah",
      "Database Programming": "Section: 1, Instructor: Zainatul Shima"
  };

  const cells = document.querySelectorAll("td");
  cells.forEach(cell => {
      const course = cell.textContent;
      if (courseDetails[course]) {
          cell.setAttribute("title", courseDetails[course]);
          cell.classList.add("tooltip");
      }
  });
});
