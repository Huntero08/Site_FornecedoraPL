document.getElementById("form-contato").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const mensagem = document.getElementById("mensagem").value;

    if (nome && email && telefone && mensagem) {
        alert(`Obrigado pelo contato, ${nome}! Em breve entraremos em contato.`);
    } else {
        alert('Por favor, preencha todos os campos.');
    }

   
    document.getElementById("form-contato").reset();
});
