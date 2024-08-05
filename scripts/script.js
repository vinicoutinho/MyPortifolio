document.addEventListener('DOMContentLoaded', () => {
    // Efeito de digitação no nome
    const name = "Vinicius Ribeiro Coutinho Junior";
    let index = 0;

    function typeEffect() {
        if (index < name.length) {
            document.getElementById("name").innerHTML += name.charAt(index);
            index++;
            setTimeout(typeEffect, 100);
        }
    }
    typeEffect();

    // Animação ao rolar
    const sections = document.querySelectorAll('.section');
    const timelineItems = document.querySelectorAll('.timeline-item');
    const cards = document.querySelectorAll('.card');

    function onScroll() {
        const scrollPosition = window.scrollY + window.innerHeight;

        // Animação das seções
        sections.forEach(section => {
            if (scrollPosition > section.offsetTop + section.offsetHeight / 2) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });

        // Animação dos itens da timeline
        timelineItems.forEach(item => {
            const itemPosition = item.getBoundingClientRect().top + window.scrollY;
            const itemHeight = item.offsetHeight;
            const itemTop = itemPosition;
            const itemBottom = itemPosition + itemHeight;

            if (scrollPosition > itemTop && scrollPosition < itemBottom) {
                item.classList.add('highlight');
            } else {
                item.classList.remove('highlight');
            }
        });

        // Animação dos cards
        cards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top + window.scrollY;
            const cardHeight = card.offsetHeight;
            const cardTop = cardPosition;
            const cardBottom = cardPosition + cardHeight;

            if (scrollPosition > cardTop + cardHeight / 2) {
                card.classList.add('appear');
            } else {
                card.classList.remove('appear');
            }
        });
    }

    window.addEventListener('scroll', onScroll);
    onScroll(); // Verificar inicialmente

    // Carrossel de tecnologias
    const carousel = document.querySelector('.carousel');
    const totalWidth = carousel.scrollWidth;
    let scrollAmount = 0;

    function autoScroll() {
        scrollAmount += 1;
        if (scrollAmount >= totalWidth) {
            scrollAmount = 0;
            carousel.scrollLeft = 0;
        }
        carousel.scrollLeft = scrollAmount;
        requestAnimationFrame(autoScroll);
    }
    autoScroll();

    // Mostrar/ocultar menu flutuante
    const floatingMenu = document.getElementById('floating-menu');
    
    function toggleMenuVisibility() {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 200) { // Exibe o menu quando rola mais de 200px
            floatingMenu.classList.add('show');
        } else {
            floatingMenu.classList.remove('show');
        }
    }

    window.addEventListener('scroll', toggleMenuVisibility);
    toggleMenuVisibility(); // Verificar inicialmente

    // Toggle de tema
    const toggleButton = document.getElementById('theme-toggle');

    // Verifica o tema armazenado no localStorage
    if (localStorage.getItem('theme') === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        toggleButton.innerHTML = '🌞'; // Ícone para tema escuro
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        toggleButton.innerHTML = '🌙'; // Ícone para tema claro
    }

    toggleButton.addEventListener('click', () => {
        // Alterna entre temas
        if (document.documentElement.getAttribute('data-theme') === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            toggleButton.innerHTML = '🌙'; // Ícone para tema claro
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            toggleButton.innerHTML = '🌞'; // Ícone para tema escuro
        }
    });
});
