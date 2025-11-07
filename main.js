// --- SCROLL ANIMATION AND LOGIC ---

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. HANDLE ALL SCROLL ANIMATIONS (Combined Observer) ---
    
    // Select ALL elements we want to animate
    const elementsToAnimate = document.querySelectorAll('.hidden-card, .hidden-section');

    const observerOptions = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.1 // Use a single threshold for all elements
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            
            // Determine which class to toggle (slide-in or fade-in)
            let className;
            if (entry.target.classList.contains('hidden-card')) {
                className = 'hidden-card';
            } else {
                className = 'hidden-section';
            }

            // Toggle the class based on intersection
            if (entry.isIntersecting) {
                // When element enters, remove the class to trigger animation
                entry.target.classList.remove(className);
            } else {
                // When element leaves, add the class back to reset it for next time
                entry.target.classList.add(className);
            }
        });
    };

    // Create a SINGLE observer for all elements
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe each element
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });

});