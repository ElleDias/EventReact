import "./Home.css"
import React from 'react'
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import mapa from "../../assets/img/mapa.png";
import banner2 from "../../assets/img/banner2.png";
import home from "../../assets/img/home.png"
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Header />
      <main className="home-layout">

        <section className="home-banner">
          <img src={home} alt="Área de eventos da escola de informática" />
        </section>

        <section className="home-eventos">
          <h2>Próximos Eventos</h2>
          <hr />

          <div className="eventos-container">

            {[...Array(4)].map((_, i) => (
              <div className="evento-card" key={i}>
                <h2>Titulo do Evento</h2>
                <p>Breve descrição do evento, pode ser um paragrafo pequeno</p>
                <Link className="evento-link" to="/Login">Conectar</Link>
              </div>
            ))}

          </div>
        </section>

        <section className="home-visao">
          <div className="imagem-container">
            <img src={banner2} alt="Banner" className="imagem-banner" />
            <div className="textoDaImagem">
              <h2>Visão</h2>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus neque
                ipsum voluptatibus animi laudantium enim eius fugiat dolor voluptas
                nesciunt...
              </p>
            </div>
          </div>
        </section>

        <section className="home-contato">
            <div className= "tituloHome">
          <h2>Contato</h2>
          <hr />
            </div>
          <div className="contato-container">
            <div className="contato-mapa">
              <img src={mapa} alt="Mapa da localização" />
            </div>
            <div className="contato-info">
              <p>Rua Niterói, 180 - Centro</p>
              <p>São Caetano do Sul - SP</p>
              <p>(11) 4225-2000</p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}

export default Home;
