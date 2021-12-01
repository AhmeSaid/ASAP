import * as React from 'react';
import Svg, {
  Path,
  G,
  Defs,
  ClipPath,
  Pattern,
  Use,
  Image,
  Mask,
  Rect,
  Circle,
} from 'react-native-svg';
import { INACTIV, LIGHT, BLACK, PRIMARY, WHITE, MAIN_TEXT, GREEN, HEADER, SECONDARY } from '../styles/colors';

export const BlackBack = (props) => {
  return (
    <Svg width={8} height={14} viewBox="0 0 8 14" fill="none" {...props}>
      <Path
        d="M2.414 7l5.293-5.293A1 1 0 006.293.293l-6 6a1 1 0 000 1.414l6 6a1 1 0 001.414-1.414L2.414 7z"
        fill={MAIN_TEXT}
      />
    </Svg>
  );
};

export const RightSignIcon = (props) => {
  return (
    <Svg width={12} height={10} viewBox="0 0 12 10" fill="none" {...props}>
      <Path
        d="M2.254 4.679A1 1 0 00.746 5.992L3.36 8.997a1 1 0 001.509 0l6.386-7.34A1 1 0 009.745.343l-5.63 6.473-1.86-2.138z"
        fill={GREEN}
      />
    </Svg>
  );
};

export const SearchIcon = (props) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.5 19a8.5 8.5 0 116.676-3.238l4.531 4.53a1 1 0 01-1.414 1.415l-4.531-4.531A8.463 8.463 0 0110.5 19zm4.66-3.968a1.01 1.01 0 00-.128.128 6.5 6.5 0 11.128-.128z"
        fill={SECONDARY}
      />
      <Mask
        id="prefix__a"
        maskUnits="userSpaceOnUse"
        x={2}
        y={2}
        width={20}
        height={20}>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.5 19a8.5 8.5 0 116.676-3.238l4.531 4.53a1 1 0 01-1.414 1.415l-4.531-4.531A8.463 8.463 0 0110.5 19zm4.66-3.968a1.01 1.01 0 00-.128.128 6.5 6.5 0 11.128-.128z"
          fill="#fff"
        />
      </Mask>
      <G mask="url(#prefix__a)">
        <Path fill={SECONDARY} d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
};

export const ArrowList = (props) => {
  return (
    <Svg
      fill="none"
      height={24}
      width={24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        clipRule="evenodd"
        d="M12.707 15.707a1 1 0 01-1.414 0l-6-6a1 1 0 011.414-1.414L12 13.586l5.293-5.293a1 1 0 111.414 1.414l-6 6z"
        fill={SECONDARY}
        fillRule="evenodd"
      />
    </Svg>
  );
};

export const EditIcon = (props) => {
  return (
    <Svg width={15} height={15} viewBox="0 0 15 15" fill="none" {...props}>
      <Path
        opacity={0.01}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0v15h15V0H0z"
        fill={MAIN_TEXT}
      />
      <Path
        clipRule="evenodd"
        d="M10.362 2l1.928 1.877L5.928 9.74H4V7.865L10.362 2z"
        stroke={MAIN_TEXT}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4 12.334h8.75"
        stroke={MAIN_TEXT}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const ProfileIcon = (props) => {
  return (
    <Svg width={18} height={20} viewBox="0 0 18 20" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 10A5 5 0 119 0a5 5 0 010 10zm9 9v-2a5 5 0 00-5-5H5a5 5 0 00-5 5v2a1 1 0 102 0v-2a3 3 0 013-3h8a3 3 0 013 3v2a1 1 0 102 0zM12 5a3 3 0 11-6 0 3 3 0 016 0z"
        fill={MAIN_TEXT}
      />
    </Svg>
  );
};

export const GreanArrow = (props) => {
  return (
    <Svg style={{ transform: [{ rotateZ: '180deg' }] }} width={8} height={14} viewBox="0 0 8 14" fill="none" {...props}>
      <Path
        d="M2.414 7l5.293-5.293A1 1 0 006.293.293l-6 6a1 1 0 000 1.414l6 6a1 1 0 001.414-1.414L2.414 7z"
        fill={GREEN}
      />
    </Svg>
  );
};