


const toTopButton = document.getElementById("toTop");

window.onscroll = function() {scrollFunc()}

const scrollFunc = () => {
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        toTopButton.classList.add("show");
    } else {
        toTopButton.classList.remove("show");
    }
}

const toTopFunc = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

toTopButton.onclick = function(e) {
    toTopFunc();
}