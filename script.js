const container = document.querySelector(".container");
const unsplashURL = "https://source.unsplash.com/random/";
const rows = 5;

for (let index = 0; index < rows * 3; index++) {
  const img = document.createElement("img");
  img.src = `${unsplashURL}`;
}

function getRandomSize() {
  return `${getRandomNr()}x${getRandomNr()}`;
}

function getRandomNr() {
  return Math.floor(Math.random() * 10) + 300;
}

console.log(getRandomNr());
