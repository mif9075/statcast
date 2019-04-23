window.onload = init;

function init() {
    console.log(`Requesting data.`);
    sendRequest(); 
    console.log('Displaying network response:');
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
    // const {batter} = person;
    // console.log(batter);
    console.log(person.psc_leader_hit_hr_dist.queryResults.row[0].batter);
    // const player = person.psc_leader_hit_hr_dist.queryResults.row[0].batter;
    displayTable(person);
}

function displayTable(player){

    // clearList();

    const batterNumTD = document.querySelector('.batter');
    const batterNumData = document.createElement('p');
    batterNumData.innerText = player.psc_leader_hit_hr_dist.queryResults.row[0].batter;
    batterNumTD.appendChild(batterNumData);

    const distanceNumTD = document.querySelector('.distance');
    const distanceNumData = document.createElement('p');
    distanceNumData.innerText = player.psc_leader_hit_hr_dist.queryResults.row[0].distance;
    distanceNumTD.appendChild(distanceNumData);

    const exitNumTD = document.querySelector('.exit');
    const exitNumData = document.createElement('p');
    exitNumData.innerText = player.psc_leader_hit_hr_dist.queryResults.row[0].launch_speed;
    exitNumTD.appendChild(exitNumData);

    const launchNumTD = document.querySelector('.launch');
    const launchNumData = document.createElement('p');
    launchNumData.innerText = player.psc_leader_hit_hr_dist.queryResults.row[0].launch_angle;
    launchNumTD.appendChild(launchNumData);

    const heightNumTD = document.querySelector('.height');
    const heightNumData = document.createElement('p');
    heightNumData.innerText = player.psc_leader_hit_hr_dist.queryResults.row[0].height;
    heightNumTD.appendChild(heightNumData);

    const pitcherNumTD = document.querySelector('.pitcher');
    const pitcherNumData = document.createElement('p');
    pitcherNumData.innerText = player.psc_leader_hit_hr_dist.queryResults.row[0].pitcher;
    pitcherNumTD.appendChild(pitcherNumData);

    const pitchNumTD = document.querySelector('.pitch');
    const pitchNumData = document.createElement('p');
    pitchNumData.innerText = player.psc_leader_hit_hr_dist.queryResults.row[0].pitch_speed;
    pitchNumTD.appendChild(pitchNumData);

    const dateNumTD = document.querySelector('.date');
    const dateNumData = document.createElement('p');
    dateNumData.innerText = player.psc_leader_hit_hr_dist.queryResults.row[0].game_id;
    dateNumTD.appendChild(dateNumData);
}

function clearList() {
    event.preventDefault();
    removeAllChildrenOfOl();
}

function removeAllChildrenOfOl() {
    const ol = document.querySelector('#batter');

    while (ol.hasChildNodes()) {
        ol.removeChild(ol.firstChild);
    }
    
}