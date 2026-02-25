import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ClientLogos from '../components/ClientLogos';

const openings = [
    {
        id: 1,
        title: 'Senior React Developer',
        department: 'Engineering',
        location: 'Noida, India (Hybrid)',
        type: 'Full-Time',
        experience: '4–7 Years',
        icon: 'fa-code',
        color: '#1d63ed',
        description: 'Lead the development of our next-generation ECM platform UI with React, TypeScript, and cutting-edge state management solutions.',
        skills: ['React', 'TypeScript', 'Redux', 'REST APIs', 'CSS-in-JS']
    },
    {
        id: 2,
        title: 'AI / ML Engineer',
        department: 'AI Research',
        location: 'Noida, India (On-site)',
        type: 'Full-Time',
        experience: '3–6 Years',
        icon: 'fa-robot',
        color: '#7c3aed',
        description: 'Build and improve our AI document processing pipeline — OCR, NLP classification, summarization and semantic search models.',
        skills: ['Python', 'PyTorch', 'NLP', 'LLMs', 'OpenCV']
    },
    {
        id: 3,
        title: 'Java Backend Developer',
        department: 'Engineering',
        location: 'Noida, India (Hybrid)',
        type: 'Full-Time',
        experience: '3–5 Years',
        icon: 'fa-server',
        color: '#059669',
        description: 'Design, build and maintain scalable microservices powering the VsDOX ECM platform, with a focus on performance and reliability.',
        skills: ['Java', 'Spring Boot', 'Microservices', 'PostgreSQL', 'Docker']
    },
    {
        id: 4,
        title: 'Product Manager – ECM',
        department: 'Product',
        location: 'Noida, India / Remote',
        type: 'Full-Time',
        experience: '5–8 Years',
        icon: 'fa-chart-gantt',
        color: '#d97706',
        description: 'Own the product roadmap for VsDOX, collaborating with engineering, design, and sales to deliver world-class ECM solutions.',
        skills: ['Product Strategy', 'Agile', 'User Research', 'Roadmapping', 'JIRA']
    },
    {
        id: 5,
        title: 'DevOps / Cloud Engineer',
        department: 'Infrastructure',
        location: 'Noida, India (Hybrid)',
        type: 'Full-Time',
        experience: '3–5 Years',
        icon: 'fa-cloud',
        color: '#0891b2',
        description: 'Own our cloud infrastructure on AWS/Azure, CI/CD pipelines, and Kubernetes-based deployments for enterprise clients.',
        skills: ['AWS', 'Kubernetes', 'Docker', 'CI/CD', 'Terraform']
    },
    {
        id: 6,
        title: 'Enterprise Sales Executive',
        department: 'Sales',
        location: 'Pan India / Remote',
        type: 'Full-Time',
        experience: '3–6 Years',
        icon: 'fa-handshake',
        color: '#dc2626',
        description: 'Drive revenue growth by building relationships with enterprise clients in BFSI, Government, Healthcare and Manufacturing verticals.',
        skills: ['B2B Sales', 'CRM', 'SaaS', 'Account Management', 'Negotiation']
    },
    {
        id: 7,
        title: 'UI / UX Designer',
        department: 'Design',
        location: 'Noida, India (Hybrid)',
        type: 'Full-Time',
        experience: '2–5 Years',
        icon: 'fa-pen-ruler',
        color: '#9333ea',
        description: 'Design intuitive, beautiful interfaces for enterprise ECM products that are used by thousands of users across government and banking.',
        skills: ['Figma', 'Design Systems', 'Prototyping', 'User Testing', 'Motion Design']
    },
    {
        id: 8,
        title: 'Business Development Intern',
        department: 'Sales',
        location: 'Noida, India (On-site)',
        type: 'Internship',
        experience: 'Fresher / 0–1 Year',
        icon: 'fa-seedling',
        color: '#16a34a',
        description: 'Join our sales team to learn enterprise sales, build client relationships, and support go-to-market activities across industry verticals.',
        skills: ['Communication', 'MS Office', 'Research', 'CRM Basics', 'Enthusiasm']
    },
];

