let main_title = document.getElementById("main_title");
let title_input = document.getElementById("title_input");
let submit_button = document.getElementById("submit_button");

title_input.onchange = function(event) {
    event.preventDefault();
    let newTitle = title_input.value;
    main_title.innerHTML = newTitle;
}