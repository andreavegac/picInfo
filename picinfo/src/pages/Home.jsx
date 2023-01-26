import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PhotoInformation from "../components/PhotoInformation";
import data from "../data/picsum.json";
import MainContainer from "../components/MainContainer";
import AppContainer from "../components/AppContainer";
import FeaturedSection from "../components/FeaturedSection";
import Title from "../components/Title";

const Home = () => (
  <AppContainer>
    <Header appName="PicInfo"></Header>
    <FeaturedSection></FeaturedSection>

    <MainContainer>
      <Title
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M9 42q-1.2 0-2.1-.9Q6 40.2 6 39v-8.6h3V39h8.6v3Zm21.4 0v-3H39v-8.6h3V39q0 1.2-.9 2.1-.9.9-2.1.9ZM24 29.2q-2.25 0-3.725-1.475T18.8 24q0-2.25 1.475-3.725T24 18.8q2.25 0 3.725 1.475T29.2 24q0 2.25-1.475 3.725T24 29.2Zm0-3q.9 0 1.55-.65T26.2 24q0-.9-.65-1.55T24 21.8q-.9 0-1.55.65T21.8 24q0 .9.65 1.55t1.55.65ZM6 17.6V9q0-1.2.9-2.1Q7.8 6 9 6h8.6v3H9v8.6Zm33 0V9h-8.6V6H39q1.2 0 2.1.9.9.9.9 2.1v8.6Z"/></svg>
        }
      >
       Otras imágenes
      </Title>
      {data.map((content) => (
        <PhotoInformation
          key={content.id}
          id={content.id}
          url={content.download_url}
          author={content.author}
          height={content.height}
          width={content.width}
        ></PhotoInformation>
      ))}
    </MainContainer>
    <Footer />
  </AppContainer>
);

export default Home;
