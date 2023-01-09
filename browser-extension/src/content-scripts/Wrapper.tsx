import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { Listener } from "~/common/chrome";
import { DictionaryResult } from '~/common/types';
import { show } from '~/common/util';

export const CONTAINER_ID = "__lingomate_crx__"

function useListener(listener: Listener) {
    useEffect(() => {
        chrome.runtime.onMessage.addListener(listener)
        return () => {
            chrome.runtime.onMessage.removeListener(listener)
        }
    }, [])
}

export function Wrapper() {
    const [result, setResult] = useState<DictionaryResult>()
    useListener((request, _sender, _sendResponse) => {
        setResult(request)
        show(document.getElementById(CONTAINER_ID))
    })

    return <div onClick={(e) => e.stopPropagation()}>
        <p className="query">{result?.query}</p>
        {result?.searchResultMap.searchResultListMap.WORD.items
            .flatMap(item => item.meansCollector)
            .flatMap(collector => collector.means)
            .map((mean, idx) => <p style={{ display: 'flex', flexDirection: "row" }}>
                <span>{`${idx}. `}</span>
                <span style={{ paddingLeft: 10 }}>
                    <div dangerouslySetInnerHTML={{ __html: mean.value }} />
                    <div className="example" dangerouslySetInnerHTML={{ __html: mean.exampleOri }} />
                    <div className="example" dangerouslySetInnerHTML={{ __html: mean.exampleTrans }} />
                </span>
            </p>)}
        {/* <DebugResult result={result} /> */}
    </div>
}

function DebugResult({ result }: { result?: DictionaryResult }) {
    return <div>
        <div>LAIMLog: {result?.LAIMLog ? 'true' : 'false'}</div>
        <div>collectionRanking: [{result?.collectionRanking.join(', ')}]</div>
        <div>exactMatcheEntryUrl: {result?.exactMatcheEntryUrl ? 'true' : 'false'}</div>
        <div>mode: {result?.mode}</div>
        <div>query: {result?.query}</div>
        <div>range: <pre>{JSON.stringify(result?.range, null, 2)}</pre></div>
        <div>searchMaybek: <pre>{JSON.stringify(result?.searchMaybek, null, 2)}</pre></div>
        <div>WORD: <pre>{JSON.stringify(result?.searchResultMap.searchResultListMap.WORD, null, 2)}</pre></div>
        <div>EXAMPLE: <pre>{JSON.stringify(result?.searchResultMap.searchResultListMap.EXAMPLE, null, 2)}</pre></div>
        <div>MEANING: <pre>{JSON.stringify(result?.searchResultMap.searchResultListMap.MEANING, null, 2)}</pre></div>
        <div>OPEN: <pre>{JSON.stringify(result?.searchResultMap.searchResultListMap.OPEN, null, 2)}</pre></div>
        <div>THESAURUS: <pre>{JSON.stringify(result?.searchResultMap.searchResultListMap.THESAURUS, null, 2)}</pre></div>
        <div>VLIVE: <pre>{JSON.stringify(result?.searchResultMap.searchResultListMap.VLIVE, null, 2)}</pre></div>
    </div>
}

if (!document.getElementById(CONTAINER_ID)) {
    const container = document.createElement("div");
    container.id = CONTAINER_ID;
    container.style.display = 'none';
    document.body.appendChild(container);
    createRoot(container).render(<Wrapper />)
}
