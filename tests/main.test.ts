import { getUser } from '../src/core/entry'
describe('Returns user data correctly', () => {
  test('Returns name right', async () => {
    var data = await new getUser('darkdarcool').readData()
    expect(data.name).toBe('Dark Boi')
  });
  test('Returns location right', async () => {
    var data = await new getUser('darkdarcool').readData()
    expect(data.location).toBe('California ')
  });
})
