class ImageContainerSize {
  constructor() {
    this.mainImage = document.getElementById('main-image');
    this.imageContainer = document.querySelector('.image');

    this.adjustImageContainerSize = this.adjustImageContainerSize.bind(this);

    this.mainImage.addEventListener('load', this.adjustImageContainerSize);
    window.addEventListener('resize', this.adjustImageContainerSize);
  }

  adjustImageContainerSize() {
    const width = this.mainImage.offsetWidth;
    const height = this.mainImage.offsetHeight;
    this.imageContainer.style.width = `${width}px`;
    this.imageContainer.style.height = `${height}px`;
  }
}

const myImageContainer = new ImageContainerSize();