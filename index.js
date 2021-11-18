const share = document.getElementById("share");
const sharebar = document.getElementById("sharebar");

share.addEventListener("click", ()=> {
    share.classList.toggle("active");
    sharebar.classList.toggle("active");
})