import React, { useState } from 'react';
/* constant variables are created*/
const URL: React.FC = () => {
    const QRcode = require('qrcode.react');
    const [url, setUrl] = useState('');

    const ShowURL = (event: any) => {
        setUrl(event.target.value);
    }

    return (
        <div>
            {/* The title, subtitle, and textarea for the desired URL   */}
            <div className="title">URL</div>
            <div className="subtitle"></div>

            <div className="field">
                <label className="label">URL Link</label>
                <div className="control">
                    <input className="input this link" type="text" placeholder="Enter URL" onInput={ShowURL} />
                </div>
            </div>

         {/*This is the section where the qr code is generated */}
            <div>
                <QRcode value={url} size={256} fgColor="black" />
            </div>
        </div>
    )
}

export default URL;