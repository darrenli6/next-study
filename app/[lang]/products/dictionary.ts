
interface Dictionary {
    [key: string]: string
}

const dictionaries: { [key: string]: ()=>Promise<Dictionary> } = {
     'en': () =>import('./dictionary/en.json').then(res => res.default as Dictionary),
     'cn': () =>import('./dictionary/cn.json').then(res => res.default as Dictionary),
}

export const getDictionary = async (lang: "en-US" ): Promise<Dictionary> => {
    console.log('lang', lang)
    const dictionnaryLoder = dictionaries[lang]
    if (!dictionnaryLoder) {
        throw new Error(`Dictionary for ${lang} not found`)
    }
    return  dictionnaryLoder();
} 