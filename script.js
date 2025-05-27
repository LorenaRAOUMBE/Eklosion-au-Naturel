document.addEventListener('DOMContentLoaded', () => {
    // Les sélecteurs sont adaptés à votre structure HTML
    const carouselContainer = document.querySelector('.carousel-container'); // Votre conteneur principal du carrousel
    const carouselImages = document.querySelectorAll('.carousel-slide img'); // Toutes les balises <img> à l'intérieur de .carousel-slide
    const prevButton = document.querySelector('.prev-button'); // Le bouton précédent
    const nextButton = document.querySelector('.next-button'); // Le bouton suivant

    let currentIndex = 0;
    const imagesVisible = 4; // Nombre d'images visibles à la fois
    let intervalId; // Variable pour stocker l'ID de l'intervalle de l'auto-slide

    function updateCarousel() {
        carouselImages.forEach((image, index) => {
            // Si l'index de l'image est dans la plage des images actuellement visibles
            if (index >= currentIndex && index < currentIndex + imagesVisible) {
                image.style.display = 'block'; // Affiche l'image
            } else {
                image.style.display = 'none'; // Masque l'image
            }
        });
    }

    function nextSlide() {
        // Si nous pouvons avancer d'une "page" d'images
        // (c'est-à-dire qu'il reste au moins 'imagesVisible' images à partir de la prochaine position)
        if (currentIndex + 1 <= carouselImages.length - imagesVisible) {
            currentIndex++;
        } else {
            currentIndex = 0; // Retour au début si on atteint la fin
        }
        updateCarousel();
    }

    function prevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            // Aller à la position où le dernier groupe de 'imagesVisible' images sera visible
            currentIndex = carouselImages.length - imagesVisible;
            // S'assurer que currentIndex ne soit pas négatif si pas assez d'images
            if (currentIndex < 0) {
                currentIndex = 0;
            }
        }
        updateCarousel();
    }


    // Écouteurs d'événements pour les boutons
    nextButton.addEventListener('click', () => {
        nextSlide();
    });

    prevButton.addEventListener('click', () => {
        prevSlide();
    });

    // Initialisation du carrousel au chargement de la page
    updateCarousel();

});