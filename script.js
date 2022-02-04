function mudar(el){
    let trocar = document.getElementById(el).style.display;
    if(trocar == "inline")
        document.getElementById(el).classList.add('classDeAdesao');
    else
    document.getElementById(el).classList.add('classDeAdesao');
};
function fim(){
    let voltar = document.getElementById("home");
    let voltar2 = document.getElementById("pag2");
    voltar2.classList.remove('classDeAdesao')

    voltar.classList.remove('classDeAdesao')
}
    
