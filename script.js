var theme = 0;
function toggleTheme() {
    if (theme === 0) {
        document.body.style.background = "black";
        document.body.style.color = "white";
        document.getElementById("header").style.color = "black";
        var content = document.getElementsByClassName("content");
        for (let i = 0; i < content.length; i++) {
            content[i].style.background = "black";
        }
        theme = 1;
    } else {
        document.body.style.background = "white";
        document.body.style.color = "black";
        document.getElementById("header").style.color = "white";
        var content = document.getElementsByClassName("content");
        for (let i = 0; i < content.length; i++) {
            content[i].style.background = "white";
        }
        theme = 0;
    }
}
window.addEventListener("scroll", function () {
    var background = document.getElementsByClassName("background");
    for (let x = 0; x < background.length; x++) {
        background[x].style.transform = "translateY(" + window.scrollY * 0.5 + "px)";
    }
});