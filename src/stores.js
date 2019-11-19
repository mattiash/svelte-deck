import { writable } from 'svelte/store';

export const activeSlide = writable(1);
export const overview = writable(false);