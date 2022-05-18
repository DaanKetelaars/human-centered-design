// Get all the <li> elements into a collection
const listItems = document.querySelectorAll("li");
let currentLI;
if (window.location.href.indexOf('date.html') > -1) {

    const currentDate = new Date()
    const day = currentDate.getDate()

    // Set up a counter to keep track of which <li> is selected
    currentLI = day - 1;
    listItems[currentLI].classList.add("highlight"); // Highlight the new element
}
if (window.location.href.indexOf('time.html') > -1) {

    const currentTime = new Date()
    const time = currentTime.getHours()
    currentLI = time - 1;
    listItems[currentLI].classList.add("highlight"); // Highlight the new element
}

// Set up a key event handler for the document
document.addEventListener("keydown", (event) => {
    // Check for up/down key presses
    switch (event.keyCode) {
        case 72:
            if (window.location.href.indexOf('station.html') > -1) {
                console.log('niet doen aub');
            } else {
                // Up arrow    
                // Remove the highlighting from the previous element
                listItems[currentLI].classList.remove("highlight");

                currentLI = currentLI > 0 ? --currentLI : 0; // Decrease the counter      
                listItems[currentLI].classList.add("highlight"); // Highlight the new element
            }

            break;
        case 74:
            if (window.location.href.indexOf('station.html') > -1) {
                console.log('niet doen aub');
            } else {
                // Down arrow
                // Remove the highlighting from the previous element
                listItems[currentLI].classList.remove("highlight");

                currentLI = currentLI < listItems.length - 1 ? ++currentLI : listItems.length -
                    1; // Increase counter 
                listItems[currentLI].classList.add("highlight"); // Highlight the new element
            }
            break;
        case 32:
            if (window.location.href.indexOf('index.html') > -1) {
                window.location.href = "date.html";
            }
            if (window.location.href.indexOf('date.html') > -1) {
                const link = document.querySelector('.highlight')
                window.location.href = "time.html";
            }
            if (window.location.href.indexOf('time.html') > -1) {
                window.location.href = "station.html";
            }
            if (window.location.href.indexOf('station.html') > -1) {
                window.location.href = "planning.html";
            }
            break;
        case 27:
            const popup = document.querySelector('.popup')
            popup.classList.add('show')
            const btnPopupYes = document.querySelector('.popup .btnGroup .yes')
            const btnPopupNo = document.querySelector('.popup .btnGroup .no')
            btnPopupYes.addEventListener('click', () => {
                popup.classList.remove('show')
                window.location.href = "index.html";
            })
            btnPopupNo.addEventListener('click', () => {
                popup.classList.remove('show')
            })
            break;
    }
});