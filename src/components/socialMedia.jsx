import instagramlogo from "/assets/instagram-logo.png";
import facebooklogo from "/assets/facebook-logo.png";
import youtubelogo from "/assets/youtube-logo.png";
import linkedinlogo from "/assets/linkedin-logo.png";

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
