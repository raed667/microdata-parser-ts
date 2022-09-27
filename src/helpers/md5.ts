import hasha from 'hasha'

export const md5 = (data?: string | null): string => {
  if (!data) return ''
  // TODO replace by a native implementation
  return hasha(data, { algorithm: 'md5' })
}
