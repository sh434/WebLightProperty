import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'
export const SwiperSettings = {
    modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
    spaceBetween: 50,
    slidesPerView: 3,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
    autoplay: {
        delay: 3000, // Time in ms between slides
        disableOnInteraction: false, // Continue autoplay after user interactions
    },

}