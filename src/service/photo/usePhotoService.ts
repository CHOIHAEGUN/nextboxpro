import { useQuery } from '@tanstack/react-query'
import queryOptions from './querise'

export function usePhotos() {
  return useQuery(queryOptions.all())
}

export function usePhoto({ photoId }: { photoId: number }) {
  return useQuery(queryOptions.detail(photoId))
}

export function useComments({ photoId }: { photoId: number }) {
  return useQuery(queryOptions.comments(photoId))
}

export function useComment({ photoId, commentId }: { photoId: number; commentId: number }) {
  return useQuery(queryOptions.comment({ photoId, commentId }))
}
