import { terminalInteractionController } from './useCases/TerminalInteraction'
import { getCollectionController } from './useCases/GetCollectionStats'
import { refreshMetadataController } from './useCases/RefreshMetadata'

(async () => {
  const answers = await terminalInteractionController.handle()
  const supply = await getCollectionController.handle(answers)
  for (let index: number = 1; index < supply; index++) {
    const refresh = await refreshMetadataController.handle(answers, index)
    if (!refresh?.id) {
      console.log('\x1b[31m', `${answers.slug}#${index} ERROR`)
    } else {
      console.log(`${answers.slug}#${index} refreshed`)
    }
  }
})()
