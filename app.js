

const input_country = document.querySelector("#which-country");

const btn = document.querySelector("button");

const _country = document.querySelector(".country");
const temp1 = document.querySelector(".temp");
const humid = document.querySelector(".humidity-val");
const wind = document.querySelector(".wind-speed-val");


let website = "https://api.openweathermap.org/data/2.5/";

btn.addEventListener('click', search);

input_country.addEventListener('keypress', search_key);

function search_key(ea){


    if(ea.key==='Enter'){

        ea.preventDefault()
        search();
    }
}
async function search(e) {

    if (input_country.value) {
        let input_data = input_country.value.trim();
        const responce = await fetch(website + `weather?units=metric&q=${input_country.value}&appid=a82b7e7a918d5476a8ef184a1705f587`);

      
        

        let data = await responce.json();

        if(responce.status!=200){

            window.alert("unable to fetch the data");
            input_country.value = ""
        }
        else{


            
            console.log(data);
            
            



            temp1.innerText =data.main['temp']+"°C";
            wind.innerText = data.wind['speed'] + "kmph";
            humid.innerText = data.main['humidity'];
            _country.innerText = data['name'];
            input_country.value = "";
        }

        
        


    }


}