# portfolio_pessoal

# portfolio_pessoal

🏠 Página: index.html
Essa é a página inicial do meu portfólio pessoal. É o ponto de entrada para quem acessa meu site e deseja conhecer mais sobre mim, minha formação e os projetos que venho desenvolvendo.

✨ Objetivo da página
A index.html tem como função dar boas-vindas ao visitante e apresentar de forma breve o que ele encontrará no site. É uma introdução simples e direta ao meu portfólio.

🧱 Estrutura do código
- O <header> contém meu nome e um menu de navegação com links para as outras páginas do site: Sobre mim, Formação, Portfólio e Contato.
- O <main> traz uma mensagem de boas-vindas, explicando o propósito do site.




📄 Página: sobre.html
Essa é a página "Sobre mim" do meu portfólio pessoal. Criei esse espaço para contar um pouco da minha trajetória, meus interesses e o que me motiva na área de tecnologia.

✨ Objetivo da página:
O principal objetivo dessa página é apresentar quem eu sou de forma leve e pessoal. Aqui eu compartilho:
- Minha formação e o curso que estou fazendo
- Experiências profissionais que me ajudaram a desenvolver habilidades importantes
- Conhecimentos técnicos que venho adquirindo
- Um pouco da minha história com o ensino de raciocínio lógico
- Meus hobbies e o que gosto de fazer fora do mundo da programação.
  
🧱 Estrutura do código
- Utilizei HTML5 com a tag <!DOCTYPE html> e defini o idioma como pt-BR.
- No <head>, configurei a codificação UTF-8, viewport responsivo e importei o CSS externo (style.css).
- O <header> contém meu nome e um menu de navegação com links para as outras páginas do site.
- O <main> traz o conteúdo principal da página, com um título, uma imagem de perfil e vários parágrafos contando sobre mim.
- No final, importei o script.js, onde posso adicionar interações com JavaScript.
  
🖼️ Imagem de perfil
Incluí uma imagem chamada maria.jpg, que representa visualmente quem sou. Ela está centralizada e estilizada com bordas arredondadas no CSS.



🎓 Página: formacao.html
Essa é a página onde apresento minha formação acadêmica e os idiomas que falo. Ela faz parte do meu portfólio pessoal e tem como objetivo mostrar um pouco do meu percurso educacional e minhas habilidades linguísticas.

✨ Objetivo da página
A formacao.html foi criada para destacar:
- O curso que estou fazendo atualmente
- Minha fluência em idiomas



💼 Página: portfolio.html
Essa é a página onde apresento meus projetos práticos desenvolvidos ao longo da minha jornada de aprendizado. Ela é uma das partes mais importantes do meu portfólio, pois mostra na prática o que venho estudando e aplicando.

✨ Objetivo da página
A portfolio.html foi criada para exibir meus projetos organizados por linguagem ou ferramenta. O visitante pode clicar em cada tecnologia para visualizar os projetos relacionados, de forma interativa e dinâmica.

🧱 Estrutura do código
- No <main>, organizei os projetos da seguinte forma:
- Um menu com ícones representando cada linguagem ou ferramenta (HTML & CSS, Python, Excel, Java)
- Seções separadas para cada grupo de projetos, que são exibidas dinamicamente com JavaScript
- Cada projeto é apresentado em um "card", com título, descrição e link direto para o repositório no GitHub
- 
🖱️ Interatividade
- Ao clicar em um ícone de linguagem, a seção correspondente é exibida e as demais são ocultadas.
- Isso é feito com a função mostrarProjetos() no arquivo script.js, que manipula a visibilidade das seções com base na classe CSS.
- Cada card de projeto é clicável e abre o repositório em uma nova aba.



  📬 Página: contato.html
Essa é a página de contato do meu portfólio pessoal. Criei esse espaço para facilitar a comunicação com quem quiser falar comigo, seja para oportunidades ou dúvidas.

