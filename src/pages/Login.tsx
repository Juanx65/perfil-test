import { Redirect, Route, Switch } from 'react-router-dom';
import { IonApp, IonButton, IonContent, IonPage, IonRouterOutlet, setupIonicReact, useIonRouter } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import axios, { AxiosResponse } from 'axios';

const Login: React.FC = () => {
    const navigation = useIonRouter();

    function getToken(data: any) {
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
            }
        };
        return axios.post("https://www.plus-rrhh.cl/plus-rrhh/API_REST_DEMO/api/portal_empleado/validar", data, axiosConfig)
            .then((response: AxiosResponse) => {
                return { estado: response.data.estado, token: response.data.respuesta.TOKEN, NOMBRE_USUARIO:response.data.respuesta.NOMBRE_USUARIO, URL_IMG_USUARIO: response.data.respuesta.URL_IMG_USUARIO }
            }).catch((error: any) => {
                console.log(error);
            });
    };

    const Ingresar = () => {

        //EJECUCIÓN DE LA REQUEST
        getToken({ RUT_EMPRESA: "99582190-7", RUT_USUARIO: "13474990-3", PASSWORD: "demo" }).then((response: any) => {

            if (response.estado === "OK") {
                localStorage.setItem("USUARIO", response.NOMBRE_USUARIO.toString());
                localStorage.setItem("IMG_USR", response.URL_IMG_USUARIO.toString());
                navigation.push("/home", "forward", "replace");
            }
            else {
                alert("TOKEN EXPIRADO/INVALIDO");
                navigation.push("/", "forward", "replace");
            }
        });
    };

    return (
        <IonApp>
            <IonPage>
                <IonContent>
                    <IonButton
                        expand="block"
                        color="primary" onClick={Ingresar} >
                        Ingresar
                    </IonButton>
                </IonContent>
            </IonPage>
        </IonApp>
    );
};

export default Login;
