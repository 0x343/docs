function toggleMenu() {  
      const menu = document.getElementById('nav-menu');  
      menu.classList.toggle('active');  
    }
    
    document.addEventListener('DOMContentLoaded', () => {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('.sidebar .nav-link');

      window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
          const sectionTop = section.offsetTop - 100;
          if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
          }
        });

        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
          }
        });
      });

      document.querySelectorAll('.btn-copy').forEach(btn => {
        btn.addEventListener('click', () => {
          alert('Code copied successfully!');
        });
      });
    });
