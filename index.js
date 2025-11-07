document.addEventListener('DOMContentLoaded', () => {
    const introSection = document.getElementById('intro-section');
    const mainSection = document.getElementById('main-section');
    const introFlower = document.querySelector('.intro-flower');
    const typingTextElement = document.getElementById('typing-text');
    const messagePhoto = document.querySelector('.message-photo');
    const signatureElement = document.querySelector('.signature');
    const galleryPhotos = document.querySelectorAll('.gallery-photo');
    const surpriseButton = document.getElementById('surpriseButton');
    const backgroundMusic = document.getElementById('background-music');

    // --- Message Personnalisé (À MODIFIER ABSOLUMENT !) ---
    const longLoveMessage = `
        My love,Since the moment you came into my life, everything has found its meaning. You’ve become my reason, my strength, and my safe place. With you, every day is a promise of happiness, every look is proof that true love exists.
        I want you to know that I love you — deeply, sincerely, and unconditionally. You’re not just the woman I love; you’re the one I want to share everything with — my dreams, my victories, my silences, my weaknesses, and every single moment of my life.
        I don’t want a love that fades; I want a love that lasts. And that love is ours. I want to see your smile every morning, hold you in my arms every night, and grow old by your side knowing that it’s you — and only you — my heart has chosen.
        I love you today, tomorrow, and forever. 💞
        Yours, always.`;
    let messageIndex = 0;
    const typingSpeed = 50; // ms par caractère

    // --- Animations d'introduction ---
    // Révéler les éléments de l'intro avec un délai
    setTimeout(() => {
        document.querySelector('.intro-content h1').style.opacity = 1;
        document.querySelector('.intro-content h1').style.transform = 'translateY(0)';
    }, 500);

    setTimeout(() => {
        introFlower.style.opacity = 1;
        introFlower.style.transform = 'translateY(0)';
    }, 1000);

    setTimeout(() => {
        document.querySelector('.click-text').style.opacity = 1;
        document.querySelector('.click-text').style.transform = 'translateY(0)';
    }, 1500);


    // --- Passage de l'intro à la section principale ---
    introFlower.addEventListener('click', () => {
        // Optionnel: jouer la musique au clic
        backgroundMusic.play().catch(e => console.error("Erreur lecture musique:", e));

        introSection.classList.remove('active');
        introSection.style.opacity = 0; // Animation de fondu pour l'intro
        
        setTimeout(() => {
            introSection.style.display = 'none'; // Cacher complètement l'intro
            mainSection.style.display = 'flex';
            setTimeout(() => {
                mainSection.classList.add('active'); // Révéler la section principale
                startMainAnimations();
                typeWriter(); // Démarrer l'effet de frappe
                generatePetals(20); // Générer des pétales en fond
            }, 50); // Petit délai pour la transition CSS
        }, 1000); // Attendre la fin de l'animation de fondu
    });

    // --- Animations de la section principale ---
    function startMainAnimations() {
        // Apparition de la photo et signature
        messagePhoto.style.opacity = 1;
        messagePhoto.style.transform = 'translateX(0)';
        signatureElement.style.opacity = 1;
        signatureElement.style.transform = 'translateX(0)';

        // Apparition des photos de la galerie
        galleryPhotos.forEach((photo, index) => {
            setTimeout(() => {
                photo.style.opacity = 1;
                // Si vous aviez d'autres animations pour les photos
            }, 1500 + (index * 300)); // Délai incrémental
        });

        // Apparition du bouton surprise
        setTimeout(() => {
            surpriseButton.style.opacity = 1;
        }, 2500);
    }

    // --- Effet de frappe (Typewriter) ---
    function typeWriter() {
        if (messageIndex < longLoveMessage.length) {
            typingTextElement.innerHTML += longLoveMessage.charAt(messageIndex);
            messageIndex++;
            setTimeout(typeWriter, typingSpeed);
        } else {
            // Une fois le message terminé, on retire le curseur
            typingTextElement.style.borderRight = 'none';
        }
    }

    // --- Génération de pétales de fleurs aléatoires ---
    const petalBackground = document.querySelector('.petal-background');
    function generatePetals(count) {
        for (let i = 0; i < count; i++) {
            const petal = document.createElement('div');
            petal.classList.add('petal');
            
            // Position de départ aléatoire en haut
            petal.style.left = Math.random() * 100 + 'vw';
            petal.style.width = (Math.random() * 10 + 10) + 'px'; // Taille aléatoire
            petal.style.height = petal.style.width; // Garde la proportion
            
            // Délai d'animation aléatoire pour un effet plus naturel
            petal.style.animationDuration = (Math.random() * 10 + 5) + 's';
            petal.style.animationDelay = (Math.random() * 5) + 's';
            
            petalBackground.appendChild(petal);
        }
    }

    // --- Gestion du bouton surprise (exemple) ---
    surpriseButton.addEventListener('click', () => {
        alert("🎉Surprise !! Tu es incroyable je t'aime ! 🎉");
        // Vous pouvez remplacer ceci par:
        // - L'affichage d'une nouvelle photo / un diaporama
        // - Une petite animation confetti
        // - Un message plus long qui apparaît
    });
});