import { IonCard, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonPage, IonRow, IonSlide, IonSlides, IonTitle, IonToolbar, useIonModal } from '@ionic/react';

import { eyeSharp, createSharp } from 'ionicons/icons';

import React, { lazy } from "react";

import './GrayBox.css';

interface ModalProps {
  data: any;
  editable?: boolean;
  Modal?: () => void;

}



const GrayBox: React.FC<ModalProps> = ({ data, editable, Modal }) => {

  const [present, dismiss] = useIonModal(Modal, {
    dismiss: () => dismiss(),
    data: data,
    id: "example-modal",
    trigger: "open-modal",
});

const modalOptions = {
    onDidDismiss: () => dismiss(),
};

  return (

    <div className='Box' >
      {data.map((key: { title: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; content: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => (
        <IonRow className='GrayRows' >
          <IonCol>
            <IonItem lines='none' className='title'>{key.title}</IonItem>
          </IonCol>
          <IonCol>
            <IonItem lines='none' className="content">{key.content}</IonItem>
          </IonCol>
        </IonRow>
      ))}

      {editable ? <IonIcon onClick={() => { present(modalOptions) }} className="IconGray" color='#262E42' md={createSharp}ios={createSharp}/>:<></>}
      
    </div>

  );
};

export default GrayBox;
