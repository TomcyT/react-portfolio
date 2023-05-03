import Head from "next/head";

import HeroSection from "@/components/heroSection";
import UIUXSection from "@/components/uiux";
import ContactSection from "@/components/contact";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { scroller } from "react-scroll";
import Gfx from "@/components/gfx";
import DevProjects from "@/components/dev";
import Blog from "@/components/Blog";

export default function Home() {
  const { asPath } = useRouter();
  useEffect(() => {
    if (asPath.includes("scrollToContact")) {
      scroller.scrollTo("contact", {
        delay: 150,
        duration: 1500,
        smooth: "easeInOutQuint",
      });
    }
  });
  return (
    <>
      <Head>
        <title>Tomcy Thomas - React Developer & User Experience Designer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/tomc.png" />
      </Head>
      <main>
        <HeroSection />
        <UIUXSection />
        <DevProjects />
        <Blog />
        <ContactSection />
      </main>
    </>
  );
}