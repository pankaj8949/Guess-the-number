// Function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate a random number between 1 and 100 only once
const randomNumber = getRandomNumber(1, 100);

// Function to check the user's guess
function checkGuess() {
  // Get the user's guess from the input field
  const userGuess = parseInt(document.getElementById('userGuess').value);

  // Get the message element
  const message = document.getElementById('message');

  // Check if the user's input is a valid number
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    message.style.color = 'red';
    message.textContent = 'Please enter a valid number between 1 and 100.';
  } else {
    // Check if the user's guess is correct, too high, or too low
    if (userGuess === randomNumber) {
      message.style.color = 'green';
      message.textContent = 'Congratulations! You guessed the correct number!';
    } else if (userGuess < randomNumber) {
      message.style.color = 'red';
      message.textContent = 'Too low. Try again.';
    } else {
      message.style.color = 'red';
      message.textContent = 'Too high. Try again.';
    }
  }
}

// Set up event listener for the "Submit" button
document.getElementById('submitBtn').addEventListener('click', checkGuess);
