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



document.querySelectorAll(".like-icon").forEach(likeIcon => {
  const likeCount = likeIcon.querySelector(".like-count");

  likeIcon.addEventListener("click", () => {
    likeIcon.classList.toggle("liked");

    let count = parseInt(likeCount.textContent);
    if (likeIcon.classList.contains("liked")) count += 1;
    else count -= 1;
    likeCount.textContent = count;

    const heart = document.createElement("span");
    heart.classList.add("flying-heart");
    heart.textContent = "❤️";

    likeIcon.appendChild(heart);
    heart.addEventListener("animationend", () => heart.remove());
  });
});





// sidebar
const sidebar = document.querySelector(".sidebar");
    const toggleBtn = document.querySelector(".sidebar-toggle-btn");
    const toggleIcon = toggleBtn.querySelector("i");


    toggleBtn.addEventListener("click", () => {
      sidebar.classList.toggle("active");
      updateIcon();
    });

    function updateIcon() {
      if (sidebar.classList.contains("active")) {
        toggleIcon.classList.replace("fa-chevron-right", "fa-chevron-left");
      } else {
        toggleIcon.classList.replace("fa-chevron-left", "fa-chevron-right");
      }
    }

    let startX = 0;
    let endX = 0;

    document.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
    });

    document.addEventListener("touchend", (e) => {
      endX = e.changedTouches[0].clientX;
      handleSwipe();
    });

    function handleSwipe() {
      let diff = endX - startX;

      // Geser kanan → buka sidebar
      if (diff > 50) {
        sidebar.classList.add("active");
        updateIcon();
      }
      // Geser kiri → tutup sidebar
      else if (diff < -50) {
        sidebar.classList.remove("active");
        updateIcon();
      }
    }


const menuItems = document.querySelectorAll(".sidebar .menu-item");

menuItems.forEach(item => {
  item.addEventListener("click", () => {
    menuItems.forEach(i => i.classList.remove("active"));

    item.classList.add("active");
  });
});
