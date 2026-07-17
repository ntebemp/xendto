export interface FrameRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

/**
 * Calcule le rectangle du cadre de capture, en fonction de la taille
 * du conteneur affiché à l'écran (donc en "points" React Native, pas en pixels photo).
 *
 * IMPORTANT: cette fonction est utilisée à la fois par <CameraOverlay />
 * (pour dessiner le cadre) et par camera.tsx (pour rogner la photo).
 * Ne PAS dupliquer ce calcul ailleurs, sous peine de désynchronisation.
 */
export function getFrameRect(
  containerWidth: number,
  containerHeight: number,
): FrameRect {
  const width = containerWidth * 0.72;
  const height = width * 1.3;

  const x = (containerWidth - width) / 2;
  const y = (containerHeight - height) / 2;

  return { x, y, width, height };
}
