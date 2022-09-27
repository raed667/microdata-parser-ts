import { load } from 'cheerio'

import { fetchHTML } from '../helpers/fetch'
import { md5 } from '../helpers/md5'
import { getPropValue } from '../helpers/parser'
import { MicroData, ParseUrlOptions } from '../types'

export const parseHTML = (html: string) => {
  const items: MicroData[] = []
  const api = load(html)

  api('[itemtype]').map((_, item) => {
    items.push({
      id: md5(api(item).html()),
      name: api(item).attr('itemtype'),
      properties: {},
    })
  })

  api('[itemprop]').map((_, item) => {
    const itemtypeHtml = api(item).parents('[itemtype]').html()
    if (!itemtypeHtml) return

    const property = api(item).attr('itemprop')
    if (!property) return

    const currentItem = items.find((item) => item.id === md5(itemtypeHtml))
    if (!currentItem) return

    const value = getPropValue(api, item)
    if (!value) return

    if (currentItem.properties[property]) {
      if (Array.isArray(currentItem.properties[property])) {
        // TODO figure out a better TS type
        // @ts-expect-error this can be an array
        currentItem.properties[property].push(value)
      }
      currentItem.properties[property] = [currentItem.properties[property]]
    } else {
      currentItem.properties[property] = value
    }
  })

  return items
}

export const parseURL = async (url: string, options: ParseUrlOptions) => {
  const html = await fetchHTML(url, options)
  return parseHTML(html)
}
