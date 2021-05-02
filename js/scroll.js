var navbar = document.querySelector(".navbar");


addEventListener("scroll", function () {
    if (navbar.style) {
        if (scrollY > 300) {
            navbar.style.position = "absolute";
            navbar.style.backgroundColor = "red";
            navbar.style.top = "0"
            navbar.style.width = "100%";
        }
        else {
            navbar.style.position = "";
            navbar.style.backgroundColor = "transparent";
            navbar.style.top = ""
        }
    }
})