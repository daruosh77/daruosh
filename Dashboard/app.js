
// ************* Variables ****************

//? add hovered class in selector list item
let list = document.querySelectorAll('.nav li');

//? active toggle button & navigation & main classes 
let toggle = document.querySelector('.toggle')
let nav = document.querySelector('.nav')
let main = document.querySelector('.main')

// ************** Codes *******************

function activeLinks(){

    list.forEach((item)=>
    item.classList.remove('hovered'));
    this.classList.add('hovered')

}

list.forEach((item) =>
item.addEventListener('mouseover',activeLinks));


toggle.onclick = function(){

    toggle.classList.toggle('active')
    nav.classList.toggle('active')
    main.classList.toggle('active')
}


