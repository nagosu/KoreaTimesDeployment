const modalChatLogOverlay = document.querySelector(".modal-chat-log-overlay");
const modalChatLogContent = document.querySelector(".modal-chat-log-content");

// 삭제 확인 모달창 열기
function openChatLogModal() {
  modalChatLogOverlay.classList.remove("fade-out"); //  fade-out 클래스 제거
  modalChatLogOverlay.style.display = "block";
  modalChatLogContent.style.display = "flex";
}

// 삭제 확인 모달창 닫기
function closeChatLogModal() {
  modalChatLogOverlay.classList.add("fade-out"); // fade-out 클래스 추가
  setTimeout(() => {
    modalChatLogOverlay.style.display = "none";
    modalChatLogOverlay.classList.remove("fade-out"); // fade-out 클래스 제거
  }, 300);
}
