document.getElementById('chapriForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var formData = new FormData();
    formData.append('image', document.getElementById('imageInput').files[0]);
    fetch('/identify', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(result => {
        document.getElementById('result').innerText = result;
    })
    .catch(error => console.error('Error:', error));
});
