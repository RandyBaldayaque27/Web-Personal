//Función para mostrar un mensaje de bienvenida
function showWelcomeMessage() {
    var message = "¡Bienvenido a mi página web personal!";
    alert(message);
  }
  
  //Llamar a la función cuando la página se cargue
  window.onload = showWelcomeMessage;

  //Función para cambiar el color de fondo
function changeBackgroundColor() {
    var colors = ["red", "green", "blue", "yellow", "pink"];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.background = randomColor;
  }


  //Función para enviar un comentario
function submitComment() {
    var newComment = document.getElementById("newComment").value;
    var commentDiv = document.getElementById("comments");
    var comment = document.createElement("p");
    comment.innerHTML = newComment;
    commentDiv.appendChild(comment);
    document.getElementById("newComment").value = "";
  }
  