
// ************* Variables ****************

// add hovered class in selector list item
let list = document.querySelectorAll('.nav li');

// ************** Codes *******************

function activeLinks()
{
    list.forEach((item)=>
    item.classList.remove('hovered'));
    this.classList.add('hovered')
}

list.forEach((item) =>
item.addEventListener('mouseover',activeLinks));





