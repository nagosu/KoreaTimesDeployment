// 드롭다운 메뉴를 클릭하면 활성화/비활성화
document.addEventListener("click", function (event) {
  const dropdown = document.querySelector(".dropdown");
  const dropdownMenu = document.querySelector(".dropdown-menu");

  if (dropdown.contains(event.target)) {
    dropdown.classList.toggle("active");
    dropdownMenu.classList.toggle("active");
  } else {
    dropdown.classList.remove("active");
    dropdownMenu.classList.remove("active");
  }
});

// 드롭다운 메뉴의 항목을 클릭하면 선택한 항목을 표시하고 문제 유형을 저장
document.querySelectorAll(".dropdown-menu div").forEach(function (item) {
  item.addEventListener("click", function (event) {
    event.stopPropagation();
    document.querySelector(".selected").childNodes[0].nodeValue =
      this.textContent;
    document.querySelector(".dropdown").classList.remove("active");
    document.querySelector(".dropdown-menu").classList.remove("active");
  });
});
