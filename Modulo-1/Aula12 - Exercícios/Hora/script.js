//alert('ola');

function carregar()
{
    var data = new Date();
    var hora = data.getHours();
    var imagem = window.document.getElementById('imagem');
    var msg = window.document.getElementById('msg');

    var hh = data.getHours().toString().padStart(2,'0');
    var mm = data.getMinutes().toString().padStart(2,'0');
    var hhmm = hh + ':' + mm;

    if (hora >= 0 && hora < 12)
    {
        // manhã
        imagem.src = 'manha.jpg';
        msg.innerHTML = `Agora são ${hhmm} horas da manhã`;
        window.document.body.style.background = 'yellow';
    }
    else if (hora >= 12 && hora < 18)
    {
        // tarde
        imagem.src = 'tarde.jpg';
        msg.innerHTML = `Agora são ${hhmm} horas da tarde`;
        window.document.body.style.background = 'blue';
    }
    else
    {
        // noite
        imagem.src = 'noite.jpg';
        msg.innerHTML = `Agora são ${hhmm} horas da noite`;
        window.document.body.style.background = 'grey';
    }
}
