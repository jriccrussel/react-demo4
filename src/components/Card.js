
import { IonIcon } from '@ionic/react'
import { add, addCircleOutline, bulbOutline, eyeOutline } from 'ionicons/icons'
import React from 'react'

const Card = () => {
    return (
        <div className="wrapper">
            <div className="card-container">
                <div className="plus-icon">
                    <IonIcon icon={add}></IonIcon>
                </div>
                <div className="card-icon">
                    <IonIcon icon={eyeOutline}></IonIcon>
                </div>
                <div className="preview-text">Aquisition</div>
                <div className="card-circle"></div>
                <div className="text-wrapper">
                Aquisition &mdash; Aquisition &mdash; Aquisition &mdash; Aquisition &dash; Aquisition &mdash; Aquisition &mdash; Aquisition &mdash; Aquisition
                </div>
            </div>

            <div className="card-container">
                <div className="plus-icon">
                    <IonIcon icon={add}></IonIcon>
                </div>
                <div className="card-icon">
                    <IonIcon icon={eyeOutline}></IonIcon>
                </div>
                <div className="preview-text">Aquisition</div>
                <div className="card-circle"></div>
                <div className="text-wrapper">
                Aquisition &mdash; Aquisition &mdash; Aquisition &mdash; Aquisition &dash; Aquisition &mdash; Aquisition &mdash; Aquisition &mdash; Aquisition
                </div>
            </div>

            <div className="card-container">
                <div className="plus-icon">
                    <IonIcon icon={add}></IonIcon>
                </div>
                <div className="card-icon">
                    <IonIcon icon={eyeOutline}></IonIcon>
                </div>
                <div className="preview-text">Aquisition</div>
                <div className="card-circle"></div>
                <div className="text-wrapper">
                Aquisition &mdash; Aquisition &mdash; Aquisition &mdash; Aquisition &dash; Aquisition &mdash; Aquisition &mdash; Aquisition &mdash; Aquisition
                </div>
            </div>
        </div>
    )
}

export default Card
