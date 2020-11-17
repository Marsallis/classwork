console.log("stranger things are coming");
console.log({ document })
console.log(document.body);


const h1 = document.querySelector('h1')
h1.innerText = "Welcome to the Upside Down";
h1.style.color = "red";

// select the image and store it in a variable called image
const image = document.querySelector("img");
image.style.display = "none";
image.style.display = "block";
image.style.width = "95%";

// Create a img element 
// add the image to the page
const eggos = document.createElement('img');
const container = document.querySelector('.container');
// set a src attribute on the img = eggos
eggos.setAttribute("src", "https://i.ytimg.com/vi/TgSmPqMGk2g/maxresdefault.jpg");
//set the image to 100%
eggos.style.width = "100%";
container.appendChild(eggos);

// select all of the li on the page
// store them in a variable
const li = document.querySelectorAll('li')
console.log(li);
li[0].innerText = "Demo Dog Hangout";
li[4].style.color = "hotpink";
li[0].remove();