export type VideoFactoryParamsType = {
  id: {
    videoId?: string;
  };
  snippet?: {
    title?: string;
    thumbnails?: {
      default?: {
        url?: string;
      };
    };
    channelTitle?: string;
  };
};

export type VideoFactoryType = {
  id: string;
  title: string;
  thumbnail: string;
  channelTitle: string;
};
