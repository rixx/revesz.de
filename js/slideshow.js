const delay = 1000

const imageCycle = () => {
    let currentImage = 3
    const images = document.querySelectorAll("#slideshow img")

    const showNextImage = () => {
        let oldImage = currentImage
        currentImage += 1
        if (currentImage == images.length) currentImage = 0

        images[oldImage].style.display = "none"
        images[currentImage].style.display = "block"

        window.setTimeout(showNextImage, delay)
    }

    showNextImage()
}

if (document.readyState === 'loading') {  // Loading hasn't finished yet
  document.addEventListener('DOMContentLoaded', imageCycle);
} else {  // `DOMContentLoaded` has already fired
  imageCycle();
}
