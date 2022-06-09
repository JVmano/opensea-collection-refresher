import { OpenseaRefreshProvider } from '../../providers/implementations/OpenseaRefreshProvider'
import { RefreshMetadataController } from './RefreshMetadataController'
import { RefreshMetadataUseCase } from './RefreshMetadataUseCase'

const openseaRefreshProvider = new OpenseaRefreshProvider()

const refreshMetadataUseCase = new RefreshMetadataUseCase(
  openseaRefreshProvider
)

const refreshMetadataController = new RefreshMetadataController(
  refreshMetadataUseCase
)

export { refreshMetadataUseCase, refreshMetadataController }
