function hideMenu() {
  document.getElementById('triggerMenu').checked = false;
  $(".header__inner").toggleClass("menuInView");
  $("body").toggleClass("noScroll");
}

function showMsgModal() {
  var modalId = document.getElementById('msgModal');
  modalId.style.display = "block";
  setTimeout(function(){
    $(".msgModal__body").addClass("inView");
  }, 100);
  $("body").addClass("noScroll");
};

function closeMsgModal() {
  var modalId = document.getElementById('msgModal');
  modalId.style.display = "none";
  setTimeout(function(){
    $(".msgModal__body").removeClass("inView");
  }, 100);
  $("#msgModal__colContent2").removeClass("inView");
  $("#msgModal__colContent3").removeClass("inView");
  // document.getElementById('msgModal__colContent2').style.display = "none";
  document.getElementById('msgModal__colContent3').style.display = "none";
  document.getElementById('msgModal__colContent1').style.display = "block";
  $("body").removeClass("noScroll");
};

// function showMsgBox() {
//   document.getElementById('msgModal__colContent1').style.display = "none";
//   var msgBoxId = document.getElementById('msgModal__colContent2');
//   msgBoxId.style.display = "block";
//   // slideToRight
//   setTimeout(function(){
//     $("#msgModal__colContent2").addClass("inView");
//   }, 100);
//
// };

function showSuccess() {
  document.getElementById('msgModal__colContent1').style.display = "none";
  var msgBoxId = document.getElementById('msgModal__colContent3');
  msgBoxId.style.display = "block";
  // slideToRight
  setTimeout(function(){
    $("#msgModal__colContent3").addClass("inView");
  }, 100);
};

function showMenu() {
  var header = document.getElementsByClassName('header__inner')[0];
  $(".header__inner").toggleClass("menuInView");
  $("body").toggleClass("noScroll");
};


//script To change background for Header onScroll Home page START
$(document).bind('scroll', function () {
  if (window.innerWidth < 640) {
    if ($(document).scrollTop() > 80) {
      $('.header__inner').addClass('bgOnScroll');
    } else {
      $('.header__inner').removeClass('bgOnScroll');
    }
  } else {
    if ($(document).scrollTop() > 150) {
      $('.header__inner').addClass('bgOnScroll');
    } else {
      $('.header__inner').removeClass('bgOnScroll');
    }
  }

});



// Questions display START

document.addEventListener('DOMContentLoaded',function(event){
  // array with texts to type in typewriter


  var dataText = [ "Where to buy chic wedding dresses?", "Dreamy pre wedding shoot locations in different cities?", "List of best bridal makeup artists in the city?", "How to plan a destination wedding on a budget?", "Which are the available wedding venues in the city?", "Best wedding photographers under 25k?", "What to gift your sister-in-law for the wedding?", "What should bride’s sister wear during ring ceremony?"];

  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
     document.getElementById("questions").innerHTML = text +'<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  // start a typewriter animation for a text in the dataText array
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 20000);
     }
     // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
     typeWriter(dataText[i], 0, function(){
       // after callback (and whole text has been animated), start next text
       StartTextAnimation(i + 1);
     });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});

// Questions display END
