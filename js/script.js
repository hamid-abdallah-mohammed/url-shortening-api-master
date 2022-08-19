

let content = document.querySelector('.navbar')
let btnHamburger = document.querySelector(".header__hamburger");

btnHamburger.addEventListener("click", toggleMenu);
function toggleMenu() {
  content.classList.toggle("content");
  content.classList.add('test')
  btnHamburger.classList.toggle("active");
}

// function myFunction(x) {
//   if (x.matches) { // If media query matches
//     element.style.flexDecoration = 'column'
//   } 
// }

// var x = window.matchMedia("(max-width: 638px)")
// myFunction(x) // Call listener function at run time
// x.addListener(myFunction)

const form = document.querySelector('form input')
const shortenBtn = document.querySelector('.shorten')
let statistic_info = document.querySelector('.statistic-info')

shortenBtn.addEventListener('click', ShortLinks);

function ShortLinks(e){
    e.preventDefault()
    if(form.value == ""){
      form.classList.add('warning')
    } else{
 
   
  // create elements
var tag = document.createElement("p")
var tagT = document.createElement("p")
tagT.style.color =  'hsl(180, 66%, 49%)'
let tagTh = document.createElement("button")
// btn style
tagTh.style.background = 'hsl(180, 66%, 49%)'
tagTh.style.padding = '.5rem 1rem'
tagTh.style.border = 'none'
tagTh.style.borderRadius = '.5rem'
tagTh.style.color = 'white'
// create inner values for the elements
var tag_1 = document.createTextNode('still working on it')
var tag_2 = document.createTextNode('still working on it')
var tag_3 = document.createTextNode('still working on it')

// append them
tag.appendChild(tag_1)
tagT.appendChild(tag_2)
tagTh.appendChild(tag_3)

// creating the parent of the elements
var element = document.createElement("div");
let test =  element.append(tag, tagT, tagTh)
document.body.insertBefore(element, statistic_info)
// styling the parent
element.style.display = 'flex'
element.style.justifyContent = 'space-evenly';
element.style.alignItems = 'center';
element.style.gap = '.5rem'
element.style.boxShadow = '0 0 4px 0 #333'
element.style.width = '70%'
element.style.margin = "3rem auto "
element.style.border = 'none'
element.style.borderRadius = '.5rem'
element.style.padding = '1rem'

// set input value none
form.value = ""


function myFunction(x) {
  if (x.matches) { // If media query matches
    element.style.flexDirection = 'column'
  } else {
    element.style.flexDirection = 'row'
  }
}

var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes


    }

  
  
 

}

form.addEventListener('focus', () => {
       form.classList.remove('warning');
})





