/*=====================================================================
                    Scrolling menu
=====================================================================*/
window.addEventListener('scroll', function () {
                if (window.scrollY > 100) {
                        document.getElementById("wp-header").classList.add("sticky");
                } else {
                        document.getElementById("wp-header").classList.remove("sticky");
                }
        });

/*=====================================================================
                 Change color on scroll
=====================================================================*/
window.addEventListener('scroll', function () {
    if (window.scrollY > 700 && window.scrollY < 1850 || window.scrollY > 2950 && window.scrollY < 4150) {
        document.getElementById("follow-text").classList.add("scrolling");
        document.getElementById("follow-line").classList.add("scrolling");
        document.getElementById("follow-link-github").classList.add("scrolling");
        document.getElementById("follow-link-behance").classList.add("scrolling");
        document.getElementById("follow-link-dribbble").classList.add("scrolling");
        document.getElementById("follow-link-linkedin").classList.add("scrolling");
        document.getElementById("follow-link-youtube").classList.add("scrolling");

    } else {
        document.getElementById("follow-text").classList.remove("scrolling");
        document.getElementById("follow-line").classList.remove("scrolling");
        document.getElementById("follow-link-github").classList.remove("scrolling");
        document.getElementById("follow-link-behance").classList.remove("scrolling");
        document.getElementById("follow-link-dribbble").classList.remove("scrolling");
        document.getElementById("follow-link-linkedin").classList.remove("scrolling");
        document.getElementById("follow-link-youtube").classList.remove("scrolling");
    }
});

/*=====================================================================
                    Scrolling  skiLls
=====================================================================*/
let process = document.getElementsByClassName("name-skills__progress");
window.addEventListener('scroll', function () {
    if (window.scrollY > 1800) {
        for (let i = 0; i < process.length; i++) {
            process[i].classList.add("name-skills__animation");
        }
    }
});

window.addEventListener('scroll', function () {
    if (window.scrollY > 3000) {
        for (let i = 0; i < process.length; i++) {
            process[i].classList.remove("name-skills__animation");
        }
    }
});
