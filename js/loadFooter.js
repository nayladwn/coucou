document.addEventListener("DOMContentLoaded", function () {
  const footerHTML = `
    <footer class="footer">
      <div class="footer__top">
        <a class="footer__logo" href="../index.html">
          <img src="../images/00CouCou_Logo.svg" alt="CouCou Logo"/>
        </a>
        <nav>
          <ul class="footer__nav">
            <li><a href="../index.html">Home</a></li>
            <li><a href="../food.html">Food</a></li>
            <li><a href="../drinks.html">Drinks</a></li>
            <li><a href="../create.html">Create a Recipe</a></li>
            <li><a href="../about us.html">About Us</a></li>
          </ul>
        </nav>
      </div>
      <div class="footer__bottom">
        <div class="footer__socials">
          <a href="https://www.facebook.com/"><img src="../images/facebook.svg" alt="Facebook"/></a>
          <a href="https://www.instagram.com/"><img src="../images/instagram.svg" alt="Instagram"/></a>
          <a href="https://x.com/"><img src="../images/twitter.svg" alt="Twitter"/></a>
        </div>
        <p class="footer__copyright">
          © 2025 Nayla Estate Springs. All Rights Reserved.
        </p>
      </div>
    </footer>
  `;

  document.getElementById("footer-placeholder").innerHTML = footerHTML;
});