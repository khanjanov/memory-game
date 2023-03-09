const game = document.getElementById("game");
let elements = ["css", "html", "javascript", "mongo", "react", "windows"];
elements = [...elements, ...elements];
let selected = [];
let allow = true;
elements.sort(() => 0.5 - Math.random());
// let element = elements.concat(elements);
elements.map((item) => {
  let card = document.createElement("div");
  card.addEventListener("click", () => {
    if (card.classList.contains("active") || !allow) return;
    card.classList.add("active");

    let src = card.querySelector(".back img").getAttribute("src").slice(7, -4);
    selected.push(src);
    if (selected.length !== 2) return;
    if (selected[0] === selected[1]) {
      [...document.querySelectorAll(".active")].map((a) =>
        a.classList.add("match")
      );
      restartGame();
    } else {
      setTimeout(() => {
        [...document.querySelectorAll(".active:not(.match)")].map((a) =>
          a.classList.remove("active")
        );
      }, 1000);
    }
    selected = [];
    // card
    //   .querySelector(".back img")
    //   .getAttribute("src")
    //   .split("/")[1]
    //   .slice(0, -4)
  });
  card.classList.add("card");
  let cardInner = document.createElement("div");
  cardInner.classList.add("card_inner");
  let frontDiv = document.createElement("div");
  frontDiv.classList.add("front");
  let frontImage = document.createElement("img");
  frontImage.setAttribute("src", "images/bg.jfif");
  let backDiv = document.createElement("div");
  backDiv.classList.add("back");
  let backImage = document.createElement("img");
  backImage.setAttribute("src", `images/${item}.jpg`);
  frontDiv.append(frontImage);
  backDiv.append(backImage);
  cardInner.append(frontDiv, backDiv);
  card.append(cardInner);
  game.append(card);
});

document.addEventListener("transitionstart", () => {
  allow = false;
});
document.addEventListener("transitionend", () => {
  allow = true;
});

function restartGame() {
  console.log("object");
  if (document.querySelectorAll(".match").length == elements.length) {
    document.querySelector("button").addEventListener("click", () => {
      document
        .querySelectorAll(".match")
        .forEach((el) => (el.classList = "card"));
    });
  }
}
