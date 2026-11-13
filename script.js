const quotes = [
    "Success is the sum of small efforts repeated daily.",
    "Dream big. Start small.",
    "Learning never exhausts the mind.",
    "Stay hungry. Stay foolish.",
    "Every accomplishment starts with the decision to try.",
    "Do something today that your future self will thank you for.",
    "Small progress is still progress.",
    "Action is the foundational key to success."
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);

    document.getElementById("quote").textContent =
        quotes[randomIndex];
}
