import { describe, it, expect } from '@jest/globals'
import { sleep } from '../../util/sleep'
import { refreshMetadataController } from '../RefreshMetadata'

describe('refreshMetadataController', () => {
  it('should verify refreshMetadataController first data treatment', async () => {
    let error: any

    try {
      await refreshMetadataController.handle({
        slug: '',
        address: '',
        network: 'Testnet',
        api: ''
      }, 1)
    } catch (err) {
      error = err
    }

    expect(error).toBe('Missing mandatory data')
  })

  it('should verify refreshMetadataController second data treatment', async () => {
    let error: any

    try {
      await refreshMetadataController.handle({
        slug: 'weird-guys-v2',
        address: '0x02e1ad7788c4539b89bc8d46ba66e58363e3fb32',
        network: 'Mainnet',
        api: ''
      }, 1)
    } catch (err) {
      error = err
    }

    expect(error).toBe('Missing API Key for mainnet requests')
  })

  it('should check refreshMetadataController if has a valid response', async () => {
    await sleep(1000)
    const response = await refreshMetadataController.handle({
      slug: 'weird-guys-v2',
      address: '0x02e1ad7788c4539b89bc8d46ba66e58363e3fb32',
      network: 'Testnet',
      api: ''
    }, 1)

    expect(response).toBeDefined()
    expect(typeof response).toBe('object')
    expect(response).toHaveProperty('asset_contract.address')
  })
})
