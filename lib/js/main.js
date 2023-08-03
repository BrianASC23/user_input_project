let main_title = document.getElementById("main_title");
let title_input = document.getElementById("title_input");
let submit_button = document.getElementById("submit_button");

let noun = document.getElementById("noun");
let verb = document.getElementById("verb");
let adj = document.getElementById("adjective");
let superl = document.getElementById("superlative");
let comp = document.getElementById("comparative");

let story = document.getElementById("story_result");
let container1 = document.querySelector(".form_container");



//Displays Title while typing
title_input.oninput = function(event) {
    event.preventDefault();
    let newTitle = title_input.value;
    main_title.innerText = newTitle;
}

//If user left any field blank, alert the user
submit_button.onclick = function(event) {
    event.preventDefault();
    if(title_input.value == "" || noun.value == "" || verb.value == "" || adj.value == "" || comp.value == "" || superl == "") {
        alert("Please fill in all fields!");
    }
    else {
        //container1.style.display = "none";
        function fadeOut() {
           let opacity = 1; // Initial opacity
           let interval = setInterval(function() {
              if (opacity > 0) {
                 opacity -= 0.1;
                 container1.style.opacity = opacity;
              } else {
                 clearInterval(interval); // Stop the interval when opacity reaches 0
                 container1.style.display = 'none'; 
              }
           }, 50);
        }
        fadeOut(container1);
        story.innerHTML = "Last night I ate a " + noun.value + " and today I just had to " + verb.value + ". I know I am not the " + superl.value + " person, but I am much " + comp.value + " than a normal person." + " What a " + adj.value + " day!";
    }
}

