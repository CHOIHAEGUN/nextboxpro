export interface Product {
  id?: number
  product: string
  price: string
}

export type EventParams = {
  pgstId?: string
  evntTtl?: string
  page: number
  record: number
}

export type EventItem = {
  rvsRnum?: number
  imgFileId?: stirng
  imgUrl?: string
  evntInfId?: string
  evntTtl?: string
  evntCon?: string
  enlsSldyTs?: string
  enlsCldyTs?: string
  evntStdyTs?: string
  evntFndaTs?: string
  pgstId?: string
  days?: string
  enlsDays?: string
  fileId?: string
  comCdNm?: string
  evntUsedState?: string
  evntPickedState?: string
  receiptDate?: string
  items?: string
  imgFileInfo?: string
  reqDate?: string
  totalPrc?: string
}

export type EventList = {
  message: 'OK'
  token: null
  code: '200'
  data: {
    page?: number
    record?: number
    total?: number
    totalPage?: number
    startPage?: number
    endPage?: number
    prev?: boolean
    next?: boolean
    list: EventItem[]
  }
}

export interface Photo {
  albumId: number
  id: number
  thumbnailUrl: string
  title: string
  url: string
}
