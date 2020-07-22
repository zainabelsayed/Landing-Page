window.addEventListener("scroll",function(){
    let nav= document.querySelector('.nav');
    nav.classList.toggle('sticky',window.scrollY > 0)
  })
  //this code from stackoverflow https://stackoverflow.com/questions/52025615/vanilla-js-change-active-state-of-links-when-scrolling-refactoring
  const links = document.querySelectorAll('.links');
  const sections = document.querySelectorAll('section');

  function changeLinkState() {
    let index = sections.length;

    while(--index && window.scrollY + 50 < sections[index].offsetTop) {}
    
    links.forEach((link) => link.classList.remove('active'));
    links[index].classList.add('active');
  }

  changeLinkState();
  window.addEventListener('scroll', changeLinkState);
  function myFunction() {
    var x = document.getElementById("navbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }