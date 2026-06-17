const urls = ['http://localhost:8080/users/status-javaconfig'];

let i =0;

setInterval(testAPI, 60000); // Call testAPI every 1min

function testAPI() {
    fetch(urls[0])
    .then(response => response.text())
        //.then(text => console.log(text))
        .then(text => document.getElementById('response').textContent = text + " " + i)
        .catch(error => document.getElementById('response').textContent = 'Error: ' + error);    
        i=i+1;
}