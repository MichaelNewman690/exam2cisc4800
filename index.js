//fetches data then calls render data from covid api
function fetchData(){
  return fetch('https://api.covidtracking.com/v1/states/current.json')
  .then(response => response.json())
  .then(json => renderData(json))
  event.preventDefault();

}
//creates a paragraph element, gets the location submitted, finds it in the api
//with method and shows the number of tests conducted there
function renderData(json){
  const body = document.querySelector("body");
  const p = document.createElement('p');
  const state = document.getElementById("state").value;
  const i = findState(json, state);
  p.innerHTML = "Current total number tested by today in "+json[i].state + " is "+ json[i].positive;
  body.appendChild(p)
  event.preventDefault();
}
//finds the array number in the json where the correctstate is
function findState(json, wantedState){
  let i = 0;
  currentState = json[i].state;
  while(currentState != wantedState){
    i += 1;
    currentState = json[i].state;
  }
  return i;
}
