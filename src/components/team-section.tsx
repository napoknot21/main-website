"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { AnimatedSection } from "@/components/ui/animated-section"

const teamMembers = [
    { id: "alexandre", image: "/images/team/alexandre.jpg", name: "Alexandre" },
    { id: "bak", image: "/images/team/bak.jpg", name: "Bak" },
    { id: "cyrille", image: "/images/team/cyrille.jpg", name: "Cyrille" },
    { id: "ilyasse", image: "/images/team/ilyasse.jpg", name: "Ilyasse" },
    { id: "jonathan", image: "/images/team/jonathan.jpg", name: "Jonathan" },
    { id: "pierre", image: "/images/team/pierre.jpg", name: "Pierre" },
]

export default function TeamSection() {
    const { t } = useLanguage()

    return (
        <section className="py-20 md:py-28 bg-background">
            <div className="mx-auto max-w-screen-2xl px-6">
                <div className="text-center mb-16 md:mb-20">
                    <div className="inline-block h-1 w-12 bg-blue-hour rounded-full mb-6" />
                    <h2 className="font-serif text-3xl md:text-4xl font-semibold text-deepblue text-balance">
                        {t("about.team.title")}
                    </h2>
                    <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                        {t("about.team.subtitle")}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <AnimatedSection key={member.id} delay={index * 0.1}>
                            <div className="group flex flex-col bg-background border border-border rounded-xl overflow-hidden hover:border-blue-hour/40 hover:shadow-lg transition-all duration-500">
                                <div className="relative aspect-square w-full overflow-hidden bg-muted">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-deepblue mb-1">
                                        {member.name}
                                    </h3>
                                    <p className="text-sm font-medium text-blue-hour mb-4 tracking-wide uppercase">
                                        {t(`about.team.${member.id}.role`)}
                                    </p>
                                    <p className="text-sm text-foreground/70 leading-relaxed font-light">
                                        {t(`about.team.${member.id}.bio`)}
                                    </p>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    )
}
