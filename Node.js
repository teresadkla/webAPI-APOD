const fs = require('fs');
const fetch = require('node-fetch');

const apiKey = 'GDJgtLTGgdHHochkIV2HoE9oZxGkKCBk7yO9yi8U'; // Substitua pelo seu próprio API Key
const apiUrl = 'https://api.nasa.gov/planetary/apod';

async function fetchApodData(date) {
  const response = await fetch(`${apiUrl}?api_key=${apiKey}&date=${date}`);
  const data = await response.json();
  return data;
}

async function fetchAllApodData() {
  const startDate = new Date('1995-06-16');
  const endDate = new Date();
  let currentDate = startDate;

  const apodData = [];

  while (currentDate <= endDate) {
    const formattedDate = currentDate.toISOString().split('T')[0];
    const data = await fetchApodData(formattedDate);
    apodData.push(data);

    // Incrementa a data para o próximo dia
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return apodData;
}

async function saveToJsonFile(data, filename) {
  fs.writeFileSync(filename, JSON.stringify(data, null, 2));
  console.log(`Data saved to ${filename}`);
}

async function main() {
  const allApodData = await fetchAllApodData();
  await saveToJsonFile(allApodData, 'apod_data.json');
}

main();
