document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('mode-toggle');
  const footerToggleButton = document.getElementById('footer-mode-toggle');
  const sunIconClass = 'fas fa-sun';
  const moonIconClass = 'fas fa-moon';

  const setDarkMode = (darkMode) => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('dark-mode', 'true');
      toggleButton.innerHTML = `<i class="${moonIconClass}"></i> `;
      footerToggleButton.innerHTML = `<i class="${moonIconClass}"></i> `;
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('dark-mode', 'false');
      toggleButton.innerHTML = `<i class="${sunIconClass}"></i> `;
      footerToggleButton.innerHTML = `<i class="${sunIconClass}"></i> `;
    }
  };

  // Check local storage for mode preference
  const savedDarkMode = localStorage.getItem('dark-mode') === 'true';
  setDarkMode(savedDarkMode);

  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

  // Add listener to system preference change
  prefersDarkScheme.addEventListener('change', (event) => {
    setDarkMode(event.matches);
  });

  // Toggle dark mode on button clicks
  toggleButton.addEventListener('click', () => {
    const darkMode = !document.body.classList.contains('dark-mode');
    setDarkMode(darkMode);
  });

  footerToggleButton.addEventListener('click', () => {
    const darkMode = !document.body.classList.contains('dark-mode');
    setDarkMode(darkMode);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const words = document.querySelectorAll('.word-animation span');

  let index = 0;
  const interval = setInterval(() => {
    if (index < words.length) {
      words[index].classList.add('show');
      index++;
    } else {
      clearInterval(interval);
    }
  }, 500); // Adjust the interval duration (in milliseconds) as needed
});

$(document).ready(function() {
  $('#popupButton').click(function() {
      $('#popupContainer').show();
  });
  $('#closePopup').click(function() {
      $('#popupContainer').hide();
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var mybutton = document.getElementById("topBtn");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          mybutton.style.display = "block";
      } else {
          mybutton.style.display = "none";
      }
  }

  // When the user clicks on the button, scroll to the top of the document
  window.topFunction = function() {
    // Scroll to the top of the document with smooth behavior
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
});
