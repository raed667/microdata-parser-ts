import fetch from 'cross-fetch'

import { ParseUrlOptions } from './../types/index'

export const fetchHTML = async (url: string, { verbose }: ParseUrlOptions) => {
  const response = await fetch(url)
  if (!response.ok) {
    if (verbose) {
      console.log(`Error fetching url="${url}", status=${response.status}`)
    }
    throw new Error(`Error fetching url="${url}", status=${response.status}`)
  }
  return response.text()
}
