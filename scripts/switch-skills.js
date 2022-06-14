/*=====================================================================
                    Click change skiLls
=====================================================================*/
let switchhardSkill = document.getElementById("hard-skills");
let switchsoftSkill = document.getElementById("soft-skills");
let hardSkill = document.getElementById("skills-tabs-hard");
let softSkill = document.getElementById("skills-tabs-soft");

function clickHardSkill() {
    switchhardSkill.classList.remove("skills-nav__item_active");
    switchsoftSkill.classList.add("skills-nav__item_active");
    hardSkill.classList.remove("switch-skills__content_active");
    softSkill.classList.add("switch-skills__content_active");
}

function clickSoftSkill() {
    switchsoftSkill.classList.remove("skills-nav__item_active");
    switchhardSkill.classList.add("skills-nav__item_active");
    softSkill.classList.remove("switch-skills__content_active");
    hardSkill.classList.add("switch-skills__content_active");
}