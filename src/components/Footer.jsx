import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Footer.css";

const Footer = () => {
   return (
      <footer id="footer">
         <Container className="container-footer">
            <Row>
               <Col sm={12} style={{ marginTop: "10px" }}>
                  <p className="information-text">
                     Page created by{" "}
                     <a
                        href="https://github.com/Mipmipp/pokedex"
                        className="link"
                     >
                        Mipmipp
                     </a>{" "}
                     using{" "}
                     <a href="https://pokeapi.co/" className="link">
                        PokeApi
                     </a>
                  </p>
               </Col>
               <Col sm={12}>
                  {" "}
                  <a
                     className="btn btn-outline-secondary btn-floating m-1"
                     href="https://github.com/Mipmipp"
                     role="button"
                  >
                     <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                     className="btn btn-outline-secondary btn-floating m-1"
                     href="https://www.linkedin.com/in/mipmipp/"
                     role="button"
                  >
                     <i className="fab fa-github"></i>
                  </a>
                  <a
                     className="btn btn-outline-secondary btn-floating m-1"
                     href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=imipmipp@gmail.com"
                     role="button"
                  >
                     <i className="fa fa-envelope"></i>
                  </a>
               </Col>
            </Row>
         </Container>{" "}
      </footer>
   );
};

export default Footer;
