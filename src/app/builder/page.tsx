"use client";

import { useState } from "react";
import ResumeForm from "./components/ResumeForm";
import ResumePreview from "./components/ResumePreview";

export type Resume = {
    firstName: string;
    lastName: string;
    jobTitle: string;
    city: string;
    postalCode: string;
    country: string;
    phone: string;
    email: string;
    website: string;
    photo: string | null; // ✅ base64 string or null
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
    // projects: { title: string; desc: string }[];
    achievement: string;
};

export default function ResumeBuilder() {
    // ✅ Explicitly use Resume type
    const [resume, setResume] = useState<Resume>({
        firstName: "",
        lastName: "",
        jobTitle: "",
        city: "",
        postalCode: "",
        country: "",
        phone: "",
        email: "",
        website: "",
        photo: null,
        degree: "",
        university: "",
        eduYear: "",
        exp1Title: "",
        exp1Company: "",
        exp1Year: "",
        exp1Desc: [],
        exp2Title: "",
        exp2Company: "",
        exp2Year: "",
        exp2Desc: [],
        skills: [],
        project1: { title: "", desc: "" },
        project2: { title: "", desc: "" },
        // projects: [],
        achievement: "",
    });

    // Which step is active
    const [step, setStep] = useState(0);

    // Show/hide preview sections
    const show = {
        education: !!(resume.degree || resume.university || resume.eduYear),
        experience: !!(resume.exp1Title || resume.exp2Title),
        skills: resume.skills.length > 0 && resume.skills.some(s => s),
        projects: !!(resume.project1.title || resume.project2.title),
        achievements: !!resume.achievement,
    };

    return (
        <div className="bg-gray-50">
            <div className="min-h-screen container mx-auto flex flex-col md:flex-row">
                {/* Left: Form */}
                <div className="md:w-1/2 p-8 overflow-y-auto">
                    <ResumeForm
                        resume={resume}
                        setResume={setResume}
                        step={step}
                        setStep={setStep}
                    />
                </div>
                {/* Right: Preview */}
                <div className="md:w-1/2 bg-white p-0 border-l border-gray-200 flex flex-col">
                    <ResumePreview
                        resume={resume}
                        show={show}
                    />
                </div>
            </div>
        </div>
    );
}
