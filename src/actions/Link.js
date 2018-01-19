export const HOVER_LINK = "HOVER_LINK";
export const CLICK_LINK = "CLICK_LINK";

export function hoverLink(text) {
	return {
		type: HOVER_LINK,
		text,
	};
}

export function clickLink(text) {
	return {
		type: CLICK_LINK,
		text,
	};
}
