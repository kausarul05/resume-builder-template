import React, { ChangeEvent, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

type Resume = {
    firstName: string;
    lastName: string;
    jobTitle: string;
    city: string;
    postalCode: string;
    country: string;
    phone: string;
    email: string;
    website: string;
    photo: string | null;
    degree: string;
    university: string;
    eduYear: string;
    exp1Title: string;
    exp1Company: string;
    exp1Year: string;
    exp1Desc: string[];
    exp2Title: string;
    exp2Company: string;
    exp2Year: string;
    exp2Desc: string[];
    skills: string[];
    project1: { title: string; desc: string };
    project2: { title: string; desc: string };
    achievement: string;
};

type Props = {
    resume: Resume;
    setResume: React.Dispatch<React.SetStateAction<Resume>>;
    step: number;
    setStep: React.Dispatch<React.SetStateAction<number>>;
};

const LOCAL_KEY = "resume_builder_data";

const inputClass =
    "w-full border border-gray-300 rounded-lg px-4 py-2 bg-white/80 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 placeholder-gray-400";

const labelClass = "block text-sm font-semibold mb-1 text-gray-700";

const cardClass =
    "w-full  bg-white/90 rounded-2xl shadow-2xl p-8 backdrop-blur-md border border-gray-100 animate-fade-in";

const fadeVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } },
    exit: { opacity: 0, y: -30, transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] } },
};

