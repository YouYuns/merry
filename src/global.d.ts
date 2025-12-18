declare module "swiper/css";
declare module "swiper/css/thumbs";
declare module "swiper/css/navigation";
declare module "swiper/css/pagination";

interface KakaoShareObject {
  container: string;
  requestUrl: string;
}

interface KakaoStatic {
  init: (key: string) => void;
  isInitialized: () => boolean;
  Share: {
    createScrapButton: (params: KakaoShareObject) => void;
  };
}

interface Window {
  Kakao: KakaoStatic;
}
