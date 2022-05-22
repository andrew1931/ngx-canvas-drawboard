import { HANDLE_SIZE } from '../shapes/base';
import { IPoint, ILayoutElement, EMouseHandle } from '../types';

const dist = (p1: IPoint, p2: IPoint): number => {
  return Math.sqrt((p2.x - p1.x) * (p2.x - p1.x) + (p2.y - p1.y) * (p2.y - p1.y));
};

export const detectCurrentHandle = (mouse: IPoint, elem: ILayoutElement): EMouseHandle | false => {

  const topLeft = dist(mouse, { x: elem.x, y: elem.y });
  if (topLeft <= HANDLE_SIZE) return EMouseHandle.topLeft;

  const topRight = dist(mouse, { x: elem.x + elem.width, y: elem.y });
  if (topRight <= HANDLE_SIZE) return EMouseHandle.topRight;

  const bottomLeft = dist(mouse, { x: elem.x, y: elem.y + elem.height });
  if (bottomLeft <= HANDLE_SIZE) return EMouseHandle.bottomLeft;

  const bottomRight = dist(mouse, { x: elem.x + elem.width, y: elem.y + elem.height });
  if (bottomRight <= HANDLE_SIZE) return EMouseHandle.bottomRight;

  const top = dist(mouse, { x: elem.x + elem.width / 2, y: elem.y });
  if (top <= HANDLE_SIZE) return EMouseHandle.top;

  const left = dist(mouse, { x: elem.x, y: elem.y + elem.height / 2  });
  if (left <= HANDLE_SIZE) return EMouseHandle.left;

  const bottom = dist(mouse, { x: elem.x + elem.width / 2, y: elem.y + elem.height });
  if (bottom <= HANDLE_SIZE) return EMouseHandle.bottom;

  const right = dist(mouse, { x: elem.x + elem.width, y: elem.y + elem.height / 2 });
  if (right <= HANDLE_SIZE) return EMouseHandle.right;

  return false;
};