export default function ResumeForm({ resume, setResume, step, setStep }: Props) {
    useEffect(() => {
        const saved = localStorage.getItem(LOCAL_KEY);
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                setResume((prev) => ({
                    ...prev,
                    ...parsed,
                }));
            } catch {}
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_KEY, JSON.stringify(resume));
    }, [resume]);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setResume((prev) => ({ ...prev, [name]: value }));
    };

    const handlePhoto = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setResume((prev) => ({ ...prev, photo: reader.result as string }));
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="min-h-[80vh] flex items-center justify-center">
            <AnimatePresence mode="wait">
                <motion.div
                    key={step}
                    // variants={fadeVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className={cardClass}
                >
                    {step === 0 && (
                        <form className="space-y-6">
                            <h2 className="text-2xl font-bold mb-4 text-blue-700 tracking-tight">Personal Information</h2>
                            <div>
                                <label className={labelClass}>Photo</label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handlePhoto}
                                    className="block file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition-all"
                                />
                                {resume.photo && (
                                    <img
                                        src={resume.photo}
                                        alt="Profile"
                                        className="mt-2 w-20 h-20 rounded-full object-cover border-2 border-blue-200 shadow"
                                    />
                                )}
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-1">
                                    <label className={labelClass}>First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={resume.firstName}
                                        onChange={handleChange}
                                        className={inputClass}
                                        placeholder="John"
                                    />
                                </div>
                                <div className="flex-1">
                                    <label className={labelClass}>Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={resume.lastName}
                                        onChange={handleChange}
                                        className={inputClass}
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className={labelClass}>Job Title</label>
                                <input
                                    type="text"
                                    name="jobTitle"
                                    value={resume.jobTitle}
                                    onChange={handleChange}
                                    className={inputClass}
                                    placeholder="Frontend Developer"
                                />
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-1">
                                    <label className={labelClass}>City</label>
                                    <input
                                        type="text"
                                        name="city"
                                        value={resume.city}
                                        onChange={handleChange}
                                        className={inputClass}
                                        placeholder="New York"
                                    />
                                </div>
                                <div className="flex-1">
                                    <label className={labelClass}>Country</label>
                                    <input
                                        type="text"
                                        name="country"
                                        value={resume.country}
                                        onChange={handleChange}
                                        className={inputClass}
                                        placeholder="USA"
                                    />
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-1">
                                    <label className={labelClass}>Postal Code</label>
                                    <input
                                        type="text"
                                        name="postalCode"
                                        value={resume.postalCode}
                                        onChange={handleChange}
                                        className={inputClass}
                                        placeholder="10001"
                                    />
                                </div>
                                <div className="flex-1">
                                    <label className={labelClass}>Phone</label>
                                    <input
                                        type="text"
                                        name="phone"
                                        value={resume.phone}
                                        onChange={handleChange}
                                        className={inputClass}
                                        placeholder="+1 234 567 890"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className={labelClass}>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={resume.email}
                                    onChange={handleChange}
                                    className={inputClass}
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label className={labelClass}>Website</label>
                                <input
                                    type="text"
                                    name="website"
                                    value={resume.website}
                                    onChange={handleChange}
                                    className={inputClass}
                                    placeholder="https://yourwebsite.com"
                                />
                            </div>
                            <div className="flex justify-end pt-4">
                                <Button type="button" onClick={() => setStep(1)} className="transition-all duration-200">
                                    Continue
                                </Button>
                            </div>
                        </form>
                    )}

                    {step === 1 && (
                        <form className="space-y-6">
                            <h2 className="text-2xl font-bold mb-4 text-blue-700 tracking-tight">Education</h2>
                            <div>
                                <label className={labelClass}>Degree</label>
                                <input
                                    type="text"
                                    name="degree"
                                    value={resume.degree}
                                    onChange={handleChange}
                                    className={inputClass}
                                    placeholder="B.Sc. in Computer Science"
                                />
                            </div>
                            <div>
                                <label className={labelClass}>University</label>
                                <input
                                    type="text"
                                    name="university"
                                    value={resume.university}
                                    onChange={handleChange}
                                    className={inputClass}
                                    placeholder="Harvard University"
                                />
                            </div>
                            <div>
                                <label className={labelClass}>Year</label>
                                <input
                                    type="text"
                                    name="eduYear"
                                    value={resume.eduYear}
                                    onChange={handleChange}
                                    className={inputClass}
                                    placeholder="2020"
                                />
                            </div>
                            <div className="flex justify-between pt-4">
                                <Button type="button" variant="outline" onClick={() => setStep(0)}>
                                    Back
                                </Button>
                                <Button type="button" onClick={() => setStep(2)}>
                                    Continue
                                </Button>
                            </div>
                        </form>
                    )}

                    {step === 2 && (
                        <form className="space-y-6">
                            <h2 className="text-2xl font-bold mb-4 text-blue-700 tracking-tight">Experience</h2>
                            <div>
                                <h3 className="font-semibold mb-2 text-blue-600">Experience 1</h3>
                                <input
                                    type="text"
                                    name="exp1Title"
                                    value={resume.exp1Title}
                                    onChange={handleChange}
                                    placeholder="Job Title"
                                    className={inputClass + " mb-2"}
                                />
                                <input
                                    type="text"
                                    name="exp1Company"
                                    value={resume.exp1Company}
                                    onChange={handleChange}
                                    placeholder="Company"
                                    className={inputClass + " mb-2"}
                                />
                                <input
                                    type="text"
                                    name="exp1Year"
                                    value={resume.exp1Year}
                                    onChange={handleChange}
                                    placeholder="Year"
                                    className={inputClass + " mb-2"}
                                />
                                <textarea
                                    name="exp1Desc"
                                    value={resume.exp1Desc.join("\n")}
                                    onChange={e =>
                                        setResume(prev => ({
                                            ...prev,
                                            exp1Desc: e.target.value.split("\n"),
                                        }))
                                    }
                                    placeholder="Descriptions (one per line)"
                                    className={inputClass + " resize-none"}
                                    rows={3}
                                />
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2 text-blue-600">Experience 2</h3>
                                <input
                                    type="text"
                                    name="exp2Title"
                                    value={resume.exp2Title}
                                    onChange={handleChange}
                                    placeholder="Job Title"
                                    className={inputClass + " mb-2"}
                                />
                                <input
                                    type="text"
                                    name="exp2Company"
                                    value={resume.exp2Company}
                                    onChange={handleChange}
                                    placeholder="Company"
                                    className={inputClass + " mb-2"}
                                />
                                <input
                                    type="text"
                                    name="exp2Year"
                                    value={resume.exp2Year}
                                    onChange={handleChange}
                                    placeholder="Year"
                                    className={inputClass + " mb-2"}
                                />
                                <textarea
                                    name="exp2Desc"
                                    value={resume.exp2Desc.join("\n")}
                                    onChange={e =>
                                        setResume(prev => ({
                                            ...prev,
                                            exp2Desc: e.target.value.split("\n"),
                                        }))
                                    }
                                    placeholder="Descriptions (one per line)"
                                    className={inputClass + " resize-none"}
                                    rows={3}
                                />
                            </div>
                            <div className="flex justify-between pt-4">
                                <Button type="button" variant="outline" onClick={() => setStep(1)}>
                                    Back
                                </Button>
                                <Button type="button" onClick={() => setStep(3)}>
                                    Continue
                                </Button>
                            </div>
                        </form>
                    )}

                    {step === 3 && (
                        <form className="space-y-6">
                            <h2 className="text-2xl font-bold mb-4 text-blue-700 tracking-tight">Skills</h2>
                            <input
                                type="text"
                                name="skills"
                                value={resume.skills.join(", ")}
                                onChange={e =>
                                    setResume(prev => ({
                                        ...prev,
                                        skills: e.target.value
                                            .split(",")
                                            .map(s => s.trim())
                                            .filter(Boolean),
                                    }))
                                }
                                placeholder="Comma separated (e.g. HTML, CSS, JavaScript)"
                                className={inputClass}
                            />
                            <div className="flex justify-between pt-4">
                                <Button type="button" variant="outline" onClick={() => setStep(2)}>
                                    Back
                                </Button>
                                <Button type="button" onClick={() => setStep(4)}>
                                    Continue
                                </Button>
                            </div>
                        </form>
                    )}

                    {step === 4 && (
                        <form className="space-y-6">
                            <h2 className="text-2xl font-bold mb-4 text-blue-700 tracking-tight">Projects</h2>
                            <div>
                                <h3 className="font-semibold mb-2 text-blue-600">Project 1</h3>
                                <input
                                    type="text"
                                    value={resume.project1.title}
                                    onChange={e =>
                                        setResume(prev => ({
                                            ...prev,
                                            project1: { ...prev.project1, title: e.target.value },
                                        }))
                                    }
                                    placeholder="Title"
                                    className={inputClass + " mb-2"}
                                />
                                <input
                                    type="text"
                                    value={resume.project1.desc}
                                    onChange={e =>
                                        setResume(prev => ({
                                            ...prev,
                                            project1: { ...prev.project1, desc: e.target.value },
                                        }))
                                    }
                                    placeholder="Description"
                                    className={inputClass}
                                />
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2 text-blue-600">Project 2</h3>
                                <input
                                    type="text"
                                    value={resume.project2.title}
                                    onChange={e =>
                                        setResume(prev => ({
                                            ...prev,
                                            project2: { ...prev.project2, title: e.target.value },
                                        }))
                                    }
                                    placeholder="Title"
                                    className={inputClass + " mb-2"}
                                />
                                <input
                                    type="text"
                                    value={resume.project2.desc}
                                    onChange={e =>
                                        setResume(prev => ({
                                            ...prev,
                                            project2: { ...prev.project2, desc: e.target.value },
                                        }))
                                    }
                                    placeholder="Description"
                                    className={inputClass}
                                />
                            </div>
                            <div className="flex justify-between pt-4">
                                <Button type="button" variant="outline" onClick={() => setStep(3)}>
                                    Back
                                </Button>
                                <Button type="button" onClick={() => setStep(5)}>
                                    Continue
                                </Button>
                            </div>
                        </form>
                    )}

                    {step === 5 && (
                        <form className="space-y-6">
                            <h2 className="text-2xl font-bold mb-4 text-blue-700 tracking-tight">Achievements</h2>
                            <input
                                type="text"
                                name="achievement"
                                value={resume.achievement}
                                onChange={handleChange}
                                placeholder="e.g. Winner of Hackathon 2022"
                                className={inputClass}
                            />
                            <div className="flex justify-between pt-4">
                                <Button type="button" variant="outline" onClick={() => setStep(4)}>
                                    Back
                                </Button>
                                <Button type="button" disabled>
                                    Finish
                                </Button>
                            </div>
                        </form>
                    )}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}