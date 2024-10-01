// FAQ SCRIPT

document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const isOpen = content.style.display === 'block';

        // Close all other open content
        document.querySelectorAll('.accordion-content').forEach(item => {
            item.style.display = 'none';
        });

        // Toggle the clicked section
        content.style.display = isOpen ? 'none' : 'block';
    });
});