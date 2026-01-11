import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-container">
        <div className="hero-slogan">
            <span>Harekete geç, fark yarat!🔥</span>
            <h2>Tarzını yansıtmanın tam zamanı</h2>
            <a href="#" className="hero-button">Alışverişe Başla</a>
        </div>
        <div className="hero-image-container">
            <img src="/images/hero.png" alt=""  className="hero-image"/>
        </div>
    </section>
  )
}

export default Hero;
