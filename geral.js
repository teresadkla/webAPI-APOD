/*-------------------------MENU HAMBURGUER----------------- */

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menuToggle');
    const menuList = document.querySelector('.menulist');

    menuToggle.addEventListener('click', function () {
        menuList.classList.toggle('show');
        menuToggle.classList.toggle('open');
    });

    const menuLinks = document.querySelectorAll('.menulist a');

    menuLinks.forEach(function (link) {
        link.addEventListener('click', function () {

            menuList.classList.remove('show');
            menuToggle.classList.remove('open');

            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

/*------------------EFEITO NAV BAR-------------------- */

document.addEventListener("DOMContentLoaded", function () {
    var h4Elements = document.querySelectorAll(".h4deskt");
    var toggleElement = document.querySelectorAll(".cor-span");
    var hrElement = document.querySelector("hr");
    var logo = document.querySelector(".logo");
    var headerHeight = document.querySelector("header").offsetHeight;


    // Verifica a posição do scroll
    window.addEventListener("scroll", function () {
        h4Elements.forEach(function (h4Element) {
            if (window.scrollY > headerHeight-40) {
                h4Element.classList.add("cor-no-scroll");
                hrElement.style.opacity = "0"; // Torna transparente
                logo.style.opacity = "0";
            } else {
                h4Element.classList.remove("cor-no-scroll");
                hrElement.style.opacity = "1";
                logo.style.opacity = "1";
            }
        });
    });

    window.addEventListener("scroll", function () {
        toggleElement.forEach(function (toggleElement) {
            if (window.scrollY > headerHeight-100) {
                toggleElement.classList.add("toggleScroll");
            } else {
                toggleElement.classList.remove("toggleScroll");
               
            }
        });
    });
});