export interface GifsObjectResponse {
  data: DataResponse[];
  meta: MetaResponse;
  pagination: PaginationResponse;
}
export interface RandomGifResponse {
  data: DataResponse;
  meta: MetaResponse;
}
export interface DataResponse {
  id: string;
  images: ImagesResponse;
  title: string;
  user: UserResponse;
  url: string;
}

export interface UserResponse {
  avatar_url: string;
  profile_url: string;
  username: string;
}

interface ImagesResponse {
  downsized: ImageProp;
  fixed_height: ImageProp;
  fixed_width: ImageProp;
  original: ImageProp;
  "480w_still": ImageProp;
  hd: ImageProp;
  downsized_large: ImageProp;
}

interface MetaResponse {
  msg: string;
  status: string;
}

interface PaginationResponse {
  count: number;
  offset: number;
  total_count: number;
}

interface ImageProp {
  height: string;
  url: string;
  width: string;
}
