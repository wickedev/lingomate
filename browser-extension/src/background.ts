
chrome.runtime.onMessage.addListener(({ type, payload }, sender, _reply) => {
    const tabId = sender?.tab?.id
    if (!tabId) {
        return
    }

    if (type === 'content-scripts:dbl-click-text') {
        searchWord(tabId, payload)
    }

    return true;
});

async function searchWord(tabId: number, word: string) {
    const ndict_url = "https://en.dict.naver.com/api3/enko/search"
    const params = [`query=${encodeURIComponent(word)}`, "m=mobile", "lang=ko"]
    const url = ndict_url + "?" + params.join("&")

    const res = await fetch(url, {
        method: "GET",
        mode: "cors",
        cache: "default",
        referrerPolicy: "unsafe-url",
        headers: {
            "content-type": "application/json",
            referer: "https://en.dict.naver.com/",
            "x-requested-with": "XMLHttpRequest",
            "accept-encoding": "gzip, deflate, br",
            "alldict-locale": "ko",
            "accept-language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7"

        }
    })
    const result = await res.json()
    chrome.tabs.sendMessage(tabId, result)
}