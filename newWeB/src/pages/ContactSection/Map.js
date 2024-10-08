import React from 'react';

const Map = () => {
    return (
        <div>
            <div
                className="contact__us--map"
                data-aos="fade-up"
                data-aos-duration={1200}
                data-aos-delay={150}
            >
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2480.228449761564!2d77.08505729846522!3d28.46229428043085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sC-70A%2C%207th%20Floor%2C%20Supermart-1%2C%20DLF%20phase%204%2C%20Gurgaon%2C%20Haryana%20-%20122002%20%209311254752%20%20info%40wpmindia.com%20%20Facebook%20%20Twitter%20%20Instagram%20%20Skype!5e0!3m2!1sen!2sin!4v1727268092850!5m2!1sen!2sin"
                    width="600"
                    height="450"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map Location of WPM India"
                ></iframe>
            </div>
        </div>
    );
}

export default Map;
