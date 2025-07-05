// Alerta de boas-vindas
window.addEventListener('load', () => {
  alert('Bem-vindo(a) ao meu portfólio pessoal!');
});

// Validação simples do formulário
function validarFormulario(event) {
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  if (!nome || !email || !mensagem) {
    alert('Por favor, preencha todos os campos antes de enviar.');
    event.preventDefault();
  }
}



function mostrarProjetos(classe) {
  // Esconde todas as seções
  const secoes = document.querySelectorAll(".projetos");
  secoes.forEach(secao => {
    secao.style.display = "none";
  });

  // Mostra a seção clicada
  const ativa = document.querySelector(`.projetos.${classe}`);
  if (ativa) {
    ativa.style.display = "block";
  }

  // Remove destaque de todos os ícones
  const icones = document.querySelectorAll(".icone");
  icones.forEach(icone => icone.classList.remove("ativo"));

  // Adiciona destaque ao ícone clicado
  const botaoAtivo = document.getElementById(`btn-${classe}`);
  if (botaoAtivo) {
    botaoAtivo.classList.add("ativo");
  }
}

// Mostrar HTML & CSS por padrão ao carregar
window.onload = () => mostrarProjetos('html-css');