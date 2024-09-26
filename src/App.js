
import './App.css';
import Testimony from './components/Testimony';  //importamos el componente testimonio por defecto
//import { Testimonio } from './components/Testimonio';  --> importamos el componente testimonio nombrado

function App() {
  return (
    <div className="App">
      <div className='container-principal'>
        <h1>Esto es lo que dicen nuestros alumnos:</h1>
      <Testimony
        name='Emma Bostian'
        country='Suecia'
        image='emma'
        charge='Ingeniería de Software'
        company='Spotify'
        testimony='Siempre he tenido problemas para aprender JavaScript. Tomó muchos cursos, pero el curso fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmmos me dio las habilidades y la confianza que necesitaba para conseguir el trabajo. de mis sueños como ingeniero de software en Spotify.'
      />

      <Testimony
        name='Sarah Chima'
        country='Nigeria'
        image='sarah'
        charge='Ingeniería de Software'
        company='ChatDesk'
        testimony='Este curso fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principio total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador. en una empresa increíble.'
      />

      <Testimony
        name='Shawn Wang '
        country='Singapur'
        image='shawn'
        charge='Ingeniero de Software'
        company='Amazon'
        testimony='Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en este curso. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software.'
      />
      </div>
    </div>
  );
}

export default App;
