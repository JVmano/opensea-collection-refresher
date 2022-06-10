import { IGetCollectionStatsDTO } from './GetCollectionStatsDTO'
import { GetCollectionStatsUseCase } from './GetCollectionStatsUseCase'

export class GetCollectionStatsController {
  // eslint-disable-next-line no-useless-constructor
  constructor (private getCollectionStatsUseCase: GetCollectionStatsUseCase) {}

  async handle (data: IGetCollectionStatsDTO) {
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
      const response = await this.getCollectionStatsUseCase.execute({
        slug,
        address,
        network,
        api
      })

      return response.stats.total_supply
    } catch (error) {
      console.error(`Status: ${error?.response.status}`)
      console.error(`Text: ${error?.response.statusText}`)
      return 0
    }
  }
}
