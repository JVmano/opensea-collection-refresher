import { OpenseaRefreshProvider } from '../../providers/implementations/OpenseaRefreshProvider'
import { GetCollectionStatsController } from './GetCollectionStatsController'
import { GetCollectionStatsUseCase } from './GetCollectionStatsUseCase'

const openseaRefreshProvider = new OpenseaRefreshProvider()

const getCollectionUseCase = new GetCollectionStatsUseCase(
  openseaRefreshProvider
)

const getCollectionController = new GetCollectionStatsController(
  getCollectionUseCase
)

export { getCollectionUseCase, getCollectionController }
