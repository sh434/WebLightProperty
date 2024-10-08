import React, { useEffect } from 'react';

const EMICalculator = () => {
    useEffect(() => {
        // Script को dynamically load करने के लिए
        const script = document.createElement('script');
        script.src = 'https://emicalculator.net/widget/2.0/js/emicalc-loader.min.js';
        script.type = 'text/javascript';
        script.async = true;

        document.body.appendChild(script);

        return () => {
            // Cleanup function अगर आपको स्क्रिप्ट remove करनी हो
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div id="ecww-widgetwrapper" style={{ minWidth: '250px', width: '100%' }}>
            <div
                id="ecww-widget"
                style={{
                    position: 'relative',
                    paddingTop: '0',
                    paddingBottom: '280px',
                    height: '0',
                    overflow: 'hidden',
                }}
            ></div>
            <div
                id="ecww-more"
                style={{
                    background: '#fa4a4a',
                    // font: 'normal 13px/1 Helvetica, Arial, Verdana, Sans-serif',
                    padding: '10px 0',
                    color: '#FFF',
                    textAlign: 'center',
                    width: '100%',
                    clear: 'both',
                    float: 'left',
                }}
            >
                <a
                    style={{
                        // background: '#333',
                        color: '#FFF',
                        textDecoration: 'none',
                        // borderBottom: '1px dotted #ccc',
                    }}
                    href="https://emicalculator.net/"
                    title="Loan EMI Calculator"
                    rel="nofollow"
                    target="_blank"
                >
                    emicalculator.net
                </a>
            </div>
        </div>
    );
};

export default EMICalculator;
