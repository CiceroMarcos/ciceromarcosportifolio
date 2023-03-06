function validaForm() {
    let validaCod = document.forms["cadastro"]["codigo"].value;
    let validaDat = document.forms["cadastro"]["data"].value;
    let validaTit = document.forms["cadastro"]["titulo"].value;
    let validaDir = document.forms["cadastro"]["diretor"].value;
    let validaAtr = document.forms["cadastro"]["ator"].value;
    let validaNot = document.forms["cadastro"]["nota"].value;
    let validaRad = document.forms["cadastro"]["radio"].value;

    if (validaCod == "") {
        alert("O código deve ser preenchido!");
        return false;
    }
    if (validaDat == "") {
        alert("A data deve ser preenchida!");
        return false;
    }
    if (validaTit == "") {
        alert("O título deve ser preenchido!");
        return false;
    }
    if (validaDir == "") {
        alert("O nome do diretor deve ser preenchido!");
        return false;
    }
    if (validaAtr == "") {
        alert("O nome do ator/atriz principal deve ser preenchido!");
        return false;
    }
    if (validaNot == "") {
        alert("A nota IMDb deve ser preenchidoa");
        return false;
    }
    if (validaRad == "") {
        alert("O gênero deve ser marcado!");
        return false;
    }
}

function insere() {
    let cod = document.forms["cadastro"]["codigo"].value;
    let dat = document.forms["cadastro"]["data"].value;
    let tit = document.forms["cadastro"]["titulo"].value;
    let dir = document.forms["cadastro"]["diretor"].value;
    let atr = document.forms["cadastro"]["ator"].value;
    let not = document.forms["cadastro"]["nota"].value;
    let rad = document.forms["cadastro"]["radio"].value;

    let inserir = document.getElementById("inserirTabela");
    inserir.innerHTML = `<th scope="row">${cod}</th>`;
    inserir.innerHTML += `<td>${tit}</td>`;
    inserir.innerHTML += `<td>${dir}</td>`;
    inserir.innerHTML += `<td>${dat}</td>`;
    inserir.innerHTML += `<td>${rad}</td>`;
    inserir.innerHTML += `<td>${atr}</td>`;
    inserir.innerHTML += `<td>${not}</td>`;
}