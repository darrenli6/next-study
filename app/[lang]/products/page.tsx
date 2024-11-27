import { getDictionary } from "@/app/[lang]/products/dictionary";

const productPage = async ({params}: {params: {lang: string}}) => { 
    const paramsed =await  params
    const dictionary = await getDictionary(paramsed.lang as "en-US");
    return <div>{dictionary.products.title}</div> 
}

export default productPage;