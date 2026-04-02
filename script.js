console.log("Script started");

function start() {
    console.log("click");

    // Start level 1
    createCircle();
}

function createCircle() {
    // Create a div for the circle
    let circle = document.createElement("div");

    //  Set text to a number
    circle.innerText = "67";

    // Set color, shape, font size, etc
    circle.style.backgroundColor = "red";
    circle.style.width = "100px";
    circle.style.height = "100px";

    // Add the circle to the page
    document.body.appendChild(circle);

}