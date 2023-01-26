import { useParams, Link } from "react-router-dom";
import data from "../data/picsum.json";
import Header from "../components/Header";
import MainContainer from "../components/MainContainer";
import Footer from "../components/Footer";

const ImageDetail = () => {
  let image = useParams();

  const selectedImage = data.find((element) => element.id === image.id);

  return (
    <>
      <Header appName="PicInfo" />
      <MainContainer>
        <Link to="/">Go back</Link>
        <img style={{ width: "100%" }} src={selectedImage.download_url}></img>
        <span><strong>ID:</strong>{selectedImage.id}</span>
            <span><strong>Author:</strong>{selectedImage.author}</span>
            <span><strong>Width:</strong>{selectedImage.width}</span>
            <span><strong>Height:</strong>{selectedImage.height}</span>
      </MainContainer>
      <Footer />
    </>
  );
};

export default ImageDetail;
