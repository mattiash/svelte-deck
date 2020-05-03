import { writable } from 'svelte/store';

export const activeSlide = writable(parseInt(window.location.hash.substr(1)) || 1);
export const overview = writable(false);
export const comment = writable(false);