pesquisarOrdenarPorIdade = () => {
    let resultado = document.getElementById("resultado")
  
    firebase.database().ref('usuarios/').orderByChild('idade').once('value', (snapshot) => {
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
  }
  
  pesquisarOrdenarPorNome = () => {
    let resultado = document.getElementById("resultado")
  
    firebase.database().ref('usuarios/').orderByChild('nome').once('value', (snapshot) => {
      resultado.innerHTML = ''
  
      snapshot.forEach((item) => {
  
        let usuario = item.val();
  
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
  }
  
  pesquisarFiltrarPorIdade = () => {
    let resultado = document.getElementById("resultado")
    let idade = document.getElementById("idade").value
    idade = parseInt(idade);
  
    firebase.database().ref('usuarios/').orderByChild('idade').equalTo(idade).once('value', (snapshot) => {
      resultado.innerHTML = ''
  
      snapshot.forEach((item) => {
        let usuario = item.val();
  
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
  }
  
  pesquisarFiltrarPorNome = () => {
    let resultado = document.getElementById("resultado")
    let nome = document.getElementById("nome").value
  
    firebase.database().ref('usuarios/').orderByChild('nome').startAt(nome).endAt(nome + '\uf8ff').once('value', (snapshot) => {
      resultado.innerHTML = ''
      snapshot.forEach((item) => {
        let usuario = item.val();
  
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
  }