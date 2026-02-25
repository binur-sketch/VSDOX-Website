import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ClientLogos from '../components/ClientLogos';
import GovtRegistrations from '../components/GovtRegistrations';
import logo from '../logo.png';
import heroVsdox from '../assets/hero-vsdox.png';
import isoCert from '../assets/iso.jpg';
import cmmiCert from '../assets/cmmi.jpg';

const Home = () => {
    useEffect(() => {
        const observerOptions = { threshold: 0.1 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }, []);

    return (
        <main>
            {/* Redesigned Hero Section V4 */}
            <section className="hero-v4">
                <div className="max-container">
                    <div className="hero-v4-container">
                        <div className="hero-content reveal">
                            <div className="hero-tag">
                                <span className="dot"></span>
                                AI-POWERED DOCUMENT INTELLIGENCE
                            </div>
                            <h1>
                                Reduce <span className="gradient-text">Operational Burden</span> with Intelligent ECM
                            </h1>
                            <p>
                                Transform your documentation workflow with VSDOX AI. Automate classification, extraction, and retrieval while ensuring enterprise-grade security and scalability.
                            </p>
                            <div className="hero-buttons-v4">
                                <Link to="/products" className="btn-primary">Learn More About VSDOX</Link>
                                <a href="#demo" className="btn-primary">Platform Demo</a>
                            </div>
                        </div>

                        <div className="hero-visual-v4 reveal" style={{ transitionDelay: '0.3s' }}>
                            <div className="main-visual-card">
                                <img src={heroVsdox} alt="VSDOX AI Dashboard Interface" style={{ borderRadius: '24px' }} />
                            </div>

                            <div className="floating-element fe-1">
                                <div style={{ background: '#dcfce7', padding: '10px', borderRadius: '12px', color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <i className="fas fa-bolt-lightning" style={{ fontSize: '18px' }}></i>
                                </div>
                                <div>
                                    <div style={{ fontSize: '12px', fontWeight: '800', color: '#0f172a' }}>AI Features</div>
                                    <div style={{ fontSize: '10px', color: '#64748b' }}>Auto Tagging & Metadata Extraction</div>
                                </div>
                            </div>

                            <div className="floating-element fe-2">
                                <div style={{ background: '#ebf2ff', padding: '10px', borderRadius: '12px', color: '#1d63ed', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <i className="fas fa-shield-halved" style={{ fontSize: '18px' }}></i>
                                </div>
                                <div>
                                    <div style={{ fontSize: '12px', fontWeight: '800', color: '#0f172a' }}>Secured Vault</div>
                                    <div style={{ fontSize: '10px', color: '#64748b' }}>AES 256-bit Encryption</div>
                                </div>
                            </div>

                            {/* Decorative background glows */}
                            <div style={{
                                position: 'absolute',
                                width: '400px',
                                height: '400px',
                                background: 'radial-gradient(circle, rgba(29, 99, 237, 0.15) 0%, transparent 70%)',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                zIndex: 1
                            }}></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* AI Capabilities Section */}
            <section className="ai-capabilities-section reveal" style={{ padding: '100px 0' }}>
                <div className="max-container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '40px', fontWeight: '800', marginBottom: '20px', color: 'white' }}>Intelligence Beyond Documents</h2>
                        <p style={{ color: '#94a3b8', maxWidth: '800px', margin: '0 auto', fontSize: '18px' }}>
                            Our integrated AI engine transforms your ECM from a storage repository into an intelligent knowledge hub.
                        </p>
                    </div>

                    <div className="ai-features-grid">
                        <div className="ai-feature-card">
                            <div className="ai-icon"><i className="fas fa-microchip"></i></div>
                            <h3>Intelligent Document Processing (IDP)</h3>
                            <p>Automated data extraction from structured and unstructured documents with enterprise-grade precision.</p>
                        </div>
                        <div className="ai-feature-card">
                            <div className="ai-icon"><i className="fas fa-file-contract"></i></div>
                            <h3>Document Summarization</h3>
                            <p>Generate intelligent, concise summaries of voluminous documents instantly using LLM technology.</p>
                        </div>
                        <div className="ai-feature-card">
                            <div className="ai-icon"><i className="fas fa-robot"></i></div>
                            <h3>NLP Based Q&A</h3>
                            <p>Interact with your entire document repository using natural language—ask questions, get instant factual answers.</p>
                        </div>
                        <div className="ai-feature-card">
                            <div className="ai-icon"><i className="fas fa-language"></i></div>
                            <h3>AI Translation & Transliteration</h3>
                            <p>Seamlessly translate or transliterate documents across multiple languages while preserving context and meaning.</p>
                        </div>
                        <div className="ai-feature-card">
                            <div className="ai-icon"><i className="fas fa-sitemap"></i></div>
                            <h3>Smart Classification & Auto-Tagging</h3>
                            <p>AI-driven categorization and metadata auto-extraction for zero-effort organization.</p>
                        </div>
                        <div className="ai-feature-card">
                            <div className="ai-icon"><i className="fas fa-layer-group"></i></div>
                            <h3>Document Type Segregation</h3>
                            <p>Automatic DOCTYPE association and segregation using advanced neural network patterns.</p>
                        </div>
                        <div className="ai-feature-card">
                            <div className="ai-icon"><i className="fas fa-magnifying-glass-plus"></i></div>
                            <h3>AI Powered Search</h3>
                            <p>Go beyond keywords with semantic search that understands intent and context.</p>
                        </div>
                        <div className="ai-feature-card">
                            <div className="ai-icon"><i className="fas fa-chart-line"></i></div>
                            <h3>Predictive Insights & Analytics</h3>
                            <p>Unlock hidden trends and predictive data patterns within your organizational knowledge base.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Redesigned Unified Productivity & Security Section */}
            <section className="productivity-section reveal">
                <div className="max-container">
                    <div className="productivity-grid">
                        <div className="prod-content">
                            <span className="info-tag">Core Value Proposition</span>
                            <h2 style={{ fontSize: '40px', fontWeight: '800', marginBottom: '24px' }}>Unified Productivity & Security</h2>
                            <p style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '24px' }}>
                                All organizations want the highest productivity, security, and accessibility to all documents. Storing and accessing all organizational documents across departments, teams, and geographies is the key to success, security, and sustainability.
                            </p>
                            <p style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '32px' }}>
                                Our open-source based ECM enables moving your document databases online in a highly secure environment that is cloud-ready and scalable. It's the perfect place to store your archives and rich media formats.
                            </p>
                            <div className="hero-btns">
                                <Link to="/solutions" className="btn-primary">Explore Solutions</Link>
                            </div>
                        </div>
                        <div className="productivity-visuals">
                            <div className="prod-card">
                                <span className="prod-icon"><i className="fas fa-gauge-high"></i></span>
                                <h4>Highest Productivity</h4>
                            </div>
                            <div className="prod-card">
                                <span className="prod-icon"><i className="fas fa-user-lock"></i></span>
                                <h4>Enterprise Security</h4>
                            </div>
                            <div className="prod-card">
                                <span className="prod-icon"><i className="fas fa-earth-americas"></i></span>
                                <h4>Global Access</h4>
                            </div>
                            <div className="prod-card">
                                <span className="prod-icon"><i className="fas fa-cloud-arrow-up"></i></span>
                                <h4>Cloud Scalability</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* ECM Workflow Section */}
            <section className="workflow-detailed-section max-container reveal" style={{ padding: '80px 0' }}>
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 style={{ fontSize: '36px', fontWeight: '800' }}>The ECM Workflow</h2>
                    <p style={{ color: 'var(--text-muted)' }}>Aiding you in all aspects of documentation management.</p>
                </div>
                <div className="workflow-grid-v3">
                    <div className="workflow-col">
                        <div className="workflow-header">
                            <div className="workflow-icon-box"><i className="fas fa-file-import"></i></div>
                            <h3>Capture</h3>
                        </div>
                        <p>Capture, digitalize and secure data while saving and converting various file formats.</p>
                        <ul className="dot-list">
                            <li>Multilingual OCR</li>
                            <li>Scanned Image Enhancement</li>
                            <li>Compression</li>
                            <li>Cleaning & QC</li>
                            <li>Metadata Indexing</li>
                            <li>Page-Level Tagging</li>
                            <li>PDF Conversion</li>
                            <li>Auto Upload to ECM</li>
                        </ul>
                    </div>
                    <div className="workflow-col">
                        <div className="workflow-header">
                            <div className="workflow-icon-box"><i className="fas fa-magnifying-glass-chart"></i></div>
                            <h3>Retrieve</h3>
                        </div>
                        <p>Securely retrieve files and documents using advanced filters and full-text indexing.</p>
                        <ul className="dot-list">
                            <li>Structured Folders</li>
                            <li>Folder & Document-Level Access</li>
                            <li>Role-based Access & Authorization</li>
                            <li>Content type Segregation</li>
                            <li>Advanced search</li>
                            <li>Full Text search</li>
                        </ul>
                    </div>
                    <div className="workflow-col">
                        <div className="workflow-header">
                            <div className="workflow-icon-box"><i className="fas fa-diagram-project"></i></div>
                            <h3>Workflow</h3>
                        </div>
                        <p>Manage review, verification, hierarchies, security, and user configurations.</p>
                        <ul className="dot-list">
                            <li>Review and Approval Workflows (e.g., invoice verification)</li>
                            <li>Multilevel Hierarchy Parallel Workflows</li>
                            <li>Secured Workflows</li>
                            <li>User Configurable Workflows</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ECM Features Section */}
            <section className="features-v3-section reveal" style={{ background: '#f8fafc', padding: '100px 0' }}>
                <div className="max-container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '36px', fontWeight: '800' }}>ECM Features</h2>
                    </div>
                    <div className="features-v3-grid">
                        <div className="feature-v3-card">
                            <h5>Secured Opensource</h5>
                            <p>Certified Service Provider (RSP) for DSpace. Custom implementation with OWASP compliance.</p>
                        </div>
                        <div className="feature-v3-card">
                            <h5>Enterprise Integration</h5>
                            <p>Integrate with existing applications like SAP and Google Enterprise seamlessly.</p>
                        </div>
                        <div className="feature-v3-card">
                            <h5>Scalable & Future-ready</h5>
                            <p>Cluster architecture and auto-scalable infrastructure tailored for future growth.</p>
                        </div>
                        <div className="feature-v3-card">
                            <h5>Additional Hardware</h5>
                            <p>Optimized for AWS, Azure, and Google Cloud. Save costs by using what you have.Deploy on on-premise server as well.</p>
                        </div>
                        <div className="feature-v3-card">
                            <h5>Huge Data & Legacy Migration</h5>
                            <p>End to end implementation with migrating legacy data and handling huge data that is hundreds of terabytes.</p>
                        </div>
                        <div className="feature-v3-card">
                            <h5>Paperless office</h5>
                            <p>Time to say Goodbye to file cabinets in your office basement.</p>
                        </div>
                    </div>
                </div>
            </section>



            {/* Redesigned Trusted Recognition Section - Full Width */}
            <section className="trust-section-premium reveal">
                <div className="max-container">
                    <div className="trust-header-premium">
                        <div className="trust-title-area">
                            <div className="info-tag">Industry Validation</div>
                            <h2 style={{ fontSize: '40px', fontWeight: '800', margin: '20px 0' }}>Trusted Recognition & Global Scale</h2>
                            <p style={{ fontSize: '18px', color: 'var(--text-muted)', maxWidth: '600px' }}>
                                Awarded for excellence in DMS and BPM solutions by global industry experts for our commitment to security and innovation.
                            </p>
                            <div className="industry-pills">
                                <span className="pill-item">Government Seal</span>
                                <span className="pill-item">Banking Compliance</span>
                                <span className="pill-item">Judiciary Ready</span>
                                <span className="pill-item">ISO 9001:2015</span>
                                <span className="pill-item">CMMI Level 3</span>
                            </div>
                        </div>
                        <div className="trust-badges-area">
                            <div className="recognition-badge">
                                <img src={isoCert} alt="ISO 9001:2015 Certification" />
                                <h4>Certified</h4>
                                <p>ISO 9001:2015</p>
                            </div>
                            <div className="recognition-badge">
                                <img src={cmmiCert} alt="CMMI Level 3 Maturity" />
                                <h4>Maturity</h4>
                                <p>CMMI Level 3</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="trust-full-width-strip">
                    <div className="max-container">
                        <div className="trust-stats-grid">
                            <div className="stat-item-premium">
                                <span className="stat-number">2M+</span>
                                <span className="stat-label">Documents Processed</span>
                            </div>
                            <div className="stat-item-premium">
                                <span className="stat-number">500+</span>
                                <span className="stat-label">Enterprise Clients</span>
                            </div>
                            <div className="stat-item-premium">
                                <span className="stat-number">99.9%</span>
                                <span className="stat-label">Platform Uptime</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-container" style={{ textAlign: 'center', marginTop: '40px' }}>
                    <p style={{ color: '#94a3b8', fontStyle: 'italic' }}>
                        Trusted by leaders across Government, Banking, Judiciary, Education, and Healthcare sectors worldwide.
                    </p>
                </div>
            </section>

            {/* ECM Solutions for Verticals Section */}
            <section className="verticals-section reveal" style={{ padding: '80px 0' }}>
                <div className="max-container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '36px', fontWeight: '800' }}>ECM Solutions for Verticals</h2>
                        <p style={{ color: 'var(--text-muted)' }}>Tailored implementations for high-compliance sectors</p>
                    </div>

                    <div className="verticals-grid">
                        <Link to="/solutions/banking-bfsi" className="vertical-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className="vertical-icon"><i className="fas fa-city"></i></div>
                            <h3>Corporate</h3>
                            <ul className="vertical-list">
                                <li><strong>Human Resource:</strong> Employee docs & employment policies</li>
                                <li><strong>Secretarial:</strong> Shareholder, Investor relation documents</li>
                                <li><strong>Regular functions:</strong> R&D, Finance, Customer Experience content</li>
                            </ul>
                        </Link>

                        <Link to="/solutions/banking-bfsi" className="vertical-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className="vertical-icon"><i className="fas fa-building-columns"></i></div>
                            <h3>BFSI</h3>
                            <ul className="vertical-list">
                                <li><strong>Banking:</strong> Account opening forms, Account holder details & forms, Retail & Commercial lending</li>
                                <li><strong>Insurance:</strong> New policies, Policy Servicing, Service request management</li>
                            </ul>
                        </Link>

                        <Link to="/solutions/government" className="vertical-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className="vertical-icon"><i className="fas fa-landmark"></i></div>
                            <h3>Government</h3>
                            <ul className="vertical-list">
                                <li><strong>Ministries:</strong> Automation Repositories, Grants management</li>
                                <li><strong>Public Records:</strong> Citizen records, land registries & civil archives</li>
                            </ul>
                        </Link>

                        <Link to="/solutions/judiciary" className="vertical-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className="vertical-icon"><i className="fas fa-scale-balanced"></i></div>
                            <h3>Judiciary</h3>
                            <ul className="vertical-list">
                                <li><strong>High Courts:</strong> Case file digitization & e-filing workflows</li>
                                <li><strong>Tribunals:</strong> Cause list management & certified true copies</li>
                            </ul>
                        </Link>

                        <Link to="/solutions/education" className="vertical-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className="vertical-icon"><i className="fas fa-graduation-cap"></i></div>
                            <h3>Education</h3>
                            <ul className="vertical-list">
                                <li><strong>Libraries:</strong> Research, Journals, Archives, Subject Text Repositories</li>
                                <li><strong>Institutions:</strong> Managing access to Repositories</li>
                            </ul>
                        </Link>

                        <Link to="/solutions/healthcare" className="vertical-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className="vertical-icon"><i className="fas fa-hospital-user"></i></div>
                            <h3>Health</h3>
                            <ul className="vertical-list">
                                <li><strong>Hospitals & Clinics:</strong> Patient Records digitization, easy access for appointments</li>
                                <li><strong>Insurance:</strong> Patient case history and claims management</li>
                            </ul>
                        </Link>
                    </div>

                    <div style={{ marginTop: '60px', textAlign: 'center' }}>
                        <p style={{ fontSize: '18px', maxWidth: '1000px', margin: '0 auto', color: 'var(--text-main)' }}>
                            Regardless of which industry you are part of, and what is the scale of your operations, whether you have millions of documentations to store and archive or are a start up with expansive dreams, contact us for transforming your documentation management systems.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Vir Softech Section */}
            <section className="max-container reveal" style={{ padding: '100px 0' }}>
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 style={{ fontSize: '36px', fontWeight: '800' }}>Why Vir Softech</h2>
                    <p style={{ color: 'var(--text-muted)' }}>Vir Softech reduces the pain and cost of implementation, support and maintenance of organizational data.</p>
                </div>
                <div className="why-vir-grid">
                    <div className="why-vir-card">
                        <div className="why-icon"><i className="fas fa-unlock-keyhole"></i></div>
                        <h4>No proprietary licensing</h4>
                        <p>Save seat-based, recurring costs of popular ECM vendors with opensource ECM.</p>
                    </div>
                    <div className="why-vir-card">
                        <div className="why-icon"><i className="fas fa-wand-sparkles"></i></div>
                        <h4>Worry-free magic</h4>
                        <p>Technology is independent of the workflow. You concentrate on your workflow and the ECM-magic is all transparent to you.</p>
                    </div>
                    <div className="why-vir-card">
                        <div className="why-icon"><i className="fas fa-hand-holding-dollar"></i></div>
                        <h4>Reduced cost of ownership</h4>
                        <p>Significant savings in your return on investments. You save at all three phases of project: implementation, run-time, and future-scalability.</p>
                    </div>
                    <div className="why-vir-card">
                        <div className="why-icon"><i className="fas fa-industry"></i></div>
                        <h4>Industry-specific solutions</h4>
                        <p>Vertical solutions for Corporate, BFSI, Government, Education, and Health industries.</p>
                    </div>
                    <div className="why-vir-card">
                        <div className="why-icon"><i className="fas fa-ranking-star"></i></div>
                        <h4>Track record of success</h4>
                        <p>Large scale and mid-scale implementation across the globe.</p>
                    </div>
                    <div className="why-vir-card">
                        <div className="why-icon"><i className="fas fa-leaf"></i></div>
                        <h4>Greener and cleaner world</h4>
                        <p>Leave the world greener and cleaner by reducing paper-based footprint and yet not losing any data, efficiency, and be scale-ready.</p>
                    </div>
                </div>
            </section>

            {/* Government Registrations Section */}
            <GovtRegistrations />

            {/* Our Clientele Section */}
            <ClientLogos />


            {/* CTA Section */}
            <section className="cta-section reveal">
                <div className="max-container" style={{ textAlign: 'center' }}>
                    <h2>Transform Your Documentation Today</h2>
                    <p>Regardless of your industry or scale, contact us for transforming your documentation management systems.</p>
                    <Link to="/contact" className="btn-primary" style={{ background: 'white', color: 'var(--primary)', marginTop: '30px' }}>Contact Us Now</Link>
                </div>
            </section>
        </main>
    );
};

export default Home;
