import type { IncomingMessage } from 'http'
import { MicroCMSListContent as MicroCMSBaseContent } from 'microcms-js-sdk'
import { Blog } from './types'

import config from '#config'

export default async (req: IncomingMessage) => {
  const params = new URLSearchParams(req.url)

  const data = await $fetch<MicroCMSBaseContent & Blog>(
    `/blog/${params.get('id')}`,
    {
      baseURL: config.baseURL,
      headers: {
        'X-MICROCMS-API-KEY': config.apiKey,
      },
    }
  )
  return data
}
