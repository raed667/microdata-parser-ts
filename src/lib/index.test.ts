import { describe, expect, it } from '@jest/globals'

import { product, productHTML } from './mocks'

import { parseHTML } from '.'

describe('microdata-parser-ts', () => {
  describe('parseHTML', () => {
    it('should work', () => {
      const items = parseHTML(productHTML)

      expect(items).toEqual([
        {
          id: '13320432c7d08f8f8e4e8d2ce4ca54d0',
          name: 'http://schema.org/Product',
          properties: {
            name: product.name,
            offers: product.offer.price + ' ' + product.offer.availability,
            description: product.offer.description,
          },
        },
        {
          id: 'ce034672195cef3533c1beaaf6a3466b',
          name: 'http://schema.org/Offer',
          properties: {
            price: product.offer.price,
            availability: product.offer.availability,
          },
        },
      ])
    })
  })
  describe('parseURL', () => {
    it.todo('Gets the HTML content and extracts microdata')

    it.todo('Properly handles fetch errors')
  })
})
