'use client';

import { useState } from 'react';
import { TrailerFrame } from '../styles';

type Props = {
  videoId?: string;
  title?: string;
};

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const TrailerEmbed = ({ videoId, title = 'Demo trailer' }: Props) => {
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
        aria-label={`Play ${title}`}
      >
        {videoId ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt={title}
            onError={(e) => {
              e.currentTarget.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
            }}
          />
        ) : null}
        <span className="play" aria-hidden="true">
          <PlayIcon />
        </span>
        <span className="label">{title}</span>
      </button>
    </TrailerFrame>
  );
};

export default TrailerEmbed;
