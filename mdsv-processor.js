import {markdown, Renderer} from 'svelte-preprocess-markdown';
const renderer = Renderer();

let slide = 0;

renderer.hr = ()  => `</Slide><Slide n="${slide++}">`
renderer.image = (href,title,text) => `<Image href="${href}"></Image>`
renderer.heading = (text, number) => {
    return number === 1 ? `<Title title="${text}">` : 
    number === 2 ? `<Section>${text}</Section>` : `<h${number}>${text}</h${number}>`
}

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
                let mdHtml = mdresult.code;
                
                // Make Image a direct child of Slide
                mdHtml = mdHtml.replace(/<p><Image/g, '<Image');
                mdHtml = mdHtml.replace(/<\/Image><\/p>/g, '</Image>');

                
                mdHtml = mdHtml.replace(/<script/, '</Slide></Presentation><script');

                // Close Title tags at end of slide
                mdHtml = mdHtml.replace(/(<Title.*?)<\/Slide/sg, "$1</Title></Slide");

                let html = `<Presentation slides="${slide-1}"><Slide n="1">` + mdHtml;

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
