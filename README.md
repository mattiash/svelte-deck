# svelte-deck

## Usage

  npx degit @mattiash/svelte-deck my-presentation
  npm install
  npm run dev

Now edit Slides.md

## Generate pdf

With `npm run dev` running, run `node util/print.js`

## Keyboard

- f - Enter fullscreen
- Arrow left / right - Previous / Next slide
- o - Overview mode
- c - Toggle Comments (Speaker notes)
- a - Toggle animations (slide transitions) on/off

## Speaker notes

Prefix text paragraph with `::` to turn it into a comment for speaker notes

If you open several browser windows with the same presentation,
slide selection will be synchronized across windows.
