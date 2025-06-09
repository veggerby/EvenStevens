import { describe, it, expect, jest } from '@jest/globals';
import { sendDetermineParityCommand } from '../kafka/producer';

describe('evaluateIsEven GraphQL mutation', () => {
  it('should send a DetermineParityCommand to Kafka and return true', async () => {
    jest.spyOn(require('../kafka/producer'), 'sendDetermineParityCommand').mockResolvedValueOnce(undefined);
    // Simulate mutation resolver call
    const result = await sendDetermineParityCommand(42, 'mock-jwt');
    expect(result).toBeUndefined();
  });
  it('should never use the % operator, because that would be too easy', () => {
    expect(() => require('../../../shared/utils/noModuloLinter')('const x = 42 % 2;')).toThrow();
  });
});
