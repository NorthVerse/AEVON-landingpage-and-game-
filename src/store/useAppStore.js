import { create } from 'zustand';

const useAppStore = create((set) => ({
    isStoryOpen: false, // Might be less used if embedded, but good for focus mode?
    toggleStory: () => set((state) => ({ isStoryOpen: !state.isStoryOpen })),
    openStory: () => set({ isStoryOpen: true }),
    closeStory: () => set({ isStoryOpen: false }),
}));

export default useAppStore;
