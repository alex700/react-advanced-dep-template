// @vitest-environment jsdom
import { afterEach, expect, test } from 'vitest'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { PocketCounter } from './counter'

afterEach(cleanup)

test('counting respects both limits and reset clears the value and timestamp', () => {
    render(<PocketCounter />)
    const increase = screen.getByRole('button', { name: 'Increase count' }) as HTMLButtonElement
    const decrease = screen.getByRole('button', { name: 'Decrease count' }) as HTMLButtonElement
    expect(decrease.disabled).toBe(true)
    fireEvent.click(increase)
    expect(screen.getByLabelText('Count').textContent).toBe('1')
    expect(screen.getByText(/Last changed at/)).toBeTruthy()
    fireEvent.click(decrease)
    expect(screen.getByLabelText('Count').textContent).toBe('0')
    for (let i = 0; i < 105; i++) fireEvent.click(increase)
    expect(screen.getByLabelText('Count').textContent).toBe('99')
    expect(increase.disabled).toBe(true)
    fireEvent.click(screen.getByRole('button', { name: 'Reset' }))
    expect(screen.getByLabelText('Count').textContent).toBe('0')
    expect(screen.getByText('Ready when you are.')).toBeTruthy()
    expect(decrease.disabled).toBe(true)
})
