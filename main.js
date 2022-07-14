// Nickname Generator by Parivesh

// Global variables and Arrays
let nicknames = ["Crusher","the Scientist","Twinkle-toes","the Coder","the Jester","the Sloth","Quick-Silver"];
  
// Add Event Listener
  document.getElementById("randNickBtn").addEventListener("click", addNick);
  
// Process & Output for Random Nicknames
function addNick() {
    let firstName = document.getElementById("firstN").value;
    let lastName = document.getElementById("lastN").value;
    document.getElementById("output").innerHTML = `${firstName} “${nicknames[randInt(0, nicknames.length)]}” ${lastName}`;
  }
  
// Add Random Integer Generator
function randInt(low, high) {
    return Math.floor(Math.random() * (high - low) + low);
  }
  
// Process & Output for list of all Nicknames
  document.getElementById("allNickBtn").addEventListener("click", nickList);
  
function nickList() {
    document.getElementById("output").innerHTML = "";
  
    for (let i = 0; i < nicknames.length; i++) {
      document.getElementById("output").innerHTML += `<p> “${nicknames[i]}”</p>`;
    }
  }
  