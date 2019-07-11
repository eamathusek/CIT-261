const baseurl = "https://wger.de/api/v2/";

async function fetchApi(url){
    const response = await fetch(baseurl + url);
    const data = await response.json();
    console.log(data);
}
fetchApi("exercise");

unirest.get("https://food-calorie-data-search.p.rapidapi.com/api/search?keyword=apple")
.header("X-RapidAPI-Host", "food-calorie-data-search.p.rapidapi.com")
.header("X-RapidAPI-Key", "af42b18fbdmsh5cea9dcbd511d68p1add7fjsn750c5b4f114a")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
});