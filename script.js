const imgList = document.getElementById('imgList');
const imageSrc = document.getElementById('imageSrc');
const imageText = document.getElementById('imageText');
const addButton = document.getElementById('addButton');

// Function to add an image to the list
addButton.addEventListener('click', () => {
  const src = imageSrc.value.trim();
  const text = imageText.value.trim();

  if (src) {
    const img = document.createElement('img');
    img.src = src;
    img.alt = text;
    img.title = text; // Set hover text
    imgList.appendChild(img);
    
    // Reset input fields
    imageSrc.value = '';
    imageText.value = '';
    
    // Add click event for reordering
    img.addEventListener('click', () => {
      reorderImages(img);
    });
    
    // Update layout after adding the image
    
  }
});


// Function to reorder images when one is clicked
function reorderImages(clickedImg) {
  const imgs = Array.from(imgList.getElementsByTagName('img'));
  const index = imgs.indexOf(clickedImg);

  if (index === -1 || imgs.length < 2) return;

  const newImgs = [];

  // Move the clicked image to the center position
  if (imgs.length === 2) {
    // If only 2 images, just swap them
    newImgs.push(imgs[1 - index], imgs[index]); // Swap positions
  } else {
    // If 3 or more images
    const prevIndex = (index - 1 + imgs.length) % imgs.length; // Get previous index
    const nextIndex = (index + 1) % imgs.length; // Get next index
    newImgs.push(imgs[prevIndex], imgs[index], imgs[nextIndex]); // Move clicked to center
  }

  // Clear img list and append in new order
  imgList.innerHTML = '';
  newImgs.forEach(img => imgList.appendChild(img));

  // Update layout after reordering
  updateLayout();
}
