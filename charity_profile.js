// Show form on button click
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("volunteerBtn");
  const form = document.getElementById("volunteerForm");

  btn.addEventListener("click", () => {
    form.style.display = form.style.display === "none" ? "block" : "none";
  });

  // Form submit
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thanks for signing up to volunteer!");
    form.reset();
    form.style.display = "none";
  });

 

});

 // Extra Interactivity: Show more info on hover
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const focusFilter = document.getElementById("focusFilter");
    const rows = document.querySelectorAll("table.table tbody tr");

    function filterCharities() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedFocus = focusFilter.value;

        rows.forEach(row => {
            const name = row.children[0].textContent.toLowerCase();
            const focusArea = row.children[1].textContent;

            const matchesSearch = name.includes(searchTerm);
            const matchesFocus = selectedFocus === "" || focusArea === selectedFocus;

            if (matchesSearch && matchesFocus) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }
        });
    }

    searchInput.addEventListener("input", filterCharities);
    focusFilter.addEventListener("change", filterCharities);
});
