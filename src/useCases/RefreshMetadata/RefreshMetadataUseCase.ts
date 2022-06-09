import { Collection } from '../../entities/Collection'
import { IOpenseaProvider } from '../../providers/IOpenseaProvider'
import { IRefreshMetadataDTO } from './RefreshMetadataDTO'

export class RefreshMetadataUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private IOpenseaProvider: IOpenseaProvider
  ) {}

  async execute (data: IRefreshMetadataDTO, supply: number) {
    const collection = new Collection(data)

    const response = await this.IOpenseaProvider.refresh(collection, supply)
    return response
  }
}
