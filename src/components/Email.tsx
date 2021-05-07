import React, { useState } from 'react';
const Email: React.FC= () => {
    const QRcode = require('qrcode.react');

    const [mail, setMail] = useState('');
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');

    const [showCode, setShowCode] = useState(true);

    const ShowMail = (event: any) => {
        setMail(event.target.value)
    }

    const ShowSub = (event: any) => {
        setSubject(event.target.value)
    }

    const ShowBody = (event: any) => {
        setBody(event.target.value)
    }

    return (
        <div>
            <div className="title">EMAIL</div>
            <div className="subtitle"></div>

            <div className="field">
                <label className="label">Mail it to</label>
                <div className="control">
                    <input className="input" type="text" placeholder="email here" onInput={ShowMail} />
                </div>
            </div>

            <div className="field">
                <label className="label">Subject</label>
                <div className="control">
                    <input className="input" type="text" placeholder="subject here" onInput={ShowSub} />
                </div>
            </div>

            <div className="field">
                <label className="label">Body</label>
                <div className="control">
                    <textarea className="textarea" placeholder="message here" onInput={ShowBody}></textarea>
                </div>
            </div>

            <div>
                <QRcode value={`malito:${mail}?subject=${subject}&body=${body}.`} size={256} />
            </div>
        </div>
    )
}

export default Email;