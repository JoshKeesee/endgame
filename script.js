var theme = 0;
function toggleTheme() {
    if (theme === 0) {
        document.body.style.background = "black";
        document.body.style.color = "white";
        document.getElementById("header").style.color = "black";
        document.getElementById("container").style.background = "black";
        var content = document.getElementsByClassName("content");
        for (let i = 0; i < content.length; i++) {
            content[i].style.background = "rgba(0, 0, 0, 0.5)";
            content[i].style.color = "white";
        }
        theme = 1;
    } else {
        document.body.style.background = "white";
        document.body.style.color = "black";
        document.getElementById("header").style.color = "white";
        document.getElementById("container").style.background = "white";
        var content = document.getElementsByClassName("content");
        for (let i = 0; i < content.length; i++) {
            content[i].style.background = "rgba(255, 255, 255, 0.5)";
            content[i].style.color = "black";
        }
        theme = 0;
    }
}
function big(id) {
    var element = document.getElementById(id);
    element.style.position = "fixed";
    element.style.zIndex = "15";
    if (theme === 1) {
        element.style.background = "black";
        element.style.color = "white";
    } else {
        element.style.background = "white";
        element.style.color = "black";
    }
    element.style.top = "13%";
    element.style.bottom = "0";
    element.style.left = "0";
    element.style.right = "0";
    element.style.fontSize = "30px";
    element.onclick = function() { normal(element.id) };
}
function normal(id) {
    var element = document.getElementById(id);
    element.style.zIndex = "1";
    element.style.position = "";
    element.style.fontSize = "";
    element.onclick = function() { big(element.id) };
}
window.addEventListener("scroll", function () {
    var background = document.getElementsByClassName("background");
    for (let x = 0; x < background.length; x++) {
        background[x].style.transform = "translateY(" + window.scrollY * 0.5 + "px)";
    }
});
