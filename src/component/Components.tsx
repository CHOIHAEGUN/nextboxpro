import queryOptions from '@/service/photo/querise'
import { getDehydratedQueries, Hydrate } from '@/stores/reactQueryUtil'
import { Photo } from '../../golo'

export default async function Comments({ id }: Pick<Photo, 'id'>) {
  const { queryKey, queryFn } = queryOptions.comments(id)
  const queries = await getDehydratedQueries([{ queryKey, queryFn }])
  return (
    <Hydrate state={{ queries }}>
      comments
      {JSON.stringify(queries[0].state.data)}
    </Hydrate>
  )
}
