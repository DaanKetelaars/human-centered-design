window.addEventListener("keydown", function (e) {
    //tested in IE/Chrome/Firefox
    document.getElementById("key").innerHTML = e.key;
    // document.getElementById("keyCode").innerHTML = e.keyCode;
    document.getElementById("eventCode").innerHTML = e.code;
})