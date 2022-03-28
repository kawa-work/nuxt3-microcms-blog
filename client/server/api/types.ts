import { MicroCMSImage } from 'microcms-js-sdk'

export type Blog = {
  title: string
  body: string
  tag: string[]
  thumbnail: MicroCMSImage
}
