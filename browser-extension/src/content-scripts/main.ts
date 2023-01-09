import { getSelectionText, hide } from '~/common/util';
import '~/content-scripts/Wrapper';
import { CONTAINER_ID } from '~/content-scripts/Wrapper';

document.addEventListener('click', () => {
    hide(document.getElementById(CONTAINER_ID))
})

document.addEventListener('dblclick', async () => {
    const selectionText = getSelectionText()?.trim()

    if (!selectionText) {
        return
    }

    chrome.runtime.sendMessage({
        type: 'content-scripts:dbl-click-text',
        payload: selectionText
    });
})

document.addEventListener('keydown', (e)=> {
    if (e.key === 'Escape') {
        hide(document.getElementById(CONTAINER_ID))
    }
})