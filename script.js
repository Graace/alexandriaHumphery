window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader-hidden");

  loader.addEventListener("transitionend",  () => {
    document.body.removeChild("loader");
  })
})

function showSideBar(){
  const sideBar = document.querySelector(".sidebar");
  sideBar.style.display = "flex";
}

function hideSideBar(){
  const sideBar = document.querySelector(".sidebar");
  sideBar.style.display = "none";
}