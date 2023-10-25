export interface SearchItem {
  kind: string;
  etag: string;
  id: string;
  snippet: Snippet,
  channeltitle: string,
  tags: string[],
  categoryId: number,
  liveBroadcastContent: string,
  localized: {
    title: string,
    description: string,
  }
  defaultAudioLanguage: string,
  statistics: Statistics,
}

export interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: {
    default: Thumbnail;
    medium: Thumbnail;
    hight: Thumbnail;
    standard: Thumbnail;
    maxres: Thumbnail;
  };
}

export interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

export interface Statistics {
  viewCount: number,
  likeCount: number,
  dislikeCount: number,
  favouriteCount: number,
  commentCount: number,
}
