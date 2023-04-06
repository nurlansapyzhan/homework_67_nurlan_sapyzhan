const BASEURL = `https://rickandmortyapi.com/api/character`
console.log(BASEURL)

let urlParams = new URLSearchParams(window.location.search);
let param = urlParams.get('id');
const CHARURL = `${BASEURL}/${param}`


async function aMakeRequest(url, method = 'GET') {
    let response = await fetch(url, {method});
    if (response.ok) {
        return await response.json();
    } else {
        let error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
}

function loadCharacter(character) {
    let container = document.getElementById('container');
    console.log(container)
    let mainBlock = document.createElement('div');
    mainBlock.className = 'main_block';
    mainBlock.innerHTML = `
        <div class="card">
            <img src="${character.image}" class="card-img-top" alt="character pic">
            <div class="card-body">
                <h5 class="card-title">Name: <span class="info">${character.name}</span></h5>
                <p class="card-text">Status: <span class="info">${character.status}</span></p>
                <p class="card-text">Species: <span class="info">${character.species}</span></p>
                <p class="card-text">Gender: <span class="info">${character.gender}</span></p>
                <p class="card-text">Origin: <span class="info">${character.origin.name}</span></p>
                <p class="card-text">Location: <span class="info">${character.location.name}</span></p>
            </div>
        </div>
    `;
    container.appendChild(mainBlock);
    console.log(character.name);
}

async function onLoad() {
    let url = `${CHARURL}`;
    try {
        let data = await aMakeRequest(url)
        await loadCharacter(data)
    } catch (error) {
        console.log(error)
    }
}

window.addEventListener('load', onLoad)