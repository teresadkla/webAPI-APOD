
//Apenas um elemento
//APOD API

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
                <h2>${data.copyright}</h2>
            `;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});


/*Mostra a imagem do dia*/

document.addEventListener('DOMContentLoaded', function () {
    const apiKey = 'GDJgtLTGgdHHochkIV2HoE9oZxGkKCBk7yO9yi8U';
    const apiUrl = 'https://api.nasa.gov/planetary/apod'; // APOD astronomy picture of the day

    // Obter a data atual no formato YYYY-MM-DD
    const today = new Date().toISOString().split('T')[0];

    // Make a request to the NASA API with the current date
    fetch(`${apiUrl}?api_key=${apiKey}&date=${today}`)
        .then(response => response.json())
        .then(data => {
            // Update the HTML content with NASA API data
            const contentDiv2 = document.getElementById('content2');
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


/*Repositório de todas as imagens sugeridad pela nasa onde se pode consultar as antigas e os temas das mesmas */
/*Pesquisa por data */
const apiKey = 'GDJgtLTGgdHHochkIV2HoE9oZxGkKCBk7yO9yi8U';
  const apiUrl = 'https://api.nasa.gov/planetary/apod';

  document.addEventListener('DOMContentLoaded', function () {
    performSearch(); // Exibir resultados ao carregar a página
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










  

    document.addEventListener('DOMContentLoaded', function () {
      console.log('Page loaded');
      performSearch(); // Exibir resultados ao carregar a página
    });

    function performSearch() {
      const categorySelect = document.getElementById('categorySelect');
      const selectedCategory = categorySelect.value;

      console.log(`Performing search for category: ${selectedCategory}`);

      let searchUrl = `${apiUrl}?api_key=${apiKey}`;

      fetch(searchUrl)
        .then(response => response.json())
        .then(data => {
          console.log('Search results:', data);

          const contentDiv3 = document.getElementById('content3');
          contentDiv3.innerHTML = '';

          // Check if the response is an array of items
          if (Array.isArray(data)) {
            // Iterate over each item in the response
            data.forEach(item => {
              const imageUrl = item.url;
              const title = item.title;

              // Verifique se as "concept tags" incluem a categoria desejada
              if (selectedCategory === 'all' || (item.concept_tags && item.concept_tags.includes(selectedCategory))) {
                contentDiv3.innerHTML += `
                  <div class="item" onclick="showPreview('${imageUrl}', '${title}')">
                    <h3>${title}</h3>
                    <img src="${imageUrl}" alt="${title}">
                  </div>
                `;
              }
            });
          } else {
            // The response is a single item
            const imageUrl = data.url;
            const title = data.title;

            contentDiv3.innerHTML += `
              <div class="item" onclick="showPreview('${imageUrl}', '${title}')">
                <h3>${title}</h3>
                <img src="${imageUrl}" alt="${title}">
              </div>
            `;
          }
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }




