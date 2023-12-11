document.addEventListener('DOMContentLoaded', function () {
 
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });

                // Remover a classe 'ativo' de todos os links do menu
                document.querySelectorAll('.menu a').forEach(link => {
                    link.classList.remove('ativo');
                });

                // Adicionar a classe 'ativo' ao link clicado
                this.classList.add('ativo');
            }
        });
    });


    const linksMenu = document.querySelectorAll('.menu a');

    linksMenu.forEach(link => {
        link.addEventListener('click', function () {
            // Remover a classe 'ativo' de todos os links do menu
            linksMenu.forEach(l => l.classList.remove('ativo'));

            // Adicionar a classe 'ativo' ao link clicado
            link.classList.add('ativo');
        });
    });
});


document.getElementById('menu-icon').addEventListener('click', function() {
    var navList = document.querySelector('nav ul');
    navList.style.display = (navList.style.display === 'block' || navList.style.display === '') ? 'none' : 'block';
});


document.addEventListener('DOMContentLoaded', function () {
    var menuIcon = document.getElementById('menu-icon');
    var hamburgerMenu = document.querySelector('.hamburger-menu');

    menuIcon.addEventListener('click', function () {
        hamburgerMenu.classList.toggle('show');
    });
});
