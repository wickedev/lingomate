chrome.runtime.onMessage.addListener(({ searchWord }, _sender, reply) => {

    (async (searchWord, reply) => {
        const ndict_url = "https://en.dict.naver.com/api3/enko/search"
        const params = [`query=${encodeURIComponent(searchWord)}`, "m=mobile", "lang=ko"]
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
        reply(await res.json())
    })(searchWord, reply)



    return true;
});