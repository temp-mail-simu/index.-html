// app.js
document.getElementById('generate-mail').addEventListener('click', function() {
    fetch('https://api.mail.tm/addresses', {  // Using a free disposable email API (example)
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer YOUR_API_KEY'  // Replace with actual API key
        },
        body: JSON.stringify({
            address: "temp-mail-" + Date.now() + "@mail.tm"
        })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('temp-email').textContent = data.address;
    })
    .catch(error => {
        console.error("Error generating email:", error);
    });
});
