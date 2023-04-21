import { createTestingPinia } from '@pinia/testing';
import { render, screen } from '@testing-library/vue';
import { beforeEach, expect, it } from 'vitest';

import App from '../App.vue';
import { useCounterStore } from '../store/useCounterStore';
beforeEach(() => {
  render(App, {
    store: createTestingPinia({
      stubActions: false,
      initialState: {
        counter: { count: 2 }, // Initial state, totally optional
      },
    }),
  });
});
it('increments value', async () => {
  const counterStore = useCounterStore();
  expect(
    screen.getByText('Vue3 + TS + Pinia + ESLint + Prettier + Vitest + @testing-library'),
  ).toBeInTheDocument();
  expect(counterStore.count).toBe(2);
  counterStore.increment();
  expect(counterStore.count).toBe(3);
});
it('Should check if double is actually right', () => {
  expect(screen.getByTestId('double')).toHaveText('4');
});
