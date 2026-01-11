import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>StepTrend</h3>
          <p>Adım adım tarzını yansıt. En yeni ayakkabı koleksiyonları burada.</p>
        </div>

        <div className="footer-column">
          <h4>Hızlı Linkler</h4>
          <ul>
            <li><a href="/erkek">Erkek Ayakkabı</a></li>
            <li><a href="/kadin">Kadın Ayakkabı</a></li>
            <li><a href="/cocuk">Çocuk Ayakkabı</a></li>
            <li><a href="/kampanyalar">Kampanyalar</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Yardım</h4>
          <ul>
            <li><a href="/sss">Sık Sorulan Sorular</a></li>
            <li><a href="/iade">İade Politikası</a></li>
            <li><a href="/kargo">Kargo Bilgisi</a></li>
            <li><a href="/iletisim">İletişim</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Bizi Takip Edin</h4>
          <div className="social-icons">
            <a href="#"><img src="/icons/instagram.svg" alt="Instagram" /></a>
            <a href="#"><img src="/icons/facebook.svg" alt="Facebook" /></a>
            <a href="#"><img src="/icons/twitter.svg" alt="Twitter" /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} StepTrend. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
};

export default Footer;


