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

type Show = {
  education: boolean;
  experience: boolean;
  skills: boolean;
  projects: boolean;
  achievements: boolean;
};

type Props = {
  resume: Resume;
  show: Show;
  template?: 1 | 2 | 3;
};

function getPhotoUrl(photo: string | null) {
  if (!photo) return "/images/profile-placeholder.png";
  return photo;
}

// --- Template 1 (Original) ---
function ResumeTemplate1({ resume, show }: Omit<Props, "template">) {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg border border-gray-200 rounded-md overflow-hidden font-sans animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center md:items-start px-8 py-6 border-b border-gray-300 bg-gray-50">
        {/* Photo */}
        <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-gray-200 shadow-sm">
          <img
            src={getPhotoUrl(resume.photo)}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Info */}
        <div className="flex-1 mt-4 md:mt-0 md:ml-6 text-center md:text-left">
          <h1 className="text-3xl font-bold text-gray-900">
            {(resume.firstName || "First") + " " + (resume.lastName || "Last")}
          </h1>
          <p className="text-lg text-gray-600 font-medium">
            {resume.jobTitle || "Job Title"}
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-700 mt-3">
            <div className="flex items-center gap-1">
              <Phone className="w-4 h-4 text-gray-500" />
              <span>{resume.phone || "+123456789"}</span>
            </div>
            <div className="flex items-center gap-1">
              <Mail className="w-4 h-4 text-gray-500" />
              <span>{resume.email || "hello@email.com"}</span>
            </div>
            <div className="flex items-center gap-1">
              <Globe className="w-4 h-4 text-gray-500" />
              <span>{resume.website || "www.example.com"}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4 text-gray-500" />
              <span>
                {(resume.city || "City") + ", " + (resume.country || "Country")}
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Body */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 py-8">
        {/* Left Sidebar */}
        <div className="space-y-6 md:col-span-1">
          {/* Skills */}
          {show.skills && (
            <section>
              <h2 className="text-lg font-semibold text-gray-800 border-b border-gray-300 pb-1">
                Skills
              </h2>
              <ul className="flex flex-wrap gap-2 mt-2 text-sm">
                {(resume.skills.length > 0 ? resume.skills : ["HTML", "CSS", "JavaScript"]).map(
                  (skill, i) => (
                    <li
                      key={i}
                      className="bg-gray-100 px-2 py-1 rounded-md text-gray-700"
                    >
                      {skill}
                    </li>
                  )
                )}
              </ul>
            </section>
          )}
          {/* Achievements */}
          {show.achievements && (
            <section>
              <h2 className="text-lg font-semibold text-gray-800 border-b border-gray-300 pb-1">
                Achievements
              </h2>
              <p className="text-sm text-gray-700 mt-2">
                {resume.achievement || "Winner of Hackathon 2022"}
              </p>
            </section>
          )}
        </div>
        {/* Main Content */}
        <div className="space-y-6 md:col-span-2">
          {/* Education */}
          {show.education && (
            <section>
              <h2 className="text-lg font-semibold text-gray-800 border-b border-gray-300 pb-1">
                Education
              </h2>
              <div className="mt-2">
                <p className="font-medium text-gray-900">
                  {resume.degree || "BSc in Computer Science"}
                </p>
                <p className="text-sm text-gray-700">
                  {resume.university || "Renowned University"}
                </p>
                <p className="text-xs text-gray-500">
                  {resume.eduYear || "2015 - 2020"}
                </p>
              </div>
            </section>
          )}
          {/* Experience */}
          {show.experience && (
            <section>
              <h2 className="text-lg font-semibold text-gray-800 border-b border-gray-300 pb-1">
                Experience
              </h2>
              {[1, 2].map((i) => {
                const expTitle =
                  resume[`exp${i}Title` as keyof Resume] as string;
                const expCompany =
                  resume[`exp${i}Company` as keyof Resume] as string;
                const expYear =
                  resume[`exp${i}Year` as keyof Resume] as string;
                const expDesc =
                  resume[`exp${i}Desc` as keyof Resume] as string[];
                return (
                  <div key={i} className="mt-3">
                    <p className="font-medium text-gray-900">
                      {expTitle || "Front-end Developer"} |{" "}
                      {expCompany || "Tech Company"}
                    </p>
                    <p className="text-xs text-gray-500">{expYear || "2021 - Present"}</p>
                    <ul className="list-disc list-inside text-sm text-gray-700 mt-1">
                      {(expDesc && expDesc.length > 0
                        ? expDesc
                        : ["Describe your role and achievements..."]
                      ).map((desc, idx) => (
                        <li key={idx}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </section>
          )}
          {/* Projects */}
          {show.projects && (
            <section>
              <h2 className="text-lg font-semibold text-gray-800 border-b border-gray-300 pb-1">
                Projects
              </h2>
              {[resume.project1, resume.project2].map((p, i) => (
                <div key={i} className="mt-2">
                  <p className="font-medium text-gray-900">{p.title || "Project Name"}</p>
                  <p className="text-sm text-gray-700">{p.desc || "Project description goes here..."}</p>
                </div>
              ))}
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

// --- Template 2 (Simple Centered) ---
function ResumeTemplate2({ resume, show }: Omit<Props, "template">) {
  return (
    <div className="max-w-3xl mx-auto bg-gray-50 shadow-md border border-gray-300 rounded-lg p-8 font-sans animate-fade-in">
      <div className="flex flex-col items-center">
        <img
          src={getPhotoUrl(resume.photo)}
          alt="Profile"
          className="w-24 h-24 rounded-full border-2 border-gray-300 mb-3"
        />
        <h1 className="text-2xl font-bold">{resume.firstName} {resume.lastName}</h1>
        <p className="text-gray-600">{resume.jobTitle}</p>
        <div className="flex gap-4 mt-2 text-sm text-gray-700">
          <span><Phone className="inline w-4 h-4" /> {resume.phone}</span>
          <span><Mail className="inline w-4 h-4" /> {resume.email}</span>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-6">
        {show.education && (
          <div>
            <h2 className="font-semibold text-gray-800 border-b pb-1">Education</h2>
            <p className="mt-2">{resume.degree} - {resume.university}</p>
            <p className="text-xs text-gray-500">{resume.eduYear}</p>
          </div>
        )}
        {show.skills && (
          <div>
            <h2 className="font-semibold text-gray-800 border-b pb-1">Skills</h2>
            <ul className="flex flex-wrap gap-2 mt-2 text-sm">
              {(resume.skills.length > 0 ? resume.skills : ["HTML", "CSS", "JavaScript"]).map(
                (skill, i) => (
                  <li key={i} className="bg-gray-200 px-2 py-1 rounded">{skill}</li>
                )
              )}
            </ul>
          </div>
        )}
      </div>
      {show.experience && (
        <div className="mt-6">
          <h2 className="font-semibold text-gray-800 border-b pb-1">Experience</h2>
          {[1, 2].map((i) => {
            const expTitle = resume[`exp${i}Title` as keyof Resume] as string;
            const expCompany = resume[`exp${i}Company` as keyof Resume] as string;
            const expYear = resume[`exp${i}Year` as keyof Resume] as string;
            const expDesc = resume[`exp${i}Desc` as keyof Resume] as string[];
            return (
              <div key={i} className="mt-2">
                <p className="font-medium">{expTitle} | {expCompany}</p>
                <p className="text-xs text-gray-500">{expYear}</p>
                <ul className="list-disc list-inside text-sm text-gray-700">
                  {(expDesc && expDesc.length > 0 ? expDesc : ["Describe your role..."]).map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      )}
      {show.projects && (
        <div className="mt-6">
          <h2 className="font-semibold text-gray-800 border-b pb-1">Projects</h2>
          {[resume.project1, resume.project2].map((p, i) => (
            <div key={i} className="mt-2">
              <p className="font-medium">{p.title}</p>
              <p className="text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      )}
      {show.achievements && (
        <div className="mt-6">
          <h2 className="font-semibold text-gray-800 border-b pb-1">Achievements</h2>
          <p className="text-sm mt-2">{resume.achievement}</p>
        </div>
      )}
    </div>
  );
}

// --- Template 3 (Sidebar Layout) ---
function ResumeTemplate3({ resume, show }: Omit<Props, "template">) {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-xl border border-gray-200 rounded-lg overflow-hidden font-sans flex animate-fade-in">
      {/* Sidebar */}
      <div className="w-1/3 bg-gray-900 text-white p-8 flex flex-col items-center">
        <img
          src={getPhotoUrl(resume.photo)}
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-white mb-4"
        />
        <h1 className="text-xl font-bold">{resume.firstName} {resume.lastName}</h1>
        <p className="text-gray-300">{resume.jobTitle}</p>
        <div className="mt-6 space-y-2 text-sm">
          <div className="flex items-center gap-2"><Phone className="w-4 h-4" /> {resume.phone}</div>
          <div className="flex items-center gap-2"><Mail className="w-4 h-4" /> {resume.email}</div>
          <div className="flex items-center gap-2"><Globe className="w-4 h-4" /> {resume.website}</div>
          <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {resume.city}, {resume.country}</div>
        </div>
        {show.skills && (
          <div className="mt-8 w-full">
            <h2 className="font-semibold border-b border-gray-700 pb-1">Skills</h2>
            <ul className="flex flex-wrap gap-2 mt-2 text-xs">
              {(resume.skills.length > 0 ? resume.skills : ["HTML", "CSS", "JavaScript"]).map(
                (skill, i) => (
                  <li key={i} className="bg-gray-800 px-2 py-1 rounded">{skill}</li>
                )
              )}
            </ul>
          </div>
        )}
        {show.achievements && (
          <div className="mt-8 w-full">
            <h2 className="font-semibold border-b border-gray-700 pb-1">Achievements</h2>
            <p className="text-xs mt-2">{resume.achievement}</p>
          </div>
        )}
      </div>
      {/* Main Content */}
      <div className="flex-1 p-10 space-y-8">
        {show.education && (
          <section>
            <h2 className="text-lg font-semibold text-gray-800 border-b border-gray-300 pb-1">Education</h2>
            <div className="mt-2">
              <p className="font-medium">{resume.degree}</p>
              <p className="text-sm">{resume.university}</p>
              <p className="text-xs text-gray-500">{resume.eduYear}</p>
            </div>
          </section>
        )}
        {show.experience && (
          <section>
            <h2 className="text-lg font-semibold text-gray-800 border-b border-gray-300 pb-1">Experience</h2>
            {[1, 2].map((i) => {
              const expTitle = resume[`exp${i}Title` as keyof Resume] as string;
              const expCompany = resume[`exp${i}Company` as keyof Resume] as string;
              const expYear = resume[`exp${i}Year` as keyof Resume] as string;
              const expDesc = resume[`exp${i}Desc` as keyof Resume] as string[];
              return (
                <div key={i} className="mt-3">
                  <p className="font-medium">{expTitle} | {expCompany}</p>
                  <p className="text-xs text-gray-500">{expYear}</p>
                  <ul className="list-disc list-inside text-sm text-gray-700 mt-1">
                    {(expDesc && expDesc.length > 0 ? expDesc : ["Describe your role..."]).map((desc, idx) => (
                      <li key={idx}>{desc}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </section>
        )}
        {show.projects && (
          <section>
            <h2 className="text-lg font-semibold text-gray-800 border-b border-gray-300 pb-1">Projects</h2>
            {[resume.project1, resume.project2].map((p, i) => (
              <div key={i} className="mt-2">
                <p className="font-medium">{p.title}</p>
                <p className="text-sm">{p.desc}</p>
              </div>
            ))}
          </section>
        )}
      </div>
    </div>
  );
}

// --- Main ResumePreview Switcher ---
export default function ResumePreview({ resume, show, template = 1 }: Props) {
  if (template === 2) return <ResumeTemplate2 resume={resume} show={show} />;
  if (template === 3) return <ResumeTemplate3 resume={resume} show={show} />;
  return <ResumeTemplate1 resume={resume} show={show} />;
}

// --- Animation CSS ---
// Add this to your global CSS (e.g., styles/globals.css):
// .animate-fade-in { animation: fadeIn 0.7s cubic-bezier(0.4,0,0.2,1); }
// @keyframes fadeIn { from { opacity: 0; transform: translateY(20px);} to { opacity: 1; transform: none;} }