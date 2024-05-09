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
const refreshButton = document.querySelector("#refresh-image");
let clickFlag = false;

refreshButton.addEventListener("mouseenter", () => {
  refreshButton.classList.add("mouse-entered");

  refreshButton.addEventListener("click", () => {
    clickFlag = true;

    // refreshButton.classList.remove("mouse-entered");

    console.log("get into CLICKED");

    refreshButton.classList.add("mouse-clicked");
    refreshButton.classList.add("mobile-clicked");

    setTimeout(() => {
      refreshButton.classList.remove("mouse-clicked");

      refreshButton.classList.remove("mouse-entered");
      refreshButton.classList.remove("mobile-clicked");
    }, 500);

    refreshButton.addEventListener("mouseleave", () => {
      if (
        !clickFlag &&
        !refreshButton.classList.contains("mouse-clicked") &&
        refreshButton.classList.length != 0
      ) {
        refreshButton.classList.remove("mouse-entered");

        refreshButton.classList.add("mouse-removed"); //DALEJ ZBIERA MOUSE REMOVED

        setTimeout(() => {
          refreshButton.classList.remove("mouse-removed");
        }, 500);
      } else {
        clickFlag = false;
      }
    });
  });
});

//defining funfacts
var funFactDictionary = new Object();
var funFactDictionary = {
  "#CSS1":
    "Główną osią display:flex; jest oś posioma, chyba że zmienisz flex-direction: na column!",
  "#HTML1":
    "Możesz użyć atrybutu download w <a> aby określić, że zawartość linku zostanie pobrana!",
  "#CSS2":
    "Jeśli użyjesz własności ease-in w animation-timing-function: animacja spowolni z końcem wykonania animacji!",
  "#HTML2":
    "W pierwszej wersji HTML było 18 znaczników, a w wersji HTML5 jest jch 180!",
  "#HTML3":
    "Skrót HTML rozwija się na Hyper Text Markup Language co tłumaczy się na hipertekstowy język znaczników",
  "#HTMl4":
    "Używając znacznika <script> możemy wykonać na stronie skrypt w różnych językach w zależności od przeglądarki!",
  "#CSS3":
    "Możesz stworzyć zmienną pisząc jej nazwę po dwóch myślnikach np. --bg-color: black, aby jej użyć wpisujesz var(--bg-color)",
};
//refresh funfuct if button clicked
const refresh = document.querySelector("#refresh-image");
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
