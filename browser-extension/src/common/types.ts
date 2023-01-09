
export type Optional<T> = undefined | null | T

export interface DictionaryResult {
    LAIMLog: boolean
    collectionRanking: string[]
    exactMatcheEntryUrl: boolean
    mode: "mobile"
    query: string
    range: unknown
    searchMaybek: SearchMaybek
    searchResultMap: SearchResultMap
}

export interface SearchMaybek {
    compatibilityJamo: boolean
    errataQuery: Optional<unknown>
    forceQuery: Optional<unknown>
    orKEquery: Optional<unknown>
    query: string
    revert: Optional<unknown>
}

export interface SearchResultMap {
    searchResultListMap: SearchResultListMap
}

export interface SearchResultListMap {

    EXAMPLE: SearchResult<unknown>
    MEANING: SearchResult<unknown>
    OPEN: SearchResult<unknown>
    THESAURUS: SearchResult<unknown>
    VLIVE: SearchResult<unknown>
    WORD: SearchResult<WordItem>
}

export type SearchResultListType = "EXAMPLE" | "MEANING" | "OPEN" | "THESAURUS" | "VLIVE" | "WORD"

export interface SearchResult<TItem> {
    errataQuery: Optional<unknown>
    forceQuery: Optional<unknown>
    items: TItem[]
    orKEquery: Optional<unknown>
    query: string
    queryRevert: Optional<unknown>
    revert: Optional<unknown>
    sectionType: SearchResultListType
    total: number
}

export interface AbstractContent {
    value: Optional<unknown>
    hlType: Optional<unknown>
}

export interface WordItem {
    abstractContent: AbstractContent
    antonymWordList: unknown[]
    audioFileCount: Optional<unknown>
    audioThumnail: Optional<unknown>
    conjugate: Optional<unknown>
    destinationLink: string
    destinationLinkKo: string
    dictId: string
    dictTypeForm: string
    dictTypeMulti: Optional<unknown>
    dictTypeWriter: Optional<unknown>
    documentQuality: number
    encode: string
    entryCommentNumber: Optional<unknown>
    entryId: string
    entryImageURL: Optional<unknown>
    entryImageURLs: Optional<unknown>
    entryLikeNumber: Optional<unknown>
    etcExplain: Optional<unknown>
    exactMatch: boolean
    expAbstract: Optional<unknown>
    expAliasEntryAlways: Optional<unknown>
    expAliasEntryAlwaysList: unknown[]
    expAliasEntryAlwaysOld: Optional<unknown>
    expAliasEntrySearch: Optional<unknown>
    expAliasEntrySearchAllKind: Optional<unknown>
    expAliasEntrySearchKrKind: Optional<unknown>
    expAliasEntrySearchList: unknown[]
    expAliasGeneralAlways: Optional<unknown>
    expAliasGeneralAlwaysList: unknown[]
    expAliasGeneralSearch: Optional<unknown>
    expAntonym: Optional<unknown>
    expAudioRead: Optional<unknown>
    expConjugationMoreURL: Optional<unknown>
    expDictTypeForm: string
    expEntry: string
    expEntryComposition: Optional<unknown>
    expEntryCustomContentList: unknown[]
    expEntrySuperscript: Optional<unknown>
    expHanjaRadicalKoreanName: Optional<unknown>
    expKanji: Optional<unknown>
    expKoreanHanja: Optional<unknown>
    expKoreanPron: Optional<unknown>
    expMeaningCustomContentList: unknown[]
    expMeaningRead: Optional<unknown>
    expOnly: Optional<unknown>
    expSourceBook: Optional<unknown>
    expStrokeAnimation: Optional<unknown>
    expSynonym: Optional<unknown>
    exphanjaRadical: Optional<unknown>
    exphanjaRadicalStroke: Optional<unknown>
    exphanjaStroke: Optional<unknown>
    frequencyAdd: string
    gdid: string
    handleEntry: string
    hasConjugation: number
    hasExample: number
    hasIdiom: number
    hasImage: number
    hasOrigin: number
    hasSource: number
    hasStudy: number
    idiomOri: Optional<unknown>
    idiomOriUrl: Optional<unknown>
    imageFileCount: Optional<unknown>
    isHighDfTerm: number
    isOpenDict: number
    isPhoneticSymbol: number
    languageCode: string
    matchType: string
    meaningCount: number
    meansCollector: MeansCollector[]
    newEntry: string
    pageView: Optional<unknown>
    partGroupYn: string
    phoneticSymbol: Optional<unknown>
    priority: number
    pronunFileCount: number
    rank: string
    searchPhoneticSymbolList: unknown[]
    searchTraditionalChineseList: unknown[]
    searchVariantHanziList: unknown[]
    serviceCode: string
    similarWordList: unknown[]
    sourceCid: string
    sourceDictnameKO: string
    sourceDictnameLink: string
    sourceDictnameOri: string
    sourceUpdate: Optional<unknown>
    uuid: Optional<unknown>
    vcode: string
    videoFileCount: Optional<unknown>
    videoThumnail: Optional<unknown>
}

export interface MeansCollector {
    partOfSpeech: string
    partOfSpeech2: string
    partOfSpeechCode: string
    means: Mean[]
}

export interface Mean {
    rder: string
    value: string
    subjectGroup: Optional<unknown>
    subjectGroupCode: Optional<unknown>
    languageGroup: Optional<unknown>
    languageGroupCode: Optional<unknown>
    example: Optional<unknown>
    uuid: Optional<unknown>
    groupName: Optional<unknown>
    groupId: Optional<unknown>
    sourceUpdate: string
    handleValue: Optional<unknown>
    exampleOri: string
    exampleTrans: string
    hlType: string
    vcode: string
    encode: string
}
export interface Item {
    detailLink: Optional<unknown>
    dictId: Optional<unknown>
    dictTypeForm: string
    dictTypeWriter: Optional<unknown>
    documentQuality: number
    example1Lang: number
    example2Lang: string
    example3Lang: Optional<unknown>
    exampleEncode: string
    exampleId: string
    exampleLangCode: string
    exampleVcode: string
    expEntry: Optional<unknown>
    expEntryURL: Optional<unknown>
    expExample1: string
    expExample1Pronun: Optional<unknown>
    expExample2: string
    expExample3: Optional<unknown>
    expExampleAutoLink: Optional<unknown>
    expExampleURL: Optional<unknown>
    expOnly: Optional<unknown>
    gdid: string
    haveTrans: string
    languageCode: Optional<unknown>
    languageIntCode: string
    matchType: string
    rank: string
    searchPhoneticSymbolList: SearchPhoneticSymbol[]
    serviceCode: string
    sourceCid: string
    sourceDictnameAddKO: Optional<unknown>
    sourceDictnameAddURL: Optional<unknown>
    sourceDictnameImage: Optional<unknown>
    sourceDictnameKO: string
    sourceDictnameOri: string
    sourceDictnameURL: string
    sourceUpdate: Optional<unknown>
    superscript: Optional<unknown>
    translation: Optional<unknown>
    translationAutoLink: Optional<unknown>
    translationDictUuid: Optional<unknown>
    translationDislike: string
    translationEncode: string
    translationHonorYear: Optional<unknown>
    translationId: Optional<unknown>
    translationLike: string
    translationParticipationCount: Optional<unknown>
    translationUserlink: Optional<unknown>
    translationVcode: string
}

interface SearchPhoneticSymbol {
    symbolAccentiaAudioCnt: Optional<unknown>
    symbolAccentiaImg: Optional<unknown>
    symbolFile: string
    symbolType: string
    symbolTypeCode: string
    symbolValue: Optional<unknown>
}