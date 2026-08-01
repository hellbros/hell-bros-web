import styled from 'styled-components';
import {
  fontFamily, FontFamilyProps, fontSize, FontSizeProps,
  fontWeight, FontWeightProps, lineHeight, LineHeightProps,
  space, SpaceProps,
  textAlign, TextAlignProps,
} from 'styled-system';

type CustomProps = {
  fontFamily?: string;
  fontSize?: number | string;
  fontWeight?: string;
  lineHeight?: string;
  $styles?: string;
}

export type TextProps =
  CustomProps &
  FontFamilyProps &
  FontSizeProps &
  FontWeightProps &
  LineHeightProps &
  SpaceProps &
  TextAlignProps;

const Text = styled.p<TextProps>`
  ${fontFamily}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${space}
  ${textAlign}
`;

export default Text;
