import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ClientLogos from '../components/ClientLogos';

/* ── Shared inner-page hero ─────────────────────────────── */
const CompanyPageHero = ({ tag, title, subtitle }) => (
    <section style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1d2f4a 100%)',
        padding: '160px 0 80px',
        position: 'relative',
        overflow: 'hidden',
        marginTop: '80px'
    }}>
        <div style={{ position: 'absolute', width: '500px', height: '500px', borderRadius: '50%', background: 'rgba(29,99,237,0.07)', top: '-200px', right: '-100px' }} />
        <div className="max-container reveal">
            {tag && (
                <span style={{
                    display: 'inline-block', background: 'rgba(29,99,237,0.18)', color: '#60a5fa',
                    fontSize: '12px', fontWeight: '700', letterSpacing: '0.12em',
                    padding: '6px 14px', borderRadius: '100px', marginBottom: '20px',
                    border: '1px solid rgba(96,165,250,0.3)'
                }}>{tag}</span>
            )}
            <h1 style={{ fontSize: 'clamp(30px, 4vw, 56px)', fontWeight: '900', color: 'white', marginBottom: '16px', lineHeight: 1.1 }}>{title}</h1>
            <p style={{ fontSize: 'clamp(15px, 2vw, 18px)', color: 'rgba(255,255,255,0.7)', maxWidth: '620px', lineHeight: 1.7 }}>{subtitle}</p>
        </div>
    </section>
);


/* ═══════════════════════════════════════════════════════════
   CASE STUDIES PAGE
   ═══════════════════════════════════════════════════════════ */
const caseStudies = [
    {
        tag: 'JUDICIARY',
        tagColor: '#7c3aed',
        client: 'Allahabad High Court',
        logo: '⚖️',
        title: 'Paperless E-Court Solution',
        challenge: 'Ensuring robust protection against sensitive data breaches while training judges and staff to transition from millions of physical files to a digital system without workflow disruption.',
        solution: 'Custom judicial ECM with advanced search, automated cause-list generation, and secure workflows for document submission, approval, and archiving.',
        results: ['Instant remote access for judges', '95% reduction in physical file clutter', 'Automated case tracking & scheduling', 'Robust protection against unauthorized access'],
        industry: 'Judiciary',
        tech: 'Java, React JS, PostgreSQL'
    },
    {
        tag: 'GOVERNMENT',
        tagColor: '#dc2626',
        client: 'National Archives of India',
        logo: '📜',
        title: 'Abhilekh Patal: Historical Digitization',
        challenge: 'Digitizing vast, delicate, and aging historical records including manuscripts and maps in multiple languages while ensuring long-term preservation.',
        solution: 'High-resolution non-contact scanning, multilingual metadata indexing, and an intuitive public portal with advanced search and role-based access.',
        results: ['Long-term preservation of national heritage', 'Global access for international researchers', 'Multilingual OCR for deep content search', 'Secure handling of sensitive archives'],
        industry: 'Government / Archives',
        tech: 'Java, JSP, PostgreSQL, Tomcat'
    },
    {
        tag: 'LIBRARY',
        tagColor: '#0891b2',
        client: 'India International Center',
        logo: '🎥',
        title: 'Digilib: Multimedia DMS & Streaming',
        challenge: 'Integrating high-quality multimedia streaming with a DMS while protecting against piracy and managing diverse content types across varied internet bandwidths.',
        solution: 'Real-time streaming integration, complex file handling, payment gateway for monetization, and a subscription-based pay-per-view accessibility model.',
        results: ['Seamless lag-free multimedia playback', 'Monetized exclusive digital archives', 'Unified document & media management', 'Scalable storage for high-volume video'],
        industry: 'Multimedia / Library',
        tech: 'Java, JSP, PostgreSQL, Tomcat'
    },
    {
        tag: 'EDUCATION',
        tagColor: '#059669',
        client: 'Deccan College',
        logo: '🎓',
        title: '2 Million Records Digitization Project',
        challenge: 'Scanning 2 million diverse records including rare books, microfilms, and micro-cards that require specialized equipment and precise metadata indexing.',
        solution: 'Centralized high-resolution repository with batch import/export tools and a custom DMS optimized for microfilm and fragile book digitization.',
        results: ['2M+ records preserved digitally', '70% reduction in physical handling', 'Rapid retrieval of rare manuscripts', 'Detailed metadata for academic research'],
        industry: 'Education / Research',
        tech: 'Java, JSP, PostgreSQL, Tomcat'
    },
    {
        tag: 'GOVERNMENT',
        tagColor: '#dc2626',
        client: 'Presidential Estate',
        logo: '🏛️',
        title: 'Presidential Estate Digitization',
        challenge: 'Preserving discolored historical documents and large-format maps while building a comprehensive metadata schema for government-level retrieval.',
        solution: 'Phased digitization approach using color correction enhancement, OCR tagging, and secure cloud storage with strict role-based access controls.',
        results: ['Enhanced accessibility to historical maps', 'Full-text OCR for rapid document discovery', 'Digital backups for disaster recovery', 'Improved historical research efficiency'],
        industry: 'Government / Heritage',
        tech: 'Java, PostgreSQL'
    }
];

