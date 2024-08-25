const modalResultsViewOverlay = document.querySelector(
  ".modal-results-view-overlay"
);
const modalResultsViewContent = document.querySelector(
  ".modal-results-view-content"
);

// 삭제 확인 모달창 열기
function openResultsViewModal() {
  modalResultsViewOverlay.classList.remove("fade-out"); //  fade-out 클래스 제거
  modalResultsViewOverlay.style.display = "block";
  modalResultsViewContent.style.display = "flex";
}

// 삭제 확인 모달창 닫기
function closeResultsViewModal() {
  modalResultsViewOverlay.classList.add("fade-out"); // fade-out 클래스 추가
  setTimeout(() => {
    modalResultsViewOverlay.style.display = "none";
    modalResultsViewOverlay.classList.remove("fade-out"); // fade-out 클래스 제거
  }, 300);
}
