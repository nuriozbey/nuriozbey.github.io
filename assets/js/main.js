document.addEventListener("DOMContentLoaded", function () {
  new SweetScroll({});
  initParticleEffect(); // Initialize Particle.js on page load

  



  var count_particles, stats, update;
  stats = new Stats();
  stats.setMode(0);
  stats.domElement.style.position = "absolute";
  stats.domElement.style.left = "0px";
  stats.domElement.style.top = "0px";
  document.body.appendChild(stats.domElement);
  count_particles = document.querySelector(".js-count-particles");
  update = function () {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
      count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}, !1);

// theme-button  on click toggle dark/light mode changes background url
const themeButton = document.getElementById('theme-button');

themeButton.onclick = () => {
  // Get the element with the id "particles-js"
  var element = document.getElementById("particles-js");

  // Define the paths to the background images
  var oldImageUrl = './assets/img/webp/bg-light.webp'; // Adjust the path based on your project structure
  var newImageUrl = './assets/img/webp/bg-night.webp'; // Adjust the path based on your project structure

  // Check the current background image and toggle between old and new
  if (getBackgroundImageUrl(element) === oldImageUrl) {
    // Change the color to white
    themeButton.style.color = 'white';
    element.style.backgroundImage = 'url("' + newImageUrl + '")';
    themeButton.setAttribute('icon', 'lucide:sun');
    document.documentElement.style.setProperty('--header-color', '#fff');
  } else {
    element.style.backgroundImage = 'url("' + oldImageUrl + '")';
    themeButton.setAttribute('icon', 'material-symbols:clear-night');
    themeButton.style.color = 'grey';
    document.documentElement.style.setProperty('--header-color', '#04A5E5');
  }
};

// Helper function to get the current background image URL
function getBackgroundImageUrl(element) {
  // Extract the URL from the "url('...')" format
  var backgroundImage = element.style.backgroundImage;
  return backgroundImage.replace(/^url\(["']?/, '').replace(/["']?\)$/, '');
}

// Initialize Particle.js function
  function initParticleEffect() {
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 180,
          density: { enable: true, value_area: 1575.4233950374157 }
        },
        color: { value: "#fff" },
        shape: {
          type: "circle",
          stroke: { width: 0, color: "#000000" },
          polygon: { nb_sides: 5 },
          image: { src: "img/github.svg", width: 100, height: 100 }
        },
        opacity: {
          value: 0.5,
          random: true,
          anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
        },
        size: {
          value: 6,
          random: true,
          anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
        },
        line_linked: {
          enable: false,
          distance: 500,
          color: "#ffffff",
          opacity: 0.4,
          width: 2
        },
        move: {
          enable: true,
          speed: 6,
          direction: "bottom",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: { enable: false, rotateX: 600, rotateY: 1200 }
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "bubble" },
          onclick: { enable: true, mode: "repulse" },
          resize: true
        },
        modes: {
          grab: { distance: 400, line_linked: { opacity: 0.5 } },
          bubble: { distance: 400, size: 4, duration: 0.3, opacity: 1, speed: 3 },
          repulse: { distance: 200, duration: 0.4 },
          push: { particles_nb: 4 },
          remove: { particles_nb: 2 }
        }
      },
      retina_detect: true
    });
  }
// Function to toggle Particle.js effect
function toggleParticleEffect() {
  const particlesContainer = document.getElementById("particles-js");

  // Check if Particle.js is already initialized
  const isInitialized = !!particlesContainer.querySelector(".particles-js-canvas-el");

  if (isInitialized) {
    var htmlString = ' \n <div class="header">\n\n<h1>\n<span class="site-title">Nuri Özbey</span>\n<span class="site-description">Data Scientist • Software Engineer • Developer</span>\n</h1>\n<div class="header-icons">\n<a aria-label="My LinkedIn Profile" target="_blank" href="https://www.linkedin.com/in/nuriozbey/">\n<i class="icon fa fa-linkedin" aria-hidden="true"></i>\n</a>\n<a aria-label="My Github Profile" target="_blank" href="https://github.com/nuriozbey">\n<i class="icon fa fa-github-alt" aria-hidden="true"></i>\n</a>\n<a aria-label="My Résumé" target="_blank" href="https://nuriozbey.com/resume_nuri.pdf">\n<i class="icon fa fa fa-file-pdf-o" aria-hidden="true"></i>\n</a>\n<a aria-label="Send Email" href="mailto:nuriozbey@gmail.com" target="_blank"><i class="icon fa fa-envelope"></i></a>\n</div>\n<div class="header-links">\n<a class="link" href="#about" data-scroll="">About Me</a>\n<a class="link" href="#projects" data-scroll="">Projects</a>\n</div>\n</div>\n<a class="down" href="#about" data-scroll=""><i class="icon fa fa-chevron-down" aria-hidden="true"></i></a>\n';
    particlesContainer.innerHTML = htmlString; // Remove existing Particle.js elements
  } else {
    initParticleEffect(); // Reinitialize Particle.js
  }
}
// Event listener for the button click
document.getElementById("snow-button").addEventListener("click", toggleParticleEffect);


//  when snow button is clicked toggle snow effect
// const snowButton = document.getElementById('snow-button');
// snowButton.onclick = () => {
//   // Get the element with the id "particles-js"
//   var element = document.getElementById("particles-js");

//   // toggle snow effect

// };