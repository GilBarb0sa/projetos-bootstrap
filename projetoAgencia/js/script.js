$(document).ready(function() {  /* instruçao jquery = inicia script somente quando o doc estiver pronto = carregar todo*/
  
  //Progress bar      
  let containerA = document.getElementById("circleA");

  //Animação do Circulo
  let circleA = new ProgressBar.Circle(containerA, {

    color: '#64daf9',
    strokeWidth: 8,
    duration: 1400,
    from: { color: '#AAA'},
    to: { color: '#65daf9'},

    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      let value = Math.round(circle.value() * 60);
      circle.setText(value);
    }
  });
     
    let containerB = document.getElementById("circleB");

    let circleB = new ProgressBar.Circle(containerB, {
  
      color: '#64daf9',
      strokeWidth: 8,
      duration: 1400,
      from: { color: '#AAA'},
      to: { color: '#65daf9'},
  
      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        let value = Math.round(circle.value() * 254);
        circle.setText(value);
      }
    });

    let containerC = document.getElementById("circleC");

    let circleC = new ProgressBar.Circle(containerC, {
  
      color: '#64daf9',
      strokeWidth: 8,
      duration: 2000,
      from: { color: '#AAA'},
      to: { color: '#65daf9'},
  
      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        let value = Math.round(circle.value() * 32);
        circle.setText(value);
      }
    });

    let containerD = document.getElementById("circleD");

    let circleD = new ProgressBar.Circle(containerD, {
  
      color: '#64daf9',
      strokeWidth: 8,
      duration: 2200,
      from: { color: '#AAA'},
      to: { color: '#65daf9'},
  
      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        let value = Math.round(circle.value() * 5243);
        circle.setText(value);
      }
    });

  //Iniciando o loader quanto o usuario chega no elemento  
  let dataAreaOffset = $('#data-area').offset();
  let stop = 0;

  $(window).scroll(function(e){
    let scroll = $(window).scrollTop();  //Pega a posição do scroll do usuario
    if(scroll > (dataAreaOffset.top - 500) && stop ==0) {
      
        circleA.animate(1.0);
        circleB.animate(1.0);
        circleC.animate(1.0);
        circleD.animate(1.0);

        stop = 1;
    }
  });


  //Parallax
  setTimeout(function() { //carrega todo conteudo da pagina primeira, para não bugar o parallax

    $('#data-area').parallax({imageSrc: 'img/cidadeparallax.png'});
    $('#apply-area').parallax({imageSrc: 'img/pattern.png'});

  }, 250);

  // Filtro do portfólio

  $('.filter-btn').on('click', function() {

    let type = $(this).attr('id');
    let boxes = $('.project-box');

    $('.main-btn').removeClass('active');
    $(this).addClass('active');

    if(type == 'dsg-btn') {
      eachBoxes('dsg', boxes);
    } else if(type == 'dev-btn') {
      eachBoxes('dev', boxes);
    } else if(type == 'seo-btn') {
      eachBoxes('seo', boxes);
    } else {
      eachBoxes('all', boxes) ;
    }
  });

  function eachBoxes(type, boxes) {

    if(type == 'all') {
      $(boxes).fadeIn();     
    } else {
      $(boxes).each(function() {
        if(!$(this).hasClass(type)) {
          $(this).fadeOut('slow');
        } else {
          $(this).fadeIn();
        }
      });
    }
  }
});

