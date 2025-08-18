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

function getPhotoUrl(photo: string | null) {
  if (!photo) return "/images/profile-placeholder.png";
  return photo;
}

export default function ResumePreview({ resume, show }: Props) {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg border border-gray-200 rounded-md overflow-hidden font-sans">
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
