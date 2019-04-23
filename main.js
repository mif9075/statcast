window.onload = init;

function init() {
    console.log(`Requesting data.`);
    sendRequest(); 
    console.log('Displaying network response:');

    document.querySelector('.2015')
        .addEventListener('click', toggleRedSox);
    document.querySelector('.2016')
        .addEventListener('click', toggleMets);
    document.querySelector('.2017')
        .addEventListener('click', toggleYankees);
    document.querySelector('.2018')
        .addEventListener('click', toggleYankees);

    document.querySelector('.regular')
        .addEventListener('click', toggleRedSox);
    document.querySelector('.post')
        .addEventListener('click', toggleMets);

    document.querySelector('.hr')
        .addEventListener('click', toggleRedSox);
    document.querySelector('.exit')
        .addEventListener('click', toggleMets);
    document.querySelector('.average-exit')
        .addEventListener('click', toggleYankees);
    document.querySelector('.fastest')
        .addEventListener('click', toggleYankees);
    document.querySelector('.average-pitch')
        .addEventListener('click', toggleYankees);
}

function sendRequest() {
    const xhr = new XMLHttpRequest();
    const url = 'http://lookup-service-prod.mlb.com/json/named.psc_leader_hit_hr_dist.bam?season=2018&game_type=%27D%27&game_type=%27L%27&game_type%27W%27&game_type=%27F%27&min_hip_count=15';
    xhr.open('GET', url);
    xhr.onload = handleData;
    xhr.send();
}

function handleData(event) {
    const person = JSON.parse(event.target.responseText);
    console.log(person.psc_leader_hit_hr_dist.queryResults.row[0].batter);
    console.log(person.psc_leader_hit_hr_dist.queryResults.row.length);
    displayTable(person);
}

function displayTable(player){

    // clearList();

    for (let i = 0; i < player.psc_leader_hit_hr_dist.queryResults.row.length; i++) {

    const batterNumTD = document.querySelector('.batter');
    const batterNumData = document.createElement('p');
    batterNumData.innerText = player.psc_leader_hit_hr_dist.queryResults.row[i].batter;
    batterNumTD.appendChild(batterNumData);

    const distanceNumTD = document.querySelector('.distance');
    const distanceNumData = document.createElement('p');
    distanceNumData.innerText = player.psc_leader_hit_hr_dist.queryResults.row[i].distance;
    distanceNumTD.appendChild(distanceNumData);

    const exitNumTD = document.querySelector('.exit');
    const exitNumData = document.createElement('p');
    exitNumData.innerText = player.psc_leader_hit_hr_dist.queryResults.row[i].launch_speed;
    exitNumTD.appendChild(exitNumData);

    const launchNumTD = document.querySelector('.launch');
    const launchNumData = document.createElement('p');
    launchNumData.innerText = player.psc_leader_hit_hr_dist.queryResults.row[i].launch_angle;
    launchNumTD.appendChild(launchNumData);

    const heightNumTD = document.querySelector('.height');
    const heightNumData = document.createElement('p');
    heightNumData.innerText = player.psc_leader_hit_hr_dist.queryResults.row[i].height;
    heightNumTD.appendChild(heightNumData);

    const pitcherNumTD = document.querySelector('.pitcher');
    const pitcherNumData = document.createElement('p');
    pitcherNumData.innerText = player.psc_leader_hit_hr_dist.queryResults.row[i].pitcher;
    pitcherNumTD.appendChild(pitcherNumData);

    const pitchNumTD = document.querySelector('.pitch');
    const pitchNumData = document.createElement('p');
    pitchNumData.innerText = player.psc_leader_hit_hr_dist.queryResults.row[i].pitch_speed;
    pitchNumTD.appendChild(pitchNumData);

    const dateNumTD = document.querySelector('.date');
    const dateNumData = document.createElement('p');
    dateNumData.innerText = player.psc_leader_hit_hr_dist.queryResults.row[i].game_date;
    dateNumTD.appendChild(dateNumData);

    }
}

function clearList() {
    event.preventDefault();
    removeAllChildrenOfOl();
}

function removeAllChildrenOfOl() {
    const ol = document.querySelector('.batter');
    while (ol.hasChildNodes()) {
        ol.removeChild(ol.firstChild);
    }
    
}