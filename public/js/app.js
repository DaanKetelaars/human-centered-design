document.getElementById("exempleCheckbox").addEventListener("keydown", function (e) {
    let currentItem = this.querySelector("[aria-selected=true]");
    switch (e.keyCode) {
        case 38: // Up arrow
            if (currentItem.previousElementSibling !== null) {
                currentItem.setAttribute("aria-selected", "false");
                currentItem.previousElementSibling.setAttribute("aria-selected", "true");
                currentItem.previousElementSibling.focus();
                currentItem.previousElementSibling.classList.add('active');
            }
            e.preventDefault();
            break;
        case 40: // Down arrow
            if (currentItem.nextElementSibling !== null) {
                currentItem.setAttribute("aria-selected", "false");
                currentItem.nextElementSibling.setAttribute("aria-selected", "true");
                currentItem.nextElementSibling.focus();
                currentItem.nextElementSibling.classList.add('active');
            }
            e.preventDefault();
            break;
        case 32: // Space                                                                                                           
            if (currentItem.getAttribute("aria-checked") === "true") {
                currentItem.setAttribute("aria-checked", "false");
                currentItem.querySelector("input[type=checkbox]").checked = false;
            } else {
                currentItem.setAttribute("aria-checked", "true");
                currentItem.firstElementChild.setAttribute("aria-checked", "true");
                currentItem.querySelector("input[type=checkbox]").checked = true;;
            }
            e.preventDefault();
            break;

    }
});