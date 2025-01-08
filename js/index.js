  /*
    Sticky header on scroll
   */
document.addEventListener('DOMContentLoaded', () => {
    "use strict";

  const selectHeader = document.querySelector('#nav');
  if (selectHeader) {
    document.addEventListener('scroll', () => {
      window.scrollY > 100 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
      window.scrollY > 100 ? document.getElementById('top-site').classList.add('visible') : document.getElementById('top-site').classList.remove('visible');
    });
  }
});

function showMenu(){ 
    window.scrollTo({
        top: 0, // A posição desejada (0 significa topo)
        behavior: 'smooth' // Animação suave
    });
    document.getElementById('section-left').classList.toggle('hidden');
}
//INICIO DINAMIC TEXT DINAMIC TEXT DINAMIC TEXT
function trocar1(){document.getElementById('textoDinamico').innerHTML='<span style="color:blue">Fácil<span>';setTimeout("trocar2()", 2000);}
function trocar2(){document.getElementById('textoDinamico').innerHTML='<span style="color:red">Eficaz<span>';setTimeout("trocar3()", 2000);} 
function trocar3(){document.getElementById('textoDinamico').innerHTML='<span style="color:green">Rápida<span>';setTimeout("trocar1()", 2000);}

 //function Aumeuntarpjnum(){document.getElementById('pjnum').classList.toggle('tamanhopjnum1');setTimeout("Reduzirpjtnum()",500);}   
 //function Reduzirpjtnum(){document.getElementById('pjnum').classList.toggle('tamanhopjnum2');setTimeout("Aumeuntarpjnum()",500);}  

/*
    //OPÇÃO1
    //function trocartxt(){const tspan=document.querySelectorAll('txtdinamico'); tspan.forEach(mostrar);}
    //function mostrar(iten){document.getElementById('demo').innerHTML=iten.innerHTML;}
    //OPÇÃO2
    //const txts=["rapida", "eficaz","facil"];
    //for (i=0; i <txts.length; i++){ document.getElementById('demo').innerHTML=txts[i]; setInterval(3000);}

    //OPÇÃO3   
    const txts=document.querySelectorAll('txtdinamico');
       txts.forEach(mostrartxt);
       function mostrartxt(iten,index){iten[index].classList.toggle('invisivel');}
       function visibilizar(){this.classList.toggle('invisivel');}

*/
//FIM DO TEXTO DINÁMICO

