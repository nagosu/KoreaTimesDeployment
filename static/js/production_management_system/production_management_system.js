const modalConfirmOverlay = document.querySelector(".modal-confirm-overlay");
const modalConfirm = document.querySelector(".modal-confirm");
const modalConfirmCloseButton = document.querySelector(
  ".modal-confirm-close-button"
);

let selectedGptVersion = "";
let learningDataText = "";
let learningDataFiles = [];

document.getElementById("textInputRadio").addEventListener("change", () => {
  document.getElementById("textInputContainer").style.display = "flex";
  document.getElementById("fileInputContainer").style.display = "none";
});

document.getElementById("fileInputRadio").addEventListener("change", () => {
  document.getElementById("textInputContainer").style.display = "none";
  document.getElementById("fileInputContainer").style.display = "flex";
});

let fileCount = 1;

document.getElementById("addFileButton").addEventListener("click", () => {
  fileCount++;

  const newFileInputWrapper = document.createElement("div");
  newFileInputWrapper.className = "file-input-wrapper";
  newFileInputWrapper.innerHTML = `
    <div class="title-wrapper">
      <div class="title-dot"></div>
      <h3>학습 데이터 파일 입력 (데이터 ${fileCount})</h3>
    </div>
    <div class="file-input-container">
      <span id="fileName${fileCount}">학습 데이터 파일을 업로드해주세요.(pdf, pptx, docx, txt 등)</span>
      <button class="file-input-button" onclick="document.getElementById('fileInput${fileCount}').click()">
        파일 선택
      </button>
      <input type="file" id="fileInput${fileCount}" style="display: none" />
    </div>
  `;

  const fileInputContainer = document.getElementById("fileInputContainer");
  fileInputContainer.insertBefore(
    newFileInputWrapper,
    document.getElementById("addFileButton")
  );

  document
    .getElementById(`fileInput${fileCount}`)
    .addEventListener("change", function () {
      const fileName = this.files[0]
        ? this.files[0].name
        : "파일이 선택되지 않았습니다.";
      document.getElementById(`fileName${fileCount}`).textContent = fileName;
    });
});

function openModalConfirm() {
  modalConfirmOverlay.classList.remove("fade-out"); // 기존에 fade-out 클래스가 있을 경우 제거
  modalConfirmOverlay.style.display = "block";
  modalConfirm.style.display = "flex";
}

function closeModalConfirm() {
  modalConfirmOverlay.classList.add("fade-out");
  setTimeout(() => {
    modalConfirmOverlay.style.display = "none";
    modalConfirmOverlay.classList.remove("fade-out"); // fade-out 클래스 제거
  }, 300);
}

document
  .getElementById(`fileInput${fileCount}`)
  .addEventListener("change", function () {
    const fileName = this.files[0]
      ? this.files[0].name
      : "파일이 선택되지 않았습니다.";
    document.getElementById(`fileName${fileCount}`).textContent = fileName;
  });

document
  .querySelector(".save-button-container button")
  .addEventListener("click", () => {
    // GPT 버전 선택 확인
    const selectedGptElement = document.querySelector(".dropdown .selected");
    selectedGptVersion = selectedGptElement
      ? selectedGptElement.textContent.trim()
      : "";

    // 학습 데이터 텍스트 입력 확인
    const textAreaElement = document.querySelector(".learning-data-textarea");
    learningDataText = textAreaElement ? textAreaElement.value.trim() : "";

    // 학습 데이터 파일 입력 확인
    learningDataFiles = [];
    for (let i = 1; i <= fileCount; i++) {
      const fileInput = document.getElementById(`fileInput${i}`);
      if (fileInput && fileInput.files.length > 0) {
        learningDataFiles.push(fileInput.files[0]);
      }
    }

    // 필수 항목 확인
    if (
      selectedGptVersion === "" ||
      selectedGptVersion === "GPT Version" ||
      (learningDataText === "" && learningDataFiles.length === 0)
    ) {
      openModalConfirm();
    }
  });
