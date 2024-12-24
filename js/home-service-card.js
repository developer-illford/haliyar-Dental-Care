// Select all the card elements
const cards = document.querySelectorAll('.home-all-services-card');

// Function to set equal height for all cards
function setEqualCardHeight() {
  let maxHeight = 0;
  // Loop through each card to find the maximum height
  cards.forEach(card => {
    const cardHeight = card.offsetHeight;
    if (cardHeight > maxHeight) {
      maxHeight = cardHeight;
    }
  });
  // Set the maximum height for all cards
  cards.forEach(card => {
    card.style.height = `${maxHeight}px`;
  });
}

// Call the function initially and on window resize
window.addEventListener('load', setEqualCardHeight);
window.addEventListener('resize', setEqualCardHeight);
