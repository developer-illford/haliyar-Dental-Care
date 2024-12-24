// Function to animate the counter
function animateCounter(element, start, end, duration) {
  let current = start;
  const range = end - start;
  const increment = end > start ? 1 : -1;
  const stepTime = Math.abs(Math.floor(duration / range));
  const timer = setInterval(function () {
    current += increment;
    element.textContent = current;
    if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
      clearInterval(timer);
      element.textContent = end;
    }
  }, stepTime);
}

// Intersection Observer callback function
function handleIntersect(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counter = entry.target;
      const countElement = counter.querySelector('#count1'); // Update this selector accordingly
      const finalCount = parseInt(countElement.getAttribute('data-final'));
      animateCounter(countElement, 0, finalCount, 5000); // Change 5000 to the desired duration
      observer.unobserve(counter); // Stop observing once the counter is animated
    }
  });
}

// Create an Intersection Observer
const observer = new IntersectionObserver(handleIntersect, { threshold: 0.3 });

// Call the function for each counter when they become visible
const counters = document.querySelectorAll('.home-counter-sec');
counters.forEach(counter => {
  observer.observe(counter);
});
