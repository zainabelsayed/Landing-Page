let navItems = ['HOME','ABOUT','SERVICES','TEAM','FAQ'];
let ul =document.createElement('ul');// creating Untiteled List
ul.setAttribute("id","navbar");
let nav= document.querySelector('.nav');
for (let i=0; i<navItems.length;i++){// adding the navItems to the untiteled list
    let navItem = navItems[i];
    let anchor = document.createElement('a');
    anchor.appendChild(document.createTextNode(navItem))
    ul.appendChild(anchor);
    anchor.setAttribute("class","links");
    anchor.addEventListener("click",function(){// this function adding the scroll to section functionality to navItems
      let elment = document.getElementById(`${navItem.toLowerCase()}`);
      elment.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    })
}
nav.appendChild(ul);// adding the ul to nav div
ul.classList.add('navbar');
let icon = document.createElement('a');// adding link to the collapse icon 
icon.classList.add("icon");
let i = document.createElement('i');
i.classList.add("fa", "fa-bars");
icon.appendChild(i);
ul.appendChild(icon);

const links = document.querySelectorAll('.links');
const sections = document.querySelectorAll('section');
window.addEventListener("scroll",function(){//this function select the nav bar and make it sticky on scrolling
    let nav= document.querySelector('.nav');
    nav.classList.toggle('sticky',window.scrollY > 0)
  })
  //this code from stackoverflow https://stackoverflow.com/questions/52025615/vanilla-js-change-active-state-of-links-when-scrolling-refactoring
  function changeLinkState() {// this function add the active class to sections while scrolling to them
    let index = sections.length; // get the number of sections

    while(--index && window.scrollY + 50 < sections[index].offsetTop) {}// dectect the active section
    
    links.forEach((link) => link.classList.remove('active'));// remove active class from all sections
    links[index].classList.add('active');// add the active class to the section on scroll
  }
  changeLinkState();

  window.addEventListener('scroll', changeLinkState);
  icon.addEventListener("click",function collapse() {// this function collapse the navbar in mobile view
    let x = document.getElementById("navbar");
    let nav= document.querySelector('.nav');
    if (x.className === "navbar") {
      x.className += " responsive";
      nav.classList.add('sticky')
    } else {
      x.className = "navbar";
    }
  }) 