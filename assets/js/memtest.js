const group = document.querySelector(".group");
const items21 = document.querySelectorAll(".item");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const dotsContainer = document.querySelector(".dots");

let currentIndex = 0;
let startX = null;
const dotElements = [];

function showSlide(index) {
  if (index < 0) {
    currentIndex = items21.length - 1;
  } else if (index >= items21.length) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  group.style.transform = `translateX(-${currentIndex * 100}%)`;
  updateDots();
}

function handleTouchStart(event) {
  startX = event.touches[0].clientX;
}

function handleTouchMove(event) {
  if (!startX) return;

  const currentX = event.touches[0].clientX;
  const diffX = currentX - startX;

  if (diffX > 20) {
    showSlide(currentIndex - 1);
  } else if (diffX < -20) {
    showSlide(currentIndex + 1);
  }

  startX = null;
}

prevBtn.addEventListener("click", () => {
  showSlide(currentIndex - 1);
});

nextBtn.addEventListener("click", () => {
  showSlide(currentIndex + 1);
});

group.addEventListener("touchstart", handleTouchStart);
group.addEventListener("touchmove", handleTouchMove);

// 도트 생성 및 이벤트 처리
for (let i = 0; i < items21.length; i++) {
  const dot = document.createElement("div");
  dot.className = "dot";
  dotsContainer.appendChild(dot);
  dotElements.push(dot);
  
  dot.addEventListener("click", () => {
    showSlide(i);
  });
}

// 초기 슬라이드 보여주기
showSlide(currentIndex);

// 도트 색상 업데이트
function updateDots() {
  dotElements.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex);
  });
}


