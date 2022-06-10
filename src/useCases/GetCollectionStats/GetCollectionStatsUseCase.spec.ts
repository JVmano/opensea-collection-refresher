import { describe, it, expect } from '@jest/globals'
import { getCollectionController } from '../GetCollectionStats'

describe('GetCollectionStats', () => {
  it('should verify GetCollectionStats stats first data treatment', async () => {
    let error: any

    try {
      await getCollectionController.handle({
        slug: '',
        address: '',
        network: 'Testnet',
        api: ''
      })
    } catch (err) {
      error = err
    }

    expect(error).toBe('Missing mandatory data')
  })

  it('should verify GetCollectionStats stats second data treatment', async () => {
    let error: any

    try {
      await getCollectionController.handle({
        slug: 'weird-guys-v2',
        address: '0x02e1ad7788c4539b89bc8d46ba66e58363e3fb32',
        network: 'Mainnet',
        api: ''
      })
    } catch (err) {
      error = err
    }

    expect(error).toBe('Missing API Key for mainnet requests')
  })

  it('should check GetCollectionStats supply response', async () => {
    const supply = await getCollectionController.handle({
      slug: 'weird-guys-v2',
      address: '0x02e1ad7788c4539b89bc8d46ba66e58363e3fb32',
      network: 'Testnet',
      api: ''
    })

    expect(supply).toBeDefined()
    expect(typeof supply).toBe('number')
  })
})
