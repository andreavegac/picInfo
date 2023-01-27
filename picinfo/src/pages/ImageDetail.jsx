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
                <strong>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    width="20"
                  >
                    <path d="m5.5 16 .625-2.5H3l.375-1.5H6.5l.875-3.5H4L4.375 7H7.75l.75-3H10l-.75 3h3L13 4h1.5l-.75 3H17l-.375 1.5h-3.25L12.5 12H16l-.375 1.5h-3.5L11.5 16H10l.625-2.5h-3L7 16ZM8 12h3l.875-3.5h-3Z" />
                  </svg>
                  ID
                </strong>
                <span>{selectedImage.id}</span>
              </span>
              <span>
                <strong>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    width="20"
                  >
                    <path d="M10.021 14.583q1.583 0 2.677-1.093 1.094-1.094 1.094-2.678 0-1.583-1.094-2.677-1.094-1.093-2.677-1.093-1.604 0-2.688 1.093Q6.25 9.229 6.25 10.812q0 1.584 1.083 2.678 1.084 1.093 2.688 1.093Zm0-1.75q-.875 0-1.448-.583T8 10.812q0-.854.573-1.437.573-.583 1.448-.583.854 0 1.437.583.584.583.584 1.437 0 .855-.584 1.438-.583.583-1.437.583ZM3.417 17.5q-.729 0-1.24-.51-.51-.511-.51-1.24V5.896q0-.729.51-1.24.511-.51 1.24-.51h2.541L7.479 2.5h5.042l1.541 1.646h2.521q.729 0 1.24.51.51.511.51 1.24v9.854q0 .729-.51 1.24-.511.51-1.24.51Zm13.166-1.75V5.896h-3.271L11.771 4.25H8.25L6.708 5.896H3.417v9.854ZM10 10.812Z" />
                  </svg>
                  Author
                </strong>
                <span>{selectedImage.author}</span>
              </span>
              <span>
                <strong>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    width="20"
                  >
                    <path d="M8.5 15 3 10l5.5-5Zm3 0V5l5.5 5Zm1-2.25 3-2.75-3-2.75Z" />
                  </svg>
                  Width
                </strong>
                <span>{selectedImage.width}</span>
              </span>
              <span>
                <strong>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    width="20"
                  >
                    <path d="m10 17-3-3 1.062-1.062 1.188 1.187v-8.25L8.062 7.062 7 6l3-3 3 3-1.062 1.062-1.188-1.187v8.25l1.188-1.187L13 14Z" />
                  </svg>
                  Height
                </strong>
                <span>{selectedImage.height}</span>
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
