"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function ResumeBuilder() {
    // Form state
    const [firstName, setFirstName] = useState("First Name");
    const [lastName, setLastName] = useState("last Name");
    const [city, setCity] = useState("City");
    const [postalCode, setPostalCode] = useState("Postal Code");
    const [country, setCountry] = useState("Country");
    const [phone, setPhone] = useState("Phone");
    const [email, setEmail] = useState("Email");

    return (
        <div className="bg-gray-50">
            <div className="min-h-screen container mx-auto  flex flex-col md:flex-row">
                {/* Left Side: Form */}
                <div className="md:w-1/2 p-8">
                    <h1 className="text-2xl font-bold mb-6">How do you want recruiters to contact you?</h1>
                    <p className="mb-6 text-gray-600">
                        Include your full name and at least email or phone number
                    </p>

                    <div className="space-y-4">
                        <div className="flex gap-4">
                            <div className="flex-1">
                                <label className="block text-sm font-semibold mb-1">First Name</label>
                                <input
                                    type="text"
                                    // value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    placeholder="Enter your first name"
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

                        <div className="flex gap-4">
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

                        <div className="flex gap-4">
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

                        <div>
                            <label className="block text-sm font-semibold mb-1">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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
                <div className="md:w-1/2 bg-white p-8 border-l border-gray-200">
                    <div className="max-w-md mx-auto">
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="w-20 h-20 bg-gray-200 rounded overflow-hidden">
                                {/* Placeholder for photo */}
                                <img
                                    src="/images/profile-placeholder.png"
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold">{firstName} {lastName}</h2>
                                <p className="text-gray-500">{city}, {postalCode}, {country}</p>
                                <p className="text-gray-500">{phone}</p>
                                <p className="text-gray-500">{email}</p>
                            </div>
                        </div>

                        {/* Sections */}
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-sm text-gray-500 uppercase tracking-wide">Experience</h3>
                                <div className="border-b border-gray-200 h-8"></div>
                            </div>

                            <div>
                                <h3 className="text-sm text-gray-500 uppercase tracking-wide">Education</h3>
                                <div className="border-b border-gray-200 h-8"></div>
                            </div>

                            <div>
                                <h3 className="text-sm text-gray-500 uppercase tracking-wide">Skills</h3>
                                <div className="border-b border-gray-200 h-8"></div>
                            </div>
                        </div>

                        <p className="text-xs text-gray-400 mt-6 text-center">
                            You can edit the content, use other fonts, adjust format, add sections, and change placement later on.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
