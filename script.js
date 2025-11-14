document.addEventListener('DOMContentLoaded', () => {
  const botoesAlugar = document.querySelectorAll('.alugar-btn');

  botoesAlugar.forEach(botao => {
    botao.addEventListener('click', (event) => {
      const plano = event.target.getAttribute('data-plano');
      let nomePlano = '';

      switch (plano) {
        case '2h':
          nomePlano = 'Aluguel de 2 Horas';
          break;
        case 'diaria':
          nomePlano = 'Diária Completa';
          break;
        case 'fds':
          nomePlano = 'Fim de Semana';
          break;
        default:
          nomePlano = 'Plano de Aluguel';
      }

      alert(`Você selecionou o plano: ${nomePlano}! \nEm uma aplicação real, você seria redirecionado para o checkout. \nObrigado por escolher a Bike Saqua!`);
    });
  });

  // Scroll suave
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Exibir mensagem de sucesso no formulário (sem bloquear envio)
  const form = document.getElementById('formDuvidas');
  const successCard = document.getElementById('successCard');

  form.addEventListener('submit', function () {
    successCard.style.display = 'block';

    setTimeout(() => {
      successCard.style.opacity = '0';
      setTimeout(() => (successCard.style.display = 'none'), 600);
    }, 4000);
  });
});

