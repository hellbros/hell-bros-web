'use client';

import { EyeButton, EyeDock, EyeGroup, EyeIris, EyePupil } from '../styles';
import { useDictionary } from '@/app/_i18n/LocaleProvider';

export type Iris = 'red' | 'blue' | 'green';

// Red on top, green below left, blue below right, like the eyes in the logo.
const IRISES: Iris[] = ['red', 'green', 'blue'];

const EYE_SIZE = 46;

// The colors of the logo's eyes, solid and as highlighter on the page.
export const IRIS_INK: Record<Iris, { solid: string; mark: string }> = {
  red: { solid: '#ED1B24', mark: 'rgba(237, 27, 36, 0.35)' },
  blue: { solid: '#00A2EA', mark: 'rgba(0, 162, 234, 0.35)' },
  green: { solid: '#B5E51D', mark: 'rgba(181, 229, 29, 0.6)' },
};

type Props = {
  iris: Iris | null;
  onPick: (iris: Iris) => void;
};

// The three eyes, always on screen: in a triangle in the top-left corner
// under the header, or in a row at the bottom center on phones.
const EyePicker = ({ iris, onPick }: Props) => {
  const t = useDictionary();

  return (
    <EyeDock>
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
