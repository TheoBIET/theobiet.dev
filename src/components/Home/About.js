import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Avatar from '../Models/Avatar';
import { OrbitControls } from '@react-three/drei';

export default function About() {
    return (
        <div className="About">
            <div className="About__title">
                <h2>About me</h2>
            </div>
            <div className="About__content">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas
                    congue ligula ac quam viverra nec consectetur ante
                    hendrerit. Donec et mollis dolor. Praesent et diam eget
                    libero egestas mattis sit amet vitae augue. Nam tincidunt
                    congue enim, ut porta lorem lacinia consectetur. Donec ut
                    libero sed arcu vehicula ultricies a non tortor. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                    ut gravida lorem. Ut turpis felis, pulvinar a semper sed,
                    adipiscing id dolor. Pellentesque auctor nisi id magna
                </p>
            </div>
            <div className="About__character">
                <Canvas
                    camera={{ position: [5, 2, 10], fov: 20, zoom: 1.75 }}
                    style={{ backgroundColor: 'transparent' }}
                >
                    <ambientLight intensity={1.25} />
                    <directionalLight intensity={0.4} />
                    <Suspense fallback={null}>
                        <Avatar position={[.5, -1, 0]
                        } />
                    </Suspense>
                    <OrbitControls enableZoom={false} />
                </Canvas>
            </div>
        </div>
    )
}