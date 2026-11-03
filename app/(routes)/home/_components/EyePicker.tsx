'use client';

import { useEffect, useState, type RefObject } from 'react';
import { EyeButton, EyeDock, EyeGroup, EyeIris, EyePupil } from '../styles';
import useHeaderHidden from '@/app/hooks/useHeaderHidden';
import useMediaQuery from '@/app/hooks/useMediaQuery';
import { useDictionary } from '@/app/_i18n/LocaleProvider';

export type Iris = 'red' | 'blue' | 'green';

// Red on top, green below left, blue below right, like the eyes in the logo.
const IRISES: Iris[] = ['red', 'green', 'blue'];

const EYE_SIZE = 46;

// The colors of the logo's eyes, solid and as tape or highlighter on the board.
export const IRIS_INK: Record<Iris, { solid: string; tape: string; mark: string }> = {
  red: { solid: '#ED1B24', tape: 'rgba(237, 27, 36, 0.8)', mark: 'rgba(237, 27, 36, 0.35)' },
  blue: { solid: '#00A2EA', tape: 'rgba(0, 162, 234, 0.8)', mark: 'rgba(0, 162, 234, 0.35)' },
  green: { solid: '#B5E51D', tape: 'rgba(181, 229, 29, 0.85)', mark: 'rgba(181, 229, 29, 0.6)' },
};

type Props = {
  iris: Iris | null;
  onPick: (iris: Iris) => void;
  // The hero logo: on screens without room beside it, the eyes wait until it
  // has scrolled away so they never sit on top of it.
  logo: RefObject<HTMLElement | null>;
};

// The three eyes, in a triangle in the top-left corner, below the header
// whenever the header is showing. Their legend lives in the hero text.
const EyePicker = ({ iris, onPick, logo }: Props) => {
  const t = useDictionary();
  const headerHidden = useHeaderHidden();
  // From here up, the margin beside the 1000px column fits the eyes.
  const roomBeside = useMediaQuery('(min-width: 1200px)');
  const [logoPassed, setLogoPassed] = useState(false);

  useEffect(() => {
    const target = logo.current;
    if (!target) return;
    const observer = new IntersectionObserver(([entry]) => {
      setLogoPassed(!entry.isIntersecting && entry.boundingClientRect.top < 0);
    });
    observer.observe(target);
    return () => observer.disconnect();
  }, [logo]);

  return (
    <EyeDock $docked={roomBeside || logoPassed} $belowHeader={!headerHidden}>
      <EyeGroup role="group" aria-label={t.lookout.eyesGroup} $size={EYE_SIZE}>
        {IRISES.map((id) => (
          <EyeButton
            key={id}
            type="button"
            $size={EYE_SIZE}
            aria-pressed={iris === id}
            aria-label={t.lookout.iris[id]}
            onClick={() => onPick(id)}
          >
            <EyeIris aria-hidden="true" $size={Math.round(EYE_SIZE * 0.62)} $color={IRIS_INK[id].solid} $chosen={iris === id} />
            <EyePupil aria-hidden="true" $size={Math.round(EYE_SIZE * 0.3)} />
          </EyeButton>
        ))}
      </EyeGroup>
    </EyeDock>
  );
};

export default EyePicker;
