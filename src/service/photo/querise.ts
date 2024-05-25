import photoService from './photoService'

const queryKeys = {
  all: ['photos'] as const,
  detail: (photoId: number) => [...queryKeys.all, photoId] as const,
  detailComments: (photoId: number) => [...queryKeys.detail(photoId), 'comments'] as const,
  detailComment: ({ photoId, commentId }: { photoId: number; commentId: number }) =>
    [...queryKeys.detailComments(photoId), commentId] as const
}

const queryOptions = {
  all: () => ({
    queryKey: queryKeys.all,
    queryFn: () => photoService.getPhotos()
  }),
  detail: (photoId: number) => ({
    queryKey: queryKeys.detail(photoId),
    queryFn: () => photoService.getPhoto(photoId)
  }),
  comments: (photoId: number) => ({
    queryKey: queryKeys.detailComments(photoId),
    queryFn: () => photoService.getComments(photoId)
  }),
  comment: ({ photoId, commentId }: { photoId: number; commentId: number }) => ({
    queryKey: queryKeys.detailComment({ photoId, commentId }),
    queryFn: () => photoService.getComment({ photoId, commentId })
  })
}

export default queryOptions
