import { IonAvatar, IonButton, IonButtons, IonGrid, IonHeader, IonImg, IonMenuButton, IonRow, IonToolbar } from "@ionic/react";
import React from "react";

import './Header.css';

interface HeaderProps {
    title: string;
    dash: boolean;
    img_usr: string;
}

export class Header extends React.Component<HeaderProps> {
    title: string;
    dash: boolean;
    img_usr: string;
    constructor(props: HeaderProps) {
        super(props);
        this.title = props.title;
        this.dash = props.dash
        this.img_usr = props.img_usr;
    }

    render() {

        return (
            <>
                <IonHeader  class="ion-no-border">
                    <IonToolbar className="toolTransparent">
                        <div className="divRed">
                            <div className="logoBox">
                                <IonButtons className='menuBox' slot="start">
                                    <IonMenuButton color="secondary" menu='main-menu'></IonMenuButton>
                                </IonButtons>
                                <img src={require('../../assets/Logo.png')} />
                                <p><span className="text_plus">Plus</span> <span className='text_rrhh'>RRHH</span></p>
                            </div>
                            <div className='sub-title'>
                                <p className="sub-title "> {this.title}</p>{/* {this.title} */}
                                <div className="shadow-box"></div>
                                {this.dash ? <IonAvatar class="sub-title " ><img src={this.img_usr} /></IonAvatar> : ""}
                            </div>
                        </div>
                        <div className="space-below"></div>
                    </IonToolbar>
                </IonHeader>
            </>
        );
    }

}

export default Header