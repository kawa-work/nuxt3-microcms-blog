import { MicroCMSImage } from 'microcms-js-sdk'

export type Blog = {
  title: string
  body: string
  tag: string[]
  thumbnail: MicroCMSImage
}

export type BaseInfo = {
  'site-title': string
  'site-subtitle': string
  'site-description': string
  'author-icon': MicroCMSImage
  'author-name': string
  'author-profile': string
  sns?: {
    fieldId: string
    github?: string
    twitter?: string
  }
}
