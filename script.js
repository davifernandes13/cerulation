const respostaBtns = document.querySelectorAll('.resposta-btn');

respostaBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const resposta = btn.parentNode.querySelector('.resposta');
        resposta.classList.toggle('show');
    });
});
