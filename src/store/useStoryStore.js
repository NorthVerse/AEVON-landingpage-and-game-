import { create } from 'zustand';

export const storyContent = {
    intro: {
        id: 'intro',
        title: "The Village",
        text: "The sun dips below the horizon in an ancient Igbo village, casting long shadows across the red earth. Smoke rises from the thatched roofs as evening settles in like a familiar cloth. The keeper of stories, Nneka, approaches you with a knowing smile. Her eyes reflect the amber glow of the distant fire where elders gather in their sacred circle.",
        cta: "Meet the Mentor",
        next: 'moment1',
        xpReward: 10,
        sceneId: 'village'
    },
    moment1: {
        id: 'moment1',
        title: "The Mentor",
        text: "I am Nneka, she says, her voice like wind through palm fronds. For generations, our ancestors have walked between two worlds—the seen and the unseen. Tonight, you will discover your place in this sacred lineage. She gestures toward the village square where the elders sit in a circle around a quiet fire, their shadows dancing like spirits.",
        cta: "Continue",
        next: 'moment2',
        xpReward: 15,
        sceneId: 'village'
    },
    moment2: {
        id: 'moment2',
        title: "The Crossroads",
        text: "A warm breeze carries the sound of the elders' voices mingling with the crackle of firewood. The scent of palm wine and earth mix in the cooling night air. Nneka's weathered hands gesture with ancient grace. Behind you, the forest darkens into mystery—the path between the great Iroko trees calls softly with forgotten voices. The fire before you glows steadier, more certain.",
        cta: "Choose Your Path",
        next: 'choice',
        xpReward: 20,
        sceneId: 'crossroads'
    },
    choice: {
        id: 'choice',
        title: "Make a Choice",
        text: "Nneka watches you with patient eyes, awaiting your decision.",
        isChoice: true,
        options: [
            {
                id: 'elders',
                label: "Listen to the Elders",
                description: "Sit by the fire and absorb generations of wisdom shared in sacred circle.",
                next: 'outcome_elders',
                reward: { type: 'artifact', name: 'Elder\'s Staff', icon: 'Elder\'s Staff', id: 'elders' }
            },
            {
                id: 'forest',
                label: "Explore the Forest",
                description: "Journey into the moonlit woods and seek secrets hidden among ancient trees.",
                next: 'outcome_forest',
                reward: { type: 'artifact', name: 'Forest Gem', icon: 'Forest Gem', id: 'forest' }
            }
        ],
        sceneId: 'crossroads'
    },
    outcome_elders: {
        id: 'outcome_elders',
        title: "The Ancient Wisdom",
        text: "You sit by the fire. The warmth touches your face as the eldest begins a tale of creation. Sparks fly upward into the night sky, transforming into constellations your ancestors named. The circle closes around you, and you hear stories of courage, of seasons turning, of love that survives time itself. You feel deeply rooted.",
        cta: "Finish Trail",
        next: 'end',
        xpReward: 50,
        sceneId: 'elders'
    },
    outcome_forest: {
        id: 'outcome_forest',
        title: "The Hidden Path",
        text: "You step into the cool embrace of the forest. Bioluminescent fungi light your path like guides from another realm. A soft wind carries voices of the past, whispering forgotten names and ancient songs. You find an ancient carving on an Iroko tree that glows at your touch—symbols that awaken something dormant within your spirit.",
        cta: "Finish Trail",
        next: 'end',
        xpReward: 50,
        sceneId: 'forest'
    },
    end: {
        id: 'end',
        title: "Conclusion",
        text: "The visions fade, but their warmth remains in your chest. You stand once again in the village, but you are changed. Nneka smiles knowingly. You have begun to remember, she says softly. What you have learned tonight is only a beginning.",
        cta: "Restart Journey",
        isEnd: true,
        xpReward: 100,
        sceneId: 'village'
    }
};

const useStoryStore = create((set, get) => ({
    currentNodeId: 'intro',
    stats: {
        level: 1,
        xp: 0,
        trail: 1,
        maxTrails: 3
    },
    inventory: [],

    // Helpers
    getCurrentNode: () => storyContent[get().currentNodeId],

    // Actions
    handleNext: () => {
        const currentNode = get().getCurrentNode();
        if (currentNode.isEnd) {
            get().resetStory();
            return;
        }

        if (currentNode.next) {
            // Award XP if applicable
            if (currentNode.xpReward) {
                set((state) => ({
                    stats: {
                        ...state.stats,
                        xp: state.stats.xp + currentNode.xpReward
                    }
                }));
            }
            set({ currentNodeId: currentNode.next });
        }
    },

    handleChoice: (optionId) => {
        const currentNode = get().getCurrentNode();
        const option = currentNode.options.find(opt => opt.id === optionId);
        if (option) {
            // Add reward if exists
            if (option.reward) {
                set((state) => ({
                    inventory: [...state.inventory, option.reward]
                }));
            }

            // Move to next
            set({ currentNodeId: option.next });
        }
    },

    resetStory: () => {
        set((state) => ({
            currentNodeId: 'intro',
            stats: {
                ...state.stats,
                trail: Math.min(state.stats.trail + 1, state.stats.maxTrails)
            },
            // Optionally clear inventory or keep it between runs
        }));
    }
}));

export default useStoryStore;
