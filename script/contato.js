const formulario = document.getElementById('meuFormulario')

formulario.addEventListener('submit', function (event) {

    event.preventDefault()

    var nome = document.getElementById('nome').value
    console.log(nome)
    alert(nome)

    var telefone = document.getElementById('telefone').value
    console.log(telefone)
    alert(telefone)

    var assunto = document.getElementById('assunto').value
    console.log(assunto)
    alert(assunto)

    var mensagem = document.getElementById('mensagem').value
    console.log(mensagem)
    alert(mensagem)

    window.location.href = 'envio.html' + 
    '?nome=' + encodeURIComponent(nome) +
    '&telefone=' + encodeURIComponent(telefone) +
    '&assunto=' + encodeURIComponent(assunto) +
    '&mensagem=' + encodeURIComponent(mensagem) 
})