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
    breakpoints: {
        320: {
            slidesPerView: 1,  // 1 slide for mobile devices
        },
        640: {
            slidesPerView: 2,  // 2 slides for larger mobile devices
        },
        768: {
            slidesPerView: 3,  // 3 slides for tablets
        },
        1024: {
            slidesPerView: 4,  // 4 slides for small desktops
        },
        1200: {
            slidesPerView: 5,  // 5 slides for larger screens
        }
    }
}