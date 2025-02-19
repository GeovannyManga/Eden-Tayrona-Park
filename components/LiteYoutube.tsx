"use client";

import "lite-youtube-embed/src/lite-yt-embed.css";
import LiteYouTubeEmbed from "react-lite-youtube-embed";

interface LiteYouTubeProps {
  videoId: string;
  title: string;
}

const LiteYouTube = ({ videoId, title }: LiteYouTubeProps) => {
  return (
    <div className="w-full h-full">
      <LiteYouTubeEmbed
        id={videoId}
        title={title}
        noCookie={true} // Usa YouTube sin cookies para privacidad
        params="rel=0" // Evita que aparezcan videos sugeridos
        wrapperClass="w-full h-full rounded-lg shadow-lg border border-gray-200"
      />
    </div>
  );
};

export default LiteYouTube;
