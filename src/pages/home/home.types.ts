export type AppBox = {
  top: number;
  left: number;
  width: number;
  height: number;
}

export type PageBox = {
  show: boolean;
  open: boolean;
  top: string;
  left: string;
  width: string;
  height: string;
  opacity: number;
  transition: string;
  rounded: string;
}

export type WrapBox = {
  background: string;
}
export type AppItem = {
  name: string;
  image: string;
  page: string;
}

export type MusicItem = {
  title: string;
  artist: string;
  thumbnail: string;
  url: string;
  description: string;
}