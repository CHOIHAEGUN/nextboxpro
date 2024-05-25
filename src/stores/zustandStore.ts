// store.ts
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface BearState {
  bears: number
  increaseBears: () => void
  decreaseBears: () => void
  removeAllBears: () => void
}

export const useBearStore = create<BearState>()(
  persist(
    (set) => ({
      bears: 0,
      increaseBears: () => set((state) => ({ bears: state.bears + 1 })),
      decreaseBears: () => set((state) => ({ bears: state.bears - 1 })),
      removeAllBears: () => set({ bears: 0 })
    }),
    {
      name: 'box-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage) // (optional) by default the 'localStorage' is used
    }
  )
)
