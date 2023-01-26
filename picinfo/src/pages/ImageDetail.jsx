import { useParams, Link } from "react-router-dom";
import data from "../data/picsum.json";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import DetailContainer from "../components/DetailContainer";
import styles from "./ImageDetail.module.css";
import Title from "../components/Title";

const ImageDetail = () => {
  let image = useParams();

  const selectedImage = data.find((element) => element.id === image.id);

  return (
    <>
      <Header appName="PicInfo" />
      <DetailContainer>
        <Link to="/">Go back</Link>
        <Title>Photo detail {image.id}</Title>
        <div className={styles.content}>
          <img className={styles.photo} src={selectedImage.download_url}></img>
          <div className={styles.imageInfo}>
            <span>
              <strong>ID:</strong>
              {selectedImage.id}
            </span>
            <span>
              <strong>Author:</strong>
              {selectedImage.author}
            </span>
            <span>
              <strong>Width:</strong>
              {selectedImage.width}
            </span>
            <span>
              <strong>Height:</strong>
              {selectedImage.height}
            </span>
          </div>
        </div>
        <Button
          text="Open in new tab"
          url={selectedImage.download_url}
        ></Button>
      </DetailContainer>
      <Footer />
    </>
  );
};

export default ImageDetail;
