document.querySelectorAll(".date-input").forEach((input) => {
  input.addEventListener("input", function () {
    // 입력값이 8자리 이상이면 잘라냄
    if (this.value.length > 8) {
      this.value = this.value.slice(0, 8);
    }

    // 숫자만 입력받도록 필터링
    this.value = this.value.replace(/[^0-9]/g, "");
  });
});
