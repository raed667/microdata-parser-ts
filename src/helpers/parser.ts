import { CheerioAPI, Element } from 'cheerio'

export const getPropValue = (
  api: CheerioAPI,
  tag: Element
): string | undefined => {
  if (api(tag).attr('content')) {
    return api(tag).attr('content')?.trim()
  }

  if (api(tag).attr('itemprop') === 'image' && api(tag).attr('src')) {
    return api(tag).attr('src')?.trim()
  }

  if (api(tag).attr('itemprop') === 'availability' && api(tag).attr('href')) {
    return api(tag)?.attr('href')?.split('/')[3]?.trim()
  }

  return api(tag)
    .text()
    .replace(/[\n\t\r]+/g, '')
    .replace(/ +(?= )/g, '')?.trim()
}
