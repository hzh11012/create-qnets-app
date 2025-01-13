import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface State {
    count: number;
}

interface Action {
    setCount: (value: State['count']) => void;
}

const homeStore = create(
    persist<State & Action>(
        set => ({
            count: 0,
            setCount: value => {
                set(() => ({ count: value }));
            }
        }),
        {
            name: 'home-store',
            storage: createJSONStorage(() => localStorage)
        }
    )
);

export { homeStore };
