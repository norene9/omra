// Tutorial by http://youtube.com/CodeExplained
// api key : 82005d27a116c2880c8f0fcb866998a0


const weatherIcons = {
    "Rain": "wi wi-rain",
    "Clouds": "wi wi-day-cloudy",
    "Cloudy": "wi wi-cloudy",
    "Snow": "wi wi-day-snow",
    "Sunny": "wi wi-day-sunny",
    "Lightning": "wi wi-day-lightning",
    "Hot": "wi wi-hot",
    "Mist": "wi wi-day-fog",
    "Sleet": "wi-sleet",
    "Windy": "wi wi-windy",
    "Sleet": "wi sleet",
    "Haze": "wi day-haze",
    "Sprinkle": "wi wi-day-sprinkle"

}

function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}

//async et await son utilisé pour rendre le code asyncrone
//ceci pour minimioser le code , revoir la vide epinjlé sous nom meilleur ds crome
async function main() {
    //retourner les promesse avc fetch 
    //retourner l'ip du pc
    const ip = await fetch('http://api.ipify.org?format=json')
        .then(resultat => resultat.json())
        .then(json => json.ip)

    console.log(ip); //retourner l'adresse  ville,coun,cont du ip du pc
    const ville = await fetch('http://api.ipstack.com/' + ip + '?access_key=3c3db9aed2156b74dd1f7005b0991c2e&format=1')

        .then(resultat => resultat.json())
        .then(json => json.city)
    console.log(ville);
    //retourner la méteo de ladr retournéé precedement
    const meteo = await fetch('http://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=82005d27a116c2880c8f0fcb866998a0&lang=fr&units=metric')
        // const meteo =  await fetch('https://samples.openweathermap.org/data/2.5/forecast?q='+ville+','+json.country_code+'&appid=82005d27a116c2880c8f0fcb866998a0')
        .then(resultat => resultat.json())
        .then(json => json)
    console.log(meteo);

    displayWeatherInfos(meteo)

}

function displayWeatherInfos(data) {
    const name = data.name;
    const temp = data.main.temp;
    const conditions = data.weather[0].main;
    const descriptions = data.weather[0].description;
    const visibility = data.visibility;
    document.querySelector('#ville').textContent = name;
    document.querySelector('#temperature').textContent = Math.round(temp);
    document.querySelector('#conditions').textContent = capitalize(descriptions);
    document.querySelector('i.wi').className = weatherIcons[conditions];

    document.body.className = conditions.toLowerCase();

}







main();














// ——————————————————————————————————————————————————
// TextScramble
// ——————————————————————————————————————————————————

class TextScramble {
    constructor(el) {
        this.el = el
        this.chars = '!<>-_\\/[]{}—=+*^?#________'
        this.update = this.update.bind(this)
    }
    setText(newText) {
        const oldText = this.el.innerText
        const length = Math.max(oldText.length, newText.length)
        const promise = new Promise((resolve) => this.resolve = resolve)
        this.queue = []
        for (let i = 0; i < length; i++) {
            const from = oldText[i] || ''
            const to = newText[i] || ''
            const start = Math.floor(Math.random() * 40)
            const end = start + Math.floor(Math.random() * 40)
            this.queue.push({ from, to, start, end })
        }
        cancelAnimationFrame(this.frameRequest)
        this.frame = 0
        this.update()
        return promise
    }
    update() {
        let output = ''
        let complete = 0
        for (let i = 0, n = this.queue.length; i < n; i++) {
            let { from, to, start, end, char } = this.queue[i]
            if (this.frame >= end) {
                complete++
                output += to
            } else if (this.frame >= start) {
                if (!char || Math.random() < 0.28) {
                    char = this.randomChar()
                    this.queue[i].char = char
                }
                output += `<span class="dud">${char}</span>`
            } else {
                output += from
            }
        }
        this.el.innerHTML = output
        if (complete === this.queue.length) {
            this.resolve()
        } else {
            this.frameRequest = requestAnimationFrame(this.update)
            this.frame++
        }
    }
    randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)]
    }
}

// ——————————————————————————————————————————————————
// Example
// ——————————————————————————————————————————————————



var callBackgetSuccess = function (data) {
    console.log("donnees api", data)
    // alert("La Temperature  est : "+data.main.temp);
    var element = document.getElementById("zone_meteo");
    element.innerHTML = "<br><table>  <tr><td>  Temperature : " + Math.round(data.main.temp)
        + "</td></tr><tr> <td> Feelslike : " + Math.round(data.main.feels_like)
        + "</td></tr><tr> <td>  Description: " + data.weather[0].description
        + "  </td> </tr><tr> <td> Humidite : " + data.main.humidity
        + "</td></tr><tr> <td>  Etat du vent (vitesse, deg) : " + data.wind.speed + " , " + data.wind.deg

        + "</td></tr> "
        + " </table> "
        ;
}
function buttonClickGET() {


    var queryLoc = document.getElementById("queryLoc").value;
    var url = "http://api.openweathermap.org/data/2.5/weather?q=" + queryLoc + "&units=metric&appid=82005d27a116c2880c8f0fcb866998a0"
    $.get(url, callBackgetSuccess).done(function () {

    })
        .fail(function () {
            alert("Verifiez bien que le pays et la ville existent!");
        })
        .always(function () {

        })










}
