const BASEURL = 'https://rickandmortyapi.com/api/character'
console.log(BASEURL)

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
    let cards = document.getElementById('cards_div')
    let column = document.createElement('div')
    column.className = 'col'
    column.innerHTML =
        `<a href="character.html/?id=${character.id}">
            <div class="card">
                <img src="${character.image}" class="card-img-top" alt="character pic">
                <div class="card-body">
                    <h5 class="card-title">${character.name}</h5>
                </div>
            </div>
        </a>
`
    cards.appendChild(column)
    console.log(character.name)
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

function loadCharacters({results}) {
    let promises = results.map(() => {
        let randomCode = getRandomInt(826)
        let url = `${BASEURL}/${randomCode}`;
        return aMakeRequest(url)
    })
    return Promise.all(promises)
}

async function onLoad() {
    try {
        let data = await aMakeRequest(BASEURL)
        data = await loadCharacters(data)
        data.forEach(loadCharacter)
    } catch (error) {
        console.log(error)
    }
}

window.addEventListener('load', onLoad)