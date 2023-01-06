function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}

$(document).on('click', async () => {
    const $wrapper = $("#lm-ext-wrapper").first()
    $wrapper.hide()
    $wrapper.html('')
})

$(document).on('dblclick', async () => {

    const $wrapper = $("#lm-ext-wrapper").length
        ? $("#lm-ext-wrapper")
            .first()
        : $(`<iframe>`)
            .attr("id", "lm-ext-wrapper")
            .appendTo(document.body)

    chrome.runtime.sendMessage({ searchWord: getSelectionText() },
        (response) => {
            const $pre = $("<pre>")
            const $body = $wrapper.contents().find("body");
            $pre.html(JSON.stringify(response, null, 2))
            $body.append($pre)
            $wrapper.show()
        });
})
