import { IonCard, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonHeader, IonImg, IonItem, IonLabel, IonPage, IonRow, IonSlide, IonSlides, IonTitle, IonToolbar } from '@ionic/react';

import React, { lazy } from "react";

import './Modals.css';

const data = [

  { title: "Nombre", content: "Juan Aguilera" },
  { title: "Tipo", content: "Simple" },
  { title: "Vinculo", content: "Hermano(a)" },
  { title: "Monto", content: "200.000" }

]

const GrayBox = () => {

  return (

    <div className='Box' >
      {data.map(key => (
        <IonRow>
          <IonCol>
            <IonItem lines='none' className='title'>{key.title}</IonItem>
          </IonCol>
          <IonCol>
            <IonItem lines='none' className="content">{key.content}</IonItem>
          </IonCol>
        </IonRow>

      ))}

    </div>




  );
};

export default GrayBox;
