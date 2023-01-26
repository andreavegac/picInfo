import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import MainContainer from '../components/MainContainer';
import AboutMe from '../components/AboutMe';
import { Link } from "react-router-dom";
const AboutUs = () => (
    <div className="App">
      <Header appName="PicInfo"></Header>
      <MainContainer>
      <Link to="/">Go back</Link>
        <AboutMe name="Lidia"></AboutMe>
        <AboutMe name="Andrés"></AboutMe>
        <AboutMe name="Jhonatan"></AboutMe>
        <AboutMe name="Andrea"></AboutMe>
      </MainContainer>
      <Footer />
    </div>
)

export default AboutUs;