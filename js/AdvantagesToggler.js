// Select the container for the h3, h6, and image tags
const container = document.querySelector('.about_advantages_display_holder');

// Function to toggle content of h3, h6, and image tags
function toggleContent() {
    let index = 0;
    const contents = [
        {
            h3: "Professional dentists",
            h6: "We have gathered only qualified specialists with extensive experience in the dental field. We will help you with any problem. We advise you for free!",
            image: "img/about sec2 col2_1.png"
        },
        {
            h3: "Effective anesthesia",
            h6: "We use only effective solutions for anesthesia, having previously checked your allergenicity to them. Feel free to contact us. We advise you for free!",
            image: "img/about sec2 col2_2.png"
        },
        {
            h3: "Large network of clinics",
            h6: "We have a large network of clinics throughout all clinics employ highly qualified specialists and use professional equipment.",
            image: "img/about sec2 col2_3.png"
        },
        {
            h3: "Durable materials",
            h6: "We use only high-quality materials for dental fillings, dentures, crowns, implants and veneers. You can be sure of the result! We advise you for free!.",
            image: "img/about sec2 col2_4.png"
        },
        {
            h3: "High-quality tools",
            h6: "Our dentists use professional tools and equipment in their arsenal to work as efficiently and accurately as possible. Feel free to contact us!",
            image: "img/about sec2 col2_5.png"
        }
    ];

    return setInterval(() => {
        const content = contents[index];
        const h3 = container.querySelector('h3');
        const h6 = container.querySelector('h6');
        h3.style.transition = 'opacity 0.5s'; // Add transition
        h6.style.transition = 'opacity 0.5s'; // Add transition
        h3.style.opacity = '0'; // Fade out
        h6.style.opacity = '0'; // Fade out

        setTimeout(() => {
            h3.textContent = content.h3;
            h6.textContent = content.h6;
            h3.style.opacity = '1'; // Fade in
            h6.style.opacity = '1'; // Fade in
        }, 200); // Delay content update to match transition duration

        const image = container.querySelector('img');
        image.style.transition = 'opacity 0.5s'; // Add transition
        image.style.opacity = '0'; // Fade out
        setTimeout(() => {
            image.src = content.image;
            image.style.opacity = '1'; // Fade in
        }, 200); // Delay image update to match transition duration

        index = (index + 1) % contents.length;
    }, 2000); // Change content every 2 seconds
}

toggleContent();