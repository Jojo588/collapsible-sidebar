    const sub_menu_btn = document.querySelector('.sub-menu-btn');
    const sidebar = document.querySelector('.sub-menu-container');
    const links = document.querySelector('.sidebar_list');

    // Menu items with icons
    const navLinks = [
      { title: 'home', link: '#', icon: 'fa-solid fa-house' },
      { title: 'about', link: '#', icon: 'fa-solid fa-circle-info' },
      { title: 'settings', link: '#', icon: 'fa-solid fa-gear' },
      { title: 'privacy policy', link: '#', icon: 'fa-solid fa-shield-halved' },
      { title: 'terms', link: '#', icon: 'fa-solid fa-file-contract' }
    ];

    // Toggle sidebar
    sub_menu_btn.addEventListener('click', () => {
      sidebar.classList.toggle('active');
      sub_menu_btn.classList.toggle('activate');
    
    });

    // Generate sidebar links
    const displayNavLinks = navLinks.map(navlink =>
      `<li><a href="${navlink.link}"><i class="${navlink.icon}"></i>${navlink.title}</a></li>`
    );

    links.innerHTML = displayNavLinks.join('');