import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';

import Header from '../components/Header/Header';

const Home: React.FC = () => {
  const usr = localStorage.getItem("USUARIO");
  const img_usr = localStorage.getItem("IMG_USR");
  
  return (
    <IonPage>
      <Header title={usr!.toString()} img_usr={img_usr!.toString()} dash={true} />
    </IonPage>
  );
};

export default Home;
