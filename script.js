function reveal() {
    var reveals = document.querySelectorAll(".node, .line, .card, .img-placeholder, h1");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".node, .line, .card, .img-placeholder, h1");
    elements.forEach(el => el.classList.add("reveal"));
    reveal();
    
    const mainNode = document.querySelector(".node-main");
    if (mainNode) mainNode.classList.add("node-main-active");
});

window.addEventListener("scroll", reveal);
