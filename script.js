const shareBtn = document.getElementById("share-icon-bg");
const linksSection = document.getElementById("share-links");
const profileSection = document.getElementById("profile");
const bottomSection = document.getElementById("bottom-section");
const arrowDown = document.getElementById("arrow-down");

shareBtn.addEventListener('click', () => {
    if (window.screen.width < 768) {
        profileSection.classList.toggle("hidden");
        linksSection.classList.toggle("hidden");
        bottomSection.classList.toggle("active");
    }else{
        linksSection.classList.toggle("hidden");
        arrowDown.classList.toggle("hidden");
    } 
    
});