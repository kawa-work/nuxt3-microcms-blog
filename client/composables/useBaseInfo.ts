import { MicroCMSObjectContent } from 'microcms-js-sdk'
import { Ref } from 'vue'
import { BaseInfo } from '../server/api/types'

export const fetchBaseInfo =
  (baseInfo: Ref<MicroCMSObjectContent & BaseInfo>) => async () => {
    const { data } = await useFetch<MicroCMSObjectContent & BaseInfo>(
      '/api/baseInfo'
    )
    baseInfo.value = data.value
  }

export const useBaseInfo = () => {
  const baseInfo = useState<MicroCMSObjectContent & BaseInfo>(
    'baseInfo',
    () => null
  )
  return {
    baseInfo: readonly(baseInfo),
    fetchBaseInfo: fetchBaseInfo(baseInfo),
  }
}
