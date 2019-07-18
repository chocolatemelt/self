export const CLICK_LINK = 'CLICK_LINK';
export const HOVER_LINK = 'HOVER_LINK';
export const OPEN_SIDE = 'OPEN_SIDE';
export const CLOSE_SIDE = 'CLOSE_SIDE';

export function clickLink(page) {
  return {
    type: CLICK_LINK,
    page,
  };
}

export function hoverLink(page) {
  return {
    type: HOVER_LINK,
    page,
  };
}

export function openSide() {
  return {
    type: OPEN_SIDE,
  };
}

export function closeSide() {
  return {
    type: CLOSE_SIDE,
  };
}
