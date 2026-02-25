import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ClientLogos from '../components/ClientLogos';

const BlogCard = ({ category, date, title, excerpt, image, author, authorRole }) => (
    <div className="glass-card blog-card reveal" style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
            <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', top: '15px', left: '15px', background: 'var(--primary)', color: 'white', padding: '4px 12px', borderRadius: '50px', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                {category}
            </div>
        </div>
        <div style={{ padding: '24px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '12px' }}>{date}</div>
            <h3 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '12px', lineHeight: '1.4' }}>{title}</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: '1.6', marginBottom: '20px', flexGrow: 1 }}>{excerpt}</p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderTop: '1px solid var(--border)', paddingTop: '20px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#e2e8f0', overflow: 'hidden' }}>
                    <img src={`https://ui-avatars.com/api/?name=${author}&background=random`} alt={author} />
                </div>
                <div>
                    <div style={{ fontSize: '14px', fontWeight: '700' }}>{author}</div>
                    <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{authorRole}</div>
                </div>
                <Link to="#" style={{ marginLeft: 'auto', color: 'var(--primary)', fontWeight: '700', fontSize: '14px' }}>Read More</Link>
            </div>
        </div>
    </div>
);

const Blog = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.querySelectorAll('.reveal').forEach(el => el.classList.add('fade-in'));
    }, []);

    const blogPosts = [
        {
            category: "Technology",
            date: "May 15, 2024",
            title: "The Future of AI in Enterprise Content Management",
            excerpt: "Explore how machine learning is revolutionizing document classification, extraction, and search capabilities in modern enterprises.",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
            author: "Abhijeet Jain",
            authorRole: "CTO"
        },
        {
            category: "Case Study",
            date: "May 02, 2024",
            title: "Scaling Judiciary Digitization: A Roadmap",
            excerpt: "Learn how we handled the transition of millions of physical case files to a secure, searchable digital repository for high courts.",
            image: "https://images.unsplash.com/photo-1589216532372-1c2a367900d9?q=80&w=1000&auto=format&fit=crop",
            author: "Deepak Garg",
            authorRole: "Managing Director"
        },
        {
            category: "Security",
            date: "April 20, 2024",
            title: "Securing Sensitive Public Sector Records",
            excerpt: "An in-depth look at sovereign-grade security measures and data residency requirements for government document management.",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop",
            author: "Pralaypati Ta",
            authorRole: "Principal Architect"
        },
        {
            category: "Efficiency",
            date: "April 12, 2024",
            title: "Reducing Operational Burden with Workflow Automation",
            excerpt: "How automated approval cycles and document routing can save thousand of man-hours in corporate environments.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
            author: "Sameer Manuja",
            authorRole: "Principal Architect"
        },
        {
            category: "Compliance",
            date: "March 28, 2024",
            title: "Navigating BFSI Regulations with Intelligent ECM",
            excerpt: "Ensuring KYC, AML, and data privacy compliance while streamlining customer onboarding and loan processing.",
            image: "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?q=80&w=1000&auto=format&fit=crop",
            author: "Manu Paliwal",
            authorRole: "VP - Sales"
        },
        {
            category: "Innovation",
            date: "March 15, 2024",
            title: "Beyond Paperless: The Knowledge Hub Evolution",
            excerpt: "Shifting from simple storage to proactive knowledge management where content serves the business in real-time.",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop",
            author: "Abhijeet Jain",
            authorRole: "CTO"
        }
    ];

    return (
        <main>
            <section className="page-hero-container">
                <div
                    className="page-hero-bg"
                    style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1000&auto=format&fit=crop')` }}
                ></div>
                <div className="max-container">
                    <div className="page-hero-content reveal">
                        <h1>Insights & Blog</h1>
                        <p>Thought leadership, technology trends, and industry updates from the experts in document intelligence.</p>
                        <div className="breadcrumb">
                            <Link to="/">Home</Link> <span>/</span> <span>Blog</span>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ padding: '80px 0', background: '#f8fafc' }}>
                <div className="max-container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }} className="reveal">
                        <span className="info-tag">LATEST ARTICLES</span>
                        <h2 style={{ fontSize: '36px', fontWeight: '800', marginTop: '16px' }}>Stay Ahead of the Digital Curve</h2>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '30px', flexWrap: 'wrap' }}>
                            {['All', 'Technology', 'Case Study', 'Security', 'BFSI', 'Government'].map((cat, i) => (
                                <button key={i} style={{ padding: '10px 24px', borderRadius: '50px', border: i === 0 ? 'none' : '1px solid var(--border)', background: i === 0 ? 'var(--primary)' : 'white', color: i === 0 ? 'white' : 'var(--text-main)', fontWeight: '600', cursor: 'pointer', fontSize: '14px' }}>
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="industry-grid-detailed" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '30px' }}>
                        {blogPosts.map((post, i) => (
                            <BlogCard key={i} {...post} />
                        ))}
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '60px' }}>
                        <button className="btn-outline" style={{ padding: '14px 40px' }}>Load More Articles</button>
                    </div>
                </div>
            </section>

            <section style={{ padding: '80px 0', background: 'var(--primary)', color: 'white' }}>
                <div className="max-container reveal" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '20px' }}>Subscribe to Our Newsletter</h2>
                    <p style={{ opacity: 0.9, maxWidth: '600px', margin: '0 auto 40px', fontSize: '18px' }}>Get the latest insights on document automation and enterprise intelligence delivered straight to your inbox.</p>
                    <form style={{ display: 'flex', maxWidth: '500px', margin: '0 auto', gap: '10px', flexWrap: 'wrap' }}>
                        <input type="email" placeholder="Your work email" style={{ flexGrow: 1, padding: '16px 24px', borderRadius: '12px', border: 'none', fontSize: '16px' }} />
                        <button className="btn-primary" style={{ background: 'white', color: 'var(--primary)', fontWeight: '800' }}>Subscribe</button>
                    </form>
                </div>
            </section>

            <ClientLogos />
        </main>
    );
};

export default Blog;
