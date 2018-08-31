const resultado = document.getElementById("resultado")

cadastrar = () => {
  let nome = document.getElementById("nome").value;
  let idade = document.getElementById("idade").value;
  let chave = firebase.database().ref().child('usuarios/').push().key;

  let usuario = {
    nome: nome,
    idade: parseInt(idade)
  };

  firebase.database().ref('usuarios/' + chave).set(usuario);
}

deletar = (id) => {
  firebase.database().ref('usuarios/' + id).remove();
}

firebase.database().ref('usuarios/').on('value', (snapshot) => {
  resultado.innerHTML = ''

  snapshot.forEach((item) => {
    let usuario = item.val()
    let lista = document.createElement("p")
    let deletarUsuario = document.createElement("input")
    deletarUsuario.type = 'button'
    deletarUsuario.value = 'Deletar'
    deletarUsuario.onclick = () => { deletar(item.key) }

    lista.appendChild(document.createTextNode(usuario.nome + ' - ' + usuario.idade + ' - '))
    lista.appendChild(deletarUsuario)

    resultado.appendChild(lista)
  })
})
