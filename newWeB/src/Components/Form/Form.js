import React from 'react'
import './Form.css'
import '../../pages/ContactSection/ContactUs.css'
const Form = () => {
    return (
        <div className="widget__step mb-30"
            data-aos="fade-left"
            data-aos-duration={1200}
            data-aos-delay={20}>
            <h2 className="widget__step--title">Send Messege</h2>
            <div className="widget__form">
                <form action="#">
                    <div className="widget__form--input mb-20">
                        <input
                            className="widget__form--input__field"
                            placeholder="Full name"
                            type="text"
                        />
                    </div>
                    <div className="widget__form--input mb-20">
                        <input
                            className="widget__form--input__field"
                            placeholder="Phone Number"
                            type="text"
                        />
                    </div>
                    <div className="widget__form--input mb-20">
                        <input
                            className="widget__form--input__field"
                            placeholder="Email Address"
                            type="email"
                        />
                    </div>
                    <div className="widget__form--input">
                        <textarea
                            className="widget__form--textarea__field"
                            placeholder="Write You Messege"
                            defaultValue={""}
                        />
                    </div>
                    <button className="widget__form--btn solid__btn" type="submit">
                        Send Messege
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Form