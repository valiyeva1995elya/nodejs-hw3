const addCarBtn = document.querySelector("#add_car_btn");
const newCarNameInput = document.querySelector("#car_name");
const carsListUl = document.querySelector("#cars_list");


const BASE_URL = "http://localhost:8080"
const loadCarsList = async () => {
    const response = await fetch(BASE_URL + "/cars");
    const carsArray = await response.json();
    for(const {model} of carsArray){
        carsListUl.innerHTML +=`<li> ${model}</li>`
    }
}
loadCarsList()

function newCar(){
    let newModel = document.querySelector("#car_name").value;
    carsListUl.innerHTML +=`<li> ${newModel}</li>`;
    
}
