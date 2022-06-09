import { RefreshMetadataUseCase } from './RefreshMetadataUseCase'
import { IRefreshMetadataDTO } from './RefreshMetadataDTO'

export class RefreshMetadataController {
  // eslint-disable-next-line no-useless-constructor
  constructor (private refreshMetadataUseCase: RefreshMetadataUseCase) {}

  async handle (data: IRefreshMetadataDTO, supply: number) {
    const { slug, address, network, api } = data

    if (!slug || !address || !network) {
      throw new Error('Missing mandatory data')
    }

    if (network === 'Mainnet' && !api) {
      throw new Error('Missing API Key for mainnet requests')
    }

    try {
      const response = await this.refreshMetadataUseCase.execute({
        slug,
        address,
        network,
        api
      }, supply)
      return response
    } catch (error) {
      console.error(`Status: ${error?.response.status}`)
      console.error(`Text: ${error?.response.statusText}`)
    }
  }
}
