if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js')
        .then(registration => {
            console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch(error => {
            console.error('Service Worker registration failed:', error);
        });
}

setInterval(() => {
    fetch('/temperature') // 修改為你的數據來源 URL
        .then(response => response.text())
        .then(data => {
            document.getElementById('temperature').innerText = data;
        })
        .catch(error => console.error('Failed to fetch temperature:', error));
}, 5000);
