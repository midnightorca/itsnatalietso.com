const portfolio = {};

// functions for scrolling back to top
portfolio.toTopButton = document.getElementById("toTop");

portfolio.scrollFunc = () => {
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        portfolio.toTopButton.classList.add("show");
    } else {
        portfolio.toTopButton.classList.remove("show");
    }
}

portfolio.toTopFunc = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

toTopButton.onclick = function(e) {
    portfolio.toTopFunc();
}

portfolio.init = () => {
    window.onscroll = function() {
        portfolio.scrollFunc()
    };

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
}

portfolio.init();