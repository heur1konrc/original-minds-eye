// Portfolio Data - EDIT THIS SECTION TO ADD/REMOVE IMAGES
const portfolioData = [
    // Landscape Images
    {
        id: 'mountain-peak',
        title: 'Mountain Peak',
        description: 'Majestic mountain at sunrise',
        image: 'assets/mountain-peak-BZ-3S8MG.jpg',
        category: 'landscapes'
    },
    {
        id: 'mountain-range',
        title: 'Mountain Range',
        description: 'Dramatic mountain landscape',
        image: 'assets/mountain-range-BFlqXjpB.jpg',
        category: 'landscapes'
    },
    {
        id: 'scenic-lake',
        title: 'Scenic Lake',
        description: 'Peaceful lake reflection',
        image: 'assets/scenic-lake-kvdISEis.jpg',
        category: 'landscapes'
    },
    {
        id: 'western-mountains',
        title: 'Western Mountains',
        description: 'Rolling mountain vista',
        image: 'assets/western-mountains-sHUTw3qU.jpg',
        category: 'landscapes'
    },
    
    // Nature Images
    {
        id: 'bluebird',
        title: 'Bluebird',
        description: 'Beautiful bluebird on branch',
        image: 'assets/bluebird-DNm5E3HA.jpg',
        category: 'nature'
    },
    {
        id: 'bird-branch',
        title: 'Bird on Branch',
        description: 'Colorful bird perched naturally',
        image: 'assets/bird-branch--r4VNA8d.jpg',
        category: 'nature'
    },
    {
        id: 'flower-macro',
        title: 'Flower Macro',
        description: 'Close-up flower photography',
        image: 'assets/flower-macro-BvbmP-bV.jpg',
        category: 'nature'
    },
    {
        id: 'macro-flower',
        title: 'Macro Flower',
        description: 'Detailed flower study',
        image: 'assets/macro-flower-CSiqNHN7.jpg',
        category: 'nature'
    },
    
    // Portrait Images
    {
        id: 'professional-headshot',
        title: 'Professional Headshot',
        description: 'Corporate portrait photography',
        image: 'assets/professional-headshot-CV3a4MuE.jpg',
        category: 'portraits'
    },
    {
        id: 'executive-portrait',
        title: 'Executive Portrait',
        description: 'Professional business portrait',
        image: 'assets/executive-portrait-DsaSmoK-.jpg',
        category: 'portraits'
    },
    {
        id: 'corporate-headshot',
        title: 'Corporate Headshot',
        description: 'Business professional portrait',
        image: 'assets/corporate-headshot-DiN6bV33.jpg',
        category: 'portraits'
    },
    {
        id: 'business-woman',
        title: 'Business Woman',
        description: 'Professional female portrait',
        image: 'assets/business-woman-DrQJ9Omp.jpg',
        category: 'portraits'
    },
    
    // Event Images
    {
        id: 'wedding-celebration',
        title: 'Wedding Celebration',
        description: 'Joyful wedding moments',
        image: 'assets/wedding-celebration-DdBFgZGl.jpg',
        category: 'events'
    },
    {
        id: 'wedding-night',
        title: 'Wedding Night',
        description: 'Romantic evening celebration',
        image: 'assets/wedding-night-DOlQfeSV.jpg',
        category: 'events'
    },
    {
        id: 'wedding-reception',
        title: 'Wedding Reception',
        description: 'Reception celebration',
        image: 'assets/wedding-reception-CAg2WiJE.jpg',
        category: 'events'
    },
    {
        id: 'event-photography',
        title: 'Event Photography',
        description: 'Special occasion capture',
        image: 'assets/event-photography-BEhl9d62.jpg',
        category: 'events'
    },
    
    // Wildlife Images
    {
        id: 'chichi',
        title: 'Chichi',
        description: 'Beloved pet portrait',
        image: 'assets/chichi-BvVKxXe6.jpg',
        category: 'wildlife'
    },
    {
        id: 'crane1',
        title: 'Crane',
        description: 'Elegant crane in natural habitat',
        image: 'assets/crane1-CRb2bnVt.jpg',
        category: 'wildlife'
    },
    {
        id: 'crane2',
        title: 'Crane Pair',
        description: 'Two cranes in the field',
        image: 'assets/crane2-DjTCqNNM.jpg',
        category: 'wildlife'
    },
    {
        id: 'downy-woodpecker',
        title: 'Downy Woodpecker',
        description: 'Small woodpecker on tree',
        image: 'assets/downy-woodpecker-YkHrJYdp.jpg',
        category: 'wildlife'
    },
    {
        id: 'duck-on-water',
        title: 'Duck on Water',
        description: 'Peaceful duck swimming',
        image: 'assets/duck-on-water-CCbH0luC.jpg',
        category: 'wildlife'
    },
    {
        id: 'duck-on-water2',
        title: 'Duck Family',
        description: 'Ducks enjoying the water',
        image: 'assets/duck-on-water2-DSQYVtTP.jpg',
        category: 'wildlife'
    },
    {
        id: 'female-red-winged-blackbird',
        title: 'Female Red-winged Blackbird',
        description: 'Beautiful songbird portrait',
        image: 'assets/female-red-winged-blackbird-CXnQkF49.jpg',
        category: 'wildlife'
    },
    {
        id: 'house-sparrow',
        title: 'House Sparrow',
        description: 'Common sparrow in natural setting',
        image: 'assets/house-sparrow-RunL5DD3.jpg',
        category: 'wildlife'
    },
    {
        id: 'rabbit1',
        title: 'Rabbit',
        description: 'Wild rabbit in meadow',
        image: 'assets/rabbit1-BQ-gwvBo.jpg',
        category: 'wildlife'
    },
    {
        id: 'rabbit2',
        title: 'Rabbit Portrait',
        description: 'Close-up rabbit study',
        image: 'assets/rabbit2-DwS531OK.jpg',
        category: 'wildlife'
    },
    {
        id: 'rabbit3',
        title: 'Rabbit in Field',
        description: 'Rabbit in natural environment',
        image: 'assets/rabbit3-DVC3HoUT.jpg',
        category: 'wildlife'
    },
    {
        id: 'starling',
        title: 'Starling',
        description: 'Starling bird photography',
        image: 'assets/starling-Cok-Y94w.jpg',
        category: 'wildlife'
    },
    {
        id: 'lazy-turkey',
        title: 'Lazy Turkey',
        description: 'Turkey relaxing in natural habitat',
        image: 'assets/turkey2-DWNI4Ycz.jpg',
        category: 'wildlife'
    }
];

