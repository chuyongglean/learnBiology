function initDashboard() {
    console.log('Initializing or re-initializing dashboard scripts.');

    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.querySelector('.sidebar');

    if (menuToggle && sidebar) {
        // Attach listeners only once
        if (!menuToggle.dataset.initialized) {
            menuToggle.addEventListener('click', () => {
                sidebar.classList.toggle('active');
                console.log('Sidebar toggled.');
            });

            // Close sidebar if clicking outside of it on mobile
            document.addEventListener('click', function(event) {
                const isClickInsideSidebar = sidebar.contains(event.target);
                const isClickOnMenuToggle = menuToggle.contains(event.target);

                if (!isClickInsideSidebar && !isClickOnMenuToggle && sidebar.classList.contains('active')) {
                    sidebar.classList.remove('active');
                    console.log('Sidebar closed by clicking outside.');
                }
            });
            menuToggle.dataset.initialized = 'true';
        }
        
        // Always reset state on init
        sidebar.classList.remove('active');
    }
}

document.addEventListener('DOMContentLoaded', initDashboard);

window.addEventListener('pageshow', (event) => {
    if (event.persisted) {
        console.log('Dashboard page restored from bfcache.');
        initDashboard();
    }
});