const departments = ['All', 'Engineering', 'AI Research', 'Product', 'Infrastructure', 'Sales', 'Design'];

const benefits = [
    { icon: 'fa-indian-rupee-sign', color: '#059669', title: 'Competitive Compensation', desc: 'Market-leading salaries, annual increments, and performance bonuses.' },
    { icon: 'fa-laptop-medical', color: '#1d63ed', title: 'Health Insurance', desc: 'Comprehensive medical, dental and vision coverage for you and your family.' },
    { icon: 'fa-graduation-cap', color: '#7c3aed', title: 'Learning & Development', desc: 'Annual learning budget, conference allowances, and sponsored certifications.' },
    { icon: 'fa-house-laptop', color: '#d97706', title: 'Hybrid Work', desc: 'Flexible hybrid work policy. We value output, not time-at-desk.' },
    { icon: 'fa-umbrella-beach', color: '#0891b2', title: 'Paid Time Off', desc: '24 days PTO + public holidays + mental wellness days every quarter.' },
    { icon: 'fa-rocket', color: '#dc2626', title: 'Fast Growth', desc: 'Work directly with senior leadership and see your impact on a global scale.' },
];

const Careers = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [selectedJob, setSelectedJob] = useState(null);
    const [form, setForm] = useState({ name: '', email: '', phone: '', linkedin: '', cover: '' });
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        document.querySelectorAll('.reveal').forEach(el => el.classList.add('fade-in'));
    }, []);

    const filtered = activeFilter === 'All' ? openings : openings.filter(j => j.department === activeFilter);

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
    const handleSubmit = e => { e.preventDefault(); setSubmitted(true); };

    return (
        <>
            {/* Hero */}
            <section style={{
                background: 'linear-gradient(135deg, #0f172a 0%, #1d2f4a 100%)',
                padding: '160px 0 100px',
                position: 'relative',
                overflow: 'hidden',
                marginTop: '80px'
            }}>
                <div style={{ position: 'absolute', width: '600px', height: '600px', borderRadius: '50%', background: 'rgba(29,99,237,0.08)', top: '-250px', right: '-100px' }} />
                <div style={{ position: 'absolute', width: '400px', height: '400px', borderRadius: '50%', background: 'rgba(124,58,237,0.06)', bottom: '-150px', left: '-80px' }} />
                <div className="max-container reveal" style={{ position: 'relative', zIndex: 1 }}>
                    <span style={{
                        display: 'inline-block', background: 'rgba(29,99,237,0.18)', color: '#60a5fa',
                        fontSize: '12px', fontWeight: '700', letterSpacing: '0.12em',
                        padding: '6px 16px', borderRadius: '100px', marginBottom: '24px',
                        border: '1px solid rgba(96,165,250,0.3)'
                    }}>JOIN OUR TEAM</span>
                    <h1 style={{ fontSize: 'clamp(32px, 5vw, 64px)', fontWeight: '900', color: 'white', lineHeight: 1.1, marginBottom: '20px' }}>
                        Build the Future of <span style={{ background: 'linear-gradient(90deg, #60a5fa, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Document Intelligence</span>
                    </h1>
                    <p style={{ fontSize: 'clamp(16px, 2vw, 20px)', color: 'rgba(255,255,255,0.72)', maxWidth: '640px', lineHeight: 1.75, marginBottom: '40px' }}>
                        Join a team of passionate engineers, designers, and thinkers transforming how governments, banks, hospitals, and enterprises manage their most critical information.
                    </p>
                    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                        <a href="#openings" className="btn-primary">View Open Roles</a>
                        <a href="mailto:careers@virsoftech.com" style={{ display: 'inline-block', padding: '12px 28px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.3)', color: 'white', textDecoration: 'none', fontWeight: '600', transition: 'all 0.3s ease' }}>
                            Send Your CV
                        </a>
                    </div>

                    {/* Stats row */}
                    <div style={{ display: 'flex', gap: '48px', marginTop: '64px', flexWrap: 'wrap' }}>
                        {[{ value: '200+', label: 'Team Members' }, { value: '15+', label: 'Years of Innovation' }, { value: '30+', label: 'Countries Served' }, { value: 'ISO', label: '9001:2015 Certified' }].map((s, i) => (
                            <div key={i}>
                                <div style={{ fontSize: '36px', fontWeight: '900', color: 'white', lineHeight: 1 }}>{s.value}</div>
                                <div style={{ fontSize: '14px', color: '#94a3b8', marginTop: '6px' }}>{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Culture Section */}
            <section style={{ padding: '100px 0', background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' }}>
                <div className="max-container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }} className="reveal">
                        <span className="info-tag" style={{ background: 'rgba(29,99,237,0.15)', color: '#60a5fa', border: '1px solid rgba(29,99,237,0.2)' }}>OUR CULTURE</span>
                        <h2 style={{ fontSize: 'clamp(26px, 3vw, 42px)', fontWeight: '800', color: 'white', margin: '20px 0 12px' }}>Why People Love Working Here</h2>
                        <p style={{ color: '#94a3b8', maxWidth: '620px', margin: '0 auto', fontSize: '17px' }}>
                            We're not just building software — we're building a company where talented people do the best work of their careers.
                        </p>
                    </div>
                    <div className="ai-features-grid reveal">
                        {[
                            { icon: 'fa-people-group', title: 'Collaborative Culture', desc: 'Flat hierarchy, open-door leadership, and cross-functional teams that move fast together.' },
                            { icon: 'fa-brain', title: 'Continuous Learning', desc: 'Tech talks, hackathons, and sponsored learning — we invest in your growth constantly.' },
                            { icon: 'fa-globe-asia', title: 'Real-World Impact', desc: 'Your code powers India\'s High Courts, banks, and hospitals — not just another CRUD app.' },
                            { icon: 'fa-medal', title: 'Recognized Excellence', desc: 'ISO 9001:2015 certified, CMMI Level 3 appraised — we win awards, you earn recognition.' },
                        ].map((c, i) => (
                            <div key={i} className="ai-feature-card">
                                <div className="ai-icon"><i className={`fas ${c.icon}`}></i></div>
                                <h3>{c.title}</h3>
                                <p>{c.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section style={{ padding: '100px 0', background: '#f8fafc' }}>
                <div className="max-container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }} className="reveal">
                        <span className="info-tag">PERKS & BENEFITS</span>
                        <h2 style={{ fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: '800', margin: '20px 0 12px', color: 'var(--text-dark)' }}>Everything You Need to Thrive</h2>
                        <p style={{ color: 'var(--text-muted)', maxWidth: '560px', margin: '0 auto', fontSize: '17px' }}>
                            We take care of you so you can take care of building great products.
                        </p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }} className="reveal">
                        {benefits.map((b, i) => (
                            <div key={i} style={{ background: 'white', borderRadius: '18px', padding: '32px', border: '1px solid var(--border)', display: 'flex', gap: '20px', alignItems: 'flex-start', boxShadow: '0 4px 12px rgba(0,0,0,0.04)', transition: 'all 0.3s ease' }}
                                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
                                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
                                <span style={{ width: '52px', height: '52px', borderRadius: '14px', background: b.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', flexShrink: 0, fontSize: '20px' }}>
                                    <i className={`fas ${b.icon}`}></i>
                                </span>
                                <div>
                                    <h4 style={{ fontWeight: '800', color: 'var(--text-dark)', marginBottom: '8px', fontSize: '17px' }}>{b.title}</h4>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: 1.6 }}>{b.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Job Listings */}
            <section id="openings" style={{ padding: '100px 0', background: 'white' }}>
                <div className="max-container">
                    <div style={{ textAlign: 'center', marginBottom: '48px' }} className="reveal">
                        <span className="info-tag">OPEN POSITIONS</span>
                        <h2 style={{ fontSize: 'clamp(26px, 3vw, 42px)', fontWeight: '800', margin: '20px 0 12px', color: 'var(--text-dark)' }}>Find Your Next Role</h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '17px', maxWidth: '540px', margin: '0 auto' }}>
                            We're always looking for exceptional people. Explore our current openings below.
                        </p>
                    </div>

                    {/* Filter */}
                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '40px', justifyContent: 'center' }}>
                        {departments.map(d => (
                            <button key={d} onClick={() => setActiveFilter(d)}
                                style={{
                                    padding: '9px 22px', borderRadius: '100px', border: '1px solid',
                                    borderColor: activeFilter === d ? 'var(--primary)' : 'var(--border)',
                                    background: activeFilter === d ? 'var(--primary)' : 'white',
                                    color: activeFilter === d ? 'white' : 'var(--text-main)',
                                    fontWeight: '600', fontSize: '14px', cursor: 'pointer', transition: 'all 0.2s ease'
                                }}>
                                {d}
                            </button>
                        ))}
                    </div>

                    {/* Cards */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '24px' }}>
                        {filtered.map((job) => (
                            <div key={job.id}
                                style={{ background: '#f8fafc', borderRadius: '18px', padding: '32px', border: '1px solid var(--border)', transition: 'all 0.3s ease', cursor: 'pointer' }}
                                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.1)'; e.currentTarget.style.borderColor = job.color; }}
                                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'var(--border)'; }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                                    <span style={{ width: '48px', height: '48px', borderRadius: '12px', background: job.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '20px' }}>
                                        <i className={`fas ${job.icon}`}></i>
                                    </span>
                                    <span style={{ fontSize: '12px', fontWeight: '700', padding: '5px 12px', borderRadius: '100px', background: job.type === 'Internship' ? '#fff7ed' : '#eff6ff', color: job.type === 'Internship' ? '#c2410c' : '#1d63ed', border: `1px solid ${job.type === 'Internship' ? '#fed7aa' : '#bfdbfe'}` }}>
                                        {job.type}
                                    </span>
                                </div>

                                <h3 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-dark)', marginBottom: '8px' }}>{job.title}</h3>
                                <p style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-muted)', marginBottom: '16px' }}>{job.department}</p>
                                <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '20px' }}>{job.description}</p>

                                <div style={{ display: 'flex', gap: '16px', marginBottom: '20px', flexWrap: 'wrap' }}>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'var(--text-muted)' }}>
                                        <i className="fas fa-location-dot" style={{ color: job.color }}></i> {job.location}
                                    </span>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'var(--text-muted)' }}>
                                        <i className="fas fa-briefcase" style={{ color: job.color }}></i> {job.experience}
                                    </span>
                                </div>

                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                                    {job.skills.map((s, si) => (
                                        <span key={si} style={{ fontSize: '12px', padding: '4px 12px', borderRadius: '100px', background: 'white', border: '1px solid var(--border)', color: 'var(--text-muted)', fontWeight: '600' }}>{s}</span>
                                    ))}
                                </div>

                                <button onClick={() => { setSelectedJob(job); setSubmitted(false); setForm({ name: '', email: '', phone: '', linkedin: '', cover: '' }); }}
                                    className="btn-primary" style={{ width: '100%', textAlign: 'center', fontSize: '14px', padding: '12px' }}>
                                    Apply Now →
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Application Modal */}
            {selectedJob && (
                <div style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
                    <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(6px)' }} onClick={() => setSelectedJob(null)} />
                    <div style={{ position: 'relative', background: 'white', borderRadius: '24px', width: '100%', maxWidth: '600px', maxHeight: '90vh', overflowY: 'auto', padding: '48px', boxShadow: '0 40px 100px rgba(0,0,0,0.3)' }}>
                        <button onClick={() => setSelectedJob(null)} style={{ position: 'absolute', top: '20px', right: '20px', background: '#f1f5f9', border: 'none', borderRadius: '50%', width: '36px', height: '36px', cursor: 'pointer', fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b' }}>
                            <i className="fas fa-xmark"></i>
                        </button>

                        {submitted ? (
                            <div style={{ textAlign: 'center', padding: '40px 0' }}>
                                <div style={{ fontSize: '56px', marginBottom: '20px' }}>🎉</div>
                                <h3 style={{ fontSize: '26px', fontWeight: '900', color: 'var(--text-dark)', marginBottom: '12px' }}>Application Submitted!</h3>
                                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '28px' }}>
                                    Thanks for applying for <strong>{selectedJob.title}</strong>. Our HR team will review your profile and get back to you within 5–7 business days.
                                </p>
                                <button onClick={() => setSelectedJob(null)} className="btn-primary">Close</button>
                            </div>
                        ) : (
                            <>
                                <div style={{ marginBottom: '32px' }}>
                                    <span style={{ fontSize: '12px', fontWeight: '700', background: '#eff6ff', color: '#1d63ed', padding: '4px 12px', borderRadius: '100px', border: '1px solid #bfdbfe' }}>{selectedJob.department}</span>
                                    <h2 style={{ fontSize: '28px', fontWeight: '900', color: 'var(--text-dark)', margin: '12px 0 6px' }}>Apply: {selectedJob.title}</h2>
                                    <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>{selectedJob.location} · {selectedJob.experience}</p>
                                </div>
                                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                    {[
                                        { label: 'Full Name *', name: 'name', type: 'text', placeholder: 'Your full name' },
                                        { label: 'Email Address *', name: 'email', type: 'email', placeholder: 'you@email.com' },
                                        { label: 'Phone Number *', name: 'phone', type: 'tel', placeholder: '+91 XXXXX XXXXX' },
                                        { label: 'LinkedIn Profile', name: 'linkedin', type: 'url', placeholder: 'https://linkedin.com/in/your-profile' },
                                    ].map(f => (
                                        <div key={f.name}>
                                            <label style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>{f.label}</label>
                                            <input type={f.type} name={f.name} placeholder={f.placeholder} value={form[f.name]} onChange={handleChange} required={f.label.includes('*')}
                                                style={{ width: '100%', padding: '14px 16px', borderRadius: '10px', border: '1px solid var(--border)', fontFamily: 'inherit', fontSize: '15px', color: 'var(--text-dark)', boxSizing: 'border-box' }} />
                                        </div>
                                    ))}
                                    <div>
                                        <label style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>Cover Letter / Message *</label>
                                        <textarea name="cover" placeholder="Tell us why you're excited about this role and what you'll bring to the team..." rows="4" value={form.cover} onChange={handleChange} required
                                            style={{ width: '100%', padding: '14px 16px', borderRadius: '10px', border: '1px solid var(--border)', fontFamily: 'inherit', fontSize: '15px', color: 'var(--text-dark)', boxSizing: 'border-box', resize: 'vertical' }} />
                                    </div>
                                    <p style={{ fontSize: '13px', color: 'var(--text-muted)', background: '#f8fafc', padding: '12px 16px', borderRadius: '10px', border: '1px solid var(--border)' }}>
                                        <i className="fas fa-circle-info" style={{ color: 'var(--primary)', marginRight: '8px' }}></i>
                                        Please email your CV/resume separately to <strong>careers@virsoftech.com</strong> with the job title in the subject line.
                                    </p>
                                    <button type="submit" className="btn-primary" style={{ padding: '16px', fontSize: '16px', fontWeight: '800' }}>
                                        <i className="fas fa-paper-plane" style={{ marginRight: '10px' }}></i>Submit Application
                                    </button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            )}

            {/* CTA */}
            <section className="cta-section reveal">
                <div className="max-container" style={{ textAlign: 'center' }}>
                    <h2>Don't See a Fit? We'd Still Love to Meet You.</h2>
                    <p>Send us your CV and tell us how you'd like to contribute. We're always building our talent pipeline.</p>
                    <a href="mailto:careers@virsoftech.com" className="btn-primary" style={{ background: 'white', color: 'var(--primary)', marginTop: '30px', display: 'inline-block', textDecoration: 'none' }}>
                        Email careers@virsoftech.com
                    </a>
                </div>
            </section>

            <ClientLogos />
        </>
    );
};

export default Careers;
