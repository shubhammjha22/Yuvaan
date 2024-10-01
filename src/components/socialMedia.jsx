const instagramlogo =
  "https://res.cloudinary.com/derpoctie/image/upload/v1727753745/instagram-logo_wskuia.png";
const facebooklogo =
  "https://res.cloudinary.com/derpoctie/image/upload/v1727753743/facebook-logo_lpmqxq.png";
const youtubelogo =
  "https://res.cloudinary.com/derpoctie/image/upload/v1727753758/youtube-logo_rhnsua.png";
const linkedinlogo =
  "https://res.cloudinary.com/derpoctie/image/upload/v1727753748/linkedin-logo_w7jonr.png";

function SocialMedia() {
  return (
    <div className="flex space-x-8">
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="z-30"
      >
        <img src={instagramlogo} alt="Instagram" className="w-8 h-8" />
      </a>
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="z-30"
      >
        <img src={facebooklogo} alt="Facebook" className="w-8 h-8" />
      </a>
      <a
        href="https://www.youtube.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="z-30"
      >
        <img src={youtubelogo} alt="YouTube" className="w-8 h-8" />
      </a>
      <a
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="z-30"
      >
        <img src={linkedinlogo} alt="LinkedIn" className="w-8 h-8" />
      </a>
    </div>
  );
}

export default SocialMedia;
