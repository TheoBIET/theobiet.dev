import { defaultData, screenThemes } from '../../assets/data.js';
import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Computer from '../Models/Computer';

export default function Skills() {
    const { skills: skillsList } = defaultData;
    const [selectedSkill, setSelectedSkill] = useState(skillsList[0]);
    const [selectedTheme, setSelectedTheme] = useState(screenThemes.blue);

    return (
        <div className="Skills">
            <div className="Skills__computer">
                <div className="Skills__computer__renderer">
                    <Canvas
                        className="Skills__computer__renderer"
                        camera={{ position: [-5, 0, 8], fov: 30, zoom: 1.75 }}
                        style={{ backgroundColor: 'transparent' }}
                    >
                        <ambientLight intensity={1.25} />
                        <directionalLight intensity={4} />
                        <Suspense fallback={null}>
                            <Computer
                                position={[1, -1, 0]}
                                skill={selectedSkill.toLocaleLowerCase()}
                                theme={selectedTheme}
                            />
                        </Suspense>
                    </Canvas>
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
                <ul className="Skills__content__themes">
                    {Object.keys(screenThemes).map((theme, index) => (
                        <li key={index}
                            className={`Skills__content__themes__item --${theme} ${selectedTheme.name === theme ? '--active' : ''}`}
                            onClick={() => setSelectedTheme(screenThemes[theme])}
                        />
                    ))}
                </ul>
                <p className="Skills__content__description">
                    Click on the computer screen to change the page.
                </p>
            </div>
        </div>
    )
}