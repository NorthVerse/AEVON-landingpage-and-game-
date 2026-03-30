import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import StoryInterface from '../components/story/StoryInterface';
import ErrorBoundary from '../components/ErrorBoundary';

const GamePage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        console.log('GamePage Mounted');
    }, []);

    return (
        <div className="w-screen h-screen bg-aevon-charcoal overflow-hidden relative">
            <ErrorBoundary>
                <StoryInterface />
            </ErrorBoundary>

            {/* Overlay Back Button (if StoryInterface doesn't handle it) */}
            <button
                onClick={() => navigate('/')}
                className="absolute top-4 left-4 z-[101] px-4 py-2 bg-aevon-white/10 hover:bg-aevon-white/20 text-aevon-white/80 rounded-full backdrop-blur-md transition-colors text-sm font-medium flex items-center gap-2"
            >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Return Home
            </button>
        </div>
    );
};

export default GamePage;
