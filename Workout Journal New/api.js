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

function renderExercise(owrkout){
  const item = document.createElement("li");
  item.innerHTML = `name:${exercise.name}`;
  //item.addEventListener('click');
  return item;
}

listWorkout();


// const baseurl = "https://www.themealdb.com/api/json/v1/1/search.php";

// async function fetchApi(url){
//     const response = await fetch(baseurl + url);
//     const data = await response.json();
//     console.log(data);
//     return data;
// }
// // fetchApi("exercise");

// async function listWorkout(){
//   const workouts = await fetchApi("meals");
//   const elementList = document.getElementById("meals");
//   workouts.results.forEach(element => {
//     elementList.appendChild(renderExercise(element))
//   });
// }

// function renderExercise(owrkout){
//   const item = document.createElement("li");
//   item.innerHTML = `name:${meals.name}`;
//   //item.addEventListener('click');
//   return item;
// }

// listWorkout();


// https://food-calorie-data-search.p.rapidapi.com/api/search


// async function getData() 
// {
//     //await the response of the fetch call
//    let response = await fetch('https://food-calorie-data-search.p.rapidapi.com/api/search');
//     //proceed once the first promise is resolved.
//    let data = await response.json()
//     //proceed only when the second promise is resolved
//     return data;
// }
// //call getData function
// getData()
// .then(data => console.log(data));//log the data
