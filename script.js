// script.js
const flashcards = [
  { question: "What is 5 + 10?", answer: "15", hint: "More than 10 vro💔" },
  { question: "What is 12 - 4?", answer: "8", hint: "2*4" },
  { question: "Which of these 2 is Einstein?", answer: "guy on the right", hint: "Why do you need a hint?" },
  { question: "What is the square root of 49?", answer: "7", hint: "What number is the winning number in the lottery?" },
  { question: "What is 100 / 10?", answer: "10", hint: "I don't know" },
  { question: "What is 9 + 6?", answer: "15", hint: "Close to 10 + 5" },
  { question: "What is 2^3?", answer: "8", hint: "2*2*2" },
  { question: "What is 15 - 7?", answer: "8", hint: "Use subtraction" },
  { question: "What is 11 + 2?", answer: "13", hint: "more thann 12" },
  { question: "What is 3^2?", answer: "9", hint: "what if u had 10, but took away 1?" },
];

let currentCard = 0;
const front = document.querySelector(".front");
const back = document.querySelector(".back");
const card = document.querySelector(".card");
const cardCount = document.getElementById("card-count");

function renderCard() {
  const cardData = flashcards[currentCard];
  front.textContent = cardData.question;
  back.textContent = cardData.answer;
  card.classList.remove("flipped");
  cardCount.textContent = `${currentCard + 1} of ${flashcards.length}`;
}

function nextCard() {
  currentCard = (currentCard + 1) % flashcards.length;
  renderCard();
}

function prevCard() {
  currentCard = (currentCard - 1 + flashcards.length) % flashcards.length;
  renderCard();
}

function flipCard() {
  card.classList.toggle("flipped");
}

function showHint() {
  const hintBox = document.getElementById("hint-box");
  if (hintBox.style.display === "none" || hintBox.innerText !== flashcards[currentCard].hint) {
    hintBox.style.display = "block";
    hintBox.innerText = flashcards[currentCard].hint;
  } else {
    hintBox.style.display = "none";
  }
}

// Initial render
renderCard();
