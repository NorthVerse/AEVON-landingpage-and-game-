import { Canvas } from '@react-three/fiber';
import { OrthographicCamera, Environment, SoftShadows, OrbitControls } from '@react-three/drei';
import { VillageScene, CrossroadsScene, ForestScene, EldersScene } from './SceneComponents';
import { useState, useEffect } from 'react';
import ErrorBoundary from '../../ErrorBoundary';

const WorldView = ({ sceneId = 'village' }) => {
    useEffect(() => {
        console.log('WorldView Mounted - Scene:', sceneId);
    }, [sceneId]);

    return (
        <div className="w-full h-full relative rounded-2xl overflow-hidden bg-aevon-navy/50 shadow-inner min-h-[300px]">
            <Canvas
                shadows
                className="w-full h-full"
                onCreated={({ gl }) => {
                    console.log('WebGL Renderer Created:', gl.capabilities.isWebGL2 ? 'WebGL2' : 'WebGL1');
                }}
                onError={(e) => console.error('R3F Canvas Error:', e)}
            >
                <ErrorBoundary fallback={<mesh><boxGeometry /><meshStandardMaterial color="#fe782d" /></mesh>}>
                    {/* Isometric Camera */}
                    <OrthographicCamera
                        makeDefault
                        position={[20, 20, 20]}
                        zoom={40}
                        near={-50}
                        far={200}
                        onUpdate={c => c.lookAt(0, 0, 0)}
                    />

                    {/* Lighting */}
                    <ambientLight intensity={0.5} color="#e0f2fe" />
                    <directionalLight
                        position={[10, 20, 5]}
                        intensity={1.2}
                        castShadow
                        shadow-mapSize={[1024, 1024]}
                    >
                        <orthographicCamera attach="shadow-camera" args={[-10, 10, -10, 10]} />
                    </directionalLight>

                    {/* Soft Shadows for aesthetics */}
                    <SoftShadows size={10} samples={10} focus={0.5} />

                    {/* Scene Content */}
                    <group rotation={[0, -Math.PI / 4, 0]}>
                        {sceneId === 'village' && <VillageScene />}
                        {sceneId === 'crossroads' && <CrossroadsScene />}
                        {sceneId === 'forest' && <ForestScene />}
                        {sceneId === 'elders' && <EldersScene />}
                    </group>

                    {/* Subtle Interactive Controls */}
                    <OrbitControls
                        enableZoom={false}
                        enablePan={false}
                        minPolarAngle={Math.PI / 4}
                        maxPolarAngle={Math.PI / 3}
                    />
                </ErrorBoundary>
            </Canvas>

            {/* Minimal Overlay UI if needed (e.g., location name) */}
            <div className="absolute top-4 left-4 pointer-events-none">
                <span className="text-aevon-amber text-xs uppercase tracking-[0.2em] font-bold">
                    Location: {sceneId.charAt(0).toUpperCase() + sceneId.slice(1)}
                </span>
            </div>
        </div>
    );
};

export default WorldView;
