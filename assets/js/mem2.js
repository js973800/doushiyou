const items3 = document.querySelectorAll(".item3");
const items32 = document.querySelectorAll(".item4");
let selectedItemIndex1 = null;
const expand1 = (item, i) => {
  items3.forEach((it, ind) => {
    if (i === ind) return;
    it.clicked = false;
  });
  gsap.to(items3, {
    width: item.clicked ? "25vw" : "15vw",
    duration: 2,
    ease: "elastic(1, .9)"
  });

  item.clicked = !item.clicked;
  gsap.to(item, {
    width: item.clicked ? "40vw" : "25vw",
    duration: 2.5,
    ease: "elastic(1, .9)"
  });
};

items3.forEach((item, i) => {
  item.clicked = false;

  item.addEventListener("click", () => {
    // 선택한 항목의 index와 이전에 선택한 index가 같을 때는 클래스를 제거하고 초기화
    if (selectedItemIndex1 === i) {
      items32[i].classList.remove("show");
      selectedItemIndex1 = null;
    } else {
      // 이전에 선택한 항목의 클래스 제거
      if (selectedItemIndex1 !== null) {
        items32[selectedItemIndex1].classList.remove("show");
      }

      // 선택한 항목의 index 업데이트 및 클래스 토글
      selectedItemIndex1 = i;
      items32[i].classList.toggle("show");
    }

    // 클릭한 item에 대한 처리
    expand1(item, i);
  });
});
