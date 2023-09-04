import React from "react";

const contactText = [
    {
        link: "https://open.kakao.com/o/gM7YLzwf",
        title: "KAKAO : webstupids",
    },
    {
        link: "mailto:webstoryboy@naver.com",
        title: "mail : webstoryboy@naver.com",
    },
];

const Contact = () => {
    return (
        <div className="contact__text">
            <div className="text">
                {contactText.map((contact, key) => (
                    <div key={key}>
                        <a
                            href={contact.link}
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            {contact.title}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Contact;