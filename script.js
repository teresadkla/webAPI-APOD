
//Apenas um elemento
/*document.addEventListener('DOMContentLoaded', function () {
    const apiKey = 'GDJgtLTGgdHHochkIV2HoE9oZxGkKCBk7yO9yi8U';
    const apiUrl = 'https://api.nasa.gov/planetary/apod';

    // Make a request to the NASA API
    fetch(`${apiUrl}?api_key=${apiKey}`)
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
});*/

// APOD API
//APOD Imagens do dia random desde 1995
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
            `;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});


//IMGS e VIDEOS NASA
/*
document.addEventListener('DOMContentLoaded', function () {
    const apiKey = 'GDJgtLTGgdHHochkIV2HoE9oZxGkKCBk7yO9yi8U';
    const apiUrl = 'https://images-api.nasa.gov/search?q=space&media_type=image';

    // Fazer uma solicitação à API da NASA Image and Video Library
    fetch(`${apiUrl}&api_key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            console.log(data); 
            // Atualizar o conteúdo HTML com os dados da API da NASA
            const contentDiv2 = document.getElementById('content2');
            contentDiv2.innerHTML = '';

            if (data.collection && data.collection.items) {
                data.collection.items.forEach(item => {
                    const imageUrl = item.links[0].href;
                    const title = item.data[0].title;

                    contentDiv2.innerHTML += `
                        <div>
                            <h3>${title}</h3>
                            <img src="${imageUrl}" alt="${title}" style="max-width: 100%;">
                        </div>
                    `;
                });
            } else {
                contentDiv2.innerHTML = '<p>Nenhum resultado encontrado.</p>';
            }
        })
        .catch(error => {
            console.error('Erro ao obter dados:', error);
        });
});
/*Repositório de todas as imagens sugeridad pela nasa onde se pode consultar as antigas e os temas das mesmas */