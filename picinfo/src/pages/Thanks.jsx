import { useParams, Link } from "react-router-dom";
import data from "../data/picsum.json";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import DetailContainer from "../components/DetailContainer";
import styles from "./ImageDetail.module.css";
import Title from "../components/Title";
import Breadcrumbs from "../components/Breadcrumbs";

const Thanks = () => {
  return (
    <>
      <Header appName="PicInfo" />
      <DetailContainer>
        <Breadcrumbs to="/aboutus" />
        <Title>¡Muchas gracias!</Title>
        <img src="https://i.giphy.com/media/l3q2wJsC23ikJg9xe/giphy.webp"></img>
      </DetailContainer>
      <Footer />
    </>
  );
};

export default Thanks;