/*-------------------------------------------
     INICIO PESQUISAR POR PROJECTOS EM MINICARDS
--------------------------------------------*/
document.addEventListener('DOMContentLoaded', function () {
    const categorias = document.querySelectorAll('.categoria5');
    const miniCards = document.querySelectorAll('.mini-card');

    // Função para aplicar o filtro
    function filtrarCategoria(categoria) {
        miniCards.forEach(card => {
            // Exibe todos os cartões se a categoria for 'all'
            if (categoria === 'all') {
                card.style.display = 'flex'; // Exibe todos os cartões
            } else if (card.classList.contains(categoria)) {
                card.style.display = 'flex'; // Exibe os cartões que correspondem à categoria
            } else {
                card.style.display = 'none'; // Oculta os cartões que não correspondem à categoria
            }
        });
    }

    // Adicionando o evento de clique nas categorias
    categorias.forEach(categoria => {
        categoria.addEventListener('click', function () {
            const categoriaSelecionada = categoria.getAttribute('data-category');
            filtrarCategoria(categoriaSelecionada);
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("buscarProjecto");
    const miniCards = document.querySelectorAll(".mini-card");

    searchInput.addEventListener("input", () => {
        const query = searchInput.value.trim().toLowerCase();

        miniCards.forEach(card => {
            const title = card.querySelector(".title").textContent.toLowerCase();
            const subtitle = card.querySelector(".subtitle").textContent.toLowerCase();

            // Verifica se o título ou subtítulo contém a query
            if (title.includes(query) || subtitle.includes(query)) {
                card.style.display = ""; // Mostra o card
            } else {
                card.style.display = "none"; // Esconde o card
            }
        });
    });
});
/*-------------------------------------------
     FIM PESQUISAR POR PROJECTOS EM MINICARDS
--------------------------------------------*/

/*------------------------------------------------
    INICIO SLIDE DE PROJECTOS INTEGRADOS VISÃO MAIOR 
-------------------------------------------------*/
//Método extender readme
function extender(valor){  
    if (valor === 'readme-orkazy'){
        document.getElementById('readme-orkazy').classList.toggle('scrollOn');
    }else if(valor === 'readme-lucar'){
        document.getElementById('readme-lucar').classList.toggle('scrollOn');
    }else if(valor === 'readme-portfolio-ukwally'){
        document.getElementById('readme-portfolio-ukwally').classList.toggle('scrollOn');
    }else if (valor === 'readme-uninet'){
        document.getElementById('readme-uninet').classList.toggle('scrollOn');
    }else if (valor === 'readme-finnet'){
        document.getElementById('readme-finnet').classList.toggle('scrollOn');
    }else if(valor === 'readme-logest'){
        document.getElementById('readme-logest').classList.toggle('scrollOn');
    }else if (valor === 'readme-logo-orkazy'){
        document.getElementById('readme-logo-orkazy').classList.toggle('scrollOn');
    }

    // tentar fazer com iteração em um array
    var readme = ['readme-orkazy','readme-lucar','readme-portfolio-ukwally','readme-uninet','readme-finnet'];
}

let currentProjectIndex = 0;
let filteredProjects = [];
const allProjects = document.querySelectorAll('.project');

// Função para navegar entre os projetos filtrados
function navigate(direction) {
    if (filteredProjects.length === 0) return;

    filteredProjects[currentProjectIndex].style.display = 'none'; // Esconde o projeto atual
    currentProjectIndex += direction;

    if (currentProjectIndex < 0) {
        currentProjectIndex = filteredProjects.length - 1;
    } else if (currentProjectIndex >= filteredProjects.length) {
        currentProjectIndex = 0;
    }

    filteredProjects[currentProjectIndex].style.display = 'flex'; // Exibe o próximo projeto
    document.querySelector('.totalProjects').textContent = `${currentProjectIndex + 1} de ${filteredProjects.length}`;
}

// Função para filtrar projetos por categoria
function filterProject(category) {
    currentProjectIndex = 0; // Reinicia o índice do projeto
    filteredProjects = Array.from(allProjects).filter(project => {
        const match = category === 'all' || project.dataset.category === category;
        project.style.display = 'none'; // Esconde todos os projetos inicialmente
        return match;
    });

    // Atualiza o total de projetos e exibe o primeiro projeto filtrado
    if (filteredProjects.length > 0) {
        filteredProjects[0].style.display = 'flex'; // Exibe o primeiro projeto da categoria filtrada
        document.querySelector('.totalProjects').textContent = `1 de ${filteredProjects.length}`;
    } else {
        document.querySelector('.totalProjects').textContent = `0 de 0`;
    }
}

// Inicializa o primeiro projeto como ativo
document.addEventListener('DOMContentLoaded', () => {
    filterProject('all'); // Exibe todos os projetos inicialmente
});

/*--------------------------------------------------
    INICIO SLIDE DE PROJECTOS INTEGRADOS VISÃO MAIOR 
-------------------------------------------------*/



/*----------------------
  INICIO COMENTARIOS
  -------------------*/ 

function scrollOff(){ 
    document.getElementById('commit-body').classList.toggle('scrollOff');
    document.getElementById('menos-commit').classList.toggle('mais-menos-commit');
    document.getElementById('mais-commit').classList.toggle('mais-menos-commit');
}
/*----------------------
  FIM COMENTARIOS
  -------------------*/ 

//  DIALOGS DIALOGS DIALOGS DIALOGS DIALOGS
function mostrarDialogo1(){document.getElementById('dialogo1').showModal(); /*document.getElementById('bodys').style="opacity: .20;"*/}
function fecharDialogo1(){document.getElementById('dialogo1').close()}
function mostrarDialogo2(){document.getElementById('dialogo2').showModal();}
function fecharDialogo2(){document.getElementById('dialogo2').close()}
function mostrarDialogo3(){document.getElementById('dialogo3').showModal();}
function fecharDialogo3(){document.getElementById('dialogo3').close()}
function mostrarDialogo4(){document.getElementById('dialogo4').showModal();}
function fecharDialogo4(){document.getElementById('dialogo4').close();}
function mostrarDialogo6(){document.getElementById('dialogo6').showModal();}
function fecharDialogo6(){document.getElementById('dialogo6').close();}


//INICIAM MENSSAGEM
function iniciarMensagem(){
    document.getElementById("footer-around").classList.toggle("hiddenMsgBox");
    document.getElementById("div-blur").classList.toggle("hidden");
}
function MostrarCampoEmail(){document.getElementById("message-head").classList.toggle("hidden");}
function changeBoxSize(){
    //descomentar isto abaixo e resolver o problema
    //document.getElementById('messagebox').style="height:100px; overflow:hidden;";
    document.getElementById('message-head').classList.remove('hidden');
}
function resize(){
    document.getElementById('messagebox').style="height:; overflow:hidden";
    /* entender este código e talvez usar
      const messageHead = document.getElementById('message-head');
        const messageBox = document.getElementById('messagebox');
        // Verifica se o messagebox NÃO está em foco
        if (document.activeElement !== messageBox) {
            messageHead.classList.add('hidden');  // Adiciona a classe 'hidden' se não estiver em foco
        } else {
            messageHead.classList.remove('hidden');  // Remove a classe 'hidden' se estiver em foco
        }
     */
        // Adiciona um listener para o clique fora de #div-message
    document.addEventListener('click', function(event) {
        const divMessage = document.getElementById('div-message');
        const messageHead = document.getElementById('message-head');
        
        // Verifica se o clique foi fora de #div-message
        if (!divMessage.contains(event.target)) {
            messageHead.classList.add('hidden');
        }
    });

}
function hide_Message_Head(){
    // ou chamar este método quando for clicado fora (do divmessage (on blur?)) 
    document.getElementById('message-head').classList.add('hidden');
}
//FIM INICIAM MENSSAGEM


function addLike(){
    let like=0;
    like=like+1;
    document.getElementById('like').innerHTML=like;
}
function addHate(){
    var hate=0;
    hate=hate+1; 
    document.getElementById('hate').innerHTML=hate;}
/**-----------------------------
 * FIM BANNER SLIDE
 --------------------------------*/
/*/INICIO TROCAR AUTOMÁTICO SEM A FUNCIONALIDADE DE BOTÃO AVANCAR E RECUAR( eSTUDAR ESTE CÓDIGO ANTES DE PASSAR PARA O A SEGUIR)
function slide1(){
    document.getElementById('bannerp').src="./img/dev1.jpg";
    document.getElementById('bannerp').classList.toggle('sombra');
    document.getElementById('bannertxt').innerHTML='Websites' + ' <style="display:none;" class="bannerTxtBr"br>'+' Eficientes';
    document.getElementById('bannertxt').classList.add('aparecerY');
    setTimeout(() => {
        document.getElementById('bannertxt').classList.remove('aparecerY')
    }, 2980);//para remover a class aparecerY apos 2980ms e poder voltar a adiciona-la no slide2.fiz isto porque quando a class é adicionado o bannertxt fica em baixo e mesmo quando muda o texto ele não volta a subir,por isso tenho de remover a class para ele subir e voltar a adiciona-la no slide seguinte para ele baixar e assim sucessivamente

    setTimeout("slide2()", 3000)
    }
    
    function slide2(){
    document.getElementById('bannerp').src="./img/dev2.jpg";
    document.getElementById('bannerp').classList.toggle('desaparecer');
    document.getElementById('bannertxt').innerHTML='Tutorias '+' <style="display:none;" class="bannerTxtBr"br>'+' Solidas';
    document.getElementById('bannertxt').classList.add('aparecerY'); //adiciona a class aparecerY
    setTimeout(() => {
        document.getElementById('bannertxt').classList.remove('aparecerY')
    }, 2980); // depois de alguns segundos remove a class aparecerY

    setTimeout("slide3()", 3000)
    }

    function slide3(){
    document.getElementById('bannerp').src="./img/dev3.jpg";
    document.getElementById('bannerp').classList.toggle('aparecer1');
    document.getElementById('bannertxt').innerHTML='Serviços' + ' <style="display:none;" class="bannerTxtBr"br>'+'confiaveis';
    document.getElementById('bannertxt').classList.add('aparecerY'); //adiciona a class aparecerY
    setTimeout(() => {
        document.getElementById('bannertxt').classList.remove('aparecerY')
    }, 2980); // depois de alguns segundos remove a class aparecerY

    setTimeout("slide4()", 3000)
    }

    function slide4(){
    document.getElementById('bannerp').src="./img/dev4.jpg";
    document.getElementById('bannerp').classList.toggle('sombra');
    document.getElementById('bannertxt').innerHTML='Design'+ ' <style="display:none;" class="bannerTxtBr"br>'+' Gráfico';
    document.getElementById('bannertxt').classList.add('aparecerY'); //adiciona a class aparecerY
    setTimeout(() => {
        document.getElementById('bannertxt').classList.remove('aparecerY')
    }, 2980); // depois de alguns segundos remove a class aparecerY

    setTimeout("slide5()", 3000)
    }

    function slide5(){
    document.getElementById('bannerp').src="./img/dev5.jpg";
    document.getElementById('bannerp').classList.toggle('sombra');
    document.getElementById('bannertxt').innerHTML="Hospedagem";
    document.getElementById('bannertxt').classList.add('aparecerY'); //adiciona a class aparecerY
    setTimeout(() => {
        document.getElementById('bannertxt').classList.remove('aparecerY')
    }, 2980); // depois de alguns segundos remove a class aparecerY

    setTimeout("slide6()", 3000)
    }

    function slide6(){
    document.getElementById('bannerp').src="./img/dev6.jpg";
    document.getElementById('bannerp').classList.toggle('sombra');
    document.getElementById('bannertxt').innerHTML='Assistencia '+ '<style="display:none;" class="bannerTxtBr"br>'+' tecnica';
    document.getElementById('bannertxt').classList.add('aparecerY'); //adiciona a class aparecerY
    setTimeout(() => {
        document.getElementById('bannertxt').classList.remove('aparecerY')
    }, 2980); // depois de alguns segundos remove a class aparecerY

    setTimeout("slide7()", 3000)
    }
    
    function slide7(){
    document.getElementById('bannerp').src="./img/dev7.jpg";
    document.getElementById('bannerp').classList.toggle('sombra');
    document.getElementById('bannertxt').innerHTML="Explore!";
    document.getElementById('bannertxt').classList.add('aparecerY'); //adiciona a class aparecerY
    setTimeout(() => {
        document.getElementById('bannertxt').classList.remove('aparecerY')
    }, 2980); // depois de alguns segundos remove a class aparecerY

    setTimeout("slide1()", 3000)
    }
// FIM TROCAR AUTOMÁTICO TROCAR AUTOMÁTICO TROCAR AUTOMÁTICO*/

//INICIO TROCAR AUTOMÁTICOM COM A FUNCIONALIDADE DE BOTÃO AVANCAR E RECUAR
let currentSlide = 1; // Índice do slide atual

// Função que atualiza o banner de acordo com o índice do slide
function updateBanner() {
    const banner = document.getElementById('bannerp');
    const text = document.getElementById('bannertxt');

    switch (currentSlide) {
        case 1:
            banner.src = "./img/dev3.jpg";
            text.innerHTML = 'Websites' + ' <style="display:none;" class="bannerTxtBr"br>'+' Eficientes';
            break;
        case 2:
            banner.src = "./img/dev9.jpg";
            text.innerHTML = 'Tutorias '+' <style="display:none;" class="bannerTxtBr"br>'+' Solidas';
            break;
        case 3:
            banner.src = "./img/dev4.jpg";
            text.innerHTML = 'Serviços' + ' <style="display:none;" class="bannerTxtBr"br>'+'confiaveis';
            break;
        case 4:
            banner.src = "./img/dev5.jpg";
            text.innerHTML = 'Design'+ ' <style="display:none;" class="bannerTxtBr"br>'+' Gráfico';
            break;
        case 5:
            banner.src = "./img/dev6.jpg";
            text.innerHTML = 'Hospedagem';
            break;
        case 6:
            banner.src = "./img/dev10.jpg";
            text.innerHTML = 'Assistencia '+ '<style="display:none;" class="bannerTxtBr"br>'+' tecnica';
            break;
        case 7:
            banner.src = "./img/dev7.jpg";
            text.innerHTML = 'Explore!';
            break;
        default:
            currentSlide = 1;
            updateBanner();
            return;
    }

    // Adiciona a animação do texto
    text.classList.add('aparecerY');
    setTimeout(() => {
        text.classList.remove('aparecerY');
    }, 2980); // Duração da animação
}

// Função para avançar o slide
function nextSlide() {
    currentSlide = (currentSlide % 7) + 1; // Vai de 1 a 7
    updateBanner();
}

// Função para voltar ao slide anterior
function prevSlide() {
    currentSlide = (currentSlide - 2 + 7) % 7 + 1; // Vai de 7 a 1
    updateBanner();
}

// Funções que iniciam os slides automaticamente
function startSlides() {
    updateBanner();
    setInterval(() => {
        currentSlide = (currentSlide % 7) + 1;
        updateBanner();
    }, 3000); // Troca de slide a cada 3 segundos
}

// Adiciona os eventos de clique nos botões
document.querySelector('.btNext').addEventListener('click', nextSlide);
document.querySelector('.btBefore').addEventListener('click', prevSlide);

// Inicia os slides automaticamente
startSlides();
//FIM TROCAR AUTOMÁTICOM COM A FUNCIONALIDADE DE BOTÃO AVANCAR E RECUAR
/**-----------------------------
 * FIM BANNER SLIDE
 --------------------------------*/