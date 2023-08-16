const group2 = document.querySelector(".group2");
const items31 = document.querySelectorAll(".item3");
const prevBtn2 = document.getElementById("prevBtn2");
const nextBtn2 = document.getElementById("nextBtn2");
const dotsContainer2 = document.querySelector(".dots2");

let currentIndex2 = 0;
let startX2 = null;
const dotElements2 = [];

function showSlide2(index) {
  if (index < 0) {
    currentIndex2 = items31.length - 1;
  } else if (index >= items31.length) {
    currentIndex2 = 0;
  } else {
    currentIndex2 = index;
  }

  group2.style.transform = `translateX(-${currentIndex2 * 100}%)`;
  updateDots2();
}

function handleTouchStart2(event) {
  startX2 = event.touches[0].clientX;
}

function handleTouchMove2(event) {
  if (!startX2) return;

  const currentX2 = event.touches[0].clientX;
  const diffX2 = currentX2 - startX2;

  if (diffX2 > 20) {
    showSlide2(currentIndex2 - 1);
  } else if (diffX2 < -20) {
    showSlide2(currentIndex2 + 1);
  }

  startX2 = null;
}

prevBtn2.addEventListener("click", () => {
  showSlide2(currentIndex2 - 1);
});

nextBtn2.addEventListener("click", () => {
  showSlide2(currentIndex2 + 1);
});

group2.addEventListener("touchstart", handleTouchStart2);
group2.addEventListener("touchmove", handleTouchMove2);

// 도트 생성 및 이벤트 처리
for (let i = 0; i < items31.length; i++) {
  const dot2 = document.createElement("div");
  dot2.className = "dot";
  dotsContainer2.appendChild(dot2);
  dotElements2.push(dot2);
  
  dot2.addEventListener("click", () => {
    showSlide2(i);
  });
}

// 초기 슬라이드 보여주기
showSlide2(currentIndex2);

// 도트 색상 업데이트
function updateDots2() {
  dotElements2.forEach((dot2, index) => {
    dot2.classList.toggle("active2", index === currentIndex2);
  });
}


