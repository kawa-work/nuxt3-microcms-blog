import type { Ref } from 'vue'

export const useDrawer = () => {
  const drawer: Ref<boolean> = useState('drawer', () => false)

  return {
    drawer,
  }
}
