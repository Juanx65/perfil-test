import { IonApp, IonButton, IonCol, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuToggle, IonNote, IonRouterOutlet, IonRow, IonTitle, IonToolbar, setupIonicReact, useIonRouter } from '@ionic/react';
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';

import { mailOutline, mailSharp, homeOutline, homeSharp, moonOutline, moonSharp, sunnyOutline, sunnySharp, logOutOutline, logOutSharp } from 'ionicons/icons';
import { IoMdMoon, IoIosSunny } from "react-icons/io";

interface AppPage {
    url: string;
    iosIcon: string;
    mdIcon: string;
    title: string;
}

const appPages: AppPage[] = [
    {
        title: 'Inicio',
        url: '/',
        iosIcon: homeOutline,
        mdIcon: homeOutline
    }
];

const asyncLocalStorage = {
    removeItem: function (key: any) {
        return Promise.resolve().then(function () {
            if (window.localStorage.getItem(key) && window.localStorage.getItem(key) !== undefined) {
                localStorage.removeItem(key);
            }
        });
    }
};

const Menu: React.FC = () => {

    const toggleTheme = (e: any) => {
        SetDarkMode(!darkMode)
        document.body.classList.toggle("dark")
    }

    const logoutFun = (e: any) => {
        localStorage.removeItem("TOKEN");
        navigation.push("/", "root", "replace");
    }

    const [darkMode, SetDarkMode] = useState<boolean>(true)
    const location = useLocation();

    const navigation = useIonRouter();
    return (
        <IonMenu menuId='main-menu' contentId='main' type='overlay'>
            <IonContent>
                <IonList id="inbox-list">
                    <IonListHeader>Menu</IonListHeader>
                    {appPages.map((appPage, index) => {
                        return (
                            <IonMenuToggle key={index} autoHide={false}>
                                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                                    <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                                    <IonLabel>{appPage.title}</IonLabel>
                                </IonItem>
                            </IonMenuToggle>
                        );
                    })}
                    <IonMenuToggle autoHide={false}>
                        <IonItem lines="none"  onClick={e => toggleTheme(e)}>
                            {darkMode ? <IonIcon slot="start" ios={moonOutline} md={moonOutline} /> : <IonIcon slot="start" ios={sunnySharp} md={sunnySharp} />}
                            {darkMode ? <IonLabel>Modo Oscuro</IonLabel> : <IonLabel>Modo Claro</IonLabel>}
                        </IonItem>
                    </IonMenuToggle>
                    <IonMenuToggle autoHide={false}>
                        <IonItem lines="none"  onClick={e => logoutFun(e)}>
                            <IonIcon slot="start" ios={logOutOutline} md={logOutOutline} />
                            <IonLabel>Cerrar Sesión</IonLabel>
                        </IonItem>
                    </IonMenuToggle>
                </IonList>
            </IonContent>
        </IonMenu>
    );
};


export default Menu;