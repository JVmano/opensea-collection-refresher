import { RefreshMetadataUseCase } from './RefreshMetadataUseCase'
import { IRefreshMetadataDTO } from './RefreshMetadataDTO'

export class RefreshMetadataController {
  // eslint-disable-next-line no-useless-constructor
  constructor (private refreshMetadataUseCase: RefreshMetadataUseCase) {}

  async handle (data: IRefreshMetadataDTO, supply: number) {
    const { slug, address, network, api } = data

    if (!slug || !address || !network) {
      const dataErr = 'Missing mandatory data'
      throw dataErr
    }

    if (network === 'Mainnet' && !api) {
      const apiErr = 'Missing API Key for mainnet requests'
      throw apiErr
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
