const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".header-nav-menu");
const asideToggle = document.querySelector(".side");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  asideToggle.classList.toggle("active");
});

document.querySelectorAll(".header-nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    asideToggle.classList.remove("active");
  })
);

//refresh button reverse animation
const refresh = document.querySelector("#refresh-image");
// let clicked = false;
// refresh.addEventListener("click", ()=>{
// clicked = true;
// refresh.className= '';
// refresh.classList.add("clicked");
// console.log("added class clicked");
// })
refresh.addEventListener("mouseleave", () => {
  // if(!clicked){
  refresh.classList.add("refresh-out");
  console.log("Mouse left the element!");
  //deleting refreshout class after animation
  setTimeout(() => {
    refresh.classList.remove("refresh-out");
    console.log("deleted");
  }, 1000);
// }
});
//defining funfacts
var funFactDictionary = new Object();
var funFactDictionary = {
  "#CSS1":
    "Główną osią display:flex; jest oś posioma, chyba że zmienisz flex-direction: na column!",
  "#HTML1":
    "Możesz użyć atrybutu download w <a> aby określić, że zawartość linku zostanie pobrana!",
};
//refresh funfuct if button clicked
refresh.addEventListener("click", () => {
  drawingFunFuct(funFactDictionary);
});
//drawing fun-fact function
function drawingFunFuct(funFactDictionary) {
  //getting length of dictionary
  var len = Object.keys(funFactDictionary).length;
  var randomNumber = Math.floor(Math.random() * len);
  console.log("len is", len);
  console.log("rand", randomNumber);
  var keyArray = Object.keys(funFactDictionary);
  var id = keyArray[randomNumber];
  var content = funFactDictionary[id];
  console.log(content);
  //sanitizing title and content of funfuct from vournabilities
  var sanitizedId = SanitizeHtml(id);
  var sanitizedContent = SanitizeHtml(content);
  //printing funfuct to elements in html
  document.getElementById("id").innerHTML = sanitizedId;
  document.getElementById("content").innerHTML = sanitizedContent;
}
drawingFunFuct(funFactDictionary);
//making string safe from vournabilities like injecting scripts and other
function SanitizeHtml(valueToSanitize) {
  return valueToSanitize.replace(/[<>"']/g, function (match) {
    return {
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    }[match];
  });
}
