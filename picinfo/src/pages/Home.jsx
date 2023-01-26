import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import PhotoInformation from '../components/PhotoInformation';
import data from '../data/picsum.json';
import MainContainer from '../components/MainContainer';

const Home = () => (
    <div className="App">
      <Header appName="PicInfo"></Header>
      <MainContainer>
      {

        data.map (content => (
          <PhotoInformation key={content.id} id={content.id} url={content.download_url} author={content.author} height={content.height} width={content.width}></PhotoInformation>
          
        ))
      }
      </MainContainer>
      <Footer />
    </div>
)

export default Home;