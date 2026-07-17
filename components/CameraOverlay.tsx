import React from "react";
import { StyleSheet } from "react-native";
import Svg, { Defs, Mask, Path, Rect } from "react-native-svg";
import { getFrameRect } from "../utils/Framegeometry";

const CORNER_RADIUS = 24;
const CORNER_LENGTH = 42;
const CORNER_STROKE = 5;
const CORNER_COLOR = "#18C776";

type Props = {
  // Taille RÉELLE du conteneur (mesurée via onLayout dans camera.tsx),
  // pour que le cadre dessiné ici soit toujours identique à celui
  // utilisé pour rogner la photo.
  containerWidth: number;
  containerHeight: number;
};

export default function CameraOverlay({
  containerWidth,
  containerHeight,
}: Props) {
  if (containerWidth === 0 || containerHeight === 0) return null;

  const {
    x: FRAME_X,
    y: FRAME_Y,
    width: FRAME_WIDTH,
    height: FRAME_HEIGHT,
  } = getFrameRect(containerWidth, containerHeight);

  const r = CORNER_RADIUS;
  const l = CORNER_LENGTH;

  const topLeft = `
    M ${FRAME_X},${FRAME_Y + l}
    V ${FRAME_Y + r}
    Q ${FRAME_X},${FRAME_Y} ${FRAME_X + r},${FRAME_Y}
    H ${FRAME_X + l}
  `;

  const topRight = `
    M ${FRAME_X + FRAME_WIDTH - l},${FRAME_Y}
    H ${FRAME_X + FRAME_WIDTH - r}
    Q ${FRAME_X + FRAME_WIDTH},${FRAME_Y} ${FRAME_X + FRAME_WIDTH},${FRAME_Y + r}
    V ${FRAME_Y + l}
  `;

  const bottomLeft = `
    M ${FRAME_X},${FRAME_Y + FRAME_HEIGHT - l}
    V ${FRAME_Y + FRAME_HEIGHT - r}
    Q ${FRAME_X},${FRAME_Y + FRAME_HEIGHT} ${FRAME_X + r},${FRAME_Y + FRAME_HEIGHT}
    H ${FRAME_X + l}
  `;

  const bottomRight = `
    M ${FRAME_X + FRAME_WIDTH - l},${FRAME_Y + FRAME_HEIGHT}
    H ${FRAME_X + FRAME_WIDTH - r}
    Q ${FRAME_X + FRAME_WIDTH},${FRAME_Y + FRAME_HEIGHT} ${FRAME_X + FRAME_WIDTH},${FRAME_Y + FRAME_HEIGHT - r}
    V ${FRAME_Y + FRAME_HEIGHT - l}
  `;

  return (
    <Svg
      width="100%"
      height="100%"
      viewBox={`0 0 ${containerWidth} ${containerHeight}`}
      style={StyleSheet.absoluteFillObject}
      pointerEvents="none"
    >
      <Defs>
        <Mask id="overlayMask">
          <Rect
            x="0"
            y="0"
            width={containerWidth}
            height={containerHeight}
            fill="white"
          />
          <Rect
            x={FRAME_X}
            y={FRAME_Y}
            width={FRAME_WIDTH}
            height={FRAME_HEIGHT}
            rx={r}
            ry={r}
            fill="black"
          />
        </Mask>
      </Defs>

      <Rect
        x="0"
        y="0"
        width={containerWidth}
        height={containerHeight}
        fill="rgba(0,0,0,0.65)"
        mask="url(#overlayMask)"
      />

      <Path
        d={topLeft}
        stroke={CORNER_COLOR}
        strokeWidth={CORNER_STROKE}
        fill="none"
        strokeLinecap="round"
      />
      <Path
        d={topRight}
        stroke={CORNER_COLOR}
        strokeWidth={CORNER_STROKE}
        fill="none"
        strokeLinecap="round"
      />
      <Path
        d={bottomLeft}
        stroke={CORNER_COLOR}
        strokeWidth={CORNER_STROKE}
        fill="none"
        strokeLinecap="round"
      />
      <Path
        d={bottomRight}
        stroke={CORNER_COLOR}
        strokeWidth={CORNER_STROKE}
        fill="none"
        strokeLinecap="round"
      />
    </Svg>
  );
}
