

function postar() {
    let txt = document.getElementById("texto").value;
    let areaTexto = document.getElementById("conteudo").value;
    let posts = document.getElementById("posts");

    if (txt.trim() === "") {
        alert("O título está vazio!");
        return;
    }

    if (areaTexto.trim() === "") {
        alert("O conteúdo está vazio!");
        return;
    }

    const post = {
        id: Date.now(), // Cria um ID único
        titulo: txt,
        conteudo: areaTexto,
        data: new Date().toLocaleDateString()
    };

    // Salvar no Local Storage
    let savedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    savedPosts.push(post);
    localStorage.setItem("posts", JSON.stringify(savedPosts));

    // Criar o post no DOM imediatamente
    const novoPost = document.createElement("div");
    novoPost.className = "post";
    novoPost.setAttribute('data-id', post.id); // Para identificar o post

    novoPost.innerHTML = `
        <div class="user">
            <img class="icon" src="images/pato icon.jpg" alt="">
            <p class="nickname">Davi</p>
            <p class="data">${post.data}</p>
        </div>
        <div class="topic-title">
            <a href="post.html?id=${post.id}" target="_blank">
                <h1>${post.titulo}</h1>
            </a>
            <button class="delete-btn" onclick="deletarPost(${post.id})">Deletar</button>
        </div>
    `;

    posts.appendChild(novoPost);

    // Limpar campos
    document.getElementById("texto").value = "";
    document.getElementById("conteudo").value = "";
}


window.onload = function carregarPosts() {
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    const postsContainer = document.getElementById("posts");

    posts.forEach(post => {
        const novoPost = document.createElement("div");
        novoPost.className = "post";

        novoPost.innerHTML = `
            <div class="user">
                <img class="icon" src="images/pato icon.jpg" alt="">
                <p class="nickname">Davi</p>
                <p class="data">${post.data}</p>
            </div>
            <div class="topic-title">
                <a href="post.html?id=${post.id}" target="_blank">
                    <h1>${post.titulo}</h1>
                </a>
                 <button class="delete-btn" onclick="deletarPost(${post.id})">Deletar</button>
            </div>
        `;
       
        postsContainer.appendChild(novoPost);
    });
};
function deletarPost(postId) {
    // Remover do DOM
    const postElement = document.querySelector(`.post[data-id='${postId}']`);
    if (postElement) postElement.remove();

    // Atualizar o Local Storage
    let savedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    savedPosts = savedPosts.filter(post => post.id !== postId); // Remove o post com o ID correspondente
    localStorage.setItem("posts", JSON.stringify(savedPosts));
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

