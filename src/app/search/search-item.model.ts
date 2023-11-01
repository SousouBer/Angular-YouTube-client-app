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

interface Snippet {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
        default: Thumbnail;
        medium: Thumbnail;
        high: Thumbnail;
        standard: Thumbnail;
        maxres: Thumbnail;
    };
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
