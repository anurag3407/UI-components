"use client";
import React, { useState } from "react";
import { GridBackground } from "@/components/ui/grid-background";
import { LampContainer } from "@/components/ui/lamp";
import { MultiStepLoader } from "@/components/ui/multi-step-loader";
import { Boxes } from "@/components/ui/background-boxes";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { AnimatedTooltip } from "@/components/ui/tooltip-card";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { FileUpload } from "@/components/ui/file-upload";
import { Timeline } from "@/components/ui/timeline";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Home() {
  const [loading, setLoading] = useState(false);

  const loadingStates = [
    { text: "Buying groceries" },
    { text: "Travelling to space" },
    { text: "Meeting aliens" },
    { text: "Taking a selfie" },
    { text: "Returning home" },
    { text: "Posting on instagram" },
    { text: "Sleeping" },
  ];

  const people = [
    {
      id: 1,
      name: "John Doe",
      designation: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
      id: 2,
      name: "Robert Johnson",
      designation: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      name: "Jane Smith",
      designation: "Data Scientist",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
  ];

  const content = [
    {
      title: "Collaborative Editing",
      description:
        "Work together in real-time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Collaborative Editing
        </div>
      ),
    },
    {
      title: "Real time changes",
      description:
        "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          Version control
        </div>
      ),
    },
  ];

  const timelineData = [
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Started working on the project
          </p>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Launched the beta version
          </p>
        </div>
      ),
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black text-white w-full">
      {/* Grid Background */}
      <section className="w-full relative">
        <GridBackground className="h-[40rem]">
          <div className="absolute z-50 inset-0 flex items-center justify-center font-bold text-white text-4xl pointer-events-none">
            Welcome to Aceternity UI
          </div>
        </GridBackground>
      </section>

      {/* Lamp Effect */}
      <section className="w-full">
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
          >
            Build lamps <br /> the right way
          </motion.h1>
        </LampContainer>
      </section>

      {/* Hero Highlight */}
      <section className="w-full">
        <HeroHighlight>
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
          >
            With insomnia, nothing&apos;s real. Everything is far away. Everything
            is a{" "}
            <Highlight className="text-black dark:text-white">
              copy, of a copy, of a copy.
            </Highlight>
          </motion.h1>
        </HeroHighlight>
      </section>

      {/* Text Hover Effect */}
      <section className="w-full h-[20rem] flex items-center justify-center">
        <TextHoverEffect text="HOVER ME" />
      </section>

      {/* Background Boxes */}
      <section className="w-full h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes />
        <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
          Boxes Background
        </h1>
        <p className="text-center mt-2 text-neutral-300 relative z-20">
          Touch the boxes
        </p>
      </section>

      {/* Hover Border Gradient */}
      <section className="w-full flex items-center justify-center py-20">
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
        >
          <span>Aceternity UI</span>
        </HoverBorderGradient>
      </section>

      {/* Tooltip Card */}
      <section className="w-full flex items-center justify-center py-20">
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={people} />
        </div>
      </section>

      {/* Sticky Scroll Reveal */}
      <section className="w-full p-10">
        <StickyScroll content={content} />
      </section>

      {/* File Upload */}
      <section className="w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
        <FileUpload onChange={(files) => console.log(files)} />
      </section>

      {/* Timeline */}
      <section className="w-full">
        <Timeline data={timelineData} />
      </section>

      {/* Multi Step Loader */}
      <section className="w-full flex flex-col items-center justify-center min-h-[40vh]">
        <MultiStepLoader
          loadingStates={loadingStates}
          loading={loading}
          duration={2000}
        />
        <button
          onClick={() => setLoading(true)}
          className="bg-[#39C3EF] hover:bg-[#39C3EF]/90 text-black mx-auto text-sm md:text-base transition font-medium duration-200 h-10 rounded-lg px-8 flex items-center justify-center"
          style={{
            boxShadow:
              "0px -1px 0px 0px #ffffff40 inset, 0px 1px 0px 0px #ffffff40 inset",
          }}
        >
          Show Loader
        </button>

        {loading && (
          <button
            className="fixed top-4 right-4 text-black dark:text-white z-[120]"
            onClick={() => setLoading(false)}
          >
            <span className="bg-white text-black px-2 py-1 rounded-sm">
              Close
            </span>
          </button>
        )}
      </section>
    </main>
  );
}
