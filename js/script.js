

let content = document.querySelector('.navbar')
let btnHamburger = document.querySelector(".header__hamburger");

btnHamburger.addEventListener("click", toggleMenu);
function toggleMenu() {
  content.classList.toggle("content");
  content.classList.add('test')
  btnHamburger.classList.toggle("active");
}


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
element.style.gap = '.6rem'
element.style.boxShadow = '0 0 4px 0 #333'
element.style.width = '70%'
element.style.margin = "3rem auto "
element.style.border = 'none'
element.style.borderRadius = '.5rem'
// set input value none
form.value = ""
    }

  


}

form.addEventListener('focus', () => {
       form.classList.remove('warning');
})
