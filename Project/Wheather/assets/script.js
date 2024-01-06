const searchForm = document.querySelector('.searchBar');
const ipBox = document.querySelector('#inputBox');
const displaytime = document.querySelector('#time');
const displaytemp = document.querySelector('#temp');
const displaymosam = document.querySelector('#mosam');
const displaycity = document.querySelector('#city');
const displayVisibility = document.querySelector('#visibility');
const displayair = document.querySelector('#air');
const displaywind = document.querySelector('#wind');
const displaycountry = document.querySelector('#country');
const homeImage = document.querySelector('.homeImage');

// API Key
const apiKey = 'd1845658f92b31c64bd94f06f7188c9c';

// Interval
setInterval(() => {
    updateTimeAndDisplay();
}, 1000);

// Time
function updateTimeAndDisplay() {
    let date = new Date();
    displaytime.innerHTML = date.toLocaleTimeString();
    let currentHour = Number(date.getHours());

    updateImageBasedOnTime(currentHour);
}

// Changing image with time
function updateImageBasedOnTime(hour) {
    if (hour >= 0 && hour < 6) {
        displaymosam.innerHTML = 'Midnight';
        homeImage.setAttribute('src', 'assets/moon.png');
    } else if (hour >= 6 && hour < 12) {
        homeImage.setAttribute('src', 'assets/sun-zpy4F5j8.png');
        displaymosam.innerHTML = 'Late Morning';
    } else if (hour >= 12 && hour < 18) {
        homeImage.setAttribute('src', 'assets/sun-zpy4F5j8.png');
        displaymosam.innerHTML = 'Afternoon';
    } else if (hour >= 18 && hour < 21) {
        displaymosam.innerHTML = 'Evening';
        homeImage.setAttribute('src', 'assets/moon.png');
    } else {
        homeImage.setAttribute('src', 'assets/moon.png');
        displaymosam.innerHTML = 'Night';
    }
}

// API - Fetch city 
searchForm.addEventListener('submit', async function (event) {
    event.preventDefault();
    const city = ipBox.value;
    try {
        let whether = await getWhetherReport(city);
        detailsOfWheather(whether);
    } catch (error) {
        console.error(error);
    }
})

// Get Wheather Report via URL
async function getWhetherReport(city) {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const fetchURL = await fetch(URL);
    if (!fetchURL.ok) {
        throw new Error("Could not fetch weather data");
    }
    return await fetchURL.json();
}

// Details in HTML Page
function detailsOfWheather(data) {
    console.log('Detail of City : ', data);

    // Fetching the data - which were needed
    const {
        name: city,
        main: {
            temp: currentTemp,
            humidity: humidity
        },
        wind: {
            speed: wind_speed
        },
        sys: {
            country: country
        },
        visibility: visibility
    } = data;

    displaycountry.innerHTML = country;
    displayVisibility.innerHTML = visibility;
    displaycity.innerHTML = city;
    displayair.innerHTML = `${humidity}%`;

    calculateWind(wind_speed);
    calculateTemp(currentTemp);
}

// Calculate wind speed in kmph
function calculateWind(wind) {
    const windKM = Number(wind) * 3.6;
    displaywind.innerHTML = `${Number(windKM).toFixed(1)} km/h`;
}

// Calculate temperature in celcius
async function calculateTemp(temp) {
    const tempInCelcius = Number(temp) - 273.15;
    displaytemp.innerHTML = `${tempInCelcius.toFixed(0)}<sup>o</sup>C`;
}