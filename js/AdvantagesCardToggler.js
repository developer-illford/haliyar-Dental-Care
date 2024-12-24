const cards = document.querySelectorAll('.about_sec2_card');

function toggleCardColor() {
    let index = 0;
    return setInterval(() => {
        cards.forEach((card, i) => {
            card.style.transition = 'background-color 0.5s, color 0.5s'; // Add transition
            card.style.backgroundColor = '';
            card.querySelector('h5').style.color = ''; // Reset text color
        });
        cards[index].style.backgroundColor = '#2D2D2D';
        cards[index].querySelector('h5').style.color = 'white';
        index = (index + 1) % cards.length;
    }, 2000); // Change color every 2 seconds
}

toggleCardColor();
