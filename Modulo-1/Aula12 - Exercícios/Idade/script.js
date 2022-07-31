//alert('ola');

function verificar()
{
    var txtano = window.document.getElementById('txtano');
    var data = new Date();
    var anoAtual = data.getFullYear();    

    if (txtano.value == null || txtano.value <= 0 || txtano.value > anoAtual)
    {
        window.alert('<<< Ano inválido >>>');
        return;
    }

    var idade = anoAtual - Number(txtano.value);
    //window.alert('idade = ' + idade);
    //window.alert('anoAtual = ' + anoAtual);
    //window.alert('txtano = ' + txtano.value);

    // /////////////
    var radsex = window.document.getElementsByName('radsexo');
    var genero = '';
        
    if (radsex[0].checked)
    {
        genero = 'Masculino';
    }
    else if (radsex[1].checked)
    {
        genero = 'Feminino';
    }

    // ///////////
    var img = window.document.createElement('img');
    var src = '';

    if (idade <= 3)
    {
        //bebe
        src = 'Bebe.jpg';
    }
    else if (idade < 12)
    {
        //menino
        src = (genero == 'Masculino') ? 'Menino.jpg' : 'Menina.png';
    }
    else if (idade < 19)
    {
        //adolescente
        src = 'Adolescentes.jpg';
    }
    else if (idade < 65)
    {
        //adulto
        src = (genero == 'Masculino') ? 'Homem.jpg' : 'Mulher.jpg';
    }
    else
    {
        //idoso
        src = 'Idoso.jpg';
    }

    img.setAttribute('id', 'foto');
    img.setAttribute('src', src);
    img.setAttribute('width', '300px')
    img.setAttribute('height', '300px')

    var res = window.document.getElementById('res');        
    res.innerHTML = `Pessoa do sexo ${genero} com idade ${idade}`;
    res.innerHTML += (idade > 1) ? ' anos' : ' ano';
    res.appendChild(img);
}