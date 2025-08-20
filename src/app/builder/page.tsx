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

export default function ResumeBuilder() {
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
        achievement: "",
    });

    const [step, setStep] = useState(0);

    // Template selection state
    const [template, setTemplate] = useState<1 | 2 | 3>(1);

    const show = {
        education: !!(resume.degree || resume.university || resume.eduYear),
        experience: !!(resume.exp1Title || resume.exp2Title),
        skills: resume.skills.length > 0 && resume.skills.some(s => s),
        projects: !!(resume.project1.title || resume.project2.title),
        achievements: !!resume.achievement,
    };

    return (
        <div className="bg-gradient-to-br from-blue-100 via-white to-pink-100 transition-all duration-500">
            <div className="min-h-screen container mx-auto flex flex-col md:flex-row">
                {/* Left: Form */}
                <div className="md:w-1/2 p-8 pl-0 overflow-y-auto">
                    <ResumeForm
                        resume={resume}
                        setResume={setResume}
                        step={step}
                        setStep={setStep}
                    />
                </div>
                {/* Right: Preview */}
                <div className="md:w-1/2 p-0 border-l border-gray-200 flex flex-col">
                    {/* Template Selector */}
                    <div className="p-4 border-b border-gray-100 bg-white flex items-center gap-3">
                        <label htmlFor="template" className="font-medium text-gray-700">
                            Choose Template:
                        </label>
                        <select
                            id="template"
                            value={template}
                            onChange={e => setTemplate(Number(e.target.value) as 1 | 2 | 3)}
                            className="border rounded px-2 py-1 text-gray-700"
                        >
                            <option value={1}>Template 1</option>
                            <option value={2}>Template 2</option>
                            <option value={3}>Template 3</option>
                        </select>
                    </div>
                    <ResumePreview
                        resume={resume}
                        show={show}
                        template={template}
                    />
                </div>
            </div>
        </div>
    );
}