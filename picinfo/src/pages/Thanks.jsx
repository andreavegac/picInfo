import Header from "../components/Header";
import Footer from "../components/Footer";
import DetailContainer from "../components/DetailContainer";
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
