'use client';

import { useState } from 'react';
import Image, { type StaticImageData } from 'next/image';
import { TrailerFrame } from '../styles';
import { useDictionary } from '@/app/_i18n/LocaleProvider';

type Props = {
  videoId?: string;
  // The video's first frame, served by the site itself: YouTube only hears
  // about the visitor once they press play.
  poster: StaticImageData;
  title?: string;
};

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const TrailerEmbed = ({ videoId, poster, title: titleProp }: Props) => {
  const t = useDictionary();
  const title = titleProp ?? t.lookout.trailerTitle;
  const [playing, setPlaying] = useState(false);

  if (playing && videoId) {
    return (
      <TrailerFrame>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </TrailerFrame>
    );
  }

  return (
    <TrailerFrame>
      <button
        type="button"
        className="facade"
        onClick={() => videoId && setPlaying(true)}
        aria-label={t.lookout.play(title)}
      >
        <Image src={poster} alt={title} sizes="(max-width: 1000px) 100vw, 1000px" />
        <span className="play" aria-hidden="true">
          <PlayIcon />
        </span>
      </button>
    </TrailerFrame>
  );
};

export default TrailerEmbed;
