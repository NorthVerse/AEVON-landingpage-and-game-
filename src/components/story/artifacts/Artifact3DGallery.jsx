import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import { EldersStaff, ForestGem } from './ArtifactModels';
import { motion, AnimatePresence } from 'framer-motion';
import ErrorBoundary from '../../ErrorBoundary';

const Artifact3DGallery = ({ selectedArtifactId }) => {
    return (
        <div className="w-full h-full relative bg-aevon-navy/30 rounded-2xl overflow-hidden min-h-[200px]">
            <Canvas
                shadows
                dpr={[1, 2]}
                camera={{ position: [0, 0, 4], fov: 50 }}
                onCreated={({ gl }) => console.log('Artifact Canvas Created')}
                onError={(e) => console.error('Artifact Canvas Error:', e)}
            >
                <ErrorBoundary fallback={<mesh><sphereGeometry args={[0.5]} /><meshStandardMaterial color="orange" /></mesh>}>
                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />

                    <Stage environment="city" intensity={0.5}>
                        <AnimatePresence mode="wait">
                            {selectedArtifactId === 'elders' && <EldersStaff />}
                            {selectedArtifactId === 'forest' && <ForestGem />}
                        </AnimatePresence>
                    </Stage>

                    <OrbitControls autoRotate autoRotateSpeed={4} enableZoom={false} />
                </ErrorBoundary>
            </Canvas>

            {/* Empty State Overlay */}
            {!selectedArtifactId && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="text-aevon-white/20 text-sm uppercase tracking-widest text-center px-4">
                        Select an artifact to inspect
                    </span>
                </div>
            )}
        </div>
    );
};

export default Artifact3DGallery;
