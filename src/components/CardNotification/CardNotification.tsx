import { IonButton, IonCard, IonCardHeader, IonCol, IonIcon, IonItem, IonLabel, IonRow, useIonRouter } from "@ionic/react";

import { fingerPrintOutline } from 'ionicons/icons';
import { FaPenNib, FaUmbrellaBeach } from 'react-icons/fa';
import { AiOutlineMedicineBox } from 'react-icons/ai';
import { IconContext } from "react-icons/lib/cjs/iconContext";

import './CardNotification.css';

interface ModalProps {
    texto: any;
  }

export const CardNotification: React.FC<ModalProps> = ({texto}) => {
    const goToSignDocuments = (e: any) => {
        alert("anda a firmar")
        navigation.push("/app", "root", "replace");
    }
    const navigation = useIonRouter();
    return (

        <IonCard onClick={e => goToSignDocuments(e)} class="card-option">
            <IonCardHeader class='card-text'>
                <div className="logoBox">
                    {texto}
                    <FaPenNib className="card-icon-option" />
                </div>
            </IonCardHeader>
        </IonCard>
    );

}




export default CardNotification;

