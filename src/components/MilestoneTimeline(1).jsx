import { motion } from "framer-motion";
import { useRef } from "react";
import {
    Building2, Rocket, Award, GraduationCap, FileText, Printer,
    Shield, Car, BookOpen, Globe, Medal, Users, BarChart3,
    Briefcase, Star
} from "lucide-react";



const milestones = [
    {
        year: "2015",
        title: "Few friends with brilliant careers and complimentary skills in technology, engineering and business development join hands to conceive VIR Softech.",
        color: "bg-timeline-coral",
        icon: <Building2 className="w-6 h-6" />,
    },
    {
        year: "2016",
        title: "Our first product is live. We launch Eval OMR.",
        color: "bg-timeline-olive",
        icon: <Rocket className="w-6 h-6" />,
    },
    {
        year: "2017",
        title: "Recognized as a start-up company by Govt of India.",
        color: "bg-timeline-orange",
        icon: <Award className="w-6 h-6" />,
    },
    {
        year: "2017",
        title: "First large-scale, pan-India deployment. Ministry of Education deploys eVAL OMR in 700 districts across India.",
        color: "bg-timeline-pink",
        icon: <GraduationCap className="w-6 h-6" />,
    },
    {
        year: "2018",
        title: "A large Japanese Print OEM signs contract for development of their ver 1.0 print software.",
        color: "bg-timeline-teal",
        icon: <Printer className="w-6 h-6" />,
    },
    {
        year: "2018",
        title: "Top 20 Most Promising DMS by CIO Review.",
        color: "bg-timeline-gold",
        icon: <Medal className="w-6 h-6" />,
    },
    {
        year: "2019",
        title: "Signed contract with one of the largest private life insurance companies in India for open source DMS implementation.",
        color: "bg-timeline-rose",
        icon: <FileText className="w-6 h-6" />,
    },
    {
        year: "2019",
        title: "Launched Eval CBT.",
        color: "bg-timeline-olive",
        icon: <Rocket className="w-6 h-6" />,
    },
    {
        year: "2020",
        title: "Signed contract with one of the largest automobile companies in India for open source DMS implementation.",
        color: "bg-timeline-coral",
        icon: <Car className="w-6 h-6" />,
    },
    {
        year: "2020",
        title: "Successfully conducted online admission exam on eVAL CBT for one of the most prestigious medical colleges in India.",
        color: "bg-timeline-orange",
        icon: <BookOpen className="w-6 h-6" />,
    },
    {
        year: "2021",
        title: "Top 10 Most Promising ECM by CIO Review.",
        color: "bg-timeline-green",
        icon: <Star className="w-6 h-6" />,
    },
    {
        year: "2021",
        title: "Successfully developed print software products for a US customer and were released in Market.",
        color: "bg-timeline-pink",
        icon: <Briefcase className="w-6 h-6" />,
    },
    {
        year: "2023",
        title: "Established sales team and signed up new customers in Europe.",
        color: "bg-timeline-gold",
        icon: <Globe className="w-6 h-6" />,
    },
    {
        year: "2024",
        title: "Large defence customer with more than 700 eVAL installations.",
        color: "bg-timeline-teal",
        icon: <Shield className="w-6 h-6" />,
    },
    {
        year: "2025",
        title: "eVAL becomes the largest seller of OMR software in India. Achieved certification at Level 3 by ISACA / CMMI.",
        color: "bg-timeline-coral",
        icon: <BarChart3 className="w-6 h-6" />,
    },
    {
        year: "2025",
        title: "School leaving exam of African countries successfully completed, with 4 million students using eVAL.",
        color: "bg-timeline-olive",
        icon: <Users className="w-6 h-6" />,
    },
];

const MilestoneTimeline = () => {
    const scrollRef = useRef(null);

    return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 mb-12 text-center">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-blue-accent font-semibold tracking-widest uppercase text-sm mb-3"
                >
                    Our Journey
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="font-display text-3xl md:text-5xl font-bold text-foreground"
                >
                    Milestones of VIR Softech
                </motion.h2>
            </div>

            {/* Horizontal scrollable timeline */}
            <div className="relative overflow-x-auto pb-8 scrollbar-thin" ref={scrollRef}>
                <div className="min-w-[2400px] px-16 relative" style={{ height: 560 }}>
                    {/* Central horizontal line */}
                    <div className="absolute left-12 right-12 top-1/2 h-0.5 bg-border -translate-y-1/2 z-0" />

                    {milestones.map((m, i) => {
                        const isTop = i % 2 === 0;
                        const leftPos = 48 + i * 145;

                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: isTop ? -30 : 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05, duration: 0.4 }}
                                className="absolute flex flex-col items-center"
                                style={{
                                    left: leftPos,
                                    width: 130,
                                    top: isTop ? 0 : undefined,
                                    bottom: isTop ? undefined : 0,
                                    height: "50%",
                                }}
                            >
                                {isTop ? (
                                    <div className="flex flex-col items-center justify-end h-full pb-0">
                                        {/* Icon circle at top */}
                                        <div className={`w-14 h-14 rounded-full ${m.color} flex items-center justify-center text-primary-foreground shadow-lg mb-3 flex-shrink-0`}>
                                            {m.icon}
                                        </div>
                                        {/* Text */}
                                        <p className="text-[11px] text-center text-muted-foreground leading-tight px-1 mb-2 flex-shrink-0" style={{ maxHeight: 90 }}>
                                            {m.title}
                                        </p>
                                        {/* Year */}
                                        <span className="font-display font-bold text-foreground text-sm mb-1.5 flex-shrink-0">{m.year}</span>
                                        {/* Connector */}
                                        <div className="w-px h-8 bg-muted-foreground/30 flex-shrink-0" />
                                        {/* Dot on line */}
                                        <div className={`w-3.5 h-3.5 rounded-full ${m.color} border-2 border-card shadow flex-shrink-0`} />
                                    </div>
                                ) : (
                                    <div className="flex flex-col items-center justify-start h-full pt-0">
                                        {/* Dot on line */}
                                        <div className={`w-3.5 h-3.5 rounded-full ${m.color} border-2 border-card shadow flex-shrink-0`} />
                                        {/* Connector */}
                                        <div className="w-px h-8 bg-muted-foreground/30 flex-shrink-0" />
                                        {/* Year */}
                                        <span className="font-display font-bold text-foreground text-sm mt-1.5 mb-2 flex-shrink-0">{m.year}</span>
                                        {/* Text */}
                                        <p className="text-[11px] text-center text-muted-foreground leading-tight px-1 mb-3 flex-shrink-0" style={{ maxHeight: 90 }}>
                                            {m.title}
                                        </p>
                                        {/* Icon circle at bottom */}
                                        <div className={`w-14 h-14 rounded-full ${m.color} flex items-center justify-center text-primary-foreground shadow-lg flex-shrink-0`}>
                                            {m.icon}
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            <p className="text-center text-sm text-muted-foreground mt-2">← Scroll horizontally to explore →</p>
        </section>
    );
};

export default MilestoneTimeline;
