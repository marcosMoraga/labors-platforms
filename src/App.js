import './App.css';
function App() {
  return (
    <div className="App">
      <h1>TOP 5 LABOR PLATFORMS</h1>
      <div className='container'>
        <a rel="noopener noreferrer" className="card-container" href="https://www.linkedin.com/jobs/" target="_blank">

          <div style={{ backgroundImage: 'url(https://kinsta.com/es/wp-content/uploads/sites/8/2019/01/estadisticas-linkedin.png)' }} className='linkedin card'>
            <h2>LINKEDIN</h2>
          </div>
        </a>
        <a rel="noopener noreferrer" className="card-container" href="https://www.laborum.cl/empleos.html" target="_blank">

          <div style={{ backgroundImage: 'url(https://imgbum-rebranding.jobscdn.com/empresas-assets/skins/bumeran/styles/img/logo_laborum-new.svg)' }} className='laborum card'>
            <h2>LABORUM</h2>
          </div>
        </a>
        <a rel="noopener noreferrer" className="card-container" href="https://www.trabajando.cl" target="_blank">

          <div style={{ backgroundImage: 'url(https://img.remediosdigitales.com/051ceb/istock_000073003623_medium/1366_2000.jpg)' }} className='trabajando card'>
            <h2>TRABAJANDO</h2>

          </div>
        </a>
        <a rel="noopener noreferrer" className="card-container" href="https://www.bne.cl/ofertas?mostrar=empleo&numResultadosPorPagina=10&clasificarYPaginar=true" target="_blank">

          <div style={{ backgroundImage: 'url(https://kinsta.com/es/wp-content/uploads/sites/8/2019/01/estadisticas-linkedin.png)' }} className='bolsa-nacional-empleo card'>
            <h2>BOLSA NACIONAL</h2>

          </div>
        </a>
        <a rel="noopener noreferrer" className="card-container" href="https://cl.indeed.com/" target="_blank">

          <div style={{ backgroundImage: 'url(https://mms.businesswire.com/media/20161020005241/es/489144/22/Indeed_HWW_Logo_Tagline_RGB.jpg)' }} className='indeed card'>
            <h2>INDEED</h2>
          </div>
        </a>

      </div>
    </div>
  );
}

export default App;
