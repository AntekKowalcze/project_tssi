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

        refreshButton.classList.add("mouse-removed");

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
    "W pierwszej wersji HTML było 18 znaczników, a w wersji HTML5 jest jch 115!",
  "#HTML3":
    "Skrót HTML rozwija się na Hyper Text Markup Language co tłumaczy się na hipertekstowy język znaczników",
  "#HTML4":
    "Używając znacznika <script> możemy wykonać na stronie skrypt w różnych językach w zależności od przeglądarki!",
  "#CSS3":
    "Możesz stworzyć zmienną pisząc jej nazwę po dwóch myślnikach np. --bg-color: black, aby jej użyć wpisujesz var(--bg-color).",
    '#CSS4':
    "W display grid możesz wykorzystać funkcję reapeat(), aby powtórzyć dany schemat siatki.",
    '#HTML5':
    "Możesz użyć metody post w znaczniku <input>, aby wpisywane elementy, nie wyświetlały się w adresie URL.",
    '#CSS5':
    "Gdy ustawiasz wielkość czcionki użyj funkcji clamp(minimalna, preferowana, maksymalna) która automatycznie zmienia wielkość czcionki.",
    '#CSS6':
    "Responywność to nie tylko dopasowanie do wielkości urządzenia, ale także do jakości internetu i wieku urządzenia.",
    '#CSS7':
    "Użyj funcji calc(a-b) aby łatwo dokonywać przeliczeń na jednostkach i ustawiać wynik jako wartość np: calc(10vw-23px).",
    '#CSS8':
    "Używanie box-sizing: border-box; też jest sposobem na ulepszenie responsywności strony!",
    '#HTML6':
    "Aby dołączyć skrypt do dokumentu HTML musisz użyć znacznika <script>",
    '#HTML7':
    "Nie powinno się zapisywać znaków takich jak < > itp. w tekście naszej strony, zamiast tego powinniśmy użyć encji.",
    '#HTML8':
    "90% stron internetowych jest bazowanych na HTML5 DOCTYPE",
    '#HTML9':
    "HTML nie jest case sensitive, nie zwraca uwagi na duże i małe litery.",
    '#CSS9':
    "Właściwość clip: działa tylko elementach pozycjonowanych absolutnie"
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
