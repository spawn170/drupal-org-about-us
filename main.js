let currentIndex = 0;

function showCard(index) {
  const carousel = document.querySelector(".scroll-carousel");
  const cardWidth = document.querySelector(".carousel-card").offsetWidth;
  currentIndex = index;
  const translateValue = -currentIndex * cardWidth + 20;
  carousel.style.transform = `translateX(${translateValue}px)`;
}

function nextCard() {
  const numCards = document.querySelectorAll(".carousel-card").length;
  currentIndex = (currentIndex + 1) % numCards;
  showCard(currentIndex);
}

function prevCard() {
  const numCards = document.querySelectorAll(".carousel-card").length;
  currentIndex = (currentIndex - 1 + numCards) % numCards;
  showCard(currentIndex);
}

// Initial show
// showCard(currentIndex);

// (function () {
//   setInterval(nextCard, 2000);
// })();
