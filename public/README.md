 # Simon Game

 ![alt text](<Images/mockup devices.png>)

Welcome to the Simon Game! This project is a web-based implementation of the classic memory game "Simon," where players must repeat increasingly complex sequences of colors.

## Table of Contents

- [Purpose](#purpose)
- [UX Design](#ux-design)
- [Structure](#structure)
- [Wireframe](#wireframe)
- [Technologies](#technologies)
- [Setup](#setup)
- [Usage](#usage)
- [Features](#features)
- [Design](#design)
- [File Structure](#file-structure)
- [Testing and Maintenance](#testing-and-maintenance)
- [Credits](#credits)


## Purpose

The Simon Game challenges players to remember and repeat sequences of colors. Each round, a new color is added to the sequence. Players must correctly recall the entire sequence to advance to the next level. The game tracks the highest score achieved during the session.

The Simon Game was developed to provide an engaging and entertaining way to improve memory, concentration. By focusing on a simple yet challenging task, players can enhance their mental agility. The game is designed to be fully responsive, ensuring accessibility and optimal user experience across various devices.

The game is built using HTML, CSS and Javascript as a Milestone Project#2 for the Code Institute's Web Development course.

The live website is available here: https://react-native-step-out.web.app/

## UX Design

### User stories

As a first time user
- I want to easily understand the main purpose of the game
- I want to be able to navigate easily and play the game
- I want to enjoy myself
- I want to be able to play on multiple devices

## Structure

### Home Page

- Introduces the movement and the main area 
- Provides a complete overview of the subject
- Grabs the user's attention and grips it with a bold design and entertaining look

User Goal:
- Understand the main purpose of the website
- Ability to see every section of the website
- Easily navigate and interact with the website
- Enjoyment in playing the game 

Website Goal:
- Interest and engage the user
- Presents the user with a preview of all content sections
- Entertain the user

## Wireframe

### Home

![alt text](<Images/wireframe no colour.png>)
![alt text](<Images/Phone wireframe.png>)

## Technologies

- HTML to accomplish the structure of the website
- CSS to style the website
- JavaScript to make the web page interactive
- Github to host the source code and Github Pages to deploy and host the live site
- Balsamiq to design the wireframes
- Techsini to create the mockup image in this readme file

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

### Responsive Layout 

The website is made to be adaptable, fluid, responsive, and aesthetically pleasing across all screen sizes and resolutions. The website has mobile counterparts, which are smaller and have different aspect ratios, to guarantee optimal performance on mobile devices. This is because of how essential the game is to convey the website's semantics and intended experience for users. This became crucial. 

## Design

As the Simon Game is based of an existing game, the design is similar to others made before the creation of mine. 

### Colour Scheme

The colours are same four in every version of a Simon Game. These colours are yellow, green, blue and red. I did use the colour black for the background colour and to keep the writing on the web page visual for users so that they can keep track with their scores. Not all of the background is black, I used the colour yellow too so that it can counter the darkness of all the black and mkae it a little lighter.

Here is how the game looks on the web page so you can see how the colours look together for yourself

Live website here: https://react-native-step-out.web.app/

## File Structure

```
simon-game/
css/
   style.css
Images/
   mockup devices.png
   wireframe no colour.png
JavaScript/
   main.js
resources/
  audios/
   coin_sound.wav
   win.wav
   lose.wav
   try.wav
   start.wav
index.html
README.md
simon_logo.svg
```
##  **Testing and Maintenance**

#### Objective:
Ensure the game is free of defects, meets all requirements and remains functional and up-to-date post-deployment.


### Manual Testing
In order to find faults, flaws, and other problems in software applications without the use of automated technologies, manual testing entails reviewing and testing the application by hand while mimicking the actions of a real user.

*[BrowserStack](https://www.browserstack.com/)
   * Used for Manual Testing

Using BrowserStack, I was able to test my design on Mobile and Laptop layouts, checking if its functional on all platforms and softwares. Ran tests on 'android', 'iphone', multiple window IPs and more. All tests worked fine as usual. 


### Automated Testing
Automated testing is a software testing process that employs technologies to do tests without of human interaction. These tests mimic button clicks, data entry, and outcome verification that users would perform on a website. Prior to release, the software must be verified for functionality, performance, and dependability and to make sure it satisfies all requirements.

*[W3C Markup Validation Service](https://validator.w3.org/)
 * Used for testing html
* [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/)
  * Used for testing css

Unfortunately due to lack of experience and time, I didn't get to test the Javascript itself. I was going to use [Jasmine](https://jasmine.github.io/pages/getting_started.html). 

### Bugs
While running automated tests I did come across some warnings that I didn't get round to fixing. 

For the HTML, my bugs were:

*Section lacks heading. Consider using h2-h6 elements to add identifying headings to all sections, or else use a div element instead for any cases where no heading is needed.
*Consider using the h1 element as a top-level heading only (all h1 elements are treated as top-level headings by many screen readers and other tools).

For the CSS, my bug was:

*55	.box	opacity is not a transition-duration value : opacity 0.5s,box-shadow 0.2s,transform 1s


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








