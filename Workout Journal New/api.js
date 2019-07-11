const baseurl = "https://wger.de/api/v2/";

async function fetchApi(url){
    const response = await fetch(baseurl + url);
    const data = await response.json();
    console.log(data);
    return data;
}
// fetchApi("exercise");

async function listWorkout(){
  const workouts = await fetchApi("exercise");
  const elementList = document.getElementById("exercise");
  workouts.results.forEach(element => {
    elementList.appendChild(renderExercise(element))
  });
}

function renderExercise(exercise){
  const item = document.createElement("li");
  item.innerHTML = `name:${exercise.name}`;
  //item.addEventListener('click');
  return item;
}

listWorkout();


