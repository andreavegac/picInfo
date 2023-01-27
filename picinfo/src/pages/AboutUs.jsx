import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DetailContainer from "../components/DetailContainer";
import Title from "../components/Title";
import ContactCard from "../components/ContactCard";
import ContactForm from "../components/ContactForm";
import Breadcrumbs from "../components/Breadcrumbs";
import styles from "./AboutUs.module.css";


const AboutUs = () => (
  <div className="App">

    <Header appName="PicInfo"></Header>
    <DetailContainer>
      <Breadcrumbs to="/" />
      <Title small>Conócenos</Title>
      <div className={styles.contacts}>
        <ContactCard
          image={
            "https://www.lego.com/cdn/cs/set/assets/bltbf8cec3fdd339822/5005527.png"
          }
          name="Lidia"
        ></ContactCard>
        <ContactCard
          image={
            "https://www.lego.com/cdn/cs/set/assets/blt7e3873b9518a48ef/5005528.png?format=webply&fit=bounds&quality=60&width=640&height=640&dpr=2"
          }
          name="Andrés"
        ></ContactCard>
        <ContactCard
          image={
            "https://www.lego.com/cdn/cs/set/assets/blt63c7f7be0a7373c2/5006955.png?format=webply&fit=bounds&quality=60&width=640&height=640&dpr=2"
          }
          name="Jhonatan"
        ></ContactCard>
        <ContactCard
          image={
            "https://www.lego.com/cdn/cs/set/assets/bltac07e562747ca41e/5006956.png?format=webply&fit=bounds&quality=60&width=640&height=640&dpr=2"
          }
          name="Andrea"
        ></ContactCard>
      </div>
      <ContactForm></ContactForm>
    </DetailContainer>
    <Footer />
  </div>
);

export default AboutUs;
