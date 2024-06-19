const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/WP.jpg") {
        myImage.setAttribute("src", "images/ti2.jpg");
    } else {
        myImage.setAttribute("src", "images/WP.jpg");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName)
        setUserName();
    else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Welcome to my webpage, ${myName} `;   // ` ` v/s ' '   Alternatively, can also use string concatenation 'Welcome, ' + myName
    }
}
localStorage.clear;

if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Welcome to my webpage, ${storedName}`;
  }
  

myButton.onclick = () => {
    setUserName();
};