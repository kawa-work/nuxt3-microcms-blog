import { MicroCMSObjectContent } from 'microcms-js-sdk'
import { BaseInfo } from './types'

import config from '#config'

export default async () => {
  const data: MicroCMSObjectContent & BaseInfo = await $fetch<
    MicroCMSObjectContent & BaseInfo
  >('base-info', {
    baseURL: config.baseURL,
    headers: {
      'X-MICROCMS-API-KEY': config.apiKey,
    },
    params: {
      orders: '-publishedAt',
    },
  })
  return data
}
