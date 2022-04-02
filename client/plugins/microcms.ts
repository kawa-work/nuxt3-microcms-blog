export default defineNuxtPlugin(async () => {
  const { baseInfo, fetchBaseInfo } = useBaseInfo()
  if (baseInfo.value === null) {
    await fetchBaseInfo()
  }
})