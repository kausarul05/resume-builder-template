"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function ResumeBuilder() {
    // Form state
    const [firstName, setFirstName] = useState("First Name");
    const [lastName, setLastName] = useState("Last Name");
    const [jobTitle, setJobTitle] = useState("Web Developer");
    const [city, setCity] = useState("City");
    const [postalCode, setPostalCode] = useState("Postal Code");
    const [country, setCountry] = useState("Country");
    const [phone, setPhone] = useState("Phone");
    const [email, setEmail] = useState("Email");
    const [website, setWebsite] = useState("www.example.com");

    // Education
    const [degree, setDegree] = useState("BSe in Computer Science");
    const [university, setUniversity] = useState("Renowned University");
    const [eduYear, setEduYear] = useState("2015 - 2020");

    // Experience 1
    const [exp1Title, setExp1Title] = useState("Front-end Developer");
    const [exp1Company, setExp1Company] = useState("Tech Company");
    const [exp1Year, setExp1Year] = useState("2021 - Present");
    const [exp1Desc, setExp1Desc] = useState([
        "Developed responsive web interfaces using React",
        "Collaborated with designers and backend developers on online environment",
        "Optimized web applications for performance"
    ]);

    // Experience 2
    const [exp2Title, setExp2Title] = useState("Web Developer");
    const [exp2Company, setExp2Company] = useState("Startup");
    const [exp2Year, setExp2Year] = useState("2020 - 2021");
    const [exp2Desc, setExp2Desc] = useState([
        "Build and maintain websites using HTML, CSS, and JavaScript",
        "Worked with clients to understand requirements",
        "Ensure cross-browser compatibility"
    ]);

    // Skills
    const [skills, setSkills] = useState([
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Redux",
        "Responsive Design"
    ]);

    // Projects
    const [project1, setProject1] = useState({
        title: "Portfolio Website",
        desc: "Personal portfolio showcasing projects and skills"
    });
    const [project2, setProject2] = useState({
        title: "E-commerce Site",
        desc: "Fully-functional online store with a custom shopping cart"
    });

    // Achievements
    const [achievement, setAchievement] = useState("Winner of Hackathon 2022");

    return (
        <div className="bg-gray-50">
            <div className="min-h-screen container mx-auto flex flex-col md:flex-row">
                {/* Left Side: Form */}
                <div className="md:w-1/2 p-8 overflow-y-auto">
                    <h1 className="text-2xl font-bold mb-6">Resume Details</h1>
                    <div className="space-y-6">
                        {/* Personal Info */}
                        <div>
                            <h2 className="font-semibold mb-2">Personal Information</h2>
                            <div className="flex gap-4 mb-2">
                                <div className="flex-1">
                                    <label className="block text-sm font-semibold mb-1">First Name</label>
                                    <input
                                        type="text"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        className="w-full border border-gray-300 rounded px-3 py-2"
                                    />
                                </div>
                                <div className="flex-1">
                                    <label className="block text-sm font-semibold mb-1">Surname</label>
                                    <input
                                        type="text"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        className="w-full border border-gray-300 rounded px-3 py-2"
                                    />
                                </div>
                            </div>
                            <div className="mb-2">
                                <label className="block text-sm font-semibold mb-1">Job Title</label>
                                <input
                                    type="text"
                                    value={jobTitle}
                                    onChange={(e) => setJobTitle(e.target.value)}
                                    className="w-full border border-gray-300 rounded px-3 py-2"
                                />
                            </div>
                            <div className="flex gap-4 mb-2">
                                <div className="flex-1">
                                    <label className="block text-sm font-semibold mb-1">City</label>
                                    <input
                                        type="text"
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                        className="w-full border border-gray-300 rounded px-3 py-2"
                                    />
                                </div>
                                <div className="flex-1">
                                    <label className="block text-sm font-semibold mb-1">Country</label>
                                    <input
                                        type="text"
                                        value={country}
                                        onChange={(e) => setCountry(e.target.value)}
                                        className="w-full border border-gray-300 rounded px-3 py-2"
                                    />
                                </div>
                            </div>
                            <div className="flex gap-4 mb-2">
                                <div className="flex-1">
                                    <label className="block text-sm font-semibold mb-1">Postal Code</label>
                                    <input
                                        type="text"
                                        value={postalCode}
                                        onChange={(e) => setPostalCode(e.target.value)}
                                        className="w-full border border-gray-300 rounded px-3 py-2"
                                    />
                                </div>
                                <div className="flex-1">
                                    <label className="block text-sm font-semibold mb-1">Phone</label>
                                    <input
                                        type="text"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        className="w-full border border-gray-300 rounded px-3 py-2"
                                    />
                                </div>
                            </div>
                            <div className="mb-2">
                                <label className="block text-sm font-semibold mb-1">Email</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full border border-gray-300 rounded px-3 py-2"
                                />
                            </div>
                            <div className="mb-2">
                                <label className="block text-sm font-semibold mb-1">Website</label>
                                <input
                                    type="text"
                                    value={website}
                                    onChange={(e) => setWebsite(e.target.value)}
                                    className="w-full border border-gray-300 rounded px-3 py-2"
                                />
                            </div>
                        </div>
                        {/* Education */}
                        <div>
                            <h2 className="font-semibold mb-2">Education</h2>
                            <div className="mb-2">
                                <label className="block text-sm font-semibold mb-1">Degree</label>
                                <input
                                    type="text"
                                    value={degree}
                                    onChange={(e) => setDegree(e.target.value)}
                                    className="w-full border border-gray-300 rounded px-3 py-2"
                                />
                            </div>
                            <div className="mb-2">
                                <label className="block text-sm font-semibold mb-1">University</label>
                                <input
                                    type="text"
                                    value={university}
                                    onChange={(e) => setUniversity(e.target.value)}
                                    className="w-full border border-gray-300 rounded px-3 py-2"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-1">Year</label>
                                <input
                                    type="text"
                                    value={eduYear}
                                    onChange={(e) => setEduYear(e.target.value)}
                                    className="w-full border border-gray-300 rounded px-3 py-2"
                                />
                            </div>
                        </div>
                        {/* Experience 1 */}
                        <div>
                            <h2 className="font-semibold mb-2">Experience 1</h2>
                            <div className="mb-2">
                                <label className="block text-sm font-semibold mb-1">Job Title</label>
                                <input
                                    type="text"
                                    value={exp1Title}
                                    onChange={(e) => setExp1Title(e.target.value)}
                                    className="w-full border border-gray-300 rounded px-3 py-2"
                                />
                            </div>
                            <div className="mb-2">
                                <label className="block text-sm font-semibold mb-1">Company</label>
                                <input
                                    type="text"
                                    value={exp1Company}
                                    onChange={(e) => setExp1Company(e.target.value)}
                                    className="w-full border border-gray-300 rounded px-3 py-2"
                                />
                            </div>
                            <div className="mb-2">
                                <label className="block text-sm font-semibold mb-1">Year</label>
                                <input
                                    type="text"
                                    value={exp1Year}
                                    onChange={(e) => setExp1Year(e.target.value)}
                                    className="w-full border border-gray-300 rounded px-3 py-2"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-1">Descriptions (one per line)</label>
                                <textarea
                                    value={exp1Desc.join("\n")}
                                    onChange={(e) => setExp1Desc(e.target.value.split("\n"))}
                                    className="w-full border border-gray-300 rounded px-3 py-2"
                                    rows={3}
                                />
                            </div>
                        </div>
                        {/* Experience 2 */}
                        <div>
                            <h2 className="font-semibold mb-2">Experience 2</h2>
                            <div className="mb-2">
                                <label className="block text-sm font-semibold mb-1">Job Title</label>
                                <input
                                    type="text"
                                    value={exp2Title}
                                    onChange={(e) => setExp2Title(e.target.value)}
                                    className="w-full border border-gray-300 rounded px-3 py-2"
                                />
                            </div>
                            <div className="mb-2">
                                <label className="block text-sm font-semibold mb-1">Company</label>
                                <input
                                    type="text"
                                    value={exp2Company}
                                    onChange={(e) => setExp2Company(e.target.value)}
                                    className="w-full border border-gray-300 rounded px-3 py-2"
                                />
                            </div>
                            <div className="mb-2">
                                <label className="block text-sm font-semibold mb-1">Year</label>
                                <input
                                    type="text"
                                    value={exp2Year}
                                    onChange={(e) => setExp2Year(e.target.value)}
                                    className="w-full border border-gray-300 rounded px-3 py-2"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-1">Descriptions (one per line)</label>
                                <textarea
                                    value={exp2Desc.join("\n")}
                                    onChange={(e) => setExp2Desc(e.target.value.split("\n"))}
                                    className="w-full border border-gray-300 rounded px-3 py-2"
                                    rows={3}
                                />
                            </div>
                        </div>
                        {/* Skills */}
                        <div>
                            <h2 className="font-semibold mb-2">Skills (comma separated)</h2>
                            <input
                                type="text"
                                value={skills.join(", ")}
                                onChange={(e) => setSkills(e.target.value.split(",").map(s => s.trim()))}
                                className="w-full border border-gray-300 rounded px-3 py-2"
                            />
                        </div>
                        {/* Projects */}
                        <div>
                            <h2 className="font-semibold mb-2">Project 1</h2>
                            <div className="mb-2">
                                <label className="block text-sm font-semibold mb-1">Title</label>
                                <input
                                    type="text"
                                    value={project1.title}
                                    onChange={(e) => setProject1({ ...project1, title: e.target.value })}
                                    className="w-full border border-gray-300 rounded px-3 py-2"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-1">Description</label>
                                <input
                                    type="text"
                                    value={project1.desc}
                                    onChange={(e) => setProject1({ ...project1, desc: e.target.value })}
                                    className="w-full border border-gray-300 rounded px-3 py-2"
                                />
                            </div>
                        </div>
                        <div>
                            <h2 className="font-semibold mb-2">Project 2</h2>
                            <div className="mb-2">
                                <label className="block text-sm font-semibold mb-1">Title</label>
                                <input
                                    type="text"
                                    value={project2.title}
                                    onChange={(e) => setProject2({ ...project2, title: e.target.value })}
                                    className="w-full border border-gray-300 rounded px-3 py-2"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-1">Description</label>
                                <input
                                    type="text"
                                    value={project2.desc}
                                    onChange={(e) => setProject2({ ...project2, desc: e.target.value })}
                                    className="w-full border border-gray-300 rounded px-3 py-2"
                                />
                            </div>
                        </div>
                        {/* Achievements */}
                        <div>
                            <h2 className="font-semibold mb-2">Achievements</h2>
                            <input
                                type="text"
                                value={achievement}
                                onChange={(e) => setAchievement(e.target.value)}
                                className="w-full border border-gray-300 rounded px-3 py-2"
                            />
                        </div>
                    </div>
                    <div className="flex justify-between mt-8">
                        <Button variant="outline">Back</Button>
                        <Button>Continue</Button>
                    </div>
                </div>
                {/* Right Side: Live Preview */}
                <div className="md:w-1/2 bg-white p-0 border-l border-gray-200 flex flex-col">
                    {/* Header */}
                    <div className="bg-[#25304B] px-8 py-8 flex items-center justify-between rounded-t">
                        <div>
                            <h2 className="text-4xl font-extrabold text-white tracking-wide">{firstName} {lastName}</h2>
                            <p className="text-lg text-blue-100 mt-2">{jobTitle}</p>
                        </div>
                        <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center overflow-hidden border-4 border-[#25304B]">
                            <img
                                src="/images/profile-placeholder.png"
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
                                <div>
                                    <p className="font-semibold">{degree}</p>
                                    <p className="text-gray-700">{university}</p>
                                    <p className="text-gray-500 text-sm">{eduYear}</p>
                                </div>
                            </div>
                            {/* Experience */}
                            <div>
                                <h3 className="text-[#25304B] font-bold text-lg tracking-wide mb-2">EXPERIENCE</h3>
                                <div className="mb-3">
                                    <p className="font-semibold">{exp1Title}</p>
                                    <p className="text-gray-700">{exp1Company}</p>
                                    <p className="text-gray-500 text-sm">{exp1Year}</p>
                                    <ul className="list-disc ml-5 text-gray-700 text-sm mt-1 space-y-1">
                                        {exp1Desc.map((desc, i) => (
                                            <li key={i}>{desc}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <p className="font-semibold">{exp2Title}</p>
                                    <p className="text-gray-700">{exp2Company}</p>
                                    <p className="text-gray-500 text-sm">{exp2Year}</p>
                                    <ul className="list-disc ml-5 text-gray-700 text-sm mt-1 space-y-1">
                                        {exp2Desc.map((desc, i) => (
                                            <li key={i}>{desc}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            {/* Projects */}
                            <div>
                                <h3 className="text-[#25304B] font-bold text-lg tracking-wide mb-2">PROJECTS</h3>
                                <div>
                                    <p className="font-semibold">{project1.title}</p>
                                    <p className="text-gray-700 text-sm">{project1.desc}</p>
                                </div>
                                <div className="mt-2">
                                    <p className="font-semibold">{project2.title}</p>
                                    <p className="text-gray-700 text-sm">{project2.desc}</p>
                                </div>
                            </div>
                        </div>
                        {/* Right Column */}
                        <div className="w-full lg:w-72 flex-shrink-0 space-y-8">
                            {/* Contact */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-gray-700 text-sm">
                                    <span className="material-icons text-[#25304B]">call</span>
                                    <span>{phone}</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-700 text-sm">
                                    <span className="material-icons text-[#25304B]">email</span>
                                    <span>{email}</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-700 text-sm">
                                    <span className="material-icons text-[#25304B]">public</span>
                                    <span>{website}</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-700 text-sm">
                                    <span className="material-icons text-[#25304B]">location_on</span>
                                    <span>{city}, {country} {postalCode}</span>
                                </div>
                            </div>
                            {/* Skills */}
                            <div>
                                <h3 className="text-[#25304B] font-bold text-lg tracking-wide mb-2">SKILLS</h3>
                                <ul className="list-none space-y-1 text-gray-700 text-sm">
                                    {skills.map((skill, i) => (
                                        <li key={i}>{skill}</li>
                                    ))}
                                </ul>
                            </div>
                            {/* Projects (right column) */}
                            <div>
                                <h3 className="text-[#25304B] font-bold text-lg tracking-wide mb-2">PROJECTS</h3>
                                <div>
                                    <p className="font-semibold">{project1.title}</p>
                                    <p className="text-gray-700 text-sm">{project1.desc}</p>
                                </div>
                                <div className="mt-2">
                                    <p className="font-semibold">{project2.title}</p>
                                    <p className="text-gray-700 text-sm">{project2.desc}</p>
                                </div>
                            </div>
                            {/* Achievements */}
                            <div>
                                <h3 className="text-[#25304B] font-bold text-lg tracking-wide mb-2">ACHIEVEMENTS</h3>
                                <p className="text-gray-700 text-sm">{achievement}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
