import { useState } from "react";

export default function Skills() {
    const skillsList = [
        'Languages',
        'Technologies',
        'Tools',
        'Softwares',
    ]

    const [selectedSkill, setSelectedSkill] = useState(skillsList[0]);

    return (
        <div className="Skills">
            <div className="Skills__computer">
                <div className="Skills__computer__renderer">
                </div>
            </div>
            <div className="Skills__content">
                <h2 className="Skills__content__title">Skills</h2>
                <ul className="Skills__content__list">
                    {skillsList.map((skill, index) => (
                        <li
                            key={index}
                            className={`Skills__content__list__item ${selectedSkill === skill ? '--active' : ''}`}
                            onClick={() => setSelectedSkill(skill)}
                        >
                            {skill}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}