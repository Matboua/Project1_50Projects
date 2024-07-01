let cards = document.querySelectorAll(".card");
let active = document.querySelectorAll(".active");
cards.forEach((card) =>
  card.addEventListener("click", function () {
    cards.forEach((c) => (c.style.flexGrow = "0"));
    cards.forEach((c) => c.classList.remove("active"));
    this.style.flexGrow = "1";
    this.classList.add("active");
  })
);
