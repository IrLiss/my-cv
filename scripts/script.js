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
