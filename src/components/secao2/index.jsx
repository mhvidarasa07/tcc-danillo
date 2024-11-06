import './index.scss';

export default function Secao2() {
  return (
    <div className="app">
      <header className="header">
        <img src="logo.png" alt="Psicolari Logo" className="logo" />
        <nav className="nav">
          <ul>
            <li><a href="#home">HOME</a></li>
            <li><a href="#portfolio">PORTFÓLIO</a></li>
            <li><a href="#contact">CONTATO</a></li>
            <li><a href="#appointment">AGENDAMENTO</a></li>
          </ul>
        </nav>
        <div className="menu-icon">
          <i className="fas fa-bars"></i>
        </div>
      </header>
      
      <main className="main">
        <h2>Psicoterapia individual para adolescentes e adultos na abordagem psicanalítica</h2>
        
        <div className="services">
          <button className="service-button">serviços de orientação profissional</button>
          <button className="service-button">serviços de orientação vocacional</button>
        </div>
      </main>
    </div>
  );
}




