setInterval(testAPI, 60000); // Call testAPI every 1min
let i =0;
async function testAPI() {
    await fetch("http://localhost:8080/auth/status-javaconfig")
    .then(response => response.text())
        .then(text => document.getElementById('response').textContent = text)
        .then(text => document.getElementById('counter').textContent = 'API called (1min intervals): ' + i + ' times')
        .catch(error => document.getElementById('response').textContent = 'Error: ' + error);    
        i=i+1;
}