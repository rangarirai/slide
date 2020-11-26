const carouselSlide = document.querySelector(".carousel-slide");
const cards = document.querySelector(".cards");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

prevBtn.classList.add("hide");
let prevBtnHidden = true;
let nextBtnHidden = false;

let data = [
  { name: "card 1" },
  { name: "card 2" },
  { name: "card 3" },
  { name: "card 4" },
  { name: "card 5" },
  { name: "card 6" },
  { name: "card 7" },
  { name: "card 8" },
  { name: "card 9" },
  { name: "card 10" },
  { name: "card 11" },
  { name: "card 12" },
  { name: "card 13" },
  { name: "card 14" },
];

let size = 4;
let position = 0;
let set = 0;
let totalCards = data.length;

function moveCards() {
  cards.innerHTML = "";
  for (i = position; i < position + size; i++) {
    if (data[i]) {
      let card = document.createElement("div");
      card.classList.add("card");
      card.innerText = data[i].name;
      cards.appendChild(card);
    }
  }

  position = position + size;
  set = set + size;
}

function slide() {
  if (set <= totalCards) {
    moveCards();
    if (set >= totalCards) {
      nextBtn.classList.add("hide");
      nextBtnHidden = true;
    }
  }
}

function slideBack() {
  if (set > 4) {
    position = position - size * 2;
    set = set - size * 2;
    moveCards();
    if (set < 8) {
      prevBtn.classList.add("hide");
      prevBtnHidden = true;
    }
  }
}

nextBtn.addEventListener("click", () => {
  if (prevBtnHidden) {
    prevBtn.classList.remove("hide");
    prevBtnHidden = false;
  }
  slide();
});
prevBtn.addEventListener("click", () => {
  if (nextBtnHidden) {
    nextBtn.classList.remove("hide");
    nextBtnHidden = false;
  }
  slideBack();
});

slide();
