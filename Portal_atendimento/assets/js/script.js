
// VALIDAÇÃO DO FORMULÁRIO
// Capturar formulário
const form = document.getElementById("formCadastro");

// Capturar inputs
const nomeInput = document.getElementById("nome");
const emailInput = document.getElementById("email");
const telefoneInput = document.getElementById("telefone");
const cursoInput = document.getElementById("curso");
const termosInput = document.getElementById("termos");

// Capturar spans de erro
const erroNome = document.getElementById("erroNome");
const erroEmail = document.getElementById("erroEmail");
const erroTelefone = document.getElementById("erroTelefone");
const erroCurso = document.getElementById("erroCurso");
const erroTurno = document.getElementById("erroTurno");
const erroTermos = document.getElementById("erroTermos");

// Máscara de telefone
telefoneInput.addEventListener("input", function () {
    let telefone = telefoneInput.value.replace(/\D/g, "");

    if (telefone.length > 2 && telefone.length <= 7) {
        telefone = "(" + telefone.slice(0, 2) + ") " + telefone.slice(2);
    } else if (telefone.length > 7) {
        telefone =
            "(" + telefone.slice(0, 2) + ") " +
            telefone.slice(2, 7) +
            "-" +
            telefone.slice(7, 11);
    }

    telefoneInput.value = telefone;
});

// Validação do formulário
form.addEventListener("submit", function (event) {

    event.preventDefault();

    let formValidado = true;

    // Nome
    if (nomeInput.value.trim() === "") {
        erroNome.innerText = "O nome é obrigatório";
        nomeInput.style.border = "2px solid red";
        formValidado = false;
    } else {
        erroNome.innerText = "";
        nomeInput.style.border = "2px solid green";
    }

    // Email
    if (emailInput.value.trim() === "") {
        erroEmail.innerText = "O e-mail é obrigatório";
        emailInput.style.border = "2px solid red";
        formValidado = false;
    } else {
        erroEmail.innerText = "";
        emailInput.style.border = "2px solid green";
    }

    // Telefone
    if (telefoneInput.value.replace(/\D/g, "").length < 10) {
        erroTelefone.innerText = "Telefone inválido";
        telefoneInput.style.border = "2px solid red";
        formValidado = false;
    } else {
        erroTelefone.innerText = "";
        telefoneInput.style.border = "2px solid green";
    }

    // Curso
    if (cursoInput.value === "") {
        erroCurso.innerText = "Selecione um curso";
        cursoInput.style.border = "2px solid red";
        formValidado = false;
    } else {
        erroCurso.innerText = "";
        cursoInput.style.border = "2px solid green";
    }

    // Turno
    const turnoSelecionado = document.querySelector(
        'input[name="turno"]:checked'
    );

    if (!turnoSelecionado) {
        erroTurno.innerText = "Selecione um turno";
        formValidado = false;
    } else {
        erroTurno.innerText = "";
    }

    // Termos
    if (!termosInput.checked) {
        erroTermos.innerText = "Você deve aceitar os termos";
        formValidado = false;
    } else {
        erroTermos.innerText = "";
    }

    // Resultado
    if (formValidado) {
        alert("Dados coletados com sucesso! 👌");
        window.location.href = "index.html";
    } else {
        alert("Erro ao cadastrar! Verifique os campos e tente novamente ❌");
    }
});