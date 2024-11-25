

function postar() {
  let txt = document.getElementById("texto").value; // Título do post
  let areaTexto = document.getElementById("conteudo").value; // Conteúdo do post
  let posts = document.getElementById("posts");

  // Validações de entrada
  if (txt.trim().length === 0) {
      alert("O título está vazio!");
      return;
  }

  if (areaTexto.trim().length === 0) {
      alert("Escreva o conteúdo!");
      return;
  }

  if (txt.trim().length > 150) {
      alert("O título não pode ter mais de 150 caracteres!");
      return;
  }

  // Criação do novo post na Home
  const novoPost = document.createElement("div");
  novoPost.className = "post";

  // Codificar título e conteúdo para a URL
  const tituloCodificado = encodeURIComponent(txt);
  const conteudoCodificado = encodeURIComponent(areaTexto);

  novoPost.innerHTML = `
      <div class="user">
          <img class="icon" src="images/pato icon.jpg" alt="">
          <p class="nickname">Davi</p>
          <p class="data">${new Date().toLocaleDateString()}</p>
      </div>
      <div class="topic-title">
          <a href="post.html?titulo=${tituloCodificado}&conteudo=${conteudoCodificado}" target="_blank">
              <h1>${txt}</h1>
          </a>
      </div>
  `;

  // Adiciona o novo post na Home
  posts.appendChild(novoPost);

  // Limpa os campos de entrada
  document.getElementById("texto").value = "";
  document.getElementById("conteudo").value = "";
}



function showSection() {
  let section = document.getElementById("create-post");
  section.style.display = "block";
  section.style.opacity = 0;
  setTimeout(() => {
      section.style.opacity = 1;
      section.style.transition = "opacity 0.3s ease-in-out";
  }, 10);
}

function hideSection() {
  let section = document.getElementById("create-post");
  section.style.opacity = 0;
  section.style.transition = "opacity 0.3s ease-in-out";
  setTimeout(() => {
      section.style.display = "none";
  }, 300);
}



