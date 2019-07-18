// const baseurl = "https://wger.de/api/v2/";

// async function fetchApi(url){
//     const response = await fetch(baseurl + url);
//     const data = await response.json();
//     console.log(data);
//     return data;
// }
// // fetchApi("exercise");

// async function listWorkout(){
//   const workouts = await fetchApi("exercise");
//   const elementList = document.getElementById("exercise");
//   workouts.results.forEach(element => {
//     elementList.appendChild(renderExercise(element))
//   });
// }

// function renderExercise(owrkout){
//   const item = document.createElement("li");
//   item.innerHTML = `name:${exercise.name}`;
//   //item.addEventListener('click');
//   return item;
// }

// listWorkout();


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

// unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?diet=vegetarian&excludeIngredients=coconut&intolerances=egg%2C+gluten&number=10&offset=0&type=main+course&query=burger")
// .header("X-RapidAPI-Host", "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com")
// .header("X-RapidAPI-Key", "af42b18fbdmsh5cea9dcbd511d68p1add7fjsn750c5b4f114a")
// .end(function (result) {
//   console.log(result.status, result.headers, result.body);
// });



// const baseurl = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?diet=vegetarian&excludeIngredients=coconut&intolerances=egg%2C+gluten&number=10&offset=0&type=main+course&query=burger";

// async function fetchApi(url){
//     const response = await fetch(baseurl + url);
//     const data = await response.json();
//     console.log(data);
//     return data;
// }
// // fetchApi("exercise");

// async function listWorkout(){
//   const workouts = await fetchApi("exercise");
//   const elementList = document.getElementById("exercise");
//   workouts.results.forEach(element => {
//     elementList.appendChild(renderExercise(element))
//   });
// }

// function renderExercise(owrkout){
//   const item = document.createElement("li");
//   item.innerHTML = `name:${exercise.name}`;
//   //item.addEventListener('click');
//   return item;
// }

// listWorkout();

// // https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?diet=vegetarian&excludeIngredients=coconut&intolerances=egg%2C+gluten&number=10&offset=0&type=main+course&query=burger

// For more information about RapidQL, checkout docs.rapidql.com!
const RapidQL = require('RapidQL');
let rql = new RapidQL({
});

rql.query(`{
  Http.get(
    url:"https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?diet=vegetarian&excludeIngredients=coconut&intolerances=egg%2C+gluten&number=10&offset=0&type=main+course&query=burger",
    headers : {
      "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      "X-RapidAPI-Key": "af42b18fbdmsh5cea9dcbd511d68p1add7fjsn750c5b4f114a"
    }
  ) {

  }
}`)
.then((res) => console.log(res))
.catch((err) => console.log(err));