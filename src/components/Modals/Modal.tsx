import { IonAvatar, IonButton, IonCol, IonContent, IonGrid, IonIcon, IonInput, IonItem, IonLabel, IonModal, IonPage, IonRow, useIonModal } from "@ionic/react";
import { ReactChild, ReactFragment, ReactPortal } from "react";

import { closeCircleOutline, closeCircleSharp } from 'ionicons/icons';

import './Modal.css';

interface ModalProps {
    data: any;
    dismiss: () => void;
}


const Modal: React.FC<ModalProps> = ({ dismiss, data }) => {


    return (
        <IonPage>
            <IonItem class="itemModal">
                <IonLabel> <strong>Edición Solicitud</strong></IonLabel>
                <IonIcon onClick={dismiss} slot="end" md={closeCircleSharp} ios={closeCircleSharp} />
            </IonItem>
            {
                data.map((data:any) => (
                    <IonItem lines="none">
                        <IonGrid className="gridModal">
                            <IonRow>
                                <IonCol><div><IonLabel class="textModalStrong"> <strong> {data.title} </strong> </IonLabel></div></IonCol>
                                <IonCol><div className="inputDivModal">
                                    {data.editable ? <IonInput class="textModal">{data.content}</IonInput> : <IonLabel class="textModal">{data.content}</IonLabel>}
                                </div></IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonItem>
                ))
            }
            <IonGrid>   
                <IonRow>
                    <IonCol></IonCol>
                    <IonCol>
                        <IonButton expand="block" onClick={dismiss}> Confirmar </IonButton>
                    </IonCol>
                    <IonCol></IonCol>
                </IonRow>
            </IonGrid>
        </IonPage>
    );
}
export default Modal;