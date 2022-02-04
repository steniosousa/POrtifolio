function mudar(el){
    let trocar = document.getElementById(el).style.display;
    if(trocar == "inline")
        document.getElementById(el).classList.add('classDeAdesao');
    else
    document.getElementById(el).classList.add('classDeAdesao');
};
// function fim(){
//     let voltar = document.getElementById("home");
//     let voltar2 = document.getElementById("pag2");
//     voltar2.classList.remove('classDeAdesao')

//     voltar.classList.remove('classDeAdesao')
// }


function typeWriter(elemento) {
    let textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
      setTimeout(() => elemento.innerHTML += letra, 75 * i);
    });
  }

  const titulo = document.querySelector('.digitar');
  typeWriter(titulo);
    
  function typeWriter2(elemento) {
    let textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
      setTimeout(() => elemento.innerHTML += letra, 55 * i);
    });
  }
  const titulo2 = document.querySelector('.digitar2');
  typeWriter2(titulo2);


//   function fim() {
//         let data1 = document.getElementById("data").classList.remove('sumir');
//         let data2 = document.getElementById("data").classList.add('data');
//    }
//    setTimeout(fim, 9000);


   function fim() {
    setTimeout(function () {
      let voltar = document.getElementById("home");
     let voltar2 = document.getElementById("pag2");
     let voltar3 = document.getElementById("pag3");
     voltar3.classList.remove('classDeAdesao')
      voltar2.classList.remove('classDeAdesao')
     voltar.classList.remove('classDeAdesao')
      fim();
  }, 3000);
    setTimeout(function () {
        let data1 = document.getElementById("data").classList.remove('sumir');
       let data2 = document.getElementById("data").classList.add('data');
        fim();
    }, 2000);
    setTimeout(function () {
        let data1 = document.getElementById("data2").classList.remove('sumir');
        let data2 = document.getElementById("data2").classList.add('data');
        fim();
    }, 1500);
    setTimeout(function () {
        let data1 = document.getElementById("data3").classList.remove('sumir');
       let data2 = document.getElementById("data3").classList.add('data');
        fim();
    }, 1000);
}

