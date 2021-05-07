import React, { useState } from 'react';

/* constant variables are created here*/
const SMS: React.FC = () => {
    const QRcode = require('qrcode.react');
    const [number, setSMS] = useState('');
    const ShowSMS = (event: any) => {
        setSMS(event.target.value);
    }

    const [message, setMessage] = useState('');
    const ShowMessage = (event: any) => {
        setMessage (event.target.value);
    }

    return (
        <div>
            {/* This is the part where the recipients phone number is required, as well as the message to be sent. */}
            <div className="title">SMS</div>
            <div className="subtitile"></div>

            <div className="field">
                <div className="label">Recipient's Number</div>
                <div className="control">
                    <input className="input" type="text" placeholder="Enter Phone" onInput={ShowSMS}/>
                </div>
            </div>

            <div className="field">
                <div className="label">Message</div>
                <div className="control">
                    <textarea className="textarea" placeholder="Type Message" onInput={ShowMessage}></textarea>
                </div>
            </div>

            {/*This is the section where the qr code is generated */}
            <div>
                <QRcode value={`SMS:${number}:${message}`} size={256} />
            </div>

        </div>
    )
}

export default SMS;