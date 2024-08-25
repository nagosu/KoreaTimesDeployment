const modalLogoutConfirmOverlay = document.querySelector(
  ".modal-logout-confirm-overlay"
);
const modalLogoutConfirmContent = document.querySelector(
  ".modal-logout-confirm-content"
);

// 로그아웃 확인 모달창 열기
function openModalLogoutConfirm() {
  modalLogoutConfirmOverlay.classList.remove("fade-out");
  modalLogoutConfirmOverlay.style.display = "block";
  modalLogoutConfirmContent.style.display = "flex";
}

function closeModalLogoutConfirm() {
  modalLogoutConfirmOverlay.classList.add("fade-out");
  setTimeout(() => {
    modalLogoutConfirmOverlay.style.display = "none";
    modalLogoutConfirmOverlay.classList.remove("fade-out");
  }, 300);
}
