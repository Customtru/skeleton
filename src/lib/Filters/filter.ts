// Action: Filter
export {default as BlueNight} from '$lib/Filters/svg/BlueNight.svelte';
export {default as Emerald} from '$lib/Filters/svg/Emerald.svelte';
export {default as Nineties} from '$lib/Filters/svg/Apollo.svelte';
export {default as Rustic} from '$lib/Filters/svg/Rustic.svelte';
export {default as Summer84} from '$lib/Filters/svg/Summer84.svelte';
export {default as XPro} from '$lib/Filters/svg/XPro.svelte';
export {default as TestFilter} from '$lib/Filters/svg/TestFilter.svelte';

export function filter (node: HTMLElement, filter_name: string): void {
    const isFirefox: boolean = navigator.userAgent.indexOf('Firefox') > -1;
    if (!isFirefox) {
        node.setAttribute('style', `filter: url("#${filter_name}")`);
    }
}

