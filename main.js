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
    console.log(person.psc_leader_hit_hr_dist.queryResults.row[0].batter)
}