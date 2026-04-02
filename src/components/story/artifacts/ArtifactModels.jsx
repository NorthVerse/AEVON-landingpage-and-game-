import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Cylinder, Sphere, Icosahedron, Torus, Float } from '@react-three/drei';

export const EldersStaff = (props) => {
    return (
        <group {...props}>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                {/* Staff Body */}
                <Cylinder args={[0.05, 0.08, 3, 8]} position={[0, -0.5, 0]}>
                    <meshStandardMaterial color="#8B4513" roughness={0.9} />
                </Cylinder>
                {/* Glowing Orb */}
                <Sphere args={[0.25]} position={[0, 1.2, 0]}>
                    <meshStandardMaterial color="#F59E0B" emissive="#F59E0B" emissiveIntensity={2} toneMapped={false} />
                </Sphere>
                {/* Rings */}
                <Torus args={[0.15, 0.02, 16, 32]} position={[0, 0.9, 0]} rotation={[Math.PI / 2, 0, 0]}>
                    <meshStandardMaterial color="#FFD700" metalness={1} roughness={0.2} />
                </Torus>
            </Float>
        </group>
    );
};

export const ForestGem = (props) => {
    return (
        <group {...props}>
            <Float speed={3} rotationIntensity={2} floatIntensity={0.5}>
                {/* Gem Core */}
                <Icosahedron args={[0.6, 0]}>
                    <meshPhysicalMaterial
                        color="#4169E1"
                        roughness={0}
                        metalness={0.2}
                        transmission={0.8} // Glass-like
                        thickness={2}
                    />
                </Icosahedron>
                {/* Inner Glow */}
                <Sphere args={[0.3]}>
                    <meshBasicMaterial color="#A7F3D0" />
                </Sphere>
            </Float>
        </group>
    );
};
