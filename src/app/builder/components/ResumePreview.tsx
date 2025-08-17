import React from "react";
import { Phone, Mail, Globe, MapPin } from "lucide-react";

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
    photo: string | null; // Match the type from page.tsx
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
    show: Show;
};

type Show = {
    education: boolean;
    experience: boolean;
    skills: boolean;
    projects: boolean;
    achievements: boolean;
};

function getPhotoUrl(photo: string | File | null) {
    if (!photo) return "/images/profile-placeholder.png";
    if (typeof photo === "string") return photo;
    return URL.createObjectURL(photo);
}

export default function ResumePreview({ resume, show }: Props) {
    // Placeholders for empty sections
    const placeholders = {
        education: {
            degree: "e.g. BSc in Computer Science",
            university: "e.g. Renowned University",
            eduYear: "e.g. 2015 - 2020",
        },
        experience: {
            title: "e.g. Front-end Developer",
            company: "e.g. Tech Company",
            year: "e.g. 2021 - Present",
            desc: ["Describe your responsibilities or achievements"],
        },
        skills: ["e.g. HTML", "CSS", "JavaScript"],
        projects: [
            { title: "e.g. Portfolio Website", desc: "Personal portfolio showcasing projects and skills" },
            { title: "e.g. E-commerce Site", desc: "Online store with a custom shopping cart" },
        ],
        achievement: "e.g. Winner of Hackathon 2022",
    };

    return (
        <div className="flex flex-col h-full">
            {/* Header */}
            <div className="bg-[#25304B] px-8 py-8 flex items-center justify-between rounded-t">
                <div>
                    <h2 className="text-4xl font-extrabold text-white tracking-wide">
                        {(resume.firstName || "First Name") + " " + (resume.lastName || "Last Name")}
                    </h2>
                    <p className="text-lg text-blue-100 mt-2">
                        {resume.jobTitle || "Job Title"}
                    </p>
                </div>
                <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center overflow-hidden border-4 border-[#25304B]">
                    <img
                        src={getPhotoUrl(resume.photo)}
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
            {/* Main Content */}
            <div className="flex-1 flex flex-col lg:flex-row px-8 py-8 gap-8">
                {/* Left Column */}
                <div className="flex-1 space-y-8">
                    {/* Education */}
                    <div>
                        <h3 className="text-[#25304B] font-bold text-lg tracking-wide mb-2">EDUCATION</h3>
                        {(show.education || true) && (
                            <div className={show.education ? "" : "opacity-50"}>
                                <p className="font-semibold">
                                    {resume.degree || placeholders.education.degree}
                                </p>
                                <p className="text-gray-700">
                                    {resume.university || placeholders.education.university}
                                </p>
                                <p className="text-gray-500 text-sm">
                                    {resume.eduYear || placeholders.education.eduYear}
                                </p>
                            </div>
                        )}
                    </div>
                    {/* Experience */}
                    <div>
                        <h3 className="text-[#25304B] font-bold text-lg tracking-wide mb-2">EXPERIENCE</h3>
                        {(show.experience || true) && (
                            <>
                                <div className={resume.exp1Title ? "" : "opacity-50"}>
                                    <p className="font-semibold">
                                        {resume.exp1Title || placeholders.experience.title}
                                    </p>
                                    <p className="text-gray-700">
                                        {resume.exp1Company || placeholders.experience.company}
                                    </p>
                                    <p className="text-gray-500 text-sm">
                                        {resume.exp1Year || placeholders.experience.year}
                                    </p>
                                    <ul className="list-disc ml-5 text-gray-700 text-sm mt-1 space-y-1">
                                        {(resume.exp1Desc.length > 0 && resume.exp1Desc.some(Boolean)
                                            ? resume.exp1Desc
                                            : placeholders.experience.desc
                                        ).map((desc, i) =>
                                            desc ? <li key={i}>{desc}</li> : null
                                        )}
                                    </ul>
                                </div>
                                <div className={resume.exp2Title ? "mt-4" : "mt-4 opacity-50"}>
                                    <p className="font-semibold">
                                        {resume.exp2Title || placeholders.experience.title}
                                    </p>
                                    <p className="text-gray-700">
                                        {resume.exp2Company || placeholders.experience.company}
                                    </p>
                                    <p className="text-gray-500 text-sm">
                                        {resume.exp2Year || placeholders.experience.year}
                                    </p>
                                    <ul className="list-disc ml-5 text-gray-700 text-sm mt-1 space-y-1">
                                        {(resume.exp2Desc.length > 0 && resume.exp2Desc.some(Boolean)
                                            ? resume.exp2Desc
                                            : placeholders.experience.desc
                                        ).map((desc, i) =>
                                            desc ? <li key={i}>{desc}</li> : null
                                        )}
                                    </ul>
                                </div>
                            </>
                        )}
                    </div>
                    {/* Projects */}
                    <div>
                        <h3 className="text-[#25304B] font-bold text-lg tracking-wide mb-2">PROJECTS</h3>
                        {(show.projects || true) && (
                            <>
                                <div className={resume.project1.title ? "" : "opacity-50"}>
                                    <p className="font-semibold">
                                        {resume.project1.title || placeholders.projects[0].title}
                                    </p>
                                    <p className="text-gray-700 text-sm">
                                        {resume.project1.desc || placeholders.projects[0].desc}
                                    </p>
                                </div>
                                <div className={resume.project2.title ? "mt-2" : "mt-2 opacity-50"}>
                                    <p className="font-semibold">
                                        {resume.project2.title || placeholders.projects[1].title}
                                    </p>
                                    <p className="text-gray-700 text-sm">
                                        {resume.project2.desc || placeholders.projects[1].desc}
                                    </p>
                                </div>
                            </>
                        )}
                    </div>
                </div>
                {/* Right Column */}
                <div className="w-full lg:w-72 flex-shrink-0 space-y-8">
                    {/* Contact */}
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-gray-700 text-sm opacity-100">
                            <Phone className="w-4 h-4 text-[#25304B]" />
                            <span>{resume.phone || "e.g. +1234567890"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700 text-sm opacity-100">
                            <Mail className="w-4 h-4 text-[#25304B]" />
                            <span>{resume.email || "e.g. hello@email.com"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700 text-sm opacity-100">
                            <Globe className="w-4 h-4 text-[#25304B]" />
                            <a
                                href={resume.website || "#"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                {resume.website || "e.g. www.example.com"}
                            </a>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700 text-sm opacity-100">
                            <MapPin className="w-4 h-4 text-[#25304B]" />
                            <span>
                                {(resume.city || "City") +
                                    ((resume.city || resume.country) ? ", " : "") +
                                    (resume.country || "Country") +
                                    (resume.postalCode ? ` ${resume.postalCode}` : "")}
                            </span>
                        </div>
                    </div>
                    {/* Skills */}
                    <div>
                        <h3 className="text-[#25304B] font-bold text-lg tracking-wide mb-2">SKILLS</h3>
                        <ul className={`list-none space-y-1 text-gray-700 text-sm ${show.skills ? "" : "opacity-50"}`}>
                            {(resume.skills.length > 0 && resume.skills.some(Boolean)
                                ? resume.skills
                                : placeholders.skills
                            ).map((skill, i) =>
                                skill ? <li key={i}>{skill}</li> : null
                            )}
                        </ul>
                    </div>
                    {/* Projects (right column) */}
                    <div>
                        <h3 className="text-[#25304B] font-bold text-lg tracking-wide mb-2">PROJECTS</h3>
                        <div className={resume.project1.title ? "" : "opacity-50"}>
                            <p className="font-semibold">
                                {resume.project1.title || placeholders.projects[0].title}
                            </p>
                            <p className="text-gray-700 text-sm">
                                {resume.project1.desc || placeholders.projects[0].desc}
                            </p>
                        </div>
                        <div className={resume.project2.title ? "mt-2" : "mt-2 opacity-50"}>
                            <p className="font-semibold">
                                {resume.project2.title || placeholders.projects[1].title}
                            </p>
                            <p className="text-gray-700 text-sm">
                                {resume.project2.desc || placeholders.projects[1].desc}
                            </p>
                        </div>
                    </div>
                    {/* Achievements */}
                    <div>
                        <h3 className="text-[#25304B] font-bold text-lg tracking-wide mb-2">ACHIEVEMENTS</h3>
                        <p className={`text-gray-700 text-sm ${show.achievements ? "" : "opacity-50"}`}>
                            {resume.achievement || placeholders.achievement}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}