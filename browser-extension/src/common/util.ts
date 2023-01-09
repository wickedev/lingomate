import { Optional } from '~/common/types';

export function getSelectionText() {
    return window.getSelection?.()?.toString()
}

export function hide(container: Optional<HTMLElement>) {
    if (!container) return
    container.style.display = 'none'
}

export function show(container: Optional<HTMLElement>) {
    if (!container) return
    container.style.display = 'block'
}
