import { useState } from 'react';
import StatsPanel from './StatsPanel';
import StoryPanel from './StoryPanel';
import ChoiceSystem from './ChoiceSystem';
import Artifact3DGallery from './artifacts/Artifact3DGallery';
import WorldView from './scenes/WorldView';
import useStoryStore from '../../store/useStoryStore';


const StoryInterface = () => {
    // Connect to Zustand Store
    const currentNodeId = useStoryStore((state) => state.currentNodeId);
    const stats = useStoryStore((state) => state.stats);
    const inventory = useStoryStore((state) => state.inventory);

    const getCurrentNode = useStoryStore((state) => state.getCurrentNode);
    const handleNext = useStoryStore((state) => state.handleNext);
    const handleChoice = useStoryStore((state) => state.handleChoice);
    const resetStory = useStoryStore((state) => state.resetStory);

    // Local state for gallery interaction
    const [selectedArtifactId, setSelectedArtifactId] = useState(null);

    const currentNode = getCurrentNode();

    // Diagnostic Logs
    useState(() => {
        console.log('StoryInterface Mounted');
        console.log('Initial currentNodeId:', currentNodeId);
        if (!currentNode) {
            console.error('CRITICAL: currentNode is undefined! State:', useStoryStore.getState());
        } else {
            console.log('Initial currentNode:', currentNode);
        }
    });

    if (!currentNode) {
        return (
            <div className="w-full h-screen flex flex-col items-center justify-center bg-aevon-navy text-aevon-white p-8">
                <h2 className="text-2xl font-bold mb-4">Story Data Missing</h2>
                <p className="text-aevon-cream/60 mb-6">We couldn't load the story state. Please try restarting.</p>
                <button
                    onClick={() => window.location.href = '/'}
                    className="px-6 py-3 bg-aevon-teal text-white rounded-full font-bold"
                >
                    Return Home
                </button>
            </div>
        );
    }

    // Determine action based on node type
    const onMainAction = () => {
        if (currentNode.isEnd) {
            resetStory();
        } else {
            handleNext();
        }
    };

    // Auto-select latest artifact
    if (inventory.length > 0 && !selectedArtifactId) {
        // Default to the last one (simple logic for demo)
        // In prod, use useEffect to track changes
    }

    return (
        <div className="w-full h-screen max-h-screen bg-aevon-navy/90 backdrop-blur-xl border border-aevon-white/10 rounded-none lg:rounded-3xl overflow-hidden flex flex-col font-sans shadow-2xl relative">
            {/* Background Ambiance inside the container */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent pointer-events-none" />

            {/* Top Bar: Stats */}
            <div className="shrink-0 z-20 bg-aevon-navy/95 border-b border-aevon-white/5">
                <StatsPanel stats={stats} />
            </div>

            {/* Main Content Grid */}
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 min-h-0 relative z-10 overflow-hidden">

                {/* Left: World View (Hidden on Mobile, visible on Desktop) */}
                <div className="hidden lg:block lg:col-span-4 h-full border-r border-aevon-white/5 bg-aevon-navy/40 relative overflow-hidden">
                    <WorldView sceneId={currentNode.sceneId || 'village'} />
                </div>

                {/* Center: Narrative - Takes full width on mobile */}
                <div className="col-span-1 lg:col-span-5 flex flex-col h-full relative overflow-hidden">
                    <div className="flex-1 overflow-y-auto custom-scrollbar p-4 md:p-6">
                        <StoryPanel
                            currentNode={currentNode}
                            onNext={onMainAction}
                        />
                    </div>
                    {/* Choices Area */}
                    <div className="shrink-0 p-4 md:p-6 border-t border-aevon-white/5 bg-aevon-navy/60">
                        {currentNode.isChoice && (
                            <ChoiceSystem
                                options={currentNode.options}
                                onChoice={handleChoice}
                            />
                        )}
                    </div>
                </div>

                {/* Right: Artifact Gallery (Hidden on Mobile) */}
                <div className="hidden lg:flex lg:col-span-3 h-full flex-col border-l border-aevon-white/5 bg-aevon-navy/40 relative overflow-hidden">
                    {/* 3D Preview (Top Half) */}
                    <div className="h-1/2 w-full p-4 border-b border-aevon-white/5">
                        <Artifact3DGallery selectedArtifactId={selectedArtifactId} />
                    </div>

                    {/* Inventory List (Bottom Half) */}
                    <div className="flex-1 p-4 overflow-y-auto">
                        <h3 className="text-xs uppercase tracking-widest text-aevon-white/40 mb-4">Collection</h3>
                        <div className="space-y-2">
                            {inventory.length === 0 && (
                                <p className="text-sm text-aevon-white/20 italic">No artifacts collected yet.</p>
                            )}
                            {inventory.map((item, i) => (
                                <button
                                    key={i}
                                    onClick={() => setSelectedArtifactId(item.id)}
                                    className={`w-full flex items-center p-3 rounded-lg border transition-all ${selectedArtifactId === item.id
                                        ? 'bg-aevon-teal/20 border-aevon-teal text-aevon-white'
                                        : 'bg-aevon-white/5 border-transparent text-aevon-white/60 hover:bg-aevon-white/10'
                                        }`}
                                >
                                    <span className="text-xl mr-3">{/* Fallback Icon if needed */}🔮</span>
                                    <span className="text-sm font-medium">{item.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StoryInterface;
