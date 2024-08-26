const telegramBotToken = '6621018955:AAEChJRsytvo52bIpy74p9XVxPh8S6Cgs9E';
const telegramChannelLink = 'https://t.me/+aTiLxao_SKcxZDRl';

const uploadButton = document.getElementById('uploadButton');
const downloadButton = document.getElementById('downloadButton');
const fileInput = document.getElementById('fileInput');
const fileNameInput = document.getElementById('fileNameInput');
const uploadProgress = document.getElementById('uploadProgress');
const downloadProgress = document.getElementById('downloadProgress');
const uploadProgressBar = document.getElementById('uploadProgressBar');
const downloadProgressBar = document.getElementById('downloadProgressBar');
const uploadPercentage = document.getElementById('uploadPercentage');
const downloadPercentage = document.getElementById('downloadPercentage');

uploadButton.addEventListener('click', uploadFile);
downloadButton.addEventListener('click', downloadFile);

function uploadFile() {
    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append('file', file);

    uploadProgress.style.display = 'block';
    uploadProgressBar.value = 0;
    uploadPercentage.textContent = '0%';

    fetch(`https://api.telegram.org/bot${telegramBotToken}/sendDocument`, {
        method: 'POST',
        body: formData,
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: (progressEvent) => {
            const percentage = Math.round((progressEvent.loaded / progressEvent.total) * 100);
            uploadProgressBar.value = percentage;
            uploadPercentage.textContent = `${percentage}%