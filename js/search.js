const searchBox = document.getElementById("search");
const cards = document.querySelectorAll(".card");
const noResults = document.getElementById("no-results");

searchBox.addEventListener("input", function () {
  const query = searchBox.value.toLowerCase().trim();
  let visibleCount = 0;

  cards.forEach(function (card) {
    const text = card.textContent.toLowerCase();
    if (text.includes(query)) {
      card.style.display = "block";
      visibleCount++;
    } else {
      card.style.display = "none";
    }
  });

  noResults.style.display = visibleCount === 0 ? "block" : "none";
});