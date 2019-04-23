window.onload = init;

function init() {
    console.log(`Requesting data.`);
    sendRequest(); 
    console.log('Displaying network response:');
}
function sendRequest() {
    const xhr = new XMLHttpRequest();
    const url = 'https://swapi.co/api/people/25/';
    xhr.open('GET', url);
    xhr.onload = handleData;
    xhr.send();
}
function handleData(event) {
    const person = JSON.parse(event.target.responseText);
    const {mass, height, name, birth_year} = person;
    console.log(mass);
    console.log(height);
}