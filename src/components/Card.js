
import { IonIcon } from '@ionic/react'
import { add, addCircleOutline, bulbOutline } from 'ionicons/icons'
import React from 'react'

const Card = () => {
    return (
        <div className="wrapper">
            <div className="card-container">
                <div className="plus-icon">
                    {/* <IonIcon name="add-outline"></IonIcon> */}
                    <IonIcon icon={addCircleOutline}></IonIcon>
                </div>
                <div className="card-icon">
                    <IonIcon icon={bulbOutline}></IonIcon>
                </div>
                <div className="preview-text">Aquisition</div>
                <div className="card-circle"></div>
                <div className="text-wrapper">
                Aquisition &mdash; Aquisition &mdash; Aquisition &mdash; Aquisition &dash; Aquisition &mdash; Aquisition &mdash; Aquisition &mdash; Aquisition
                </div>
            </div>

            <div className="card-container">
                <div className="plus-icon">
                    {/* <IonIcon name="add-outline"></IonIcon> */}
                    <IonIcon name="add-circle-outline"></IonIcon>
                </div>
                <div className="card-icon">
                    <IonIcon name="bulb-outline"></IonIcon>
                </div>
                <div className="preview-text">Aquisition</div>
                <div className="card-circle"></div>
                <div className="text-wrapper">
                Aquisition &mdash; Aquisition &mdash; Aquisition &mdash; Aquisition &dash; Aquisition &mdash; Aquisition &mdash; Aquisition &mdash; Aquisition
                </div>
            </div>

            <div className="card-container">
                <div className="plus-icon">
                    {/* <IonIcon name="add-outline"></IonIcon> */}
                    <IonIcon name="add-circle-outline"></IonIcon>
                </div>
                <div className="card-icon">
                    <IonIcon name="bulb-outline"></IonIcon>
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
