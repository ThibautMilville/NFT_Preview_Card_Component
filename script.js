class ImageContainerSize {
  constructor() {
    // Variables
    this.mainImage = document.getElementById('main-image');
    this.imageContainer = document.querySelector('.image');

    // Bindings
    this.adjustImageContainerSize = this.adjustImageContainerSize.bind(this);

    // Events
    this.mainImage.addEventListener('load', this.adjustImageContainerSize);
    window.addEventListener('resize', this.adjustImageContainerSize);

    // Initializations
    this.adjustImageContainerSize();
  }

  // Function to adjust the size of the image container
  adjustImageContainerSize() {
    const width = this.mainImage.offsetWidth;
    const height = this.mainImage.offsetHeight;
    this.imageContainer.style.width = `${width}px`;
    this.imageContainer.style.height = `${height}px`;
  }
}

const myImageContainer = new ImageContainerSize();