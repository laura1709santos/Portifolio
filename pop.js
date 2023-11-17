document.addEventListener('DOMContentLoaded', function () {
    // Adicione o script de rolagem suave
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

    // Adicione isso ao seu arquivo pop.js
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




var vlibras = new window.VLibras.Widget({
    rootPath: '/app',
    personalization:
      'https://vlibras.gov.br/app/vlibras-plugin/config/default_logo.json',
    opacity: 0.5,
    position: 'R',
    avatar: 'random',
  });
 
  