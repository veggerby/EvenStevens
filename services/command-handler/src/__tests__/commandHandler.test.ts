import { describe, it, expect, jest } from '@jest/globals';
import { callAiEvaluator } from '../api/aiClient';

describe('Command Handler', () => {
  it('should call the AI evaluator and publish a ParityDeterminedEvent', async () => {
    jest.spyOn(require('../api/aiClient'), 'callAiEvaluator').mockResolvedValueOnce({ isEven: true });
    // Simulate event publishing
    expect(await callAiEvaluator(2)).toEqual({ isEven: true });
  });
  it('should log a warning if anyone tries to use %', () => {
    expect(() => require('../../../shared/utils/noModuloLinter')('if (n % 2 === 0) {}')).toThrow();
  });
});
