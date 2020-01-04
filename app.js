particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 12,
        "density": {
          "enable": true,
          "value_area": 80
        }
      },
      "color": {
        "value": "#DB7093", //random // #FF69B4
      },
      "shape": {
        "type": "star", // circle edge triangle polygon star 
        "stroke": {
          "width": 6,
          "color": "#FF1493"
        },
        "polygon": {
          "nb_sides": 5
        }
      },
      "opacity": {
        "value": 5,
        "random": false,
        "anim": {
          "enable": true,
          "speed": 10,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 8,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 4,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 50,
        "color": "#FFC0CB",
        "opacity": 9,
        "width": 1.8
      },
      "move": {
        "enable": true,
        "speed": 5,
        "direction": "bottom-left", // none top top-right right bottom-right bottom bottom-left left top-left
        "random": false,
        "straight": false,
        "out_mode": "bounce", // out bounce
        "attract": {
          "enable": true,
          "rotateX": 160,
          "rotateY": 200
        }
      }
    },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse" //grab bubble repulse
      },
      "onclick": {
        "enable": true,
        "mode": "bubble" // push remove bubble repulse
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 4.10,
        "line_linked": {
          "opacity": 0.5
        }
      },
      "bubble": {
        "distance": 4.60,
        "size": 4,
        "duration": 0.3,
        "opacity": 10,
        "speed": 150
      },
      "repulse": {
        "distance": 100,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  }
  }

);