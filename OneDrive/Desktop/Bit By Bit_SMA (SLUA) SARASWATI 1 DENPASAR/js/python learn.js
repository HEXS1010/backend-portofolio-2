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









document.addEventListener('DOMContentLoaded', () => {
    
    // Accordion logic
        const chapterCards = document.querySelectorAll(".chapter-card");
        chapterCards.forEach(card => {
            const header = card.querySelector('.chapter-header');
            if (header) {
                header.addEventListener('click', () => {
                    const wasActive = card.classList.contains('active');
                    chapterCards.forEach(c => {
                        if (c !== card) c.classList.remove('active');
                    });
                    card.classList.toggle('active', !wasActive);
                });
            }
        });

        // Dynamic hero button logic
        const completedExercises = document.querySelectorAll('.exercise-item[data-status="completed"]');
        const learningButton = document.querySelector('.hero-button');
        if (completedExercises.length > 0 && learningButton) {
            learningButton.textContent = 'Resume Learning';
        }

        // Sequential Exercise Logic
        function updateExerciseState() {
            const allExercises = document.querySelectorAll('.exercise-item');
            let previousCompleted = true;

            allExercises.forEach(exercise => {
                const currentStatus = exercise.getAttribute('data-status');
                if (currentStatus === 'completed') {
                    previousCompleted = true;
                } else {
                    if (previousCompleted) {
                        exercise.setAttribute('data-status', 'available');
                        previousCompleted = false;
                    } else {
                        exercise.setAttribute('data-status', 'locked');
                    }
                }
            });
            // Panggilan ke addStartButtonListeners() 
        }

        // SELURUH FUNGSI addStartButtonListeners() DIHAPUS

        // Initial setup on page load
        updateExerciseState();
    });