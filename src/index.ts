import { terminalInteractionController } from './useCases/TerminalInteraction'
import { getCollectionController } from './useCases/GetCollectionStats'
import { refreshMetadataController } from './useCases/RefreshMetadata'
import { sleep } from './util/sleep'

;(async () => {
  try {
    const answers = await terminalInteractionController.handle()
    const supply = await getCollectionController.handle(answers)

    await sleep(1000)

    for (let index: number = 1; index <= supply; index++) {
      const refresh = await refreshMetadataController.handle(answers, index)
      if (!refresh?.id) {
        console.log('\x1b[31m', `${answers.slug}#${index} ERROR`)
      } else {
        console.log(`${answers.slug}#${index} refreshed`)
      }
      await sleep(1000)
    }

    console.log(`${answers.slug} fully refreshed!`)
    console.log('[Use CTRL + C to exit]')
  } catch (error) {
    console.error(error, '\n')
  }
})()
