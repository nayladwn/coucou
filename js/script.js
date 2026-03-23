const menu = document.querySelector("#mobile-menu")
const menuLinks = document.querySelector(".navbar__menu")

menu.addEventListener("click", function() {
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
});

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('recipeForm');
  const popup = document.getElementById('errorPopup');
  const closeBtn = document.getElementById('closePopup');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const fields = ['title', 'servings', 'desc', 'ingredients', 'method'];
    let isValid = true;

    fields.forEach(field => {
      const input = document.getElementById(field);

      if (input.value.trim() === '') {
        isValid = false;
      }
    });

    if (!isValid) {
      popup.classList.remove('hidden'); 
    } else {
      form.submit(); 
    }
  });

  closeBtn.addEventListener('click', () => {
    popup.classList.add('hidden'); 
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.createElement("button");
  btn.id = "scrollTopBtn";
  btn.innerHTML = "Back to Top!";
  document.body.appendChild(btn);

  window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};
  btn.onclick = function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
});


