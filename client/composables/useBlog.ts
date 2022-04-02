import {
  MicroCMSListResponse,
  MicroCMSListContent as MicroCMSBaseContent,
} from 'microcms-js-sdk'
import { Ref } from 'vue'
import { Blog } from '../server/api/types'

export const fetchBlog =
  (blog: Ref<MicroCMSBaseContent & Blog>) => async (id: string) => {
    const { data } = await useFetch<MicroCMSBaseContent & Blog>('/api/blog', {
      params: { id },
    })
    blog.value = data.value
  }

export const fetchBlogList =
  (blogList: Ref<MicroCMSListResponse<Blog>>) => async (limit: number) => {
    const { data } = await useFetch<MicroCMSListResponse<Blog>>(
      '/api/blogList',
      { params: { limit } }
    )
    blogList.value = data.value
  }

export const useBlog = () => {
  const blog = useState<MicroCMSBaseContent & Blog>('blog', () => null)
  const blogList = useState<MicroCMSListResponse<Blog>>('blogList', () => null)
  return {
    blog: readonly(blog),
    blogList: readonly(blogList),
    fetchBlog: fetchBlog(blog),
    fetchBlogList: fetchBlogList(blogList),
  }
}
