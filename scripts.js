

function postar(){
    let txt = document.getElementById("texto").value;
    let posts = document.getElementById("posts")


   if (txt.length === 1 ){
    alert("O Formulário está vazio amigo")
   } else if (txt.length > 1){
    const novoPost = document.createElement("div")
    novoPost.className = 'post'

    novoPost.innerHTML = `
            <div id="user">
              <img id="icon" src="images/pato icon.jpg" alt="">
              <p id="nickname">Davi</p>
              <p id="data">${new Date().toLocaleDateString()}</p>
            </div>
            
            <div id="topic-title">
              <h1>${txt}</h1>

            </div>
          
          `

   posts.appendChild(novoPost)
   }
}

function showSection(){
  let section = document.getElementById("create-post")
  section.style.display = "block"
}
function hideSection(){
  let section = document.getElementById("create-post")
  section.style.display = "none"
}