import React from 'react';
import client1 from '../assets/client_1.png';
import client2 from '../assets/client_2.jpg';
import client3 from '../assets/client_3.webp';
import client4 from '../assets/client_4.jpg';
import client5 from '../assets/client_5.webp';
import client6 from '../assets/client_6.jpg';
import client7 from '../assets/client_7.webp';
import client8 from '../assets/client_8.png';
import client9 from '../assets/client_9.jpg';
import client10 from '../assets/client_10.jpg';
import client11 from '../assets/client_11.webp';
import client12 from '../assets/client_12.jpg';
import client13 from '../assets/client_13.jpg';
import client14 from '../assets/client_14.jpg';
import client15 from '../assets/client_15.jpg';
import client16 from '../assets/client_16.webp';
import client17 from '../assets/client_17.png';

const clients = [
    { name: "Indian Patent Office", logo: client1 },
    { name: "National Archives", logo: client2 },
    { name: "OCAC", logo: client3 },
    { name: "Odisha High Court", logo: client4 },
    { name: "Madras High Court", logo: client5 },
    { name: "Allahabad High Court", logo: client6 },
    { name: "HDFC Life", logo: client7 },
    { name: "Rajasthan High Court", logo: client8 },
    { name: "Hero MotoCorp", logo: client9 },
    { name: "Aditya Birla Capital", logo: client10 },
    { name: "IIT Delhi", logo: client11 },
    { name: "CONCOR", logo: client12 },
    { name: "AIIMS New Delhi", logo: client13 },
    { name: "Utkarsh Bank", logo: client14 },
    { name: "Govt of Maharashtra", logo: client15 },
    { name: "Kerala High Court", logo: client16 },
    { name: "IIC Delhi", logo: client17 }
];

const ClientLogo = ({ client }) => {
    const [failed, setFailed] = React.useState(false);

    if (failed || !client.logo) {
        return (
            <div className="client-logo-box fallback">
                <span className="client-placeholder">{client.name}</span>
            </div>
        );
    }

    return (
        <div className="client-logo-box" title={client.name}>
            <img
                src={client.logo}
                alt={client.name}
                loading="lazy"
                onError={() => setFailed(true)}
            />
        </div>
    );
};

const ClientLogos = () => {
    return (
        <section className="clientele-section reveal">
            <div className="max-container">
                <div className="clientele-header">
                    <span className="info-tag" style={{ margin: '0 auto 16px', display: 'inline-block' }}>Our Trusted Network</span>
                    <h2>Elite Client Roster</h2>
                    <p>Powering documentation for world-class government bodies, healthcare institutions, and enterprise leaders across the globe.</p>
                </div>

                <div className="clientele-grid">
                    {clients.map((client, index) => (
                        <ClientLogo key={index} client={client} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientLogos;
