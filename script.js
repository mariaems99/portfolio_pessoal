// Alerta de boas-vindas
window.addEventListener('load', () => {
  alert('Bem-vindo(a) ao meu portfólio pessoal!');
  mostrarProjetos('html-css'); // Mostra HTML & CSS por padrão
});

// Validação simples do formulário
document.getElementById('form-contato')?.addEventListener('submit', function (event) {
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  if (!nome || !email || !mensagem) {
    alert('Por favor, preencha todos os campos antes de enviar.');
    event.preventDefault();
  } else {
    document.getElementById('mensagem-sucesso').style.display = 'block';
    this.reset();
  }
});

// Função para mostrar projetos por categoria
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