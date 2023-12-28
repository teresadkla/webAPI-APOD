/*---------------APOD Imagens do dia random desde 1995 para o header--------------------------*/
document.addEventListener('DOMContentLoaded', function () {
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
                <h2>${data.copyright}</h2>
                <h2>${data.concept_tags}</h2>
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

    // Obter a data atual no formato YYYY-MM-DD
    const today = new Date().toISOString().split('T')[0];

    // Make a request to the NASA API with the current date
    /*Request url*/
    fetch(`${apiUrl}?api_key=${apiKey}&date=${today}`)
        .then(response => response.json())
        .then(data => {
            // Update the HTML content with NASA API data
            /*Returned fields*/
            const contentDiv2 = document.getElementById('apod');
            contentDiv2.innerHTML = `
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

/*-------------------------------------------------------------------------------------*/
/*Repositório de todas as imagens sugeridad pela nasa onde se pode consultar as antigas e os temas das mesmas */

/*----------------------------Pesquisa por data------------------------------------------------------ */
const apiKey = 'GDJgtLTGgdHHochkIV2HoE9oZxGkKCBk7yO9yi8U';
const apiUrl = 'https://api.nasa.gov/planetary/apod';

document.addEventListener('DOMContentLoaded', function () {
   // performSearch(); // Exibir resultados ao carregar a página
});

function performSearch() {
    const searchTerm = document.getElementById('searchInput').value;
    const searchUrl = `${apiUrl}?api_key=${apiKey}&date=${searchTerm}`;

    fetch(searchUrl)
        .then(response => response.json())
        .then(data => {
            const contentDiv3 = document.getElementById('content3');
            contentDiv3.innerHTML = '';

            // A resposta da API é um único item, não uma coleção
            if (data) {
                const imageUrl = data.url;
                const title = data.title;

                contentDiv3.innerHTML += `
            <div class="item" onclick="showPreview('${imageUrl}', '${title}')">
              <h3>${title}</h3>
              <img src="${imageUrl}" alt="${title}">
              <p>${data.explanation}</p>
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


/*------------------------------------------------Categorias------------------------------------------------ */
/*
document.addEventListener('DOMContentLoaded', function () {
    const categorySelect = document.getElementById('categorySelect');
    categorySelect.addEventListener('change', performSearch2);

    console.log('Page loaded');
});

function performSearch2() {
    const categorySelect = document.getElementById('categorySelect');
    const selectedCategory = categorySelect.value;

    console.log(`Performing search for category: ${selectedCategory}`);

    // Inicializa um array para armazenar as imagens
    const images = [];

    // Gera três datas aleatórias desde 1995 até a data atual
    for (let i = 0; i < 3; i++) {
        const randomDate = getRandomDate();

        // Adiciona a data ao array
        images.push({ date: randomDate });
    }

    // Realiza a pesquisa para cada data no array e filtra com base na palavra-chave
    Promise.all(images.map(image => {
        let searchUrl = `${apiUrl}?api_key=${apiKey}&date=${image.date}`;
        return fetch(searchUrl)
            .then(response => response.json())
            .catch(error => {
                console.error('Error fetching data:', error);
                return null;
            });
    }))
    .then(dataArray => {
        const contentDiv4 = document.getElementById('content4');
        contentDiv4.innerHTML = '';

        dataArray.forEach(data => {
            if (data && containsKeyword(data, selectedCategory)) {
                const imageUrl = data.url;
                const title = data.title;

                contentDiv4.innerHTML += `
                    <div class="item" onclick="showPreview('${imageUrl}', '${title}')">
                        <h3>${title}</h3>
                        <img src="${imageUrl}" alt="${title} style="max-width: 30%;">
                        <p>${data.explanation}</p>
                    </div>
                `;
            }
        });
    });
}

function getRandomDate() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const randomYear = Math.floor(Math.random() * (currentYear - 1995 + 1)) + 1995;
    const randomMonth = Math.floor(Math.random() * 12) + 1;
    const randomDay = Math.floor(Math.random() * 28) + 1; // Considerando o máximo de 28 dias em um mês
    return `${randomYear}-${String(randomMonth).padStart(2, '0')}-${String(randomDay).padStart(2, '0')}`;
}

function containsKeyword(data, keyword) {
    // Verifica se o título ou a descrição contêm a palavra-chave
    const titleContainsKeyword = data.title.toLowerCase().includes(keyword.toLowerCase());
    const descriptionContainsKeyword = data.explanation.toLowerCase().includes(keyword.toLowerCase());

    return titleContainsKeyword || descriptionContainsKeyword;
}*/



/*
document.addEventListener('DOMContentLoaded', function () {
    console.log('Page loaded');
});

function performSearch2(category) {
    // Obtém a data atual
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    // Gera uma data aleatória desde 1995 até a data atual
    const randomYear = Math.floor(Math.random() * (currentYear - 1995 + 1)) + 1995;
    const randomMonth = Math.floor(Math.random() * 12) + 1;
    const randomDay = Math.floor(Math.random() * 28) + 1; // Considerando o máximo de 28 dias em um mês

    const randomDate = new Date(`${randomYear}-${randomMonth}-${randomDay}`);

    // Formata a data no formato YYYY-MM-DD
    const formattedDate = formatDate(randomDate);

    // Realiza a pesquisa para a data aleatória e categoria selecionada
    let searchUrl = `${apiUrl}?api_key=${apiKey}&date=${formattedDate}&concept_tags=${category}`;
    fetch(searchUrl)
        .then(response => response.json())
        .then(data => {
            console.log('Search results:', data);

            const contentDiv4 = document.getElementById('content4');
            contentDiv4.innerHTML = '';

            // Verifique se a resposta é um array de itens
            if (Array.isArray(data)) {
                // Itera sobre cada item na resposta
                data.forEach(item => {
                    const imageUrl = item.url;
                    const title = item.title;

                    contentDiv4.innerHTML += `
                        <div class="item" onclick="showPreview('${imageUrl}', '${title}')">
                            <h3>${title}</h3>
                            <img src="${imageUrl}" alt="${title}">
                            <p>${item.explanation}</p>
                        </div>
                    `;
                });
            } else {
                // A resposta é um único item
                const imageUrl = data.url;
                const title = data.title;

                contentDiv4.innerHTML += `
                    <div class="item" onclick="showPreview('${imageUrl}', '${title}')">
                        <h3>${title}</h3>
                        <img src="${imageUrl}" alt="${title}">
                        <p>${data.explanation}</p>
                    </div>
                `;
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

    console.log('Performing search for category:', category);
}

function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}
*/

document.addEventListener('DOMContentLoaded', function () {
    console.log('Page loaded');
});

function performSearch2(category) {
    // Obtém a data atual
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    // Gera uma data aleatória desde 1995 até a data atual
    const randomYear = Math.floor(Math.random() * (currentYear - 1995 + 1)) + 1995;
    const randomMonth = Math.floor(Math.random() * 12) + 1;
    const randomDay = Math.floor(Math.random() * 28) + 1; // Considerando o máximo de 28 dias em um mês

    const randomDate = new Date(`${randomYear}-${randomMonth}-${randomDay}`);

    // Formata a data no formato YYYY-MM-DD
    const formattedDate = formatDate(randomDate);

    const category = ["Stars", "Galaxies", "Nebulae", "Comet", "Sun",
        "Mercury", "Earth", "Moon", "Mars", "Jupiter", "Saturn", "Uranus", "Neptunae", "Pluto", "Rockets", "Spacecraft", "Space Station", "Scientists", "Astronauts"
    ]; 

    // Realiza a pesquisa para a data aleatória e categoria selecionada
    let searchUrl = `${apiUrl}?api_key=${apiKey}&date=${formattedDate}&concept_tags=${category}`;
    fetch(searchUrl)
        .then(response => response.json())
        .then(data => {
            console.log('Search results:', data);

            const contentDiv4 = document.getElementById('content4');
            contentDiv4.innerHTML = '';

            // Verifique se a resposta é um array de itens
            if (Array.isArray(data)) {
                // Itera sobre cada item na resposta
                data.forEach(item => {
                    const imageUrl = item.url;
                    const title = item.title;

                    contentDiv4.innerHTML += `
                        <div class="item" onclick="showPreview('${imageUrl}', '${title}')">
                            <h3>${title}</h3>
                            <img src="${imageUrl}" alt="${title}">
                            <p>${item.explanation}</p>
                        </div>
                    `;
                });
            } else {
                // A resposta é um único item
                const imageUrl = data.url;
                const title = data.title;

                contentDiv4.innerHTML += `
                    <div class="item" onclick="showPreview('${imageUrl}', '${title}')">
                        <h3>${title}</h3>
                        <img src="${imageUrl}" alt="${title}">
                        <p>${data.explanation}</p>
                    </div>
                `;
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

    console.log('Performing search for category:', category);
}

function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}
