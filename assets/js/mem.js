const items = document.querySelectorAll(".item");
const items2 = document.querySelectorAll(".item2");
let selectedItemIndex = null;
const expand = (item, i) => {
  items.forEach((it, ind) => {
    if (i === ind) return;
    it.clicked = false;
  });
  gsap.to(items, {
    width: item.clicked ? "15vw" : "8vw",
    duration: 2,
    ease: "elastic(1, .9)"
  });

  item.clicked = !item.clicked;
  gsap.to(item, {
    width: item.clicked ? "42vw" : "15vw",
    duration: 2.5,
    ease: "elastic(1, .9)"
  });
};

items.forEach((item, i) => {
  item.clicked = false;

  item.addEventListener("click", () => {
    // 선택한 항목의 index와 이전에 선택한 index가 같을 때는 클래스를 제거하고 초기화
    if (selectedItemIndex === i) {
      items2[i].classList.remove("show");
      selectedItemIndex = null;
    } else {
      // 이전에 선택한 항목의 클래스 제거
      if (selectedItemIndex !== null) {
        items2[selectedItemIndex].classList.remove("show");
      }

      // 선택한 항목의 index 업데이트 및 클래스 토글
      selectedItemIndex = i;
      items2[i].classList.toggle("show");
    }

    // 클릭한 item에 대한 처리
    expand(item, i);
  });
});
