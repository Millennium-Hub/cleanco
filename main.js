const toggleButton = document.getElementById("click");

// Add an event listener to the button
toggleButton.addEventListener("click", function () {
    // Get the body element
    const body = document.body;

    // Check if the body currently has overflow hidden
    if (body.style.overflow === "hidden") {
        // If it does, remove the overflow hidden property
        body.style.overflow = "";
    } else {
        // If it doesn't, add the overflow hidden property
        body.style.overflow = "hidden";
    }
});



