const textElement = document.querySelector('.typing-text span');
const words = ['Ourselves;', 'Us;'];
let index = 0; // Index to track current word
let charIndex = 0; // Index to track current character
let currentWord = ''; // Current word being typed
let isDeleting = false; // Flag for deleting characters

function type() {
    if (isDeleting) {
        currentWord = words[index].substring(0, charIndex - 1); // Remove one character
        charIndex--;
    } else {
        currentWord = words[index].substring(0, charIndex + 1); // Add one character
        charIndex++;
    }
    
    textElement.textContent = currentWord; // Update the text content

    // Set the typing speed
    let typingSpeed = isDeleting ? 50 : 100;

    // Check if we need to switch words
    if (!isDeleting && charIndex === words[index].length) {
        // Pause before deleting
        typingSpeed = 1500; // Pause for 1 second before deleting
        isDeleting = true; // Start deleting
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false; // Start typing the next word
        index = (index + 1) % words.length; // Move to the next word
    }

    setTimeout(type, typingSpeed); // Call the function again after the typing speed
}

// Start the typing effect
type();