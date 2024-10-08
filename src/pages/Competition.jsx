import React, { useState } from "react";

import SocialMedia from "../components/socialMedia";
import ContentInfo from "../components/contentInfo";
import ImageSlider from "../components/imgSlider";

const backgroundImages = [
  {
    heading: "BAYAAN",
    title: "Rap Battle",
    description:
      "A rap battle competition. Showcase your  lyrical skills and battle other rappers on stage.",
    date: "19th October",
    venue: "B.R. Auditorum",
    cash: "10K",
    url: "https://res.cloudinary.com/derpoctie/image/upload/q_auto,f_auto/v1728194084/Competitions-tiny_oxrug2.png",
  },
  {
    heading: "REALS OF IMAGINATION",
    title: "Short Film Challenge",
    description:
      "Showcase your filmmaking talent in our on campus short film challenge! Create a captivating film based on one of five themes and display your creativity and technical skills.",
    date: "18th to 20 October",
    venue: "Mini OAT",
    cash: "10K",
    url: "https://res.cloudinary.com/derpoctie/image/upload/q_auto,f_auto/v1728388935/2nd-full-bg_q3k2jm.png",
  },
  {
    heading: "BASANTI POUNCE MAT KARNA",
    short: true,
    title: "Mela Quiz",
    description:
      "Show off what you know about Bollywood, Media, Entertainment, Literature, and Arts",
    date: "18th October",
    venue: "SPS 13",
    cash: "10K",
    url: "https://res.cloudinary.com/derpoctie/image/upload/q_auto,f_auto/v1728388885/3rd-full-bg_xdwiwv.png",
  },
  {
    heading: "DELTECH DEBATATHON",
    title: "Debate Competition",
    description:
      "Showcase your debating skills and tackle real world challenges in the DelTech Debatathon",
    date: "18th-19th October",
    venue: "Academic Block",
    cash: "10K",
    url: "https://res.cloudinary.com/derpoctie/image/upload/q_auto,f_auto/v1728388885/4th-full-bg_lixvhb.png",
  },
  {
    heading: "SOLO FOLK COMPETITION",
    title: "Dance Competition",
    description: "Showcase your mastery of solo Indian folk dance at our event",
    date: "19th October",
    venue: "B.R. Auditorum",
    cash: "10K",
    url: "https://res.cloudinary.com/derpoctie/image/upload/q_auto,f_auto/v1728388887/5th-full-bg_dp1xwu.png",
  },
  {
    heading: "NAYAAB",
    title: "Fashion Show",
    description:
      "Showcase your designs inspired by India's fashion history. Blend tradition with innovation and tell a story through each look. ",
    date: "20th October",
    venue: "B.R. Auditorum",
    cash: "15K",
    url: "https://res.cloudinary.com/derpoctie/image/upload/q_auto,f_auto/v1728388887/6th-full-bg_ewf8ge.png",
  },
  {
    heading: `DUET AND GROUP CLASSICAL COMPETITION`,
    short: true,
    title: "Debate Competition",
    description:
      "Flaunt your mastery of Indian Classical Dance at our event. Perform any of the eight recognized forms or their fusion, set to traditional musice only",
    date: "19th October",
    venue: "B.R. Auditorum",
    cash: "10K",
    url: "https://res.cloudinary.com/derpoctie/image/upload/q_auto,f_auto/v1728388887/7th-full-bg_mxhvfd.png",
  },
  {
    heading: "CLASH OF COMICS",
    title: "Standup",
    description:
      "Showcase your unique talent and style! Share stories, humor, or spoken word performances. Break the ordinary. embrace diversity, and let your creativity shine",
    date: "18th-20th October",
    venue: "B.R. Auditorum",
    cash: "10K",
    url: "https://res.cloudinary.com/derpoctie/image/upload/q_auto,f_auto/v1728388888/9th-full-bg_cpduoc.png",
  },
  {
    heading: "CONSULTICA CHALLENGE",
    title: "Case Solving Competition",
    description:
      "Showcase your problem solving skills, analyze business cases and present their solutions.",
    date: "19th October",
    venue: "SPS 13",
    cash: "10K",
    url: "https://res.cloudinary.com/derpoctie/image/upload/q_auto,f_auto/v1728388887/10-full-bg_gwhipl.png",
  },
  {
    heading: "LENS LEGEND",
    title: "Photostory Competition",
    description:
      'Showcase your photography skills by submitting 5-7 photos that capture the essence of the festival, focusing on the themes "Festival Moments" or "Colors of Celebration"',
    date: "18th-20th October",
    venue: "Mini OAT",
    cash: "10K",
    url: "https://res.cloudinary.com/derpoctie/image/upload/q_auto,f_auto/v1728388887/11-full-bg_gi3no0.png",
  },
  {
    heading: "KAVITRISHNA",
    title: "Poetry (Hindi) Competition",
    description:
      'Showcase your poetic talent in our "The Muse Matter" competition. Write an original Hindi poem inspired by a randomly selected object and perform it on stage.',
    date: "20th October",
    venue: "Convocation Hall",
    cash: "10K",
    url: "https://res.cloudinary.com/derpoctie/image/upload/q_auto,f_auto/v1728388888/12-full-bg_uct7qc.png",
  },
  // image repeated here
  {
    heading: "THE MUSE MATTER",
    title: "Poetry (English) Competition",
    description:
      'Showcase your poetic talent in our "The Muse Matter" competition. Write an original poem inspired by a randomly selected object and perform it on stage.',
    date: "20th October",
    venue: "Convocation Hall",
    cash: "10K",
    url: "https://res.cloudinary.com/derpoctie/image/upload/q_auto,f_auto/v1728388888/12-full-bg_uct7qc.png",
  },
  {
    heading: "JUST A MINUTE",
    title: "Master the minute",
    description:
      "Participate in JAM, a solo speaking competition at Sahitya. Speak on a given topic for one minute without hesitation, repetition, or deviation.",
    date: "18th October",
    venue: "Convocation Hall",
    cash: "4K",
    url: "https://res.cloudinary.com/derpoctie/image/upload/q_auto,f_auto/v1728388889/13-full-bg_k8dlkr.png",
  },
  {
    heading: "BOOKMARK MAKING",
    title: "Bookmark Making",
    description:
      "Showcase your creativity in our art competition, design a bookmark (traditionally or digitally) based on a theme announced on the day.",
    date: "19th October",
    venue: "Convocation Hall",
    cash: "10K",
    url: "https://res.cloudinary.com/derpoctie/image/upload/q_auto,f_auto/v1728388889/14-full-bg_cnvhzs.png",
  },
  {
    heading: "PHOTO EXHIBITION",
    title: "Exhibition",
    description:
      "Exhibit your captivating shots to celebrate the artistry of cinematography and photography.",
    date: "18th to 20th October",
    venue: "Mini OAT",
    cash: null,
    url: "https://res.cloudinary.com/derpoctie/image/upload/q_auto,f_auto/v1728388897/15-full-bg_nxwrmm.png",
  },
];

const first_heading =
  "https://res.cloudinary.com/derpoctie/image/upload/v1728212566/first-heading_ud8yn8.png";

export default function Competition() {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <>
      <div className="h-full w-screen bg-[#2A0B44]">
        {/* Hero section */}
        <section className="flex flex-col justify-evenly sm:block relative h-[100vh] overflow-hidden">
          <img
            src={backgroundImages[activeImage].url}
            className="absolute z-0 h-[100vh] top-0 opacity-[100%] w-[100vw]"
            alt=""
          />

          {/* Content info */}
          <ContentInfo
            backgroundImages={backgroundImages}
            activeImage={activeImage}
          />

          <ImageSlider
            setActiveImage={setActiveImage}
            activeImage={activeImage}
          />
        </section>

        <div className="absolute bottom-10 left-16">
          <SocialMedia />
        </div>
      </div>
    </>
  );
}
