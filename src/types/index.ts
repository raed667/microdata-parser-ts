export interface ParseUrlOptions {
  verbose: boolean
}

export interface MicroData {
  id: string
  name?: string
  properties: Record<string, string | any[]>
}
