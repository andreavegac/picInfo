import { useParams, ScrollRestoration } from "react-router-dom";
import data from "../data/picsum.json";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import DetailContainer from "../components/DetailContainer";
import styles from "./ImageDetail.module.css";
import Title from "../components/Title";
import Breadcrumbs from "../components/Breadcrumbs";
import AppContainer from "../components/AppContainer";

const ImageDetail = () => {
  let image = useParams();

  const selectedImage = data.find((element) => element.id === image.id);

  return (
    <>
      <AppContainer>
        <Header appName="PicInfo" />
        <DetailContainer>
          <Breadcrumbs to="/" />
          <div className={styles.actions}>
            <Title>Photo detail {image.id}</Title>
            <Button
              type="isLink"
              variant="secondary"
              url={selectedImage.download_url}
            >
              Abrir en nueva pestaña
            </Button>
          </div>

          <div className={styles.content}>
            <img
              className={styles.photo}
              src={selectedImage.download_url}
            ></img>
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
        </DetailContainer>
        <Footer />
      </AppContainer>
    </>
  );
};

export default ImageDetail;
