const URL = "http://localhost:3000/pups/"
const dogBar = () => document.querySelector("#dog-bar")
// we set this to a global variable so we don't have to change it
let dogInfo
let dogImg
let dogH2
let dogButton 

document.addEventListener("DOMContentLoaded", () => {
  fetchDogs()
  dogInfo = document.querySelector("#dog-info")
  dogImg = document.createElement("img")
  dogH2 = document.createElement("h2")
  dogButton = document.createElement("button")
  dogInfo.append(dogImg, dogH2, dogButton)
});

function fetchDogs() {
  fetch(URL)
  .then(rsp => rsp.json())
  .then(dogArray => {
    dogArray.forEach(dog => renderDog(dog));
  });
}

function renderDog(dog){
  let dogSpan = document.createElement("span")
  dogSpan.innerHTML = dog.name
  dogSpan.addEventListener("click", () => {
    displayDog(dog)
  });
  dogBar().append(dogSpan)
}

function displayDog(dog){
  dogImg.src = dog.image
  dogH2.innerText = dog.name
  if (dog.isGoodDog){
    dogButton.innerText = "Good Dog!"
  }
  else {
    dogButton.innerText = "Bad Dog!"
  }

}

function updateDogButtonListener(dog){
  dogButton.addEventListener("click", () => {
    
  })

  let requestPackage = {}
  requestPackage.method = "PATCH";
  requestPackage.headers = { 'Content-Type': 'application/json' };
  requestPackage.body = JSON.stringify("isGoodDog")


}