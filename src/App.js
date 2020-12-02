import './App.css';
import MyNavBar from './components/Navbar/mynavbar'
import MyCarousel from './components/Carousel/mycarousel'
import LandingMessage from './components/landingmessage/landingmessage'
import { Parallax } from "react-parallax";
import Container from 'react-bootstrap/Container'
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import About from './pages/about/about'
import Skills from './pages/skills/skills.component'
import ExpTimeline from './components/projects-timeline/timeline'
import ContactForm from './pages/contact-form/contact-form.component'
import FooterPanel from './components/footer/footer.component'

function App() {
  return (
    <div className="App" style={{ position: "relative" }}>
     <MyCarousel />
     <LandingMessage />
     <MyNavBar />
    
    <div>
    <Parallax
      blur={{ min: -30, max: 30 }}
      bgImage={require("./img/parallex/background.webp")}
      bgImageAlt=""
      strength={-200}
    >
      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <About />
          </Fade>
        </Container>
      </div>
    </Parallax>
  </div>
  <Container className="container-box rounded">
    <Slide bottom duration={500}>
      <hr />
      <Skills />
    </Slide>
  </Container>
  {/* <Container className="container-box rounded">
    <Slide bottom duration={500}>
      <hr />
      <SkillsData />
    </Slide>
  </Container> */}
  {/* <div>
    <Container className="container-box rounded">
      <Fade duration={500}>
        <hr />

        <Experience />
      </Fade>
    </Container>
  </div> */}
  <Container className="container-box rounded">
    <Slide bottom duration={500}>
      <hr />
      <ExpTimeline />
    </Slide>
  </Container>
  <Container className="container-box rounded">
    <Fade duration={500}>
      <hr />
      <ContactForm />
    </Fade>
  </Container>

  <hr />
  <FooterPanel />
</div>
  );
}

export default App;
