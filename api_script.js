/*---------------APOD Imagens do dia random desde 1995 para o header--------------------------*/
/*document.addEventListener('DOMContentLoaded', function () {
    const apiKey = 'GDJgtLTGgdHHochkIV2HoE9oZxGkKCBk7yO9yi8U';
    const apiUrl = 'https://api.nasa.gov/planetary/apod'; //APOD astronomy picture of the day

    // Function to generate a random date in the YYYY-MM-DD format
    function getRandomDate() {
        const start = new Date('1995-06-16'); // APOD API start date
        const end = new Date(); // Today's date
        const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
        return randomDate.toISOString().split('T')[0]; // Extract YYYY-MM-DD
    }

    const randomDate = getRandomDate();

    // Make a request to the NASA API with the random date
    fetch(`${apiUrl}?api_key=${apiKey}&date=${randomDate}`)
        .then(response => response.json())
        .then(data => {
            // Update the HTML content with NASA API data
            const contentDiv = document.getElementById('content');
            contentDiv.innerHTML = `
                <h2>${data.title}</h2>
                <p>${data.date}</p>
                <img src="${data.url}" alt="${data.title}" style="max-width: 100%;">
                <p>${data.explanation}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});
*/
/*---------IMAGEM RANDOM DESDE 1995 PARA O HEADER-------------------- */
document.addEventListener('DOMContentLoaded', function () {
    const apiKey = 'GDJgtLTGgdHHochkIV2HoE9oZxGkKCBk7yO9yi8U';
    const apiUrl = 'https://api.nasa.gov/planetary/apod';

    //Gerar data random desde 1995
    function getRandomDate() {
        const start = new Date('1995-06-16'); // data de inicio da APO
        const end = new Date(); // hoje
        const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
        return randomDate.toISOString().split('T')[0]; // obter YYYY-MM-DD
    }

    const randomDate = getRandomDate();

    // Fazer request
    fetch(`${apiUrl}?api_key=${apiKey}&date=${randomDate}`)
        .then(response => response.json())
        .then(data => {
            // Obter os returns da api e dispor no html
            const contentDiv = document.getElementById('headerimg');
            contentDiv.innerHTML = `
             <img src="${data.url}" alt="${data.title}" style="max-width: 100%;" class="apod-image">
            `;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});


/*-----------------------------IMAGEM DO DIA--------------------------------*/

document.addEventListener('DOMContentLoaded', function () {
    const apiKey = 'GDJgtLTGgdHHochkIV2HoE9oZxGkKCBk7yO9yi8U';
    const apiUrl = 'https://api.nasa.gov/planetary/apod'; // APOD astronomy picture of the day

    //formato YYYY-MM-DD
    const today = new Date().toISOString().split('T')[0];

    //aqui faz o request da data atual
    fetch(`${apiUrl}?api_key=${apiKey}&date=${today}`)
        .then(response => response.json())
        .then(data => {

            //returned fields
            const contentDiv2 = document.getElementById('contentapod');
            contentDiv2.innerHTML = `
                <h3 class="apod-title">${data.title}  </h3>
                <p class="apod-date">${data.date}</p>
               <div class="containerAPODimg"> 
              ${data.media_type === 'image' ? `<img src="${data.url}" alt="${data.title}" style="max-width: 100%;" class="image2Apod">` : ''}
              ${data.media_type === 'video' ? `<iframe src="${data.url}" frameborder="0" allowfullscreen class="image2Apod"></iframe>` : ''}
                </div>
                <p class="apod-explanation">${data.explanation}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});


/*-----------AS 3 IMAGENS MAIS RECENTES-------------------------------- */
/*document.addEventListener('DOMContentLoaded', function () {
    const apiKey = 'GDJgtLTGgdHHochkIV2HoE9oZxGkKCBk7yO9yi8U';
    const apiUrl = 'https://api.nasa.gov/planetary/apod';

    // Obter a data atual no formato YYYY-MM-DD
    const today = new Date().toISOString().split('T')[0];

    // Obter a imagem do dia
    fetch(`${apiUrl}?api_key=${apiKey}&date=${today}`)
        .then(response => response.json())
        .then(todayApod => {
            // Exibir a imagem do dia
            displayApod(todayApod);

            // Calcular as datas dos últimos 3 dias
            const threeDaysAgo = new Date();
            threeDaysAgo.setDate(threeDaysAgo.getDate() - 1);

            const twoDaysAgo = new Date();
            twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);
            
            const threeDaysAgoFormatted = threeDaysAgo.toISOString().split('T')[0];
            const twoDaysAgoFormatted = twoDaysAgo.toISOString().split('T')[0];

            // Obter as últimas 3 imagens (excluindo a imagem do dia)
            fetch(`${apiUrl}?api_key=${apiKey}&start_date=${threeDaysAgoFormatted}&end_date=${today}`)
                .then(response => response.json())
                .then(lastThreeApods => {
                    // Filtrar as últimas 3 imagens para excluir a imagem do dia
                    const filteredLastThreeApods = lastThreeApods.filter(apod => apod.date !== today);

                    // Exibir as últimas 3 imagens
                    filteredLastThreeApods.forEach(apod => {
                        displayApod(apod);
                    });
                })
                .catch(error => {
                    console.error('Error fetching last 3 APODs:', error);
                });
        })
        .catch(error => {
            console.error('Error fetching today\'s APOD:', error);
        });
});

function displayApod(apod) {
    // Update the HTML content with NASA API data
    const contentLatest = document.getElementById('contentLatest3');
    contentLatest.innerHTML += `
        <h2 class="LatestTitle">${apod.title}  </h2>
        <p class="LatestDate">${apod.date}</p>
        <img src="${apod.url}" alt="${apod.title}" style="max-width: 100%;"  class="LastestApod">
    `;
}*/






/*----------------------------PESQUISA DO DIA------------------------------------------------------ */

const apiKey = 'GDJgtLTGgdHHochkIV2HoE9oZxGkKCBk7yO9yi8U';
const apiUrl = 'https://api.nasa.gov/planetary/apod';

document.addEventListener('DOMContentLoaded', function () {
    // event listener para o botão de pesquisa
    const searchBtn = document.getElementById('search-btn');
    searchBtn.addEventListener('click', performSearch);
});

function performSearch() {
    //valor do input para dentro da função
    const searchTerm = document.getElementById('input-search').value;
    const searchUrl = `${apiUrl}?api_key=${apiKey}&date=${searchTerm}`;

    fetch(searchUrl)
        .then(response => response.json())
        .then(data => {
            const contentDiv3 = document.getElementById('displaysearch');
            contentDiv3.innerHTML = '';

            if (data) {
                const imageUrl = data.url;
                const title = data.title;

                contentDiv3.innerHTML += `
              <div id="displayresult">
              <h3 class="searchtitle">${title}</h3>
              <p class="searchdate">${data.date}</p>
              <div class="containersearchIMG">

              ${data.media_type === 'image' ? `<img src="${data.url}" alt="${data.title}" style="max-width: 100%;" class="searchimg">` : ''}
        ${data.media_type === 'video' ? `<iframe src="${data.url}" frameborder="0" allowfullscreen class="searchimg"></iframe>` : ''}
             
              </div>
              <p class="searchexplanation">${data.explanation}</p>
            </div>
            </div>
          `;
            } else {
                contentDiv3.innerHTML = '<p>Nenhum resultado encontrado.</p>';
            }
        })
        .catch(error => {
            console.error('Erro ao obter dados:', error);
        });
}



/*------------------DISCOVER APOD E CATEFORIAS---------------------- */

// Variáveis globais
const apodApiUrl = 'https://api.nasa.gov/planetary/apod';
/* const apiKey = 'GDJgtLTGgdHHochkIV2HoE9oZxGkKCBk7yO9yi8U';*/
const numImages = 30; //exemplificar com 30 imgs/ items
const apodContainer = document.getElementById('apod-container');
let allApodImages = [];//criar array desses item

// buscar uma imagem APOD aleatória
async function getRandomApodImage() {
    const date = randomDate();
    const apiUrl = `${apodApiUrl}?api_key=${apiKey}&date=${date}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao buscar imagem APOD:', error);
    }
}

//data random
function randomDate() {
    const start = new Date('1995-06-16');
    const end = new Date();
    const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return randomDate.toISOString().split('T')[0];
}

//renderizar imagens APOD ou seja os meus resultados
function renderApodImages(images) {
    apodContainer.innerHTML = '';
    images.forEach(renderApodImage);
}

function renderApodImage(apodData) {
    const { title, date, explanation, url } = apodData;
    const initialCharLimit = 270;
    //verificar se a explicação excede o limite de caracteres
    const showSeeMore = explanation.length > initialCharLimit;
    //parte inicial + completa da explicação
    const truncatedExplanation = showSeeMore ? explanation.slice(0, initialCharLimit) + '...' : explanation;

    const apodImageHTML = `
                <div class="discoverapodlist">
                    <h3 class="titlediscoverlist" >${title}</h3>
                    <p class="datediscoverlist">${date}</p>
                    <div class="imgdiscover-container">
                    <img src="${url}" alt="${title}" style="max-width: 100%;" class="imagediscoverlist">                   
                    </div>
                    <p class="explanation-disc">${truncatedExplanation}</p>
                    ${showSeeMore ? '<button class="seemore" onclick="toggleExplanation(this)">See More</button>' : ''}
                </div>
            `;

    apodContainer.innerHTML += apodImageHTML;
}

// exibir ou reduzir a explicação ao clicar no botão
function toggleExplanation(button) {
    const apodImageDiv = button.parentElement;
    const apodData = allApodImages.find(apod => apod.title === apodImageDiv.querySelector('h3').innerText);

    if (apodData) {
        const fullExplanation = apodData.explanation;
        const existingExplanation = apodImageDiv.querySelector('.explanation-disc').innerHTML;

        // Se o texto estiver expandido, reduz para os 270 caracteres iniciais
        if (button.innerText === 'See Less') {
            const truncatedExplanation = fullExplanation.substring(0, 270) + '...';
            apodImageDiv.querySelector('.explanation-disc').innerHTML = truncatedExplanation;
            button.innerText = 'See More';
        } else {  // Se o texto não estiver expandido, mostra a explicação completa
            apodImageDiv.querySelector('.explanation-disc').innerHTML = fullExplanation;
            button.innerText = 'See Less';
        }
    }
}
/*----------APLICAÇÃO DE FILTRO----------- */

function applyCategoryFilter(category) {
    console.log("Categoria selecionada:", category);
    const filteredImages = allApodImages.filter(apod => {
        const titleLower = apod.title.toLowerCase();
        const explanationLower = apod.explanation.toLowerCase();
        return titleLower.includes(category.toLowerCase()) || explanationLower.includes(category.toLowerCase());
    });

    renderApodImages(filteredImages);
}

/*--------ORDENAR CRONOLÓGICAMENTE */
function applyOrderBy(orderBy) {
    let sortedImages = [...allApodImages];

    switch (orderBy) {
        case 'latest':
            sortedImages.sort((a, b) => new Date(b.date) - new Date(a.date));
            break;
        case 'oldest':
            sortedImages.sort((a, b) => new Date(a.date) - new Date(b.date));
            break;
        // Volta a random ou seja o estado inicial
        default:
            break;
    }

    renderApodImages(sortedImages);
}

function resetFilter() {
    renderApodImages(allApodImages);
}
//funcção assincrona para poder ser realizada em segundo plano (carregamento)
async function initializeApodImages() {
    for (let i = 0; i < numImages; i++) {
        const apodData = await getRandomApodImage();
        allApodImages.push(apodData);
    }

    renderApodImages(allApodImages);
}

//carregamento antes de inicializar
document.addEventListener('DOMContentLoaded', initializeApodImages);


