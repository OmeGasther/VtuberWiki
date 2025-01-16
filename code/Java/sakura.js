document.addEventListener('DOMContentLoaded', () => {
    const maxSakuraCount = 100; // Nombre maximal de fleurs à l'écran
    let sakuraCount = 0;

    const createSakura = () => {
        if (sakuraCount >= maxSakuraCount) return;

        const sakura = document.createElement('div');
        sakura.classList.add('sakura');

        // Position aléatoire horizontale
        sakura.style.left = Math.random() * 100 + 'vw';

        // Taille aléatoire de la fleur
        const size = Math.random() * 20 + 10; // Entre 10px et 30px
        sakura.style.width = size + 'px';
        sakura.style.height = size + 'px';

        // Transparence aléatoire
        sakura.style.opacity = Math.random() * 0.5 + 0.5; // Entre 0.5 et 1

        // Effet de dérive horizontale
        const horizontalDrift = Math.random() * 20 - 10; // Entre -10px et 10px
        sakura.style.setProperty('--horizontal-drift', `${horizontalDrift}px`);

        // Vitesse d'animation aléatoire
        const fallDuration = Math.random() * 3 + 4; // Entre 4s et 7s
        sakura.style.animationDuration = `${fallDuration}s`;

        // Ajout d'une rotation aléatoire
        const rotationAngle = Math.random() * 360; // Angle initial
        sakura.style.transform = `rotate(${rotationAngle}deg)`;
        sakura.style.animation = `fall linear ${fallDuration}s, rotate infinite 2s`;

        document.body.appendChild(sakura);
        sakuraCount++;

        // Supprime la fleur une fois qu'elle est tombée
        sakura.addEventListener('animationend', () => {
            sakura.remove();
            sakuraCount--;
        });
    };

    // Crée une fleur toutes les 300ms
    setInterval(createSakura, 300);
});
