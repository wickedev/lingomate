export type Listener = (request: any, sender: chrome.runtime.MessageSender, sendResponse: (response: any) => void) => void