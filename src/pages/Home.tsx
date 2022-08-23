import { IonCard, IonCardHeader, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';

import { personOutline, personSharp, cashOutline, cashSharp, medkitSharp, peopleSharp } from 'ionicons/icons';

import Header from '../components/Header/Header';
import GrayBox from '../components/Modals/GrayBox';
import CardNotification from '../components/CardNotification/CardNotification';
import Modal from '../components/Modals/Modal';

const informacion_personal = [

  { title: "RUT", content: "19.933.227-9" },
  { title: "Nombre", content: "Juan Aguilera" },
  { title: "Fecha Nacimiento", content: "1/05/1998" },
  { title: "Sexo", content: "Masculino" },
  { title: "Dirección", content: "Javiera Carrera 522" },
  { title: "Comuna", content: "Copiapó" },
  { title: "Provincia", content: "Copiapó" },
  { title: "Teléfono", content: "+569 8 6358145" }

]

const pago = [

  { title: "Forma de Pago", content: "Deposito" },
  { title: "Cargo", content: "Contador" },
  { title: "Centro de Costos", content: "Contador" }

]

const prevision = [

  { title: "Regimen Previsional", content: "AFP" },
  { title: "Tipo Gratificación", content: "Articulo 50" },
  { title: "Seguro Cesantía", content: "Sí" },
  { title: "Zona Extrema", content: "No" }

]

const datos_afp = [

  { title: "AFP Previsional", content: "Planvital S.A" },
  { title: "Fondo de Pension", content: "100%" },
  { title: "SIS", content: "116%" },
  { title: "APV Individual", content: "No" },
  { title: "Cuenta Dos", content: "No" }

]

const regimen_salud = [

  { title: "Tipo", content: "Fonasa/Isapre" },
  { title: "% a cotizar", content: "7" },
  { title: "Caja de Compensación", content: "CCAF" },
  { title: "Caja", content: "Los Andes" }

]

const carga_1 = [

  { title: "Nombre", content: "Juan Aguilera" },
  { title: "Tipo", content: "Simple" },
  { title: "Vinculo", content: "hermano(a)" },
  { title: "Monto", content: "250.000" }

]
const carga_2 = [

  { title: "Nombre", content: "Brian Aguilera" },
  { title: "Tipo", content: "Simple" },
  { title: "Vinculo", content: "hermano(a)" },
  { title: "Monto", content: "250.000" }

]
const contrato = [

  { title: "Código", content: "1" },
  { title: "Ficha", content: "13473990" },
  { title: "Cargo", content: "Conotador" },
  { title: "Centro de Costos", content: "Administración" },
  { title: "Contrato Mensual", content: "Sí" },
  { title: "Plazo Fijo", content: "No" },
  { title: "Fecha de termino", content: "-" },
  { title: "Indefinido", content: "Sí" },
  { title: "Fecha Inicio", content: "01-08-2019" },
  { title: "Estado", content: "Aprobado" }

]
const portal = [

  { title: "Usuario", content: "13473990-3" },
  { title: "Contraseña", content: "****" }


]
const firma = [

  { title: "Firma", content: "Alguna Mosca" }


]

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
        </IonGrid>


        <IonItem className='boxHeader'><strong>Información Personal</strong><IonIcon slot='end' md={personSharp} ios={personSharp} /></IonItem>
        <GrayBox Modal={Modal} editable={true} data={informacion_personal} />

        <IonItem className='boxHeader'><strong>Pago</strong><IonIcon slot='end' md={cashOutline} ios={cashOutline} /></IonItem>
        <GrayBox data={pago} />

        <IonItem className='boxHeader'><strong>Previsión</strong><IonIcon slot='end' md={medkitSharp} ios={medkitSharp} /></IonItem>
        <GrayBox data={prevision} />

        <IonItem className='boxHeader'><strong>Datos AFP</strong><IonIcon slot='end' md={medkitSharp} ios={medkitSharp} /></IonItem>
        <GrayBox data={datos_afp} />

        <IonItem className='boxHeader'><strong>Regimen de Salud</strong><IonIcon slot='end' md={medkitSharp} ios={medkitSharp} /></IonItem>
        <GrayBox data={regimen_salud} />

        <IonItem className='boxHeader'><strong>Cargas</strong><IonIcon slot='end' md={peopleSharp} ios={peopleSharp} /></IonItem>
        <GrayBox data={carga_1} />
        <GrayBox data={carga_2} />

        <IonCard class="card-option">
          <IonCardHeader>
            <IonRow>
              <IonCol>
                <IonItem lines='none' >Monto Total:</IonItem>
              </IonCol>
              <IonCol>
                <IonItem lines='none'>$450.000</IonItem>
              </IonCol>
            </IonRow>
          </IonCardHeader>
        </IonCard>

        <IonItem className='boxHeader'><strong>Contrato</strong><IonIcon slot='end' md={peopleSharp} ios={peopleSharp} /></IonItem>
        <GrayBox data={contrato} />

        <IonItem className='boxHeader'><strong>Portal Empleado</strong><IonIcon slot='end' md={peopleSharp} ios={peopleSharp} /></IonItem>
        <GrayBox data={portal} />

        <IonItem className='boxHeader'><strong>Firma</strong><IonIcon slot='end' md={peopleSharp} ios={peopleSharp} /></IonItem>
        <GrayBox data={firma} />


      </IonContent>
    </IonPage>
  );
};

export default Home;
