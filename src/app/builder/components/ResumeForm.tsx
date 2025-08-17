import React, { ChangeEvent, useEffect } from "react";
import { Button } from "@/components/ui/button";

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
    photo: string | null; // base64 string or null
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

export default function ResumeForm({ resume, setResume, step, setStep }: Props) {
    // Load from localStorage on mount
    useEffect(() => {
        const saved = localStorage.getItem(LOCAL_KEY);
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                setResume((prev) => ({
                    ...prev,
                    ...parsed,
                }));
            } catch { }
        }
        // eslint-disable-next-line
    }, []);

    // Save to localStorage on resume change
    useEffect(() => {
        localStorage.setItem(LOCAL_KEY, JSON.stringify(resume));
    }, [resume]);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setResume(prev => ({ ...prev, [name]: value }));
    };

    const handlePhoto = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setResume(prev => ({ ...prev, photo: reader.result as string }));
            };
            reader.readAsDataURL(file); // convert to base64
        }
    };

    // Step 0: Header
    if (step === 0) {
        return (
            <form className="space-y-6">
                <h2 className="text-xl font-bold mb-4">Personal Information</h2>
                <div>
                    <label className="block text-sm font-semibold mb-1">Photo</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handlePhoto}
                        className="block"
                    />
                    {resume.photo && (
                        <img
                            src={resume.photo}
                            alt="Profile"
                            className="mt-2 w-20 h-20 rounded-full object-cover border"
                        />
                    )}
                </div>
                <div className="flex gap-4">
                    <div className="flex-1">
                        <label className="block text-sm font-semibold mb-1">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            value={resume.firstName}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded px-3 py-2"
                        />
                    </div>
                    <div className="flex-1">
                        <label className="block text-sm font-semibold mb-1">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            value={resume.lastName}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded px-3 py-2"
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-semibold mb-1">Job Title</label>
                    <input
                        type="text"
                        name="jobTitle"
                        value={resume.jobTitle}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                </div>
                <div className="flex gap-4">
                    <div className="flex-1">
                        <label className="block text-sm font-semibold mb-1">City</label>
                        <input
                            type="text"
                            name="city"
                            value={resume.city}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded px-3 py-2"
                        />
                    </div>
                    <div className="flex-1">
                        <label className="block text-sm font-semibold mb-1">Country</label>
                        <input
                            type="text"
                            name="country"
                            value={resume.country}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded px-3 py-2"
                        />
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="flex-1">
                        <label className="block text-sm font-semibold mb-1">Postal Code</label>
                        <input
                            type="text"
                            name="postalCode"
                            value={resume.postalCode}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded px-3 py-2"
                        />
                    </div>
                    <div className="flex-1">
                        <label className="block text-sm font-semibold mb-1">Phone</label>
                        <input
                            type="text"
                            name="phone"
                            value={resume.phone}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded px-3 py-2"
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-semibold mb-1">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={resume.email}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                </div>
                <div>
                    <label className="block text-sm font-semibold mb-1">Website</label>
                    <input
                        type="text"
                        name="website"
                        value={resume.website}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                </div>
                <div className="flex justify-end pt-4">
                    <Button type="button" onClick={() => setStep(1)}>
                        Continue
                    </Button>
                </div>
            </form>
        );
    }

    // Step 1: Education
    if (step === 1) {
        return (
            <form className="space-y-6">
                <h2 className="text-xl font-bold mb-4">Education</h2>
                <div>
                    <label className="block text-sm font-semibold mb-1">Degree</label>
                    <input
                        type="text"
                        name="degree"
                        value={resume.degree}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                </div>
                <div>
                    <label className="block text-sm font-semibold mb-1">University</label>
                    <input
                        type="text"
                        name="university"
                        value={resume.university}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                </div>
                <div>
                    <label className="block text-sm font-semibold mb-1">Year</label>
                    <input
                        type="text"
                        name="eduYear"
                        value={resume.eduYear}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-3 py-2"
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
        );
    }

    // Step 2: Experience
    if (step === 2) {
        return (
            <form className="space-y-6">
                <h2 className="text-xl font-bold mb-4">Experience</h2>
                <div>
                    <h3 className="font-semibold mb-2">Experience 1</h3>
                    <input
                        type="text"
                        name="exp1Title"
                        value={resume.exp1Title}
                        onChange={handleChange}
                        placeholder="Job Title"
                        className="w-full border border-gray-300 rounded px-3 py-2 mb-2"
                    />
                    <input
                        type="text"
                        name="exp1Company"
                        value={resume.exp1Company}
                        onChange={handleChange}
                        placeholder="Company"
                        className="w-full border border-gray-300 rounded px-3 py-2 mb-2"
                    />
                    <input
                        type="text"
                        name="exp1Year"
                        value={resume.exp1Year}
                        onChange={handleChange}
                        placeholder="Year"
                        className="w-full border border-gray-300 rounded px-3 py-2 mb-2"
                    />
                    <textarea
                        name="exp1Desc"
                        value={resume.exp1Desc.join("\n")}
                        onChange={e => setResume(prev => ({ ...prev, exp1Desc: e.target.value.split("\n") }))}
                        placeholder="Descriptions (one per line)"
                        className="w-full border border-gray-300 rounded px-3 py-2"
                        rows={3}
                    />
                </div>
                <div>
                    <h3 className="font-semibold mb-2">Experience 2</h3>
                    <input
                        type="text"
                        name="exp2Title"
                        value={resume.exp2Title}
                        onChange={handleChange}
                        placeholder="Job Title"
                        className="w-full border border-gray-300 rounded px-3 py-2 mb-2"
                    />
                    <input
                        type="text"
                        name="exp2Company"
                        value={resume.exp2Company}
                        onChange={handleChange}
                        placeholder="Company"
                        className="w-full border border-gray-300 rounded px-3 py-2 mb-2"
                    />
                    <input
                        type="text"
                        name="exp2Year"
                        value={resume.exp2Year}
                        onChange={handleChange}
                        placeholder="Year"
                        className="w-full border border-gray-300 rounded px-3 py-2 mb-2"
                    />
                    <textarea
                        name="exp2Desc"
                        value={resume.exp2Desc.join("\n")}
                        onChange={e => setResume(prev => ({ ...prev, exp2Desc: e.target.value.split("\n") }))}
                        placeholder="Descriptions (one per line)"
                        className="w-full border border-gray-300 rounded px-3 py-2"
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
        );
    }

    // Step 3: Skills
    if (step === 3) {
        return (
            <form className="space-y-6">
                <h2 className="text-xl font-bold mb-4">Skills</h2>
                <input
                    type="text"
                    name="skills"
                    value={resume.skills.join(", ")}
                    onChange={e => setResume(prev => ({ ...prev, skills: e.target.value.split(",").map(s => s.trim()).filter(Boolean) }))}
                    placeholder="Comma separated (e.g. HTML, CSS, JavaScript)"
                    className="w-full border border-gray-300 rounded px-3 py-2"
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
        );
    }

    // Step 4: Projects
    if (step === 4) {
        return (
            <form className="space-y-6">
                <h2 className="text-xl font-bold mb-4">Projects</h2>
                <div>
                    <h3 className="font-semibold mb-2">Project 1</h3>
                    <input
                        type="text"
                        value={resume.project1.title}
                        onChange={e => setResume(prev => ({ ...prev, project1: { ...prev.project1, title: e.target.value } }))}
                        placeholder="Title"
                        className="w-full border border-gray-300 rounded px-3 py-2 mb-2"
                    />
                    <input
                        type="text"
                        value={resume.project1.desc}
                        onChange={e => setResume(prev => ({ ...prev, project1: { ...prev.project1, desc: e.target.value } }))}
                        placeholder="Description"
                        className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                </div>
                <div>
                    <h3 className="font-semibold mb-2">Project 2</h3>
                    <input
                        type="text"
                        value={resume.project2.title}
                        onChange={e => setResume(prev => ({ ...prev, project2: { ...prev.project2, title: e.target.value } }))}
                        placeholder="Title"
                        className="w-full border border-gray-300 rounded px-3 py-2 mb-2"
                    />
                    <input
                        type="text"
                        value={resume.project2.desc}
                        onChange={e => setResume(prev => ({ ...prev, project2: { ...prev.project2, desc: e.target.value } }))}
                        placeholder="Description"
                        className="w-full border border-gray-300 rounded px-3 py-2"
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
        );
    }

    // Step 5: Achievements
    return (
        <form className="space-y-6">
            <h2 className="text-xl font-bold mb-4">Achievements</h2>
            <input
                type="text"
                name="achievement"
                value={resume.achievement}
                onChange={handleChange}
                placeholder="e.g. Winner of Hackathon 2022"
                className="w-full border border-gray-300 rounded px-3 py-2"
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
    );
}