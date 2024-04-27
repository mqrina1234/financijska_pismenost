var imgs = document.querySelectorAll('.slider img');
var dots = document.querySelectorAll('.dot');
var currentImg = 0; // index of the first image 
const interval = 3000; // duration(speed) of the slide
function changeSlide(n) {
    for (var i = 0; i < imgs.length; i++) { // reset
      imgs[i].style.opacity = 0;
      dots[i].className = dots[i].className.replace(' active', '');
    }
  
    currentImg = n;
  
    imgs[currentImg].style.opacity = 1;
    dots[currentImg].className += ' active';
  }


  var img = document.querySelectorAll('.slider1 img');
  var dot = document.querySelectorAll('.dot1');
  var currentIm = 0; // index of the first image 
  function changeSlide1(n) {
      for (var i = 0; i < img.length; i++) { // reset
        img[i].style.opacity = 0;
        dot[i].className = dot[i].className.replace(' active', '');
      }
    
      currentIm = n;
    
      img[currentIm].style.opacity = 1;
      dot[currentIm].className += ' active';
    }
  

    var img2 = document.querySelectorAll('.slider2 img');
    var dot2 = document.querySelectorAll('.dot2');
    var currentIm2 = 0; // index of the first image 
    function changeSlide2(n) {
        for (var i = 0; i < img2.length; i++) { // reset
          img2[i].style.opacity = 0;
          dot2[i].className = dot2[i].className.replace(' active', '');
        }
      
        currentIm2 = n;
      
        img2[currentIm2].style.opacity = 1;
        dot2[currentIm2].className += ' active';
      }
    
  

      
    var img3= document.querySelectorAll('.slider3 img');
    var dot3 = document.querySelectorAll('.dot3');
    var currentIm3 = 0; // index of the first image 
    function changeSlide3(n) {
        for (var i = 0; i < img3.length; i++) { // reset
          img3[i].style.opacity = 0;
          dot3[i].className = dot3[i].className.replace(' active', '');
        }
      
        currentIm3 = n;
      
        img3[currentIm3].style.opacity = 1;
        dot3[currentIm3].className += ' active';
      }
    
      var img4= document.querySelectorAll('.slider4 img');
      var dot4 = document.querySelectorAll('.dot4');
      var currentIm4 = 0; // index of the first image 
      function changeSlide4(n) {
          for (var i = 0; i < img4.length; i++) { // reset
            img4[i].style.opacity = 0;
            dot4[i].className = dot4[i].className.replace(' active', '');
          }
        
          currentIm4 = n;
        
          img4[currentIm4].style.opacity = 1;
          dot4[currentIm4].className += ' active';
        }

        var img5= document.querySelectorAll('.slider5 img');
        var dot5 = document.querySelectorAll('.dot5');
        var currentIm5 = 0; // index of the first image 
        function changeSlide5(n) {
            for (var i = 0; i < img5.length; i++) { // reset
              img5[i].style.opacity = 0;
              dot5[i].className = dot5[i].className.replace(' active', '');
            }
          
            currentIm5 = n;
          
            img5[currentIm5].style.opacity = 1;
            dot5[currentIm5].className += ' active';
          }