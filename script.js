async function getSwapiAPI() {
    const resp = await fetch('https://swapi.co/api/people/2/');
    const data = await resp.json();
    console.log(data);

    const body = document.body
    console.log(body);
    body.innerHTML = 'Name: ' + data.name + '<br>' + 'Height: ' + data.height;
}
getSwapiAPI();
