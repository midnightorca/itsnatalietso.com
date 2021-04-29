// for scrolling nav bar to change a when active
window.addEventListener('DOMContentLoaded', () => {

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute("id");
            if (entry.intersectionRatio > 0) {
                document.querySelector(`a[href="#${id}"].navLink`).classList.add("current");
            } else {
                document.querySelector(`a[href="#${id}"].navLink`).classList.remove("current")
            }
        })
    })

    document.querySelectorAll('section[id]').forEach((section) => {
        observer.observe(section);
    })
})

// functions for scrolling back to top
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

