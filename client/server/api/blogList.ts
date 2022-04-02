import type { IncomingMessage } from 'http'
import { MicroCMSListResponse } from 'microcms-js-sdk'
import { Blog } from './types'

import config from '#config'

export default async (req: IncomingMessage) => {
  const params = new URLSearchParams(req.url)
  const data: MicroCMSListResponse<Blog> = await $fetch<
    MicroCMSListResponse<Blog>
  >('blog', {
    baseURL: config.baseURL,
    headers: {
      'X-MICROCMS-API-KEY': config.apiKey,
    },
    params: {
      orders: '-publishedAt',
      fields: 'id,title,publishAt,tag,thumbnail',
      limit: params.get('limit'),
    },
  })
  return data
}
