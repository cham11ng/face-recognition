export const POINT_8 = 8;
export const RADIUS_1 = 1;
export const NEIGHBOUR_SHIFT = 3;

export function unitStep(n) {
  if (n < 0) {
    return 0;
  } else if (n >= 0) {
    return 1;
  }
}

export function get1DPosition(colLength, x, y) {
  return x + y * colLength;
}

export function getCoordinate(colLength, position) {
  return {
    x: position % colLength,
    y: Math.floor(position / colLength)
  };
}