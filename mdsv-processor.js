import {markdown, Renderer} from 'svelte-preprocess-markdown';
const renderer = Renderer();

let slide = 0;

renderer.hr = ()  => `</Slide><Slide n="${slide++}">`

export function logger(prefix) {
    return 	{
        markup: ({ content, filename }) => {
            console.log(`=== ${prefix} markup ${filename}\n${content}\n`)
            return {
                code: content
            };
        },
        script: ({ content }) => {
            console.log(`=== ${prefix} script\n${content}\n`)
            return {
                code: content
            };
        },
        style: ({ content }) => {
            console.log(`=== ${prefix} style\n${content}\n`)
            return {
                code: content
            };
        }
    }
}

export function mdsvDeck() {
    const md = markdown({renderer})
    return {
        markup: ({content, filename}) => {
                if(filename.endsWith('.md')) {
                slide = 2
                const mdresult = md.markup({content, filename})
                let html = `<Presentation slides="${slide-1}"><Slide n="1">` + mdresult.code.replace(/<script/, '</Slide></Presentation><script');
                if(html.match(/<script>/)) {
                    // There is already an instance-level script. Amend it.
                    html = html.replace(/<script>/, `<script>import Presentation from "./Presentation.svelte";
    import Slide from "./Slide.svelte";
    import Image from "./Image.svelte";`)
                }
                else {
                    // There is no instance-level script. Add one.
                    console.log('Adding inline script')
                    html = html + `<script>import Presentation from "./Presentation.svelte";
    import Slide from "./Slide.svelte";
    import Image from "./Image.svelte";</script>`
                }
                return {
                    code: html
                }
            }
            else {
                return {
                    code: content
                    // More properties?
                }
            }
        },
    }
}