// Global variables
let currentFilter = 'all';
let currentImageIndex = 0;
let filteredImages = [];

// DOM Elements
const portfolioGrid = document.getElementById('portfolioGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalCounter = document.getElementById('modalCounter');
const modalClose = document.querySelector('.modal-close');
const modalPrev = document.querySelector('.modal-prev');
const modalNext = document.querySelector('.modal-next');

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    renderPortfolio();
    setupEventListeners();
    setupImageProtection();
});

// Render portfolio images
function renderPortfolio() {
    portfolioGrid.innerHTML = '';
    
    filteredImages = currentFilter === 'all' 
        ? portfolioData 
        : portfolioData.filter(item => item.category === currentFilter);
    
    filteredImages.forEach((item, index) => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'portfolio-item';
        portfolioItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}" loading="lazy">
            <div class="portfolio-overlay">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        `;
        
        portfolioItem.addEventListener('click', () => openModal(index));
        portfolioGrid.appendChild(portfolioItem);
    });
}

// Setup event listeners
function setupEventListeners() {
    // Filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            // Update filter and re-render
            currentFilter = button.dataset.filter;
            renderPortfolio();
        });
    });
    
    // Modal controls
    modalClose.addEventListener('click', closeModal);
    modalPrev.addEventListener('click', () => navigateModal(-1));
    modalNext.addEventListener('click', () => navigateModal(1));
    
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (modal.style.display === 'block') {
            switch(e.key) {
                case 'Escape':
                    closeModal();
                    break;
                case 'ArrowLeft':
                    navigateModal(-1);
                    break;
                case 'ArrowRight':
                    navigateModal(1);
                    break;
            }
        }
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Contact form
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', handleFormSubmit);
}

// Open modal
function openModal(index) {
    currentImageIndex = index;
    const image = filteredImages[index];
    
    modalImage.src = image.image;
    modalImage.alt = image.title;
    modalTitle.textContent = image.title;
    modalDescription.textContent = image.description;
    modalCounter.textContent = `${index + 1} of ${filteredImages.length} • Use arrow keys to navigate • Press ESC to close`;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Navigate modal
function navigateModal(direction) {
    currentImageIndex += direction;
    
    if (currentImageIndex < 0) {
        currentImageIndex = filteredImages.length - 1;
    } else if (currentImageIndex >= filteredImages.length) {
        currentImageIndex = 0;
    }
    
    openModal(currentImageIndex);
}

// Handle form submission
function handleFormSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Create mailto link
    const subject = `Photography Inquiry - ${data.projectType || 'General'}`;
    const body = `
Name: ${data.clientName}
Email: ${data.clientEmail}
Phone: ${data.clientPhone || 'Not provided'}
Event Date: ${data.projectDate || 'Not specified'}
Project Type: ${data.projectType || 'Not specified'}

Project Details:
${data.projectDetails}
    `;
    
    const mailtoLink = `mailto:rick@rickcorey.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    
    // Show success message
    alert('Thank you for your message! Your email client should open with the message ready to send.');
}

// Image protection
function setupImageProtection() {
    // Disable right-click on images
    document.addEventListener('contextmenu', function(e) {
        if (e.target.tagName === 'IMG') {
            e.preventDefault();
            showProtectionAlert();
        }
    });
    
    // Disable common keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // Disable F12, Ctrl+Shift+I, Ctrl+U, Ctrl+S
        if (e.key === 'F12' || 
            (e.ctrlKey && e.shiftKey && e.key === 'I') ||
            (e.ctrlKey && e.key === 'u') ||
            (e.ctrlKey && e.key === 's')) {
            e.preventDefault();
            showProtectionAlert();
        }
    });
    
    // Disable drag and drop on images
    document.addEventListener('dragstart', function(e) {
        if (e.target.tagName === 'IMG') {
            e.preventDefault();
        }
    });
}

// Show protection alert
function showProtectionAlert() {
    alert('Images are protected. Please contact Mind\'s Eye Photography for licensing inquiries.');
}

// TO ADD NEW IMAGES:
// 1. Upload your image file to the 'assets' folder
// 2. Add a new object to the portfolioData array above with this format:
/*
{
    id: 'unique-image-id',
    title: 'Your Image Title',
    description: 'Brief description of the image',
    image: 'assets/your-image-filename.jpg',
    category: 'landscapes' // or 'wildlife', 'portraits', 'events', 'nature'
}
*/

// TO REMOVE IMAGES:
// 1. Find the image object in the portfolioData array above
// 2. Delete the entire object (including the comma)
// 3. Optionally delete the image file from the assets folder

