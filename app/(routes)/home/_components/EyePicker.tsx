'use client';

import { useEffect, useRef, useState } from 'react';
import { EyeBar, EyeButton, EyeDock, EyeGroup, EyeIris, EyePupil } from '../styles';
import useHeaderHidden from '@/app/hooks/useHeaderHidden';
import { useDictionary } from '@/app/_i18n/LocaleProvider';

export type Iris = 'red' | 'blue' | 'green';

const IRISES: Iris[] = ['red', 'blue', 'green'];

// The colors of the logo's eyes, solid and as tape or highlighter on the board.
export const IRIS_INK: Record<Iris, { solid: string; tape: string; mark: string }> = {
  red: { solid: '#ED1B24', tape: 'rgba(237, 27, 36, 0.8)', mark: 'rgba(237, 27, 36, 0.35)' },
  blue: { solid: '#00A2EA', tape: 'rgba(0, 162, 234, 0.8)', mark: 'rgba(0, 162, 234, 0.35)' },
  green: { solid: '#B5E51D', tape: 'rgba(181, 229, 29, 0.85)', mark: 'rgba(181, 229, 29, 0.6)' },
};

type EyesProps = {
  iris: Iris | null;
  onPick: (iris: Iris) => void;
  size: number;
  triangle?: boolean;
};

const Eyes = ({ iris, onPick, size, triangle }: EyesProps) => {
  const t = useDictionary();
  return (
    <EyeGroup role="group" aria-label={t.lookout.eyesGroup} $size={size} $triangle={triangle}>
      {IRISES.map((id) => (
        <EyeButton
          key={id}
          type="button"
          $size={size}
          aria-pressed={iris === id}
          aria-label={t.lookout.iris[id]}
          onClick={() => onPick(id)}
        >
          <EyeIris aria-hidden="true" $size={Math.round(size * 0.62)} $color={IRIS_INK[id].solid} $chosen={iris === id} />
          <EyePupil aria-hidden="true" $size={Math.round(size * 0.3)} />
        </EyeButton>
      ))}
    </EyeGroup>
  );
};

type Props = {
  iris: Iris | null;
  onPick: (iris: Iris) => void;
};

// The eyes with their legend sit in the page under the header. Once that bar
// scrolls off the top, the same eyes wait in the top-left corner, in a
// triangle, with the legend only on hover or focus.
const EyePicker = ({ iris, onPick }: Props) => {
  const t = useDictionary();
  const barRef = useRef<HTMLDivElement>(null);
  const [docked, setDocked] = useState(false);
  const headerHidden = useHeaderHidden();

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    const observer = new IntersectionObserver(([entry]) => {
      setDocked(!entry.isIntersecting && entry.boundingClientRect.top < 0);
    });
    observer.observe(bar);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <EyeBar ref={barRef}>
        <div className="inner">
          <Eyes iris={iris} onPick={onPick} size={52} />
          <p>{t.lookout.eyesHint}</p>
        </div>
      </EyeBar>
      <EyeDock $docked={docked} $belowHeader={!headerHidden}>
        <Eyes iris={iris} onPick={onPick} size={46} triangle />
        <p className="tip">{t.lookout.eyesHint}</p>
      </EyeDock>
    </>
  );
};

export default EyePicker;
