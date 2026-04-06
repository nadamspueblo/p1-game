console.log("Script started");

function start() {
    console.log("click");

    // Start level 1
    let num = getRandomNum();
    createCircle(num);
    createCircle(num);
    num = getRandomNum();
    createCircle(num);
    createCircle(num);
    num = getRandomNum();
    createCircle(num);
    createCircle(num);
    num = getRandomNum();
    createCircle(num);
    createCircle(num);

}

function createCircle(num) {
    // Create a div for the circle
    let circle = document.createElement("div");

    //  Set text to a number
    circle.innerText = num;

    // Set color, shape, font size, etc
    circle.style.backgroundColor = "red";
    circle.style.width = "100px";
    circle.style.height = "100px";
    circle.style.borderRadius = "50%";
    circle.style.textAlign = "center";
    circle.style.alignContent = "center";
    circle.style.color = "white";
    circle.style.fontSize = "30px";
    circle.style.position = "absolute";
    circle.style.left = getRandomX() + "px";
    circle.style.top = getRandomY() + "px";

    // Add the circle to the page
    document.body.appendChild(circle);

}

// Generates random x coordinates
function getRandomX() {
    let randX = Math.random() * window.innerWidth; 
    return randX;
}

// Generates a random y coordinate
function getRandomY() {
    let randY = Math.random() * window.innerHeight;
    return randY;
}

function getRandomNum() {
    let rand = Math.random() * 100;
    rand = Math.floor(rand);
    return rand;
}