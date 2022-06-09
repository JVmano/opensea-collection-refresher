import { Stats } from '../../entities/Stats'
import { IOpenseaProvider } from '../../providers/IOpenseaProvider'
import { IGetCollectionStatsDTO } from './GetCollectionStatsDTO'

export class GetCollectionStatsUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private IOpenseaProvider: IOpenseaProvider
  ) {}

  async execute (data: IGetCollectionStatsDTO) {
    const stats = new Stats(data)

    const response = await this.IOpenseaProvider.metadata(stats)
    return response
  }
}
