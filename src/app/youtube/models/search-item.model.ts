export interface SearchItem {
    kind: string;
    etag: string;
    id: string;
    snippet: Snippet;
    channelTitle: string;
    tags: string[];
    categoryId: number;
    liveBroadcastContent: string;
    localized: {
        title: string;
        description: string;
    };
    defaultAudioLanguage: string;
    statistics: Statistics;
}

export interface SearchItemSnippet {
    etag: string;
    id: {
        kind: string;
        videoId: string;
    }
    kind: string;
    snippet: {
        channelId: string;
        channelTitle: string;
        description: string;
        liveBroadcastContent: string;
        publishTime: string;
        publishedAt: string;
        thumbnails: Thumbnails;
        title: string;
    };
}

interface Snippet {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: Thumbnails;
}

interface Thumbnails {
    default: Thumbnail;
    medium: Thumbnail;
    high: Thumbnail;
    standard?: Thumbnail;
    maxres?: Thumbnail
}

interface Thumbnail {
    url: string;
    width: number;
    height: number;
}

interface Statistics {
    viewCount: string;
    likeCount: string;
    dislikeCount: string;
    favoriteCount: string;
    commentCount: string;
}