✨ Objetivo da página
A contato.html foi desenvolvida para oferecer duas formas de contato:
- Através de ícones clicáveis que levam diretamente para meu e-mail, LinkedIn e GitHub.
- Por meio de um formulário simples, onde o visitante pode me enviar uma mensagem diretamente pelo site.

🧱 Estrutura do código
- Uma seção com ícones de contato (e-mail, LinkedIn e GitHub)
- Um formulário com campos de nome, e-mail e mensagem.
- No final, importei o script.js, onde adicionei a lógica para validar e exibir uma mensagem de sucesso ao enviar o formulário.
  
📩 Funcionalidade do formulário
- O formulário é validado com JavaScript para garantir que todos os campos estejam preenchidos.
- Após o envio, uma mensagem de sucesso é exibida na tela.
- O envio real pode ser integrado com serviços como Formspree ou EmailJS (caso eu deseje futuramente).




🎨 Arquivo: style.css
Esse é o arquivo responsável por toda a parte visual do meu portfólio pessoal. Aqui eu defini as cores, fontes, espaçamentos e estilos que deixam o site mais agradável, organizado e com a minha identidade.

✨ Objetivo do CSS
O style.css foi criado para:
- Garantir uma aparência limpa, moderna e responsiva
- Manter a consistência visual entre todas as páginas
- Refletir minha personalidade através das cores e do layout
- Melhorar a experiência de navegação para quem visita meu portfólio


🧱 Estrutura e principais estilos

- Reset básico: Usei um reset simples para remover margens e paddings padrão dos navegadores e garantir que todos os elementos sigam o mesmo modelo de caixa.
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}



- Corpo da página : Escolhi uma fonte moderna e suave, com um fundo lilás claro (#dda1e3) que transmite leveza e personalidade.
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #dda1e3;
  color: #333;
  line-height: 1.6;
}


- Cabeçalho e navegação: segue a mesma paleta do fundo, com links em tom neutro e destaque rosa ao passar o mouse.
header {
  background-color: #dda1e3;
  color: #333;
  padding: 20px;
  text-align: center;
}
nav a {
  color: #8b8181;
  text-decoration: none;
  font-weight: bold;
}
nav a:hover {
  color: #d792c2;
}


- Conteúdo principal: é centralizado e envolto por um fundo translúcido com bordas arredondadas e sombra suave, criando um efeito de “cartão”.
main {
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  background-color: rgba(216, 178, 225, 0.673);
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}


- Imagem de perfil: é circular, centralizada e com uma sombra leve para destacar.
.foto-perfil {
  display: block;
  max-width: 200px;
  border-radius: 50%;
  margin: 20px auto;
  box-shadow: 0 4px 8px rgba(151, 95, 215, 0.1);
}

- Ícones de contato: são grandes, bem espaçados e ganham destaque com um efeito de zoom e mudança de cor ao passar o mouse.
.icones-contato {
  display: flex;
  justify-content: center;
  gap: 30px;
}
.icones-contato a {
  color: #262426;
  font-size: 1.2em;
  transition: transform 0.3s;
}
.icones-contato a:hover {
  transform: scale(1.1);
  color: #4d85bd;
}


⚙️ Arquivo: script.js
Esse é o arquivo JavaScript que adiciona interatividade ao meu portfólio. Ele foi criado para tornar a navegação mais dinâmica e melhorar a experiência de quem visita o site.

✨ O que esse script faz:
- Assim que a página é carregada, ele exibe um alerta de boas-vindas para o visitante, criando uma recepção simpática e acolhedora.
- Também define que, ao abrir a página de portfólio, os projetos de HTML & CSS sejam exibidos por padrão.
- No formulário de contato, ele faz uma validação simples: verifica se todos os campos foram preenchidos antes de permitir o envio. Se estiver tudo certo, exibe uma mensagem de sucesso e limpa os campos.
- Além disso, o script controla a exibição dos projetos por linguagem. Quando o usuário clica em um ícone (HTML, Python, Excel ou Java), ele esconde todas as outras seções e mostra apenas os projetos daquela categoria.
- Também adiciona um destaque visual no ícone da linguagem selecionada, para indicar qual está ativa no momento.









