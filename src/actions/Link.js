export const CLICK_LINK = 'CLICK_LINK';
export const HOVER_LINK = 'HOVER_LINK';

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
