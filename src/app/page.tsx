"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Layout, Download } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";


export default function Home() {
    const router = useRouter();
    return (
        <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex flex-col">
            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center flex-1 text-center px-6 py-20">
                <motion.h1
                    className="text-5xl font-extrabold text-gray-800 leading-tight"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Build a <span className="text-blue-600">Professional Resume</span> in Minutes
                </motion.h1>

                <motion.p
                    className="mt-6 text-lg text-gray-600 max-w-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.3 }}
                >
                    Stand out from the crowd with our easy-to-use, ATS-friendly resume builder.
                    Choose a template, add your details, and download your polished resume instantly.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                >
                    <Button
                        size="lg"
                        className="mt-8 px-8 py-4 text-lg rounded-2xl shadow-lg hover:scale-105 transition-transform cursor-pointer"
                        onClick={() => router.push("/builder")}
                    >
                        🚀 Build My Resume
                    </Button>
                </motion.div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-white border-t border-gray-200">
                <div className="max-w-6xl mx-auto px-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                        {
                            icon: Layout,
                            title: "Modern Templates",
                            desc: "Pick from a variety of sleek, professional templates tailored for any industry."
                        },
                        {
                            icon: FileText,
                            title: "Easy to Customize",
                            desc: "Guided steps make it simple to add your personal details, skills, and experience."
                        },
                        {
                            icon: Download,
                            title: "Instant Download",
                            desc: "Export your resume as a high-quality PDF and be ready to apply right away."
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 + i * 0.2 }}
                        >
                            <Card className="shadow-md hover:shadow-xl transition-all">
                                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                                    <item.icon className="w-10 h-10 text-blue-600" />
                                    <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                                    <p className="text-gray-600 text-sm">{item.desc}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </section>
        </main>
    );
}
