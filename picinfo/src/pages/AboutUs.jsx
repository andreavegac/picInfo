import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import MainContainer from '../components/MainContainer';
import { Link } from "react-router-dom";
import Title from '../components/Title';
import ContactCard from '../components/ContactCard'
const AboutUs = () => (
    <div className="App">
      <Header appName="PicInfo"></Header>
      <MainContainer>
      <Title>Conócenos</Title>
      <Link to="/">Go back</Link>
        <ContactCard image={"https://loremflickr.com/320/240/random"} name="Lidia"></ContactCard>
        <ContactCard image={"https://loremflickr.com/320/240/random"} name="Andrés"></ContactCard>
        <ContactCard image={"https://loremflickr.com/320/240/random"} name="Jhonatan"></ContactCard>
        <ContactCard image={"https://loremflickr.com/320/240/developer"} name="Andrea"></ContactCard>
      </MainContainer>
      <Footer />
    </div>
)

export default AboutUs;