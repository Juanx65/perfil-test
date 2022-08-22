import { IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';

import { personOutline, personSharp } from 'ionicons/icons';

import Header from '../components/Header/Header';
import GrayBox from '../components/Modals/GrayBox';

const Home: React.FC = () => {
  const usr = localStorage.getItem("USUARIO");
  const img_usr = localStorage.getItem("IMG_USR");

  return (
    <IonPage>
      <Header title={usr!.toString()} img_usr={img_usr!.toString()} dash={true} />
      <IonContent fullscreen>
        <IonGrid>
          <IonRow className='homeRow'>
            <IonItem lines='none' className='titleHome'>Cargo:</IonItem>
            <IonItem lines='none' className='contentHome'>Contador</IonItem>
          </IonRow>
          <IonRow className='homeRow'>
            <IonItem lines='none' className='titleHome'>Periodo Actual:</IonItem>
            <IonItem lines='none' className='contentHome'>Agosto 2022</IonItem>
          </IonRow>
          <IonItem><strong>Información Personal</strong><IonIcon slot='end' md={personSharp} ios={personSharp}/></IonItem>
        </IonGrid>

        <GrayBox />
      </IonContent>
    </IonPage>
  );
};

export default Home;
