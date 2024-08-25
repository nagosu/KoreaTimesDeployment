const passwordInput = document.querySelector(".password-input");
const passwordConfirmInput = document.querySelector(".password-confirm-input");
const passwordView = document.querySelector(".password-view");
const passwordConfirmView = document.querySelector(".password-confirm-view");

const loginButton = document.querySelector(".login-button");

// Password 눈 모양 아이콘 클릭 시 패스워드 보이기/숨기기
passwordView.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    passwordView.src = "../../static/images/icon/svg/View_fill.svg";
    passwordView.setAttribute("draggable", "false");
  } else {
    passwordInput.type = "password";
    passwordView.src = "../../static/images/icon/svg/View_hide_fill.svg";
    passwordView.setAttribute("draggable", "false");
  }
});

// Password Confirm 눈 모양 아이콘 클릭 시 패스워드 보이기/숨기기
passwordConfirmView.addEventListener("click", () => {
  if (passwordConfirmInput.type === "password") {
    passwordConfirmInput.type = "text";
    passwordConfirmView.src = "../../static/images/icon/svg/View_fill.svg";
    passwordConfirmView.setAttribute("draggable", "false");
  } else {
    passwordConfirmInput.type = "password";
    passwordConfirmView.src = "../../static/images/icon/svg/View_hide_fill.svg";
    passwordConfirmView.setAttribute("draggable", "false");
  }
});

// 비밀번호 입력창에서 엔터 키 입력 시 로그인 처리
passwordConfirmInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    loginButton.click(); // 로그인 버튼 클릭 이벤트를 트리거
  }
});

passwordInput.addEventListener("input", (e) => {
  const passwordContainer = document.getElementById("passwordContainer");
  const passwordWrapper = document.getElementById("passwordWrapper");

  let password = e.target.value;

  // 기존 경고 문구 제거 (이미 경고가 표시된 경우)
  let existingWarning = document.getElementById("passwordWarning");
  if (existingWarning) {
    existingWarning.remove();
  }

  if (password.length > 32 || password.length < 8) {
    passwordContainer.classList.add("warning");

    // 경고 문구 생성
    const warningMessage = document.createElement("div");
    warningMessage.id = "passwordWarning";
    warningMessage.style.color = "red";
    warningMessage.style.fontSize = "12px";
    warningMessage.innerText =
      "Your password should be between 8 and 32 characters.";

    passwordWrapper.appendChild(warningMessage);
  } else {
    passwordWrapper.classList.remove("warning");
  }
});

passwordConfirmInput.addEventListener("input", (e) => {
  const passwordConfirmContainer = document.getElementById(
    "passwordConfirmContainer"
  );
  const passwordConfirmWrapper = document.getElementById(
    "passwordConfirmWrapper"
  );

  let password = passwordInput.value;
  let passwordConfirm = e.target.value;

  // 기존 경고 문구 제거 (이미 경고가 표시된 경우)
  let existingWarning = document.getElementById("passwordConfirmWarning");
  if (existingWarning) {
    existingWarning.remove();
  }

  if (password !== passwordConfirm) {
    passwordConfirmContainer.classList.add("warning");

    // 경고 문구 생성
    const warningMessage = document.createElement("div");
    warningMessage.id = "passwordConfirmWarning";
    warningMessage.style.color = "red";
    warningMessage.style.fontSize = "12px";
    warningMessage.innerText = "Passwords do not match.";

    passwordConfirmWrapper.appendChild(warningMessage);
  } else {
    passwordConfirmWrapper.classList.remove("warning");
  }
});
