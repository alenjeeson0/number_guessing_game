# Number Guessing Game

An interactive number guessing game built with vanilla HTML, CSS, and JavaScript. The player tries to guess a randomly generated secret number between 1 and 100, with feedback given after every guess.

## 🔗 Live Demo

> https://number-guessing-game-mini-project.netlify.app

## 📸 Preview

<img width="1902" height="931" alt="Screenshot 2026-07-03 134236" src="https://github.com/user-attachments/assets/ad2433d9-a36e-40bc-b882-962a42828d91" />


## 🎮 How to Play

1. The game generates a secret number between **1 and 100**
2. Type your guess in the input box and click **Goo**
3. The game tells you if your guess is too **LOW** or too **HIGH**
4. Keep guessing until you find the correct number
5. Click **New Game** to reset and play again

## ✨ Features

- Random number generated between 1 and 100 on every new game
- Higher/lower feedback after each guess
- Attempt counter that tracks how many guesses you've made
- Input validation — rejects invalid entries and out-of-range numbers
- Reveals the secret number once guessed correctly
- New Game button reloads and resets everything
- Custom favicon and logo
- Responsive design for mobile screens (max-width: 425px)

## 🛠️ Built With

- HTML5
- CSS3 (Flexbox, Media Queries)
- Vanilla JavaScript (DOM manipulation, Math methods, Event handling)

## 📁 Project Structure

```
number-guessing-game/
├── index.html
├── style.css
├── index.js
└── images/
    └── number_guessing_game_logo.png
```

## 🚀 Getting Started

No installation needed. Just clone the repo and open `index.html` in your browser.

```bash
git clone https://github.com/alenjeeson0/number_guessing_game.git
cd number-guessing-game
```

Then open `index.html` directly in your browser.

## 🧠 How It Works

**Random number generation:**
```javascript
const guess = Math.floor(Math.random() * (max - min + 1) + min);
```
Generates a whole number inclusively between 1 and 100.

**Game logic:**
```javascript
submit.onclick = function () {
  if (running) {
    // validates input
    // compares guess to secret number
    // gives higher/lower feedback
    // stops game when correct
  }
};
```

- `running` flag prevents any further guesses after the correct answer is found
- Input is validated to reject non-numbers and values outside 1–100
- `count` tracks attempts separately from the DOM element to avoid conflicts
- `location.reload()` on New Game resets the entire game state cleanly

## 📱 Responsive Design

The layout adapts for mobile screens under 425px — font sizes, padding, and spacing are all adjusted so the game is fully playable on smaller devices.

## 📚 What I Learned

- Generating random numbers within an inclusive range using `Math.floor` and `Math.random`
- DOM manipulation — selecting, reading, and updating elements dynamically
- Input validation using `isNaN()` and range checks
- Using a `running` flag to control game state
- Why `while` loops freeze the browser and how button click events replace them in UI-based games
- Responsive design using CSS media queries
- Centering layouts with Flexbox
- Deploying a vanilla JS project to Netlify

## 📄 License

© 2025 alenjeeson. All rights reserved.
