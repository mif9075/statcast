window.onload = init;

function init() {
    // console.log(`Requesting data.`);
    // sendRequest(); 
    // console.log('Displaying network response:');

    document.getElementById('option5')
        .addEventListener('click', buttonRequest);
    document.querySelector('#option4')
        .addEventListener('click', buttonRequest);
    document.querySelector('#option3')
        .addEventListener('click', buttonRequest);
    document.querySelector('#option2')
        .addEventListener('click', buttonRequest);
    document.querySelector('#option1')
        .addEventListener('click', buttonRequest);

    // document.querySelector('.regular')
    //     .addEventListener('click', toggleRegular);
    // document.querySelector('.post')
    //     .addEventListener('click', togglePost);

    // document.querySelector('.hr')
    //     .addEventListener('click', toggleHr);
    // document.querySelector('.exit')
    //     .addEventListener('click', toggleExit);
    // document.querySelector('.average-exit')
    //     .addEventListener('click', toggleAverageExit);
    // document.querySelector('.fastest')
    //     .addEventListener('click', toggleFastest);
    // document.querySelector('.average-pitch')
    //     .addEventListener('click', toggleAveragePitch);
}
function buttonRequest(event){
    // event.preventDefault();
    let num = event.target.innerText
    sendRequest(num);
    console.log('hello')
}
function sendRequest(num) {

    const xhr = new XMLHttpRequest();
    // let url = 'http://lookup-service-prod.mlb.com/json/named.psc_leader_hit_hr_dist.bam?season=2019&game_type=%27D%27&game_type=%27L%27&game_type%27W%27&game_type=%27F%27&min_hip_count=15';
    let url = `http://lookup-service-prod.mlb.com/json/named.psc_leader_hit_hr_dist.bam?season=${num}&game_type=%27D%27&game_type=%27L%27&game_type%27W%27&game_type=%27F%27&min_hip_count=15`;

    // if (num === 2015){
    //     url = 'http://lookup-service-prod.mlb.com/json/named.psc_leader_hit_hr_dist.bam?season=2015&game_type=%27D%27&game_type=%27L%27&game_type%27W%27&game_type=%27F%27&min_hip_count=15';
    // } else if (num === 2016) {
    //     url = 'http://lookup-service-prod.mlb.com/json/named.psc_leader_hit_hr_dist.bam?season=2016&game_type=%27D%27&game_type=%27L%27&game_type%27W%27&game_type=%27F%27&min_hip_count=15';
    // } else if (num === 2017) {
    //     url = 'http://lookup-service-prod.mlb.com/json/named.psc_leader_hit_hr_dist.bam?season=2017&game_type=%27D%27&game_type=%27L%27&game_type%27W%27&game_type=%27F%27&min_hip_count=15';
    // } else if (num === 2018) {
    //     url = 'http://lookup-service-prod.mlb.com/json/named.psc_leader_hit_hr_dist.bam?season=2018&game_type=%27D%27&game_type=%27L%27&game_type%27W%27&game_type=%27F%27&min_hip_count=15';
    // } else if (num === 2019) {
    //     url = 'http://lookup-service-prod.mlb.com/json/named.psc_leader_hit_hr_dist.bam?season=2019&game_type=%27D%27&game_type=%27L%27&game_type%27W%27&game_type=%27F%27&min_hip_count=15';
    // }

    xhr.open('GET', url);
    xhr.onload = handleData;
    xhr.send();
    console.log(url)
}

function handleData(event) {
    const person = JSON.parse(event.target.responseText);
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