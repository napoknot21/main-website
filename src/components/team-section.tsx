"use client"

import { useState } from "react"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { AnimatedSection } from "@/components/ui/animated-section"
import { MapPin } from "lucide-react"

import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"

type OfficeType = "luxembourg" | "monaco"

const teamMembers = [
    { id: "cyrille", image: "/images/team/cyrille.jpg", name: "Cyrille Nahabedian", office: "luxembourg" as OfficeType },
    { id: "alexandre", image: "/images/team/alexandre.jpg", name: "Alexandre Tramini", office: "luxembourg" as OfficeType },
    { id: "jonathan", image: "/images/team/jonathan.jpg", name: "Jonathan Niddam", office: "luxembourg" as OfficeType },
    { id: "julien", image: "/images/team/julien_baptiste.jpg", name: "Julien Baptiste", office: "monaco" as OfficeType },
    { id: "bak", image: "/images/team/bak.jpg", name: "Bak", office: "luxembourg" as OfficeType },
    { id: "jj", image: "/images/team/jean_jacques_martinenghi.jpg", name: "Jean-Jacques Martinenghi", office: "monaco" as OfficeType },
    { id: "ilyasse", image: "/images/team/ilyasse.jpg", name: "Ilyasse Tariq", office: "luxembourg" as OfficeType },
    { id: "filippo", image: "/images/team/pippo.jpg", name: "Filippo Perolo", office: "luxembourg" as OfficeType },
    { id: "tom", image: "/images/team/tom_chebeaux.jpeg", name: "Tom Chebeaux", office: "monaco" as OfficeType },
    { id: "pierre", image: "/images/team/pierre.jpg", name: "Pierre Leonard", office: "luxembourg" as OfficeType },
]

export default function TeamSection() {
    const { t } = useLanguage()
    const [filter, setFilter] = useState<"all" | OfficeType>("all")

    const filteredMembers = teamMembers.filter(member => filter === "all" || member.office === filter)

    return (
        <section className="py-20 md:py-28 bg-background relative overflow-hidden">
            <div className="mx-auto max-w-screen-2xl px-6 relative z-10">
                <div className="text-center mb-12 md:mb-16">
                    <div className="inline-block h-1 w-12 bg-blue-hour rounded-full mb-6" />
                    <h2 className="font-serif text-3xl md:text-4xl font-semibold text-deepblue text-balance">
                        {t("about.team.title")}
                    </h2>
                    <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                        {t("about.team.subtitle")}
                    </p>
                </div>

                {/* Filter UI */}
                <div className="flex justify-center mb-12">
                    <div className="inline-flex bg-muted/50 p-1.5 rounded-full border border-border/50 overflow-x-auto max-w-full">
                        <button
                            onClick={() => setFilter("all")}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                                filter === "all" ? "bg-background text-deepblue shadow-sm" : "text-muted-foreground hover:text-deepblue"
                            }`}
                        >
                            {t("about.team.filter.all")}
                        </button>
                        <button
                            onClick={() => setFilter("luxembourg")}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                                filter === "luxembourg" ? "bg-background text-deepblue shadow-sm" : "text-muted-foreground hover:text-deepblue"
                            }`}
                        >
                            {t("offices.luxembourg.name")}
                        </button>
                        <button
                            onClick={() => setFilter("monaco")}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                                filter === "monaco" ? "bg-background text-deepblue shadow-sm" : "text-muted-foreground hover:text-deepblue"
                            }`}
                        >
                            {t("offices.monaco.name")}
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {filteredMembers.map((member, index) => (
                        <AnimatedSection key={member.id} delay={index * 0.1}>
                            <Dialog>
                                <div className="group flex flex-col h-full bg-background border border-border rounded-xl overflow-hidden hover:border-blue-hour/40 hover:shadow-lg transition-all duration-500 relative">
                                    {/* Office Badge */}
                                    <div className="absolute top-4 right-4 z-10 bg-background/90 backdrop-blur-sm border border-border/50 px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                                        <MapPin className="w-3.5 h-3.5 text-blue-hour" />
                                        <span className="text-[10px] font-bold tracking-widest uppercase text-deepblue">
                                            {t(`offices.${member.office}.name`)}
                                        </span>
                                    </div>

                                    <div className="relative aspect-[3/4] w-full overflow-hidden bg-muted">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                            loading="lazy"
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                    <div className="p-6 flex flex-col flex-1 items-center text-center">
                                        <h3 className="text-xl font-semibold text-deepblue mb-1">
                                            {member.name}
                                        </h3>
                                        <p className="text-sm font-medium text-blue-hour mb-4 tracking-wide uppercase">
                                            {t(`about.team.${member.id}.role`)}
                                        </p>
                                        <p className="text-sm text-foreground/70 leading-relaxed font-light line-clamp-4 mb-4 flex-1 text-center">
                                            {t(`about.team.${member.id}.bio`)}
                                        </p>
                                        
                                        <DialogTrigger asChild>
                                            <button className="text-sm font-medium text-blue-hour hover:text-deepblue transition-colors self-center underline-offset-4 hover:underline">
                                                {t("about.team.read_more") || "Read More"}
                                            </button>
                                        </DialogTrigger>
                                    </div>
                                </div>

                                {/* Read More Modal */}
                                <DialogContent className="max-w-3xl p-0 overflow-hidden bg-background border-border rounded-2xl gap-0">
                                    <DialogTitle className="sr-only">
                                        {member.name} {t("about.team.profile")}
                                    </DialogTitle>
                                    <div className="flex flex-col md:flex-row max-h-[85vh]">
                                        {/* Left Side: Photo */}
                                        <div className="relative w-full md:w-2/5 aspect-square md:aspect-auto bg-muted shrink-0">
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                fill
                                                sizes="(max-width: 768px) 100vw, 40vw"
                                                loading="lazy"
                                                className="object-cover"
                                            />
                                        </div>
                                        
                                        {/* Right Side: Content */}
                                        <div className="w-full md:w-3/5 p-8 relative flex flex-col bg-background h-full">
                                            <div className="mb-6 pr-8">
                                                <h3 className="text-2xl font-serif font-semibold text-deepblue mb-1">
                                                    {member.name}
                                                </h3>
                                                <p className="text-sm font-medium text-blue-hour tracking-wide uppercase">
                                                    {t(`about.team.${member.id}.role`)}
                                                </p>
                                                <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-hour/10 text-blue-hour">
                                                    <MapPin className="w-3.5 h-3.5" />
                                                    <span className="text-[10px] font-bold tracking-widest uppercase">
                                                        {t(`offices.${member.office}.name`)}
                                                    </span>
                                                </div>
                                            </div>

                                            <ScrollArea className="flex-1 -mr-4 pr-6 pb-2">
                                                <div className="text-foreground/80 leading-relaxed font-light whitespace-pre-line text-[15px]">
                                                    {t(`about.team.${member.id}.bio`)}
                                                </div>
                                            </ScrollArea>
                                        </div>
                                    </div>
                                </DialogContent>
                            </Dialog>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    )
}
