export const metadata = {
  title: "MetaSense – Digital Marketing, Web Development & Design Services",
  description:
    "MetaSense helps businesses achieve digital excellence. Offering SEO, PPC, SMO, web development, UI/UX & graphic design with expert teams and 24/7 support.",
  keywords:
    "digital marketing agency, SMO services, web development, UI/UX design, graphic design, web design agency, online marketing India, digital marketing agency in India, digital marketing agency in Delhi, digital marketing company in Delhi NCR, SEO services in India, social media marketing in India, SEO company in Delhi, PPC services in Delhi, web design in India, web development in India, white label SEO",
  alternates: {
    canonical: "https://metasense.in/",
  },
  openGraph: {
    title: "MetaSense – Digital Marketing, Web Development & Design Services",
    description:
      "Transform your business with MetaSense. From web development to marketing campaigns, we deliver measurable results and digital growth.",
    url: "https://metasense.in/",
    siteName: "MetaSense",
    images: [
      {
        url: "https://metasense.in/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "MetaSense Digital Solutions",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MetaSense – Digital Marketing, Web Development & Design Services",
    description:
      "MetaSense drives digital growth with SEO, PPC, SMO, web development, UI/UX & graphic design. Trusted by 500+ businesses.",
    images: ["https://metasense.in/og-cover.jpg"],
    creator: "@MetaSense",
  },
};





import Banner from '@/components/Banner'
import Hero from '@/components/Hero'
import FeaturesSection from '@/components/FeaturesSection'
import IndustriesCarousel from '@/components/IndustriesCarousel'
import SolutionsSection from '@/components/SolutionsSection'
import SuccessStories from '@/components/SuccessStories'
import TrustedSection from '@/components/TrustedSection'
import WorkCarousel from '@/components/WorkCarousel'
import CTASection from '@/components/CTASection'
import CTAModal from '@/components/CTAmodal'
import React from 'react'

const page = () => {
  return (
    <>
      {/* Enhanced Hero Section */}
      <Hero/>
      
      {/* Features Section */}
      <FeaturesSection/>
      
      {/* Success Stories & Stats */}
      <SuccessStories/>
      
      {/* Our Work Portfolio */}
      <WorkCarousel/>
      
      {/* Trusted by Companies */}
      <TrustedSection/>
      
      {/* Industries We Serve */}
      <IndustriesCarousel/>
      
      {/* Our Solutions */}
      <SolutionsSection/>
      
      {/* Call to Action */}
      <CTASection/>
      
      {/* Modal Component */}
      <CTAModal/>
    </>
  )
}

export default page
