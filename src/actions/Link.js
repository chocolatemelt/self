export const HOVER_LINK = 'HOVER_LINK';

export function hoverLink(page) {
  return {
    type: HOVER_LINK,
    page,
  };
}
