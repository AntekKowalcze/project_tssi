// making local storage variable (it will remember state of site)
let state = localStorage.getItem("state");
//making variables from site elements
const toggleButton = document.getElementById("light-dark-mode-icon");
const listItem = document.querySelectorAll(".header-nav-item");
const listLink = document.querySelectorAll(".header-nav-link");
// swaping prism (code style sheet)
function swapStyleSheet(sheet) {
  document.getElementById("sheet").setAttribute("href", sheet);  
}
// function which enables darkmode 
const enableDarkMode = () => {
// for each list item chage class to darkmode-list
listItem.forEach((item) =>{
  item.classList.add("darkmode-list");
})
  // for each link in list delete class darkmode-list
listLink.forEach((link) => {
  link.classList.add("color-toogle");
})
// change colors and fonts 
document.body.classList.add("darkmode");
// swap stylesheet for prism
swapStyleSheet("../CSS/prism_dark_mode.css");
// change state of local storage
localStorage.setItem('state', 'enabled');

}
const disableDarkMode = () => {
// for each list item delete class darkmode-list
  listItem.forEach((item) =>{
    item.classList.remove("darkmode-list");
  })
  // for each link in list delete class darkmode-list
  listLink.forEach((link) => {
    link.classList.remove("color-toogle");
  })
  // change colors and fonts to normal 
  document.body.classList.remove("darkmode")
  // swap stylesheet for prism
  swapStyleSheet("../CSS/prism_light_mode.css");
// change state of local storage
  localStorage.setItem('state', 'disabled');

  }
  // checking if darkmode was enabled last time site was visited
  if  (state == "enabled"){
    enableDarkMode();
    // changing orientation off button to make actual state always on top
    toggleButton.classList.add("dark");
  } 
toggleButton.addEventListener("click", () => {
  // get state from local storage and enable or disable darkmode
  state = localStorage.getItem("state")
  if (state!='enabled'){
    toggleButton.classList.add("dark");
    enableDarkMode();
  } else {
    disableDarkMode();
    toggleButton.classList.remove("dark");
    toggleButton.classList.add("light");
    setTimeout(() => {
      toggleButton.classList.remove("light");
    },600)
  }
})

