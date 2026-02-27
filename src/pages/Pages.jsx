import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ClientLogos from '../components/ClientLogos';
import MilestoneTimeline from '../components/MilestoneTimeline';

const PageHero = ({ title, subtitle, bgImage }) => (
    <section className="page-hero-container">
        <div
            className="page-hero-bg"
            style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url(${bgImage})` }}
        ></div>
        <div className="max-container">
            <div className="page-hero-content reveal">
                <h1>{title}</h1>
                <p>{subtitle}</p>
                <div className="breadcrumb">
                    <Link to="/">Home</Link> <span>/</span> <span>{title}</span>
                </div>
            </div>
        </div>
    </section>
);

const SectionInfo = ({ title, subtitle, content, image, reverse, items }) => (
    <section className={`section-info ${reverse ? 'reverse' : ''} max-container reveal`}>
        <div className="info-text">
            <span className="info-tag">{subtitle}</span>
            <h2>{title}</h2>
            <p>{content}</p>
            {items && (
                <ul className="info-list">
                    {items.map((item, i) => (
                        <li key={i}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M5 10L8 13L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </div>
        <div className="info-image">
            <div className="glass-card image-wrapper">
                <img src={image} alt={title} />
            </div>
        </div>
    </section>
);

export const Products = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.querySelectorAll('.reveal').forEach(el => el.classList.add('fade-in'));
    }, []);
    return (
        <>
            <PageHero
                title="Our Products"
                subtitle="Next-generation document management suite powered by AI."
                bgImage="https://images.unsplash.com/photo-1454165833467-03a669d96971?q=80&w=2340&auto=format&fit=crop"
            />
            <SectionInfo
                title="Unified Content Services"
                subtitle="CONTEXTUAL CONTENT"
                content="Manage the entire lifecycle of your enterprise content from capture to archival. Our AI-driven platform provides a single source of truth across all business functions, integrated with your existing ERP and CRM systems."
                image="https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=2340&auto=format&fit=crop"
                items={["Content Management & Archival", "AI-powered Content Extraction", "Contextual Information Retrieval", "Federated Records Management"]}
            />
            <SectionInfo
                title="Low-Code Application Platform"
                subtitle="AGILE DEVELOPMENT"
                content="Design and deploy complex, high-volume business applications in weeks instead of months. Our visual designers empower business users to create intuitive interfaces and data models without IT bottlenecks."
                image="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2340&auto=format&fit=crop"
                reverse
                items={["Application Studio", "Visual Data Modeling", "Mobile App Designer", "Low-Code DevOps"]}
            />
            <ClientLogos />
        </>
    );
};

export const Solutions = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.querySelectorAll('.reveal').forEach(el => el.classList.add('fade-in'));
    }, []);
    return (
        <>
            <PageHero
                title="Enterprise Solutions"
                subtitle="Solved challenges for complex organizational workflows."
                bgImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2340&auto=format&fit=crop"
            />
            <SectionInfo
                title="Native Process Automation"
                subtitle="NATIVE BPM"
                content="Streamline complex end-to-end processes with our native business process management engine. From simple approvals to mission-critical operational workflows, automate everything on a single platform."
                image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2340&auto=format&fit=crop"
                items={["Dynamic Case Management", "Rules Engine (BRMS)", "Robotic Process Automation (RPA)", "Real-time BAM & Analytics"]}
            />
            <SectionInfo
                title="Omnichannel Customer Engagement"
                subtitle="SMART CCM"
                content="Deliver highly personalized, context-aware communications across all customer touchpoints. Automate document generation and distribution for a seamless, secure, and engaging experience."
                image="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2340&auto=format&fit=crop"
                reverse
                items={["Dynamic Document Generation", "Omnichannel Distribution", "Multilingual Communication", "Interactive Digital Forms"]}
            />
            <ClientLogos />
        </>
    );
};

export const Industries = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.querySelectorAll('.reveal').forEach(el => el.classList.add('fade-in'));
    }, []);
    return (
        <>
            <PageHero
                title="Industry-Specific Solutions"
                subtitle="Tailored document strategies for every sector and scale."
                bgImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2340&auto=format&fit=crop"
            />
            <div className="max-container reveal" style={{ padding: '80px 0' }}>
                <div className="industry-grid-detailed">
                    <div className="industry-block">
                        <div className="icon-main">🏢</div>
                        <h3>Corporate</h3>
                        <ul className="dot-list">
                            <li><strong>HR:</strong> Employee docs & employment policies</li>
                            <li><strong>Secretarial:</strong> Shareholder & Investor documents</li>
                            <li><strong>Functions:</strong> R&D, Finance, & CX content</li>
                        </ul>
                    </div>
                    <div className="industry-block">
                        <div className="icon-main">🏦</div>
                        <h3>BFSI</h3>
                        <ul className="dot-list">
                            <li><strong>Banking:</strong> Account opening & commercial lending</li>
                            <li><strong>Insurance:</strong> New policies & policy servicing</li>
                            <li><strong>Management:</strong> Claims & service requests</li>
                        </ul>
                    </div>
                    <div className="industry-block">
                        <div className="icon-main">🏛️</div>
                        <h3>Government</h3>
                        <ul className="dot-list">
                            <li><strong>Judiciary:</strong> Case File Digitization & e-Filing</li>
                            <li><strong>Ministries:</strong> Automation & grant management</li>
                            <li><strong>Public:</strong> Citizens records repositories</li>
                        </ul>
                    </div>
                    <div className="industry-block">
                        <div className="icon-main">🎓</div>
                        <h3>Education</h3>
                        <ul className="dot-list">
                            <li><strong>Libraries:</strong> Research, Journals, & Archives</li>
                            <li><strong>Institutions:</strong> Subject Text Repositories</li>
                            <li><strong>Access:</strong> Managed student records portal</li>
                        </ul>
                    </div>
                    <div className="industry-block">
                        <div className="icon-main">🏥</div>
                        <h3>Healthcare</h3>
                        <ul className="dot-list">
                            <li><strong>Records:</strong> Patient records digitization</li>
                            <li><strong>Appointments:</strong> Easy access management</li>
                            <li><strong>Claims:</strong> Insurance history & history tracking</li>
                        </ul>
                    </div>
                    <div className="industry-block" style={{ background: 'var(--primary)', color: 'white' }}>
                        <div className="icon-main" style={{ color: 'white' }}>🚀</div>
                        <h3>Startups</h3>
                        <p style={{ color: 'rgba(255,255,255,0.9)' }}>Scaling with expansive dreams? Move your documentation to a secure, cloud-ready environment today.</p>
                    </div>
                </div>
            </div>
            <ClientLogos />
        </>
    );
};

export const Resources = () => (
    <>
        <PageHero
            title="Resources & Insights"
            subtitle="Everything you need to master your document lifecycle."
            bgImage="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2340&auto=format&fit=crop"
        />
        <section className="max-container reveal" style={{ padding: '100px 0' }}>
            <div className="feature-small-grid">
                <div className="feature-small-card">
                    <h4>Technical Docs</h4>
                    <p>Full API documentation and setup guides for developers.</p>
                    <Link to="#" className="link-more">Access Docs →</Link>
                </div>
                <div className="feature-small-card">
                    <h4>Case Studies</h4>
                    <p>Learn how Hero Motocorp saved 40% on operational costs.</p>
                    <Link to="#" className="link-more">Read Stories →</Link>
                </div>
                <div className="feature-small-card">
                    <h4>Help Center</h4>
                    <p>24/7 ticket support and community knowledge base.</p>
                    <Link to="#" className="link-more">Get Support →</Link>
                </div>
            </div>
        </section>
        <ClientLogos />
    </>
);

export const Pricing = () => (
    <>
        <div style={{ background: 'var(--section-alt)', paddingBottom: '100px' }}>
            <PageHero
                title="Pricing Plans"
                subtitle="Flexible options for growing businesses and enterprises."
                bgImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2340&auto=format&fit=crop"
            />
            <div className="max-container reveal" style={{ marginTop: '-60px' }}>
                <div className="pricing-grid">
                    <div className="pricing-card">
                        <h5>Standard</h5>
                        <div className="price">$49<span>/mo</span></div>
                        <ul>
                            <li>Up to 10,000 Documents</li>
                            <li>Basic Workflow Engine</li>
                            <li>5 User Accounts</li>
                            <li>Standard Support</li>
                        </ul>
                        <button className="btn-outline">Choose Plan</button>
                    </div>
                    <div className="pricing-card featured">
                        <div className="popular-tag">Most Popular</div>
                        <h5>Professional</h5>
                        <div className="price">$199<span>/mo</span></div>
                        <ul>
                            <li>Up to 500,000 Documents</li>
                            <li>Advanced AI Capture</li>
                            <li>25 User Accounts</li>
                            <li>Priority 24/7 Support</li>
                        </ul>
                        <button className="btn-primary">Choose Plan</button>
                    </div>
                    <div className="pricing-card">
                        <h5>Enterprise</h5>
                        <div className="price">Custom</div>
                        <ul>
                            <li>Unlimited Documents</li>
                            <li>Full API Access</li>
                            <li>Unlimited Users</li>
                            <li>Dedicated Success Manager</li>
                        </ul>
                        <button className="btn-outline">Contact Sales</button>
                    </div>
                </div>
            </div>
        </div>
        <ClientLogos />
    </>
);

export const Contact = () => (
    <>
        <PageHero
            title="Contact Us"
            subtitle="Get in touch with our document management experts."
            bgImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2340&auto=format&fit=crop"
        />
        <section className="max-container reveal" style={{ padding: '80px 0' }}>
            <div className="contact-page-grid">
                <div className="contact-form-wrapper glass-card">
                    <h3>Send us a Message</h3>
                    <form className="contact-form">
                        <div className="form-row">
                            <input type="text" placeholder="Full Name" />
                            <input type="email" placeholder="Email Address" />
                        </div>
                        <input type="text" placeholder="Subject" />
                        <textarea placeholder="Your Message" rows="6"></textarea>
                        <button className="btn-primary">Send Message</button>
                    </form>
                </div>
                <div className="contact-info-boxes">
                    <div className="contact-box glass-card">
                        <h4>Corporate Office (HQ)</h4>
                        <p>Vir Softech Pvt. Ltd.<br />A 306, The I Thum, Plot No. A 40, Sector 62, Noida, UP, India</p>
                    </div>
                    <div className="contact-box glass-card">
                        <h4>International Offices</h4>
                        <p><strong>Japan:</strong> West Bldg. 302, 3-26-8 Takaido Higashi, Suginami-ku, Tokyo</p>
                        <p><strong>USA:</strong> Silicon Valley, California</p>
                    </div>
                    <div className="contact-box glass-card">
                        <h4>Phone & Email</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <p style={{ margin: 0 }}><strong>Toll-Free:</strong> <a href="tel:18005717711">18005717711</a></p>
                            <p style={{ margin: 0 }}><strong>Landline:</strong> <a href="tel:01204325497">0120 - 4325 497</a></p>
                            <p style={{ margin: 0 }}><strong>WhatsApp:</strong> <a href="https://wa.me/919319086751" target="_blank" rel="noopener noreferrer">9319086751</a></p>
                            <p style={{ margin: 0 }}><strong>Email:</strong> <a href="mailto:corp@virsoftech.com">corp@virsoftech.com</a></p>
                        </div>
                    </div>
                    <div className="contact-box glass-card">
                        <h4>Registered Office</h4>
                        <p>C-2/54, Ashok Vihar, Phase-II, North West, New Delhi, India – 110052</p>
                    </div>
                </div>
            </div>
        </section>
    </>
);

export const Legal = () => (
    <>
        <PageHero
            title="Legal & Privacy"
            subtitle="Transparent terms of service and security commitments."
            bgImage="https://images.unsplash.com/photo-1589216532372-1c2a367900d9?q=80&w=2340&auto=format&fit=crop"
        />
        <section className="max-container reveal" style={{ padding: '100px 0' }}>
            <div className="legal-content glass-card">
                <h3>Privacy Policy</h3>
                <p>Effective Date: January 1, 2024</p>
                <p>
                    At VSDox, we are committed to protecting your privacy. This policy outlines how we handle your data and documents...
                </p>
                <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid var(--border)' }} />
                <h3>Terms of Service</h3>
                <p>
                    By using VSDox, you agree to comply with our acceptable use policies. We provide a 99.9% uptime guarantee for all professional tier accounts...
                </p>
            </div>
        </section>
        <ClientLogos />
    </>
);

export const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.querySelectorAll('.reveal').forEach(el => el.classList.add('fade-in'));
    }, []);

    const achievementList = [
        "Showcase Start-up - India International Trade Fair 2016",
        "Top 20 ECM Solution Providers 2018, 2019, 2021, 2023 (CIO India)",
        "Most Promising Assessment Solution Provider 2021 (Ardorcomm Media)",
        "Partner - World Education Summit 2018"
    ];

    const leadership = [
        {
            name: "Deepak Garg",
            role: "Managing Director",
            img: "https://www.virsoftech.com/img/deepak_garg.jpg",
            linkedin: "https://www.linkedin.com/in/deepakgarg76/",
            email: "deepak.garg@virsoftech.com",
            desc: "A quintessentially gifted techno-businessman, Deepak has over 20 years of experience in growing products and dreams through product innovation, strategic planning, and customer acquisition. He has huge experience in the govt. and business IT solutions, serving clients globally, in the past for companies like HCL Technologies and Adobe Systems. Deepak is the mind behind our products and service offerings. As the Managing Director, he oversees the sales, business development, operations, and financial division."
        },
        {
            name: "Abhijeet Jain",
            role: "Chief Technology Officer",
            img: "https://www.virsoftech.com/img/abhijeet_pic.jpg",
            linkedin: "https://www.linkedin.com/in/abhijeet-jain-5a9b313/",
            email: "abhijeet.jain@virsoftech.com",
            desc: "Abhijeet is a Computer Scientist, Entrepreneur, and Business Executive with a deep background in technology. He is a programming guru with over 20 years industry experience of leading R&D teams at global product companies. In the past, he's worked in Adobe Systems where he was the key solution architect for PDF centric products and services for Print & Publishing domain. He is a contributor to PDF ISO specifications. Abhijeet is still very hands on with coding and is chief architect for our print domain projects."
        },
        {
            name: "Pralaypati Ta",
            role: "Principal Architect",
            img: "https://www.virsoftech.com/img/Pralay-photo.png",
            linkedin: "https://www.linkedin.com/in/pralaypati-ta-3944691/",
            email: "pralaypati.ta@virsoftech.com",
            desc: "Pralaypati is a coding geek. He has over 18 years of tech leadership experience leading R&D teams at global Product companies, such as Samsung and Adobe Systems. Pralaypati is our solution architect for Cloud based solutions in DAM/CMS and Analytics technologies."
        },
        {
            name: "Sameer Manuja",
            role: "Principal Architect",
            img: "https://www.virsoftech.com/sameer_manuja.jpg",
            linkedin: "https://www.linkedin.com/in/sameermanuja/",
            email: "sameer.manuja@virsoftech.com",
            desc: "Sameer is our key solution architect for print and publishing technologies. He has over 20 years of industry experience in creating path-setting technologies for companies like Samsung and Adobe Systems. He has several US patents to his name."
        },
        {
            name: "Akihide Sugino",
            role: "Country Head, Japan",
            img: "https://www.virsoftech.com/img/sugino.jpg",
            linkedin: "#",
            email: "sugino.ak@virsoftech.com",
            desc: "Sugino is a seasoned industry veteran with over 35 years of experience in Sales, Marketing, and License Compliance Service for top global firms such as Epson and Adobe, he has managed vendors, partnerships, product line development, and enterprise sales for print and publishing domain. Sugino oversees corporate management and sales at Vir Softech."
        },
        {
            name: "Manu Paliwal",
            role: "Vice President – Sales",
            img: "https://www.virsoftech.com/img/manu-photo.jpg?v=1",
            linkedin: "https://www.linkedin.com/in/manu-paliwal-159b324/",
            email: "corp@virsoftech.com",
            desc: "Manu is driving the growth strategy for the business, delivering differentiated customer value, and expanding business reach with diversified digital solutions. He has over 25 years of experience in the Sales and marketing, strategic alliances and operations including supply chain management. He has delivered turnaround results in most challenging business situations, prior to his current role, Manu held several leadership roles with P&L responsibility with global companies including his role as President – Business Solutions for Sharp."
        }
    ];

    return (
        <>
            <PageHero
                title="About Vir Softech"
                subtitle="Business-led IT process transformation for a digital world."
                bgImage="https://images.unsplash.com/photo-1522071823991-b99c223c7483?q=80&w=2340&auto=format&fit=crop"
            />

            <section className="section max-container reveal" style={{ padding: '80px 0' }}>
                <div className="section-info">
                    <div className="info-text">
                        <span className="info-tag">WHO WE ARE</span>
                        <h2>Revolutionizing IT Process Transformation</h2>
                        <p>
                            Vir Softech is at the forefront of the revolution in business-led IT process transformation. We assist our customers in realizing their vision and scaling up through workflow transformations that produce superior business results at the lowest possible cost and in the shortest amount of time.
                        </p>
                        <p>
                            We are a tech leader in four key domains:
                        </p>
                        <ul className="info-list">
                            <li><span style={{ color: 'var(--primary)' }}>✓</span> Enterprise Content Management & Digital Imaging</li>
                            <li><span style={{ color: 'var(--primary)' }}>✓</span> Print Technology Products & Services</li>
                            <li><span style={{ color: 'var(--primary)' }}>✓</span> Design & Artwork Process Automation</li>
                            <li><span style={{ color: 'var(--primary)' }}>✓</span> EVAL - Educational Evaluation, Assessments & Learning</li>
                        </ul>
                    </div>
                    <div className="info-image">
                        <div className="glass-card image-wrapper" style={{ background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '40px' }}>
                            <h3 style={{ marginBottom: '20px', color: 'var(--primary)' }}>Global Impact</h3>
                            <p style={{ marginBottom: '10px' }}><strong>CAGR:</strong> 40% per annum</p>
                            <p style={{ marginBottom: '10px' }}><strong>Presence:</strong> US, UK, Japan, Asia, Australia, Middle East, India</p>
                            <p><strong>Clients:</strong> Fortune 500, Govt, BFSI, Education, Health, Print</p>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ background: 'var(--section-alt)', padding: '0' }}>
                <MilestoneTimeline />

                <div className="max-container reveal">
                    <div style={{ background: 'white', padding: '40px', borderRadius: '20px', border: '1px solid var(--border)', marginBottom: '80px' }}>
                        <h3 style={{ marginBottom: '20px', textAlign: 'center' }}>Awards & Recognition</h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
                            {achievementList.map((ach, i) => (
                                <div key={i} style={{ background: '#f8fafc', padding: '15px 25px', borderRadius: '50px', fontSize: '14px', fontWeight: '600', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    🏆 {ach}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="section max-container reveal" style={{ padding: '80px 0' }}>
                <div style={{ textAlign: 'left', marginBottom: '60px' }}>
                    <h2 style={{ fontSize: '42px', fontWeight: '800', color: 'var(--primary)', marginBottom: '16px' }}>Leadership at Vir Softech</h2>
                    <p style={{ maxWidth: '1000px', fontSize: '18px', lineHeight: '1.6', color: 'var(--text-dark)' }}>
                        A few passionate technologists behind world’s foremost enterprise Imaging and Print products formed Vir Softech in Nov 2015. With time the team has expanded to include brilliant product engineers, research scientists, programmers, workflow engineers, data scientists, marketing executives, and dev-ops experts.
                    </p>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(480px, 1fr))', gap: '30px' }}>
                    {leadership.map((leader, i) => (
                        <div key={i} className="glass-card" style={{
                            padding: '30px',
                            border: '4px solid #a78bfa70',
                            borderRadius: '20px',
                            background: i % 2 === 0 ? 'white' : 'rgba(167, 139, 250, 0.1)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '20px'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                    <div style={{
                                        width: '100px',
                                        height: '100px',
                                        borderRadius: '50%',
                                        overflow: 'hidden',
                                        border: '3px solid white',
                                        boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                                    }}>
                                        <img src={leader.img} alt={leader.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                            onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/150?text=Leader" }} />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '28px', fontWeight: '800', color: '#6d28d9', margin: 0 }}>{leader.name}</h4>
                                        <div style={{ fontSize: '20px', fontWeight: '700', color: 'var(--text-dark)' }}>{leader.role}</div>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '10px' }}>
                                    <a href={leader.linkedin} target="_blank" rel="noopener noreferrer" style={{
                                        width: '40px', height: '40px', borderRadius: '50%', background: '#0a66c2', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none'
                                    }}><i className="fab fa-linkedin-in"></i></a>
                                    <a href={`mailto:${leader.email}`} style={{
                                        width: '40px', height: '40px', borderRadius: '50%', background: '#f59e0b', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none'
                                    }}><i className="fas fa-envelope"></i></a>
                                </div>
                            </div>
                            <p style={{ fontSize: '15px', lineHeight: '1.7', color: 'var(--text-main)', margin: 0 }}>
                                {leader.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};
