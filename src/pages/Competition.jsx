import React, { useState } from "react";
import ImageSlider from "../components/imgSlider";
import CompetitionInfo from "../components/competitionInfo";

const backgroundImages = [
  {
    heading: "BAYAAN",
    title: "Rap Battle",
    description:
      "A rap battle competition. Showcase your  lyrical skills and battle other rappers on stage.",
    date: "19th October",
    venue: "B.R. Auditorum",
    cash: "10K",
    link: "https://unstop.com/p/bayaan-yuvaan-7th-edition-literature-and-film-council-dtu-yuvaan-1172677",
    url: "https://res.cloudinary.com/derpoctie/image/upload/q_auto,f_auto/v1728492170/Bayaan_thsefb.png",
  },
  {
    heading: "REALS OF IMAGINATION",
    title: "Short Film Challenge",
    description:
      "Showcase your filmmaking talent in our on campus short film challenge! Create a captivating film based on one of five themes and display your creativity and technical skills.",
    date: "18th to 20 October",
    venue: "Mini OAT",
    cash: "10K",
    link: "https://unstop.com/p/short-film-challenge-realms-of-imagination-yuvaan-7th-edition-literature-and-film-council-dtu-yuvaan-1172238",
    url: "https://res.cloudinary.com/derpoctie/image/upload/q_auto,f_auto/v1728492164/REALMS_OF_IMAGINATION_sd86v1.png",
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
    link: "https://unstop.com/p/basanti-pounce-mat-karna-literature-and-film-council-dtu-yuvaan-1172876",
    url: "https://res.cloudinary.com/derpoctie/image/upload/q_auto,f_auto/v1728492167/BASANTI_POUNCE_MAT_KARNA_bp7eeu.png",
  },
  {
    heading: "DELTECH DEBATATHON",
    title: "Debate Competition",
    description:
      "Showcase your debating skills and tackle real world challenges in the DelTech Debatathon",
    date: "18th-19th October",
    venue: "Academic Block",
    cash: "10K",
    link: "https://unstop.com/p/deltech-debatathon-yuvaan-7th-edition-literature-and-film-council-dtu-yuvaan-1174012",
    url: "https://res.cloudinary.com/derpoctie/image/upload/q_auto,f_auto/v1728492164/DELTECH_DEBATATHON_tm1kec.png",
  },
  {
    heading: "SOLO FOLK COMPETITION",
    title: "Dance Competition",
    description: "Showcase your mastery of solo Indian folk dance at our event",
    date: "19th October",
    venue: "B.R. Auditorum",
    cash: "10K",
    link: "https://unstop.com/p/solo-folk-competition-yuvaan-7th-edition-literature-and-film-council-dtu-yuvaan-1172664",
    url: "https://res.cloudinary.com/derpoctie/image/upload/q_auto,f_auto/v1728492166/SOLO_FOLK_COMPETITION_uj0eye.png",
  },
  {
    heading: "NAYAAB",
    title: "Fashion Show",
    description:
      "Showcase your designs inspired by India's fashion history. Blend tradition with innovation and tell a story through each look. ",
    date: "20th October",
    venue: "B.R. Auditorum",
    cash: "15K",
    link: "https://unstop.com/p/nayaab-yuvaan-7th-edition-literature-and-film-council-dtu-yuvaan-1172262",
    url: "https://res.cloudinary.com/derpoctie/image/upload/q_auto,f_auto/v1728492170/NAYAAB_dfawvl.png",
  },
  {
    heading: `DUET AND GROUP CLASSICAL COMPETITION`,
    short: true,
    title: "Debate Competition",
    description:
      "Flaunt your mastery of Indian Classical Dance at our event. Perform any of the eight recognized forms or their fusion, set to traditional musice only",
    date: "19th October",
    venue: "B.R. Auditorum",
    cash: "15K",
    link: "https://unstop.com/p/duet-and-group-classical-competition-yuvaan-7th-edition-literature-and-film-council-dtu-yuvaan-1172645",
    url: "https://res.cloudinary.com/derpoctie/image/upload/q_auto,f_auto/v1728492167/DUET_AND_GROUP_CLASSICAL_COMPETITION_qdwjcj.png",
  },
  {
    heading: "CLASH OF COMICS",
    title: "Standup",
    description:
      "Showcase your unique talent and style! Share stories, humor, or spoken word performances. Break the ordinary. embrace diversity, and let your creativity shine",
    date: "18th-20th October",
    venue: "B.R. Auditorum",
    cash: "10K",
    link: "https://unstop.com/p/clash-of-comics-standup-comedy-competition-yuvaan-7th-edition-literature-and-film-council-dtu-yuvaan-1172456",
    url: "https://res.cloudinary.com/derpoctie/image/upload/q_auto,f_auto/v1728492166/CLASH_OF_COMICS_ec20yz.png",
  },
  {
    heading: "CONSULTICA CHALLENGE",
    title: "Case Solving Competition",
    description:
      "Showcase your problem solving skills, analyze business cases and present their solutions.",
    date: "19th October",
    venue: "SPS 13",
    cash: "10K",
    link: "https://unstop.com/p/consultica-challenge-yuvaan-7th-edition-literature-and-film-council-dtu-yuvaan-1172484",
    url: "https://res.cloudinary.com/derpoctie/image/upload/q_auto,f_auto/v1728492170/consultica_challenge_fprf9y.png",
  },
  {
    heading: "LENS LEGEND",
    title: "Photostory Competition",
    description:
      'Showcase your photography skills by submitting 5-7 photos that capture the essence of the festival, focusing on the themes "Festival Moments" or "Colors of Celebration"',
    date: "18th-20th October",
    venue: "Mini OAT",
    cash: "10K",
    link: "https://unstop.com/p/lens-legends-photo-story-competition-yuvaan-7th-edition-literature-and-film-council-dtu-yuvaan-1171852",
    url: "https://res.cloudinary.com/derpoctie/image/upload/q_auto,f_auto/v1728492170/LENS_LEGENDS_fir7st.png",
  },
  {
    heading: "KAVITRISHNA",
    title: "Poetry (Hindi) Competition",
    description:
      'Showcase your poetic talent in our "The Muse Matter" competition. Write an original Hindi poem inspired by a randomly selected object and perform it on stage.',
    date: "20th October",
    venue: "Convocation Hall",
    cash: "10K",
    link: "https://unstop.com/p/kavatashhanae-literature-and-film-council-dtu-yuvaan-1172895",
    url: "https://res.cloudinary.com/derpoctie/image/upload/q_auto,f_auto/v1728492170/Kavitrishna_ztsglo.png",
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
    link: "https://unstop.com/p/the-muse-matter-yuvaan-7th-edition-literature-and-film-council-dtu-yuvaan-1172887",
    url: "https://res.cloudinary.com/derpoctie/image/upload/q_auto,f_auto/v1728492167/The_Muse_Matter_anam7x.png",
  },
  {
    heading: "JUST A MINUTE",
    title: "Master the minute",
    description:
      "Participate in JAM, a solo speaking competition at Sahitya. Speak on a given topic for one minute without hesitation, repetition, or deviation.",
    date: "18th October",
    venue: "Convocation Hall",
    cash: "4K",
    link: "https://unstop.com/p/just-a-minute-yuvaan-7th-edition-literature-and-film-council-dtu-yuvaan-1174443",
    url: "https://res.cloudinary.com/derpoctie/image/upload/q_auto,f_auto/v1728492163/JUST_A_MINUTE_kmqdor.png",
  },
  {
    heading: "BOOKMARK MAKING",
    title: "Bookmark Making",
    description:
      "Showcase your creativity in our art competition, design a bookmark (traditionally or digitally) based on a theme announced on the day.",
    date: "19th October",
    venue: "Convocation Hall",
    cash: "10K",
    link: "https://unstop.com/p/bookmark-making-yuvaan-7th-edition-literature-and-film-council-dtu-yuvaan-1174641",
    url: "https://res.cloudinary.com/derpoctie/image/upload/q_auto,f_auto/v1728492164/BOOKMARK_MAKING_fyyqfv.png",
  },
  {
    heading: "PHOTO EXHIBITION",
    title: "Exhibition",
    description:
      "Exhibit your captivating shots to celebrate the artistry of cinematography and photography.",
    date: "18th to 20th October",
    venue: "Mini OAT",
    cash: null,
    link: "https://forms.gle/8CZtSpHkhqfhhJAz8",
    url: "https://res.cloudinary.com/derpoctie/image/upload/q_auto,f_auto/v1728492170/PHOTO_EXHIBITION_pj2jmj.png",
  },
];

export default function Competition() {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <>
      <div className="h-full z-20 relative w-screen bg-[#2A0B44]">
        {/* Hero section */}
        <section className="flex flex-col justify-evenly sm:block relative h-[100vh] overflow-hidden">
          <img
            src={backgroundImages[activeImage].url}
            className="absolute z-0 h-[100vh] sm:h-[100vh] top-0 -left-[116vw] sm:left-0 min-w-[300vw] minw-w-[80rem] sm:min-w-[100vw]"
            alt=""
          />

          {/* Content info */}
          <CompetitionInfo
            backgroundImages={backgroundImages}
            activeImage={activeImage}
          />

          <div className="relative">
            <ImageSlider
              setActiveImage={setActiveImage}
              activeImage={activeImage}
            />
          </div>
        </section>

        <div className="bg-footer-gradient w-full h-1/4 absolute bottom-0 "></div>
      </div>
    </>
  );
}
