import { defaultData } from '../../assets/data.js';
import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Computer from '../Models/Computer'; /* highlight-line */

export default function Skills() {
    const { skills: skillsList } = defaultData;
    const [selectedSkill, setSelectedSkill] = useState(skillsList[0]);

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
                            <Computer position={[1, -1, 0]} />
                        </Suspense>
                        <OrbitControls enableZoom={false} />
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
            </div>
        </div>
    )
}