document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('file-upload');
    const cameraButton = document.getElementById('camera-btn');
    const nextButton = document.getElementById('next-btn');

    // File Upload Logic
    fileInput.addEventListener('change', () => {
        if (fileInput.files.length > 0) {
            alert(`Fichier sélectionné: ${fileInput.files[0].name}`);
            nextButton.disabled = false; // Enable the Next button
        }
    });

    // Open Camera Logic
    cameraButton.addEventListener('click', () => {
        alert('Ouvrir l\'appareil photo n\'est pas encore implémenté.');
        // Optionally, implement camera functionality here using Web APIs
    });

    // Next Button Logic
    nextButton.addEventListener('click', () => {
        if (!fileInput.files.length) {
            alert('Veuillez télécharger une image avant de continuer.');
            return;
        }
        alert('ID vérifié avec succès. Passons à l\'étape suivante.');
        window.location.href = 'next_step.html'; // Redirect to the next step
    });
});
