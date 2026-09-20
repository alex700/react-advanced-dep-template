import dayjs from 'dayjs'
import { FiMinus, FiPlus, FiRotateCcw } from 'react-icons/fi'
import { create } from 'zustand'

type CounterState = {
    value: number
    changedAt: string | null
    change: (delta: number) => void
    reset: () => void
}

const useCounter = create<CounterState>((set) => ({
    value: 0,
    changedAt: null,
    change: (delta) => set((state) => ({
        value: Math.max(0, Math.min(99, state.value + delta)),
        changedAt: dayjs().format('HH:mm:ss'),
    })),
    reset: () => set({ value: 0, changedAt: null }),
}))

export function PocketCounter() {
    const { value, changedAt, change, reset } = useCounter()
    return (
        <main>
            <p className="eyebrow">A tiny counting toy</p>
            <h1>Pocket Counter</h1>
            <p>Count cups, laps, or little victories.</p>
            <output aria-label="Count" aria-live="polite">{value}</output>
            <div className="buttons">
                <button aria-label="Decrease count" disabled={value === 0} onClick={() => change(-1)}>
                    <FiMinus aria-hidden="true" />
                </button>
                <button aria-label="Increase count" disabled={value === 99} onClick={() => change(1)}>
                    <FiPlus aria-hidden="true" />
                </button>
                <button onClick={reset}><FiRotateCcw aria-hidden="true" /> Reset</button>
            </div>
            <p className="note">{changedAt ? `Last changed at ${changedAt}` : 'Ready when you are.'}</p>
            <p className="note">0–99 · Refreshing starts over.</p>
        </main>
    )
}
