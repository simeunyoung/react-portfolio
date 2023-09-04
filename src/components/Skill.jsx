import React from "react";

const skillText = [
    {
      title: "자격증",
      desc: "정보처리기사, 웹디자인기능사, 컴퓨터그래픽스운용기능사, ITQ, GTQ, 2종보통 운전면허",
    },
    {
      title: "보유스킬",
      desc: "JAVA, Spring, Git, CSS3, HTML5, SQL, Javascript, Jquery, Servlet, JSP, R",
    },
    {
      title: "학력 및 경력",
      desc: "컴퓨터공학 졸업예정 및 웹퍼블리셔 근무",
    },
];
const Skill = () => {
    return (
        <section id="skill">
            <div className="skill__inner">
                <h2 className="skill__title">
                    Skill 
                </h2>
                <div className="skill__desc">
                    {skillText.map((skill, key) => (
                        <div key={key}>
                            <span>{key + 1}.</span>
                            <h3>{skill.title}</h3>
                            <p>{skill.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Skill;