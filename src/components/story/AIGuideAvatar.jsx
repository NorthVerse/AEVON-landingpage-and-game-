import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float, Stars } from '@react-three/drei';

const AnimatedSphere = () => {
    const sphereRef = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (sphereRef.current) {
            sphereRef.current.distort = 0.4 + Math.sin(t) * 0.1;
        }
    });

    return (
        <Sphere ref={sphereRef} args={[1, 100, 200]} scale={2}>
            <MeshDistortMaterial
                color="#818cf8" // Indigo-400
                attach="material"
                distort={0.5}
                speed={1.5}
                roughness={0.2}
                metalness={0.8}
            />
        </Sphere>
    );
};

const AIGuideAvatar = () => {
    return (
        <div className="w-full h-full min-h-[300px] relative">
            <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <pointLight position={[-10, -10, -10]} color="purple" intensity={0.5} />

                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

                <Float speed={2} rotationIntensity={1} floatIntensity={1}>
                    <AnimatedSphere />
                </Float>
            </Canvas>

            {/* Overlay Text/Name */}
            <div className="absolute bottom-4 left-0 right-0 text-center pointer-events-none">
                <span className="text-aevon-white/80 text-sm tracking-[0.2em] uppercase font-light drop-shadow-lg">
                    AEVON Guide
                </span>
            </div>
        </div>
    );
};

export default AIGuideAvatar;
