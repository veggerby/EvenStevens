import { describe, it, expect, jest, afterEach } from '@jest/globals';
import { sendDetermineParityCommand } from '../kafka/producer';
// @ts-ignore
const noModuloLinter = require('../../../shared/utils/noModuloLinter');

afterEach(() => {
  jest.restoreAllMocks();
});

describe('evaluateIsEven GraphQL mutation', () => {
  it('should send a DetermineParityCommand to Kafka and return true', async () => {
    jest.spyOn(sendDetermineParityCommand, 'bind').mockReturnValueOnce(async () => undefined);
    const result = await sendDetermineParityCommand(42, 'mock-jwt');
    expect(result).toBeUndefined();
  });
  it('should never use the % operator, because that would be too easy', () => {
    expect(() => noModuloLinter('const x = 42 % 2;')).toThrow();
  });
  it('should log a sarcastic message', () => {
    console.log('If this test fails, you probably used the modulo operator. Shame.');
    expect(true).toBe(true);
  });
});
