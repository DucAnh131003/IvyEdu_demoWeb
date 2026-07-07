document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('contact-toggle');
    const closeBtn = document.getElementById('panel-close');
    const panel = document.getElementById('contact-panel');

    function openPanel() {
        panel.classList.add('active');
    }

    function closePanel() {
        panel.classList.remove('active');
    }

    function togglePanel() {
        panel.classList.toggle('active');
    }

    toggleBtn.addEventListener('click', togglePanel);
    closeBtn.addEventListener('click', closePanel);

    // Click ra ngoài để đóng
    document.addEventListener('click', function(e) {
        const wrapper = document.getElementById('contact-wrapper');
        if (!wrapper.contains(e.target)) {
            closePanel();
        }
    });
});