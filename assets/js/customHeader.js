    document.addEventListener('DOMContentLoaded', (event) => {
      // Select all links within sub-menu--item
      const menuItems = document.querySelectorAll('.hover-menu--item');

      // Add event listeners for each menu item
      menuItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
          item.style.color = '#BFF747';

        });

        item.addEventListener('mouseleave', () => {
          item.style.color = '';
        });
      });
    });