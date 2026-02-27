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
    { name: "Army Medical College", logo: "🏥" },
    { name: "Bihar Haj Committe", logo: "🕌" },
    { name: "Himalayan Forest Research Institute, Shimla", logo: "🌲" },
    { name: "Indian Coast Guard", logo: "⚓" },
    { name: "NCERT", logo: "📚" },
    { name: "NIA", logo: "🕵️" },
    { name: "Army Public School", logo: "🏫" },
    { name: "CRPF", logo: "🛡️" },
    { name: "India Post", logo: "📯" },
    { name: "Indian Army", logo: "⚔️" },
    { name: "NCRB", logo: "📜" },
    { name: "NID, MP", logo: "🎨" },
    { name: "Indian Patent Office", logo: client1 },
    { name: "National Archives", logo: client2 },
    { name: "HDFC Life", logo: client7 },
    { name: "Hero MotoCorp", logo: client9 },
    { name: "IIT Delhi", logo: client11 },
    { name: "AIIMS New Delhi", logo: client13 },
    { name: "C-DAC", logo: "💻" },
    { name: "Ministry of Defense", logo: "🎖️" },
    { name: "Department of Justice", logo: "⚖️" },
    { name: "NIC Cloud", logo: "☁️" },
    { name: "STPI", logo: "🛰️" },
    { name: "World Bank Projects", logo: "🌍" },
    { name: "NABARD", logo: "🚜" },
    { name: "SEBI", logo: "📈" },
    { name: "RBI Archives", logo: "🏦" },
    { name: "GeM Support", logo: "🛒" },
    { name: "Startup India", logo: "🚀" },
    { name: "NITI Aayog", logo: "📋" }
];

const ClientLogos = () => {
    return (
        <section className="clientele-section reveal">
            <div className="max-container">
                <div className="clientele-header">
                    <span className="info-tag" style={{ margin: '0 auto 16px', display: 'inline-block' }}>Our Trusted Network</span>
                    <h2>Elite Client Roster</h2>
                    <p>Powering documentation for world-class government bodies, healthcare institutions, and enterprise leaders across the globe.</p>
                </div>

                <div className="clientele-grid-static">
                    {clients.map((client, index) => (
                        <div key={index} className="client-circle-item">
                            <div className="client-circle">
                                {typeof client.logo === 'string' && client.logo.length < 5 ? (
                                    <span className="client-emoji">{client.logo}</span>
                                ) : (
                                    <img src={client.logo} alt={client.name} onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'block';
                                    }} />
                                )}
                                <div className="client-initials" style={{ display: 'none' }}>
                                    {client.name.substring(0, 2).toUpperCase()}
                                </div>
                            </div>
                            <span className="client-name-label">{client.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientLogos;
