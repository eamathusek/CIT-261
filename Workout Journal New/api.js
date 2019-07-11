const baseurl = "https://wger.de/api/v2/";

async function fetchApi(url){
    const response = await fetch(baseurl + url);
    const data = await response.json();
    console.log(data);
}
fetchApi("exercise");


