export type ContentfulMedia = {
  title: string;
  description: string;
  file: {
    contentType: string;
    details: {
      image: { width: number; height: number };
      size: number;
    };
    fileName: string;
    url: string;
  };
};