export const CaseStudies = () => {
    useEffect(() => { window.scrollTo(0, 0); document.querySelectorAll('.reveal').forEach(el => el.classList.add('fade-in')); }, []);
    const [activeFilter, setActiveFilter] = useState('All');
    const filters = ['All', 'JUDICIARY', 'GOVERNMENT', 'LIBRARY', 'EDUCATION'];
    const filtered = activeFilter === 'All' ? caseStudies : caseStudies.filter(c => c.tag === activeFilter);

    return (
        <>
            <CompanyPageHero
                tag="SUCCESS STORIES"
                title="Real Results. Real Clients. Real Impact."
                subtitle="Discover how leading organizations across India and the globe transformed their document operations with VSDOX AI-powered ECM."
            />

            {/* Filter Bar */}
            <div style={{ background: 'white', borderBottom: '1px solid var(--border)', padding: '24px 0', position: 'sticky', top: '80px', zIndex: 100 }}>
                <div className="max-container" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    {filters.map(f => (
                        <button
                            key={f}
                            onClick={() => setActiveFilter(f)}
                            style={{
                                padding: '8px 20px', borderRadius: '100px', border: '1px solid',
                                borderColor: activeFilter === f ? 'var(--primary)' : 'var(--border)',
                                background: activeFilter === f ? 'var(--primary)' : 'white',
                                color: activeFilter === f ? 'white' : 'var(--text-main)',
                                fontWeight: '600', fontSize: '14px', cursor: 'pointer', transition: 'all 0.2s ease'
                            }}
                        >{f}</button>
                    ))}
                </div>
            </div>

            <section style={{ padding: '80px 0', background: '#f8fafc' }}>
                <div className="max-container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '32px' }}>
                        {filtered.map((cs, i) => (
                            <div key={i} className="glass-card" style={{ padding: '0', overflow: 'hidden', background: 'white' }}>
                                {/* Card Header */}
                                <div style={{ background: 'linear-gradient(135deg, #0f172a, #1e293b)', padding: '32px', position: 'relative' }}>
                                    <span style={{ display: 'inline-block', background: cs.tagColor, color: 'white', fontSize: '11px', fontWeight: '800', letterSpacing: '0.1em', padding: '4px 12px', borderRadius: '100px', marginBottom: '16px' }}>{cs.tag}</span>
                                    <p style={{ fontSize: '24px', marginBottom: '8px' }}>{cs.logo}</p>
                                    <h3 style={{ color: 'white', fontSize: '20px', fontWeight: '700', lineHeight: 1.3 }}>{cs.title}</h3>
                                    <p style={{ color: '#94a3b8', fontSize: '13px', marginTop: '8px', fontWeight: '600' }}>{cs.client} · {cs.industry}</p>
                                </div>
                                {/* Card Body */}
                                <div style={{ padding: '32px' }}>
                                    <div style={{ marginBottom: '20px' }}>
                                        <h4 style={{ fontSize: '13px', fontWeight: '700', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>The Challenge</h4>
                                        <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6 }}>{cs.challenge}</p>
                                    </div>
                                    <div style={{ marginBottom: '20px' }}>
                                        <h4 style={{ fontSize: '13px', fontWeight: '700', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>Our Solution</h4>
                                        <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6 }}>{cs.solution}</p>
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '13px', fontWeight: '700', color: '#059669', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>✦ Key Results</h4>
                                        {cs.results.map((r, j) => (
                                            <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                                                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#059669', flexShrink: 0 }}></span>
                                                <span style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-dark)' }}>{r}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div style={{ marginTop: '20px', padding: '12px 16px', background: '#f1f5f9', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <i className="fas fa-code-branch" style={{ color: '#64748b', fontSize: '12px' }}></i>
                                        <span style={{ fontSize: '12px', fontWeight: '700', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Tech Stack:</span>
                                        <span style={{ fontSize: '13px', color: '#334155', fontWeight: '500' }}>{cs.tech}</span>
                                    </div>
                                    <div style={{ marginTop: '28px', paddingTop: '24px', borderTop: '1px solid var(--border)' }}>
                                        <Link to="/contact" className="btn-primary" style={{ display: 'inline-block', fontSize: '14px', padding: '10px 22px' }}>Get Similar Results →</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta-section reveal">
                <div className="max-container" style={{ textAlign: 'center' }}>
                    <h2>Your Success Story Starts Here</h2>
                    <p>Join hundreds of organizations who have transformed their document operations with VSDOX.</p>
                    <Link to="/contact" className="btn-primary" style={{ background: 'white', color: 'var(--primary)', marginTop: '30px', display: 'inline-block' }}>Schedule a Demo</Link>
                </div>
            </section>
            <ClientLogos />
        </>
    );
};


/* ═══════════════════════════════════════════════════════════
   CONTACT US (ENHANCED)
   ═══════════════════════════════════════════════════════════ */
export const ContactUs = () => {
    useEffect(() => { window.scrollTo(0, 0); document.querySelectorAll('.reveal').forEach(el => el.classList.add('fade-in')); }, []);
    const [formData, setFormData] = useState({ name: '', email: '', company: '', phone: '', subject: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    const handleSubmit = e => { e.preventDefault(); setSubmitted(true); };

    return (
        <>
            <CompanyPageHero
                tag="GET IN TOUCH"
                title="Let's Talk About Your Document Challenges"
                subtitle="Our ECM experts are ready to help you digitize, automate, and secure your document operations. Reach out today."
            />

            <section style={{ padding: '100px 0', background: '#f8fafc' }}>
                <div className="max-container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '60px', alignItems: 'start' }}>

                        {/* Form */}
                        <div className="glass-card reveal" style={{ padding: '48px', background: 'white' }}>
                            {submitted ? (
                                <div style={{ textAlign: 'center', padding: '60px 0' }}>
                                    <div style={{ fontSize: '64px', marginBottom: '24px' }}>✅</div>
                                    <h3 style={{ fontSize: '28px', fontWeight: '800', color: 'var(--text-dark)', marginBottom: '16px' }}>Message Sent!</h3>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '17px' }}>Thank you for reaching out. Our team will respond within 1 business day.</p>
                                    <button onClick={() => setSubmitted(false)} className="btn-primary" style={{ marginTop: '24px' }}>Send Another Message</button>
                                </div>
                            ) : (
                                <>
                                    <h3 style={{ fontSize: '26px', fontWeight: '800', marginBottom: '8px' }}>Send us a Message</h3>
                                    <p style={{ color: 'var(--text-muted)', marginBottom: '32px' }}>Fill out the form and we'll get back to you within 24 hours.</p>
                                    <form className="contact-form" onSubmit={handleSubmit}>
                                        <div className="form-row">
                                            <div>
                                                <label style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>Full Name *</label>
                                                <input type="text" name="name" placeholder="Your full name" value={formData.name} onChange={handleChange} required />
                                            </div>
                                            <div>
                                                <label style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>Work Email *</label>
                                                <input type="email" name="email" placeholder="you@company.com" value={formData.email} onChange={handleChange} required />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div>
                                                <label style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>Company Name</label>
                                                <input type="text" name="company" placeholder="Your organization" value={formData.company} onChange={handleChange} />
                                            </div>
                                            <div>
                                                <label style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>Phone Number</label>
                                                <input type="tel" name="phone" placeholder="+91 XXXXX XXXXX" value={formData.phone} onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div>
                                            <label style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>Subject *</label>
                                            <select name="subject" value={formData.subject} onChange={handleChange} required
                                                style={{ width: '100%', padding: '16px', borderRadius: '8px', border: '1px solid var(--border)', fontFamily: 'inherit', fontSize: '15px', background: 'white', color: formData.subject ? 'var(--text-dark)' : '#94a3b8' }}>
                                                <option value="" disabled>Select inquiry type</option>
                                                <option>Request a Product Demo</option>
                                                <option>Pricing & Licensing</option>
                                                <option>BFSI / Banking Solution</option>
                                                <option>Healthcare Solution</option>
                                                <option>Government / e-Governance</option>
                                                <option>Corporate Solution</option>
                                                <option>Education / Research Repository</option>
                                                <option>Technical Support</option>
                                                <option>Partnership Inquiry</option>
                                                <option>Other</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>Your Message *</label>
                                            <textarea name="message" placeholder="Tell us about your document management challenge..." rows="5" value={formData.message} onChange={handleChange} required></textarea>
                                        </div>
                                        <button type="submit" className="btn-primary" style={{ width: '100%', padding: '16px', fontSize: '16px', marginTop: '8px' }}>
                                            <i className="fas fa-paper-plane" style={{ marginRight: '10px' }}></i>Send Message
                                        </button>
                                    </form>
                                </>
                            )}
                        </div>

                        {/* Contact Info */}
                        <div className="reveal">
                            <div style={{ marginBottom: '32px' }}>
                                <h3 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '24px', color: 'var(--text-dark)' }}>Contact Information</h3>
                                {[
                                    { icon: 'fa-location-dot', color: '#dc2626', title: 'Corporate Office (HQ)', lines: ['Vir Softech Pvt. Ltd.', 'A 306, The I Thum, Plot No. A 40,', 'Sector 62, Noida, UP – 201301, India'] },
                                    { icon: 'fa-globe', color: '#6366f1', title: 'International Presence', lines: ['Japan: West Bldg. 302, 3-26-8 Takaido Higashi, Suginami-ku, Tokyo', 'USA: Silicon Valley, California'] },
                                    { icon: 'fa-phone', color: '#16a34a', title: 'Call Us', lines: ['18005717711 (Toll-Free)', '0120 - 4325 497 (Landline)'] },
                                    { icon: 'fa-whatsapp', color: '#25d366', title: 'WhatsApp', lines: ['9319086751'] },
                                    { icon: 'fa-envelope', color: '#1877f2', title: 'Email', lines: ['corp@virsoftech.com', 'support@virsoftech.com'] },
                                    { icon: 'fa-building', color: '#64748b', title: 'Registered Office', lines: ['C-2/54, Ashok Vihar, Phase-II,', 'North West, New Delhi – 110052'] },
                                ].map((info, i) => (
                                    <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', marginBottom: '24px', background: 'white', padding: '20px', borderRadius: '14px', border: '1px solid var(--border)', boxShadow: '0 4px 6px rgba(0,0,0,0.03)' }}>
                                        <span style={{ width: '44px', height: '44px', borderRadius: '12px', background: info.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', flexShrink: 0, fontSize: '18px' }}>
                                            <i className={`fas ${info.icon}`}></i>
                                        </span>
                                        <div>
                                            <div style={{ fontWeight: '700', color: 'var(--text-dark)', marginBottom: '6px' }}>{info.title}</div>
                                            {info.lines.map((line, j) => <div key={j} style={{ fontSize: '14px', color: 'var(--text-muted)' }}>{line}</div>)}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Quick links */}
                            <div style={{ background: 'linear-gradient(135deg, var(--primary), #60a5fa)', borderRadius: '20px', padding: '28px', color: 'white' }}>
                                <h4 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '16px' }}>Quick Demos</h4>
                                <p style={{ fontSize: '14px', opacity: 0.9, marginBottom: '20px', lineHeight: 1.6 }}>Want a personalized walkthrough of VSDOX for your industry? Schedule a 30-minute demo call.</p>
                                <a href="mailto:corp@virsoftech.com?subject=Demo Request" style={{ display: 'inline-block', background: 'white', color: 'var(--primary)', padding: '12px 24px', borderRadius: '10px', fontWeight: '700', textDecoration: 'none', fontSize: '14px' }}>
                                    Schedule a Demo →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};


/* ═══════════════════════════════════════════════════════════
   PRIVACY POLICY
   ═══════════════════════════════════════════════════════════ */
export const PrivacyPolicy = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);
    return (
        <>
            <CompanyPageHero
                tag="LEGAL"
                title="Privacy Policy"
                subtitle="We are committed to protecting your personal data and being transparent about how it is collected and used."
            />
            <section style={{ padding: '80px 0' }}>
                <div className="max-container">
                    <div style={{ display: 'grid', gridTemplateColumns: '240px 1fr', gap: '60px', alignItems: 'start' }}>
                        {/* Sidebar TOC */}
                        <div style={{ position: 'sticky', top: '100px', background: '#f8fafc', borderRadius: '16px', padding: '24px', border: '1px solid var(--border)' }}>
                            <p style={{ fontSize: '12px', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>On This Page</p>
                            {['Information We Collect', 'How We Use Data', 'Data Sharing', 'Data Security', 'Your Rights', 'Cookies', 'Contact Us'].map((item, i) => (
                                <a key={i} href={`#pp-${i}`} style={{ display: 'block', padding: '8px 12px', borderRadius: '8px', color: 'var(--text-muted)', textDecoration: 'none', fontSize: '14px', fontWeight: '500', marginBottom: '4px', transition: 'all 0.2s' }}
                                    onMouseEnter={e => { e.target.style.background = 'white'; e.target.style.color = 'var(--primary)'; }}
                                    onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--text-muted)'; }}>
                                    {item}
                                </a>
                            ))}
                        </div>

                        {/* Content */}
                        <div style={{ maxWidth: '780px' }}>
                            <div className="glass-card" style={{ padding: '12px 20px', background: '#eff6ff', borderColor: 'rgba(29,99,237,0.2)', marginBottom: '40px' }}>
                                <p style={{ color: 'var(--primary)', fontSize: '14px', fontWeight: '600' }}>
                                    <i className="fas fa-circle-info" style={{ marginRight: '8px' }}></i>
                                    Last updated: January 1, 2025 · Effective Date: January 1, 2025
                                </p>
                            </div>
                            {[
                                { id: 'pp-0', title: '1. Information We Collect', body: 'We collect information you provide directly, such as name, email, company name, phone number, and the content of messages you send us through our website forms. We also automatically collect technical data including IP addresses, browser type, pages visited, time spent on pages, and referring URLs through cookies and similar technologies. When you attend a demo or webinar, we may record and retain that session.' },
                                { id: 'pp-1', title: '2. How We Use Your Data', body: 'We use the information collected to: (a) Respond to your inquiries and provide customer support; (b) Send product updates, newsletters, and marketing communications (with your consent); (c) Improve and personalize your experience on our platform and website; (d) Analyze usage patterns to enhance product functionality; (e) Comply with legal obligations and enforce our terms. We never sell your personal data to third parties.' },
                                { id: 'pp-2', title: '3. Data Sharing & Third Parties', body: 'We may share your data with trusted service providers who assist in operating our website and delivering services (e.g., CRM software, email platforms, analytics tools). These providers are contractually required to protect your data. We may also disclose data if required by law, court order, or regulatory authority. In the event of a merger or acquisition, data may be transferred as part of that transaction, with prior notice given to you.' },
                                { id: 'pp-3', title: '4. Data Security', body: 'We implement industry-standard security measures including TLS/SSL encryption for data in transit, AES-256 encryption for data at rest, role-based access controls, regular security audits, and vulnerability assessments. Our platform is ISO 27001-aligned. However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.' },
                                { id: 'pp-4', title: '5. Your Rights', body: 'Depending on your jurisdiction, you may have the right to: access the personal data we hold about you; request correction of inaccurate data; request deletion of your data ("right to be forgotten"); object to processing; request data portability; withdraw consent at any time. To exercise any of these rights, please contact our Data Protection Officer at corp@virsoftech.com.' },
                                { id: 'pp-5', title: '6. Cookies & Tracking', body: 'We use essential cookies to provide site functionality, analytical cookies to understand site usage, and optional marketing cookies for personalized advertising. You can manage cookie preferences through our cookie consent banner or your browser settings. Disabling certain cookies may impact site functionality.' },
                                { id: 'pp-6', title: '7. Contact Us', body: 'For any privacy-related concerns, please contact our Data Protection Officer: Vir Softech Pvt. Ltd., A 306, The I Thum, Sector 62, Noida, India. Email: corp@virsoftech.com. We aim to respond to all requests within 30 days.' },
                            ].map((section, i) => (
                                <div key={i} id={section.id} style={{ marginBottom: '40px', paddingBottom: '40px', borderBottom: i < 6 ? '1px solid var(--border)' : 'none' }}>
                                    <h2 style={{ fontSize: '22px', fontWeight: '800', color: 'var(--text-dark)', marginBottom: '16px' }}>{section.title}</h2>
                                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.85', fontSize: '16px' }}>{section.body}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};


/* ═══════════════════════════════════════════════════════════
   TERMS & CONDITIONS
   ═══════════════════════════════════════════════════════════ */
export const TermsConditions = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);
    return (
        <>
            <CompanyPageHero
                tag="LEGAL"
                title="Terms & Conditions"
                subtitle="Please read these terms carefully before using the VSDOX platform or accessing our services."
            />
            <section style={{ padding: '80px 0' }}>
                <div className="max-container">
                    <div style={{ display: 'grid', gridTemplateColumns: '240px 1fr', gap: '60px', alignItems: 'start' }}>
                        {/* Sidebar */}
                        <div style={{ position: 'sticky', top: '100px', background: '#f8fafc', borderRadius: '16px', padding: '24px', border: '1px solid var(--border)' }}>
                            <p style={{ fontSize: '12px', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>Sections</p>
                            {['Acceptance of Terms', 'Use of Service', 'Intellectual Property', 'Data & Privacy', 'Limitation of Liability', 'Service Level Agreement', 'Termination', 'Governing Law'].map((item, i) => (
                                <a key={i} href={`#tc-${i}`} style={{ display: 'block', padding: '8px 12px', borderRadius: '8px', color: 'var(--text-muted)', textDecoration: 'none', fontSize: '14px', fontWeight: '500', marginBottom: '4px', transition: 'all 0.2s' }}
                                    onMouseEnter={e => { e.target.style.background = 'white'; e.target.style.color = 'var(--primary)'; }}
                                    onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--text-muted)'; }}>
                                    {item}
                                </a>
                            ))}
                        </div>

                        {/* Content */}
                        <div style={{ maxWidth: '780px' }}>
                            <div className="glass-card" style={{ padding: '12px 20px', background: '#fff7ed', borderColor: 'rgba(234,88,12,0.2)', marginBottom: '40px' }}>
                                <p style={{ color: '#c2410c', fontSize: '14px', fontWeight: '600' }}>
                                    <i className="fas fa-triangle-exclamation" style={{ marginRight: '8px' }}></i>
                                    Last updated: January 1, 2025 · By using VSDOX, you agree to these terms.
                                </p>
                            </div>
                            {[
                                { id: 'tc-0', title: '1. Acceptance of Terms', body: 'By accessing or using any VSDOX service, website, or platform offered by Vir Softech Pvt. Ltd. ("Vir Softech," "we," "us"), you agree to be bound by these Terms and Conditions. If you are entering into these terms on behalf of an organization, you represent that you have the authority to bind that organization. If you do not agree to these terms, please do not use our services.' },
                                { id: 'tc-1', title: '2. Acceptable Use of Services', body: 'You agree to use VSDOX services only for lawful purposes and in accordance with these Terms. You shall not: use the service to upload, process, or distribute malicious content; attempt to reverse engineer, decompile, or extract source code from any VSDOX component; use automated scripts to scrape or overload our infrastructure; share account credentials with unauthorized parties; or violate any applicable local, national, or international laws or regulations.' },
                                { id: 'tc-2', title: '3. Intellectual Property', body: 'All VSDOX software, documentation, branding, and content are the exclusive intellectual property of Vir Softech Pvt. Ltd. or its licensors. The platform may include open-source components governed by their respective licenses. Customer data uploaded to VSDOX remains the intellectual property of the customer. Vir Softech claims no ownership over customer-uploaded content.' },
                                { id: 'tc-3', title: '4. Data Ownership & Privacy', body: 'You retain full ownership of all data you upload or process through VSDOX. By using our services, you grant Vir Softech a limited, non-exclusive license to store, process, and transmit your data solely for the purpose of delivering the contracted services. We process personal data in accordance with our Privacy Policy and applicable data protection laws, including DPDP Act (India) and GDPR where applicable.' },
                                { id: 'tc-4', title: '5. Limitation of Liability', body: 'To the maximum extent permitted by applicable law, Vir Softech shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of data, revenue, profits, or business interruption. Vir Softech\'s total cumulative liability to you for any claims arising under these terms shall not exceed the fees paid by you to Vir Softech in the 12 months preceding the claim.' },
                                { id: 'tc-5', title: '6. Service Level Agreement (SLA)', body: 'For Professional and Enterprise tier customers, Vir Softech commits to a 99.9% monthly platform uptime SLA, excluding scheduled maintenance windows (communicated at least 48 hours in advance) and events beyond our reasonable control (force majeure). Service credits may apply for downtime exceeding the committed SLA, as specified in individual customer agreements.' },
                                { id: 'tc-6', title: '7. Termination', body: 'Either party may terminate a service agreement with 30 days written notice. Vir Softech may immediately suspend or terminate access if you breach these Terms, engage in abusive or illegal activity, or fail to make payments when due. Upon termination, you will have 30 days to export your data before it is permanently deleted from our systems.' },
                                { id: 'tc-7', title: '8. Governing Law & Disputes', body: 'These Terms shall be governed by the laws of India. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts in Noida, Uttar Pradesh, India. We encourage parties to attempt informal resolution before initiating legal proceedings. Any claims must be brought within one year of the cause of action arising.' },
                            ].map((section, i) => (
                                <div key={i} id={section.id} style={{ marginBottom: '40px', paddingBottom: '40px', borderBottom: i < 7 ? '1px solid var(--border)' : 'none' }}>
                                    <h2 style={{ fontSize: '22px', fontWeight: '800', color: 'var(--text-dark)', marginBottom: '16px' }}>{section.title}</h2>
                                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.85', fontSize: '16px' }}>{section.body}</p>
                                </div>
                            ))}
                            <div style={{ background: '#f8fafc', borderRadius: '16px', padding: '28px', border: '1px solid var(--border)' }}>
                                <h3 style={{ fontWeight: '800', marginBottom: '12px' }}>Questions About These Terms?</h3>
                                <p style={{ color: 'var(--text-muted)', marginBottom: '20px' }}>Contact our legal team for any clarifications.</p>
                                <a href="mailto:corp@virsoftech.com" className="btn-primary" style={{ display: 'inline-block', textDecoration: 'none' }}>corp@virsoftech.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
/* ═══════════════════════════════════════════════════════════
   BLOG PAGE
   ═══════════════════════════════════════════════════════════ */
const blogPosts = [
    {
        title: "Unlocking ROI with Enterprise Content Management (ECM)",
        category: "Business Strategy",
        date: "Feb 24, 2026",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
        excerpt: "Discover how modern ECM systems go beyond storage to drive operational efficiency and measurable cost savings for enterprises.",
        content: "Modern Enterprise Content Management (ECM) isn't just about moving paper to digital. It's about data velocity—the speed at which information moves through your organization to generate value. By automating classification and ensuring instant retrieval, large-scale organizations like Hero MotoCorp have reduced operational document costs by over 40%.",
        author: "Alok Gupta"
    },
    {
        title: "The Role of AI in Automated Document Classification",
        category: "Technology",
        date: "Feb 20, 2026",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2664&auto=format&fit=crop",
        excerpt: "Explore how Large Language Models and OCR are revolutionizing the way we categorize and extract data from millions of records.",
        content: "Gone are the days of manual keying. With VSDOX's AI Capture, systems can now 'read' handwriting, detect document types (invoices, legal deeds, medical reports), and extract critical metadata with 99% accuracy. This transition from 'unstructured noise' to 'structured data' is the cornerstone of the AI-powered office.",
        author: "Tech Insights Team"
    },
    {
        title: "Transitioning to Paperless: A Roadmap for Government Bodies",
        category: "Public Sector",
        date: "Feb 15, 2026",
        image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2340&auto=format&fit=crop",
        excerpt: "A step-by-step guide for public sector organizations to migrate delicate historical archives into secure digital repositories.",
        content: "Government projects like the National Archives of India require more than just scanning. They require specialized handling of fragile maps, multilingual OCR, and strict role-based access controls to prevent data exposure while ensuring public accessibility. This roadmap outlines the phased approach to e-governance.",
        author: "Strategic Planning"
    }
];

export const Blog = () => {
    useEffect(() => { window.scrollTo(0, 0); document.querySelectorAll('.reveal').forEach(el => el.classList.add('fade-in')); }, []);
    return (
        <>
            <CompanyPageHero
                tag="INSIGHTS & TRENDS"
                title="The VSDOX Blog"
                subtitle="Expert perspectives on ECM, AI-driven automation, and the future of digital documentation."
            />
            <section style={{ padding: '100px 0', background: '#f8fafc' }}>
                <div className="max-container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
                        {blogPosts.map((post, i) => (
                            <article key={i} className="glass-card reveal" style={{ padding: '0', overflow: 'hidden', background: 'white', display: 'flex', flexDirection: 'column' }}>
                                <div style={{ height: '240px', overflow: 'hidden' }}>
                                    <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'crop', transition: 'transform 0.5s' }} className="blog-img" />
                                </div>
                                <div style={{ padding: '32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                                        <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{post.category}</span>
                                        <span style={{ fontSize: '12px', color: '#64748b' }}>{post.date}</span>
                                    </div>
                                    <h3 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '16px', lineHeight: 1.3, color: 'var(--text-dark)' }}>{post.title}</h3>
                                    <p style={{ fontSize: '15px', color: '#64748b', lineHeight: 1.6, marginBottom: '24px' }}>{post.excerpt}</p>
                                    <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '20px', borderTop: '1px solid #f1f5f9' }}>
                                        <span style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-dark)' }}>By {post.author}</span>
                                        <Link to="#" style={{ fontSize: '14px', fontWeight: '700', color: 'var(--primary)', textDecoration: 'none' }}>Read Article →</Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
            <ClientLogos />
        </>
    );
};
