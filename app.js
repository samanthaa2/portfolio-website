const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));




const navbar = document.getElementById("navbar")

function handleScroll() {
    if (navbar.getBoundingClientRect().top === 0) {
        navLogo.classList.add('navLogoShow');
        navbar.classList.add('navbarTransparent');
    }
    else {
        navLogo.classList.remove('navLogoShow');
        navbar.classList.remove('navbarTransparent');
    }
}

document.addEventListener("scroll", handleScroll);


let scrollupbutton = document.getElementById("navLogo");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollupbutton.style.display = "block";
    } else {
        scrollupbutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}




let logoButton = document.getElementById("logo");

function logoFunction() {
    logoPanel.classlist.add('pinkFlutter');
    
    function remove() {
      logoPanel.classlist.remove('pinkFlutter');
    }
    setTimeout(remove, 3000);
  }