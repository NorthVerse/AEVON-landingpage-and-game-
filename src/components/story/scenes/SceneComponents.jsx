import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Cylinder, Box, Sphere, Cone, Torus, Decal } from '@react-three/drei';

// Materials (Shared)
const colors = {
    navy: '#1A1A2E',
    coral: '#FF6B6B',
    amber: '#FFB347',
    teal: '#14B8A6',
    cream: '#FFF1E6',
    gold: '#F59E0B'
};

// --- BASE PLATFORM ---
const BasePlatform = ({ color = colors.navy }) => (
    <Box args={[10, 1, 10]} position={[0, -1, 0]} receiveShadow>
        <meshStandardMaterial color={color} />
    </Box>
);

// --- SCENES ---

export const VillageScene = () => {
    return (
        <group>
            {/* Ground */}
            <BasePlatform color="#1e1e36" />

            {/* Hut 1 */}
            <group position={[-2, 0, -2]}>
                <Cylinder args={[1.5, 1.5, 2, 8]} position={[0, 1, 0]} castShadow receiveShadow>
                    <meshStandardMaterial color={colors.amber} />
                </Cylinder>
                <Cone args={[2, 1.5, 8]} position={[0, 2.75, 0]} castShadow>
                    <meshStandardMaterial color={colors.coral} />
                </Cone>
            </group>

            {/* Hut 2 (Small) */}
            <group position={[2.5, 0, 1]}>
                <Cylinder args={[1, 1, 1.5, 8]} position={[0, 0.75, 0]} castShadow receiveShadow>
                    <meshStandardMaterial color={colors.amber} />
                </Cylinder>
                <Cone args={[1.5, 1, 8]} position={[0, 2, 0]} castShadow>
                    <meshStandardMaterial color={colors.coral} />
                </Cone>
            </group>

            {/* Fire Pit */}
            <group position={[0, 0, 1.5]}>
                <Torus args={[0.5, 0.1, 16, 32]} rotation={[Math.PI / 2, 0, 0]} position={[0, 0.1, 0]}>
                    <meshStandardMaterial color={colors.navy} />
                </Torus>
                <pointLight position={[0, 1, 0]} intensity={2} color={colors.gold} distance={5} />
                <Float speed={5} rotationIntensity={0} floatIntensity={0.5}>
                    <Box args={[0.2, 0.2, 0.2]} position={[0, 0.5, 0]} rotation={[Math.PI / 4, 0, Math.PI / 4]}>
                        <meshStandardMaterial color={colors.gold} emissive={colors.gold} emissiveIntensity={2} />
                    </Box>
                </Float>
            </group>
        </group>
    );
};

export const CrossroadsScene = () => {
    return (
        <group>
            <BasePlatform color="#1F2937" />

            {/* Trees (Left Forest Boundary) */}
            <group position={[-3, 0, -3]}>
                <Cone args={[0.8, 3, 8]} position={[0, 1.5, 0]} castShadow>
                    <meshStandardMaterial color={colors.teal} />
                </Cone>
                <Cone args={[0.8, 3, 8]} position={[1.5, 1.2, 1]} castShadow>
                    <meshStandardMaterial color={colors.teal} />
                </Cone>
            </group>

            {/* Elders Totem (Right) */}
            <group position={[3, 0, 2]}>
                <Box args={[1, 4, 1]} position={[0, 2, 0]} castShadow>
                    <meshStandardMaterial color={colors.amber} />
                </Box>
                <Sphere args={[0.8]} position={[0, 4.5, 0]}>
                    <meshStandardMaterial color={colors.gold} />
                </Sphere>
            </group>

            {/* Path */}
            <Box args={[6, 0.1, 1]} position={[0, -0.4, 0]} rotation={[0, Math.PI / 4, 0]}>
                <meshStandardMaterial color={colors.cream} />
            </Box>
        </group>
    );
};

export const ForestScene = () => {
    // Generate some random trees
    const trees = [
        { x: -3, z: -3, s: 1 }, { x: -1, z: -4, s: 1.2 }, { x: 2, z: -3, s: 0.8 },
        { x: 3, z: 0, s: 1.1 }, { x: 4, z: 3, s: 0.9 }, { x: -2, z: 2, s: 1.3 },
        { x: -4, z: 0, s: 1 }, { x: 1, z: 4, s: 1.1 }
    ];

    return (
        <group>
            <BasePlatform color="#064E3B" /> {/* Dark Green/Teal */}

            {trees.map((t, i) => (
                <group key={i} position={[t.x, 0, t.z]} scale={[t.s, t.s, t.s]}>
                    <Cylinder args={[0.2, 0.4, 1]} position={[0, 0.5, 0]} castShadow>
                        <meshStandardMaterial color="#4B5563" />
                    </Cylinder>
                    <Cone args={[1, 3, 8]} position={[0, 2.5, 0]} castShadow>
                        <meshStandardMaterial color={colors.teal} />
                    </Cone>
                </group>
            ))}

            {/* Bioluminescent Particles */}
            <Float speed={2} rotationIntensity={1} floatIntensity={1} position={[0, 2, 0]}>
                <Sphere args={[0.2]} position={[1, 0, 1]}>
                    <meshStandardMaterial color={colors.coral} emissive={colors.coral} emissiveIntensity={2} />
                </Sphere>
                <Sphere args={[0.15]} position={[-1, 1, -0.5]}>
                    <meshStandardMaterial color={colors.gold} emissive={colors.gold} emissiveIntensity={2} />
                </Sphere>
            </Float>
        </group>
    );
};

export const EldersScene = () => {
    return (
        <group>
            <BasePlatform color={colors.navy} />
            {/* Circle of Pillars with Flames */}
            {[0, 1, 2, 3, 4, 5].map((i) => {
                const angle = (i / 6) * Math.PI * 2;
                const x = Math.cos(angle) * 3;
                const z = Math.sin(angle) * 3;
                return (
                    <group key={i} position={[x, 0, z]}>
                        <Cylinder args={[0.3, 0.5, 4, 6]} position={[0, 2, 0]} castShadow>
                            <meshStandardMaterial color="#475569" />
                        </Cylinder>
                        {/* Flame */}
                        <Float speed={4} rotationIntensity={0} floatIntensity={0.2}>
                            <Cone args={[0.3, 0.8, 8]} position={[0, 4.5, 0]}>
                                <meshStandardMaterial color={colors.gold} emissive={colors.gold} emissiveIntensity={1} transparent opacity={0.8} />
                            </Cone>
                        </Float>
                    </group>
                );
            })}

            {/* Center Focus */}
            <group position={[0, 1, 0]}>
                <Sphere args={[1.5, 32, 32]}>
                    <meshStandardMaterial color={colors.amber} wireframe />
                </Sphere>
            </group>
        </group>
    );
};
