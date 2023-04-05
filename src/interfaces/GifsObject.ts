export interface GifsObjectResponse {
  data: DataResponse[];
  meta: MetaResponse;
  pagination: PaginationResponse;
}
export interface RandomGifResponse {
  data: DataResponse;
  meta: MetaResponse;
}
interface DataResponse {
  id: string;
  images: ImagesResponse;
  title: string;
  user: UserResponse;
}

interface UserResponse {
  avatar_url: string;
  profile_url: string;
  username: string;
}

interface ImagesResponse {
  downsized: ImageProp;
  fixed_height: ImageProp;
  fixed_width: ImageProp;
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
