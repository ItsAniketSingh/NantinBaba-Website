 // Open the modal and display the selected album's photos
 function openModal(albumId) {
    const modal = document.getElementById("myModal");
    const albumSlides = document.getElementById(albumId + "-slides");
    albumSlides.style.display = "block";
    modal.style.display = "block";
}

// Close the modal and hide all album photos
function closeModal() {
    const modal = document.getElementById("myModal");
    const albumSlides = document.getElementsByClassName("album-slides");
    for (let i = 0; i < albumSlides.length; i++) {
        albumSlides[i].style.display = "none";
    }
    modal.style.display = "none";
}

// Change the currently displayed photo