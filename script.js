const shareBtn = document.getElementById("share-icon-bg");
const linksSection = document.getElementById("share-links");
const profileSection = document.getElementById("profile");
const bottomSection = document.getElementById("bottom-section");

shareBtn.addEventListener('click', () => {
    profileSection.classList.toggle("hidden");
    linksSection.classList.toggle("hidden");
    bottomSection.classList.toggle("active");
});