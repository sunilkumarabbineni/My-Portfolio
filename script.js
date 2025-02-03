document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav a");
    
    function showSection(sectionId) {
        const sections = document.querySelectorAll("section");
        
        // Hide all sections
        sections.forEach(section => {
            section.classList.remove("active-section");
            section.style.display = "none";
        });
        
        // Show the selected section
        const activeSection = document.getElementById(sectionId);
        if (activeSection) {
            activeSection.classList.add("active-section");
            activeSection.style.display = "block";
        }
        
        // Update active link
        navLinks.forEach(link => link.classList.remove("active"));
        const activeLink = document.querySelector(`nav a[href="#${sectionId}"]`);
        if (activeLink) activeLink.classList.add("active");
    }

    // Show About section by default
    showSection("about");

    // Add click event listeners to nav links
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const sectionId = this.getAttribute("href").substring(1);
            showSection(sectionId);
        });
    });
});
