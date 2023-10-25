import { SearchItem } from "./search-item.model"

export interface ResponseItem {
  kind: string,
  etag: string,
  pageInfo: {
    totalResults: number,
    resultsPerPage: number
  },
  items: SearchItem[]
}