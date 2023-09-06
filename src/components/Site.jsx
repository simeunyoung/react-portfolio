import React from "react";

const siteText = [
    {
        text: ["make", "site compliant with", "codenews"],
        title: "학습 내용 활용 코드로 다양한 기능 만들기",
        code: "https://github.com/simeunyoung/news",
        //view: "https://port2023-vite.netlify.app",
        info: [
            "site coding",
            "production period : 2023.04.10 - 2023.05.12",
            "use stack :Java, HTML5/CSS3, JS, SQL",
        ],
    },
    {
        text: ["make", "site compliant with", "whou"],
        title: "우리의 평생 고민인 진로에 대한 방향 제시 사이트",
        code: "https://github.com/simeunyoung/whou",
       // view: "https://port2023-react.netlify.app",
        info: [
            "site coding",
            "production period : 2023.07.01 - 2023.08.16",
            "use stack : Java, HTML5/CSS3, JS, SQL, R",
        ],
    },
    {
        text: ["make", "site compliant with", "react.js"],
        title: "리엑트를 이용한 사이트 제작",
        code: "https://github.com/simeunyoung/react-portfolio",
        // view: "https://port2023-vue.netlify.app",
        info: [
            "site coding",
            "production period : one days",
            "use stack : HTML5/CSS3, Scss Variable, react",
        ],
    },
];

const Site = () => {
    return (
        <section id="site">
            <div className="site__inner">
                <h2 className="site__title"> Site coding <em>웹 개발 사이트</em></h2>
                <div className="site__wrap">
                    {siteText.map((site, key) => (
                        <article className={`site__item s${key+1}`} key={key}>
                            <span className="num">{key+1}.</span>
                            <div className="text">
                                <div>{site.text[0]}</div>
                                <div>{site.text[1]}</div>
                                <div>{site.text[2]}</div>
                            </div>
                            <h3 className="title">
                                {site.title}
                            </h3>
                            <div className="btn">
                                <a href={site.code}>code</a>
                                {/* <a href={site.view}>view</a> */}
                            </div>
                            <div className="info">
                                <span>{site.info[0]}</span>
                                <span>{site.info[1]}</span>
                                <span>{site.info[2]}</span>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};


export default Site;