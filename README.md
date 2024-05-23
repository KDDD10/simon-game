 # Simon Game

Welcome to the Simon Game! This project is a web-based implementation of the classic memory game "Simon," where players must repeat increasingly complex sequences of colors.

## Table of Contents

- [Description](#description)
- [Rationale](#rationale)
- [Technologies](#technologies)
- [Setup](#setup)
- [Usage](#usage)
- [Features](#features)
- [File Structure](#file-structure)
- [Testing and Maintenance](#testing-and-maintenance)
- [Credits](#credits)


## Description

The Simon Game challenges players to remember and repeat sequences of colors. Each round, a new color is added to the sequence. Players must correctly recall the entire sequence to advance to the next level. The game tracks the highest score achieved during the session.

## Rationale

The Simon Game was developed to provide an engaging and entertaining way to improve memory, concentration. By focusing on a simple yet challenging task, players can enhance their mental agility. The game is designed to be fully responsive, ensuring accessibility and optimal user experience across various devices.

## Technologies

- HTML
- CSS
- JavaScript

## Setup

To run this project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/simon-game.git
    ```
2. Navigate to the project directory:
    ```bash
    cd simon-game
    ```
3. Open `index.html` in your preferred web browser.



## Usage

1. Open the game in your browser.
2. Click the "Start" button to begin the game.
3. Watch the sequence of colors that light up.
4. Repeat the sequence by clicking the colored boxes.
5. Each successful round adds a new color to the sequence.
6. If you make a mistake, you lose and can start over.

## Features

- Interactive UI with buttons for each color.
- Visual and audio feedback for user interactions.
- Tracks the current level and highest score achieved.
- Modal popup for losing the game with an option to retry.
- Data Validation
## File Structure

```
simon-game/
index.html
styles/
   style.css
JavaScript/
   main.js
resources/
  audios/
   coin_sound.wav
   win.wav
   lose.wav
   try.wav
   start.wav
simon_logo.svg
README.md
```
##  **Testing and Maintenance**

#### Objective:
Ensure the game is free of defects, meets all requirements and remains functional and up-to-date post-deployment.

#### Testing Activities:
- Perform integration testing to ensure all components work together seamlessly.
- Conduct system testing to verify the game functions correctly as a whole.
- Execute performance testing to ensure responsiveness and smooth gameplay.
- Perform cross-browser and cross-device testing for compatibility and responsiveness.
- Conduct user acceptance testing (UAT) with potential users to gather feedback and identify issues.


#### Maintenance Activities:
- Monitor the game for any bugs or performance issues.
- Respond to user feedback and make necessary improvements.
- Update the game with new features or enhancements based on user feedback.
- Regularly backup the project and maintain the hosting environment.

## Credits

- **HTML, CSS, and JavaScript**: Implementation of the game logic and user interface.
- **Audio Files**: [Audio resources](https://www.bensound.com/) for game sounds.
- **Icon**: Simon game logo used as a favicon.

## JavaScript Code Explanation

### DOM Declarations
```javascript
const startButton = document.getElementById("start");
const levelText = document.getElementById("level");
const modal = document.getElementById("modal_overlay");
const modalButton = document.getElementById("modal_button");
const scoreText = document.getElementById("score");
```

### Data Structure
- `arrayBox`: Array of color box IDs.
- `arrayMain`: Stores the main sequence of colors.
- `arrayInGame`: Stores the player's sequence of colors for each level.
- `highestScore` and `currentScore`: Track scores.

### Functions
- `resetGame()`: Resets the game state.
- `disableBoxButton()`: Enables/disables color buttons.
- `disbleStartButton()`: Enables/disables the start button.
- `activeBox()`: Adds glow effect to a button.
- `addColorRandom()`: Adds a random color to `arrayMain`.
- `playColorSet()`: Plays the sequence of colors.
- `checkColorSet()`: Checks the player's input against `arrayMain`.
- `loseLevel()`: Handles game over scenario.
- `winLevel()`: Handles level win scenario.
- `playSound()`: Plays sounds based on game events.
- `showLostModal()`: Shows/hides the lose modal.
- `isArrayStartsWith()`: Compares player's sequence with the main sequence.

### Event Listeners
- Color buttons: Capture player's input.
- Modal button: Retry game.
- Start button: Start the game sequence.

Enjoy playing the Simon Game!! 









