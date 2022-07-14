// Nickname Generator by Parivesh

// Get variables from HTML
let nickBtn = document.getElementById("randNickBtn");
let allNickBtn = document.getElementById("allNickBtn");
let firstName = document.getElementById("firstN");
let lastName = document.getElementById("lastN");

// Global variables and Arrays
let nicknames = ['Crusher','the Scientist','Twinkle-toes','the Coder','the Jester', 'the Sloth','Quick-Silver']

// Add Event Listener
nickBtn.addEventListener("click", addNick);

// Process
function addNick(){
    document.getElementById("output").innerHTML = firstName + nicknames + lastName;
}