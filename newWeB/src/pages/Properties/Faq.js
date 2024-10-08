import React, { useState } from 'react';
import './propert.css';

const FAQ = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);
    const [showMore, setShowMore] = useState(false);

    const faqs = [
        {
            question: "What types of properties do you specialize in?",
            answer: "I specialize in residential and commercial properties, including apartments, single-family homes, office spaces, and retail locations. My focus is on providing tailored solutions to meet the unique needs of each client.",
        },
        {
            question: "How can I schedule a property viewing?",
            answer: (
                <>
                    To schedule a property viewing, please contact me via email at <a href="mailto:shaikrafikpasha786@gmail.com">shaikrafikpasha786@gmail.com</a> or call me at +91 8008146642. I can arrange viewings at your convenience.
                </>
            ),
        },
        {
            question: "What should I consider when buying a property?",
            answer: "When buying a property, consider factors such as location, price, property condition, and your future needs. It's also important to conduct thorough research and possibly engage a property consultant to guide you through the process.",
        },
        {
            question: "Do you assist with property financing?",
            answer: (
                <>
                    Yes, I can assist you with property financing options. I work with several financial institutions and can help you find the best mortgage rates and financing plans available. Feel free to reach out for more details.
                </>
            ),
        },
        {
            question: "How do you determine the value of a property?",
            answer: "The value of a property is determined through a comparative market analysis (CMA), which considers the prices of similar properties in the area, current market trends, and the condition of the property itself.",
        },
    ];

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const handleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <div id="FAQ">
            <div className="accordian">
                {faqs.slice(0, showMore ? faqs.length : 4).map((faq, index) => (
                    <div className="item" key={index}>
                        <div className="FAQ-title" onClick={() => toggleExpand(index)}>
                            <p className="faqQuestion">{`${index + 1}. ${faq.question}`}</p>
                            <span className="expandToggle">{expandedIndex === index ? '-' : '+'}</span>
                        </div>
                        <div className={`FAQ-content ${expandedIndex === index ? 'show' : ''}`}>
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                ))}
                <div className="FAQ-ShowMore">
                    <button id="showMoreBtn" onClick={handleShowMore}>
                        {showMore ? "Show Less" : "Show More"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
