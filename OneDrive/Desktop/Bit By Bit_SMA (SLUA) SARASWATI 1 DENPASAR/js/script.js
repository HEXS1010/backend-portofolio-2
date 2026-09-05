// navbar, login & sign up
const navItem = document.querySelectorAll(".navbar-group > .navbar-item");

navItem.forEach((nav) => {
    const navDown = nav.querySelector(".navbar-down");
    if (navDown) {
        nav.addEventListener("mouseenter", () => {
            navDown.classList.add("navbar-expand");
        });
        nav.addEventListener("mouseleave", () => {
            navDown.classList.remove("navbar-expand");
        });
    }
});



const menuToggle = document.querySelector(".burger");
const navbarGroup = document.querySelector(".navbar-group");
const navbarAction = document.querySelector(".navbar-action");

menuToggle.addEventListener("click", () => {
    navbarGroup.classList.toggle("navbar-expand");
    navbarAction.classList.toggle("navbar-expand");

    menuToggle.classList.toggle("toggle-burger");
});




// gambar slider
const sliderItems = document.querySelectorAll('.slider-item');

let sliderActive = 1;

if (sliderItems) {
    sliderItems.forEach((slider, index) => {
        if (index === 0) {
            slider.setAttribute("data-show", "show");
        } else {
            slider.setAttribute("data-show", "hidden");
        }
    })
    
    setInterval(() => {
        sliderItems.forEach((slider, index) => {
            if(sliderActive === index) {
                slider.setAttribute("data-show", "show");
            } else {
                slider.setAttribute("data-show", "hidden");
            }
        });

        if(sliderActive === sliderItems.length - 1 ) {
            sliderActive= 0;
        } else {
            sliderActive++;
        }


    }, 5000)
}

// typing 
const typedText = document.querySelector(".typing-text");
const cursor = document.querySelector(".cursor");

const textArray = ["let's upgrade let your skill", "Build your future with code", "Master coding, master the future", "Your coding journey starts here"];
const typingDelay = 200;
const clearDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if(charIndex < textArray[textArrayIndex].length) {
        if(!cursor.classList.contains("typing"))
            cursor.classList.add("typing");
        typedText.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        cursor.classList.remove("typing");
        setTimeout(clear, newTextDelay);
    }
}

function clear() {
    if(charIndex > 0) {
        if(cursor.classList.contains("typing"))
            cursor.classList.add("typing");
        typedText.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(clear, clearDelay);
    } else {
        cursor.classList.remove("typing");
        textArrayIndex++;
        if(textArrayIndex >= textArray.length) {
            textArrayIndex = 0;
        }
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", 
    function () {
        if(textArray.length)
        setTimeout(type, newTextDelay + 250)
    }
)


// browser animasi 
const text = `
<span class="tag">&lt;!DOCTYPE html&gt;</span>
<span class="tag">&lt;html</span> <span class="attr">lang</span>=<span class="val">"en"</span><span class="tag">&gt;</span>
  <span class="tag">&lt;head&gt;</span>
    <span class="tag">&lt;meta</span> <span class="attr">charset</span>=<span class="val">"UTF-8"</span><span class="tag">&gt;</span>
    <span class="tag">&lt;meta</span> <span class="attr">name</span>=<span class="val">"viewport"</span> <span class="attr">content</span>=<span class="val">"width=device-width, initial-scale=1.0"</span><span class="tag">&gt;</span>
    <span class="tag">&lt;title&gt;</span><span class="text">Projek saya</span><span class="tag">&lt;/title&gt;</span>
  <span class="tag">&lt;/head&gt;</span>
  <span class="tag">&lt;body&gt;</span>
    <span class="tag">&lt;h1&gt;</span><span class="text">Hello World 🌍</span><span class="tag">&lt;/h1&gt;</span>
    <span class="tag">&lt;p&gt;</span><span class="text">Ini adalah projek pertama saya!</span><span class="tag">&lt;/p&gt;</span>
  <span class="tag">&lt;/body&gt;</span>
<span class="tag">&lt;/html&gt;</span>
`;


let index = 0;
const speed = 30;
const typingEl = document.getElementById("typing");
typingEl.style.marginTop = "0px";
let started = false;

function typeWriter() {
  if (index <= text.length) {
    typingEl.innerHTML = text.substring(0, index); 
    index++;
    setTimeout(typeWriter, speed);
  }
}



const browserEl = document.querySelector(".browser");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !started) {
      started = true;
      typeWriter();
    }
  });
}, { threshold: 0.4 });

observer.observe(browserEl);




