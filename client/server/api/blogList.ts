import { MicroCMSListResponse } from 'microcms-js-sdk'
import { Blog } from './types'

import config from '#config'

export default async () => {
  const data: MicroCMSListResponse<Blog> = await $fetch<
    MicroCMSListResponse<Blog>
  >('blog', {
    baseURL: config.baseURL,
    headers: {
      'X-MICROCMS-API-KEY': config.apiKey,
    },
    params: {
      orders: '-createdAt',
    },
  })
  return data
}
