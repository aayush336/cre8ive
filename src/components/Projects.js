import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import aayushImg1 from "../assets/img/aayushPic";
import ankushImg1 from "../assets/img/ankush.jpeg";

import colorSharp2 from "../assets/img/color-sharp2.png";

import 'animate.css';
import TrackVisibility from 'react-on-screen';
import AboutUs from "./AboutUs";

export const Projects = () => {

  const about =[
    {
      title: "Aayush Bhatt",
      subtitle:"Founder and Developer of Cre8ive.",
      imgUrl:aayushImg1,
      description:"Introducing Aayush, the visionary founder and skilled developer behind 'Cre8ive', a cutting-edge website building company. With a passion for creating intuitive and visually stunning websites, Aayush has honed their expertise in web development \n With a keen eye for detail and a commitment to staying ahead of the latest web design trends and technologies, Aayush has earned a reputation as a forward-thinking entrepreneur and leader in the website building space. Their dedication to customer satisfaction and passion for creating exceptional online experiences has made Cre8ive a trusted choice for businesses of all sizes, seeking to establish a strong online presence",

    },
    {
      title: "Ankush Waghbhaneria",
      subtitle:"Founder and Developer of Cre8ive.",
      imgUrl:ankushImg1,
      description:"As a strategic thinker and problem solver, Ankush plays a crucial role in shaping Cre8ive's vision and direction. His keen business acumen and ability to identify market trends help drive the company's growth and expansion. Ankush's deep understanding of customer needs and market dynamics allows him to guide the team in creating websites that not only meet clients' objectives but also exceed their expectations.",
    },
  ]
  const projects = [
    {
      title: "Editorial Website",
      description: "Design & Development",
      imgUrl: projImg1,
      link:"https://html5up.net/editorial"
    },
    {
      title: "Scrolling Website",
      description: "Creative and Soothing",
      imgUrl: projImg2,
      link:"https://html5up.net/ethereal"
    },
    {
      title: "Futureistic ",
      description: "New Design for futuriestic persona",
      imgUrl: projImg3,
      link:"https://html5up.net/future-imperfect"
    },
    {
      title: "Alpha",
      description: "Simple and Accurate",
      imgUrl: projImg4,
      link:"https://html5up.net/arcana"
    },
    {
      title: "Business Startup",
      description: "A Buisness Portfolio",
      imgUrl: projImg5,
      link:"https://html5up.net/escape-velocity"
    },
    {
      title: "Startup Oriented",
      description: "Design ,Creative,Profitable",
      imgUrl: projImg6,
      link:"https://html5up.net/minimaxing"
    },
  ];

  

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Templates</h2>
                <p>Here are some of our pre built Templates.You can choose your favourite design and Contact Us for further assistance.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}  
                                />
                              )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <h2>About Us</h2>
                    
                    <p className="card-text">Welcome to our website! We are a team of passionate individuals dedicated to providing high-quality products/services to our customers.</p>
                    <p className="card-text">Our mission is to make a positive impact on the lives of our customers by delivering innovative solutions and exceptional customer service.</p>
                    <p className="card-text">With years of experience in the industry, we strive to be the best in what we do, and we are committed to continuous improvement and growth.</p>
                    
                    <Row>
                        {
                          about.map((about, index) => {
                            return (
                              <AboutUs
                                key={index}
                                {...about}  
                                />
                              )
                          })
                        }
                      </Row>
                    </Tab.Pane>

                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
