import { TerminalInteractionUseCase } from './TerminalInteractionUseCase'

export class TerminalInteractionController {
  // eslint-disable-next-line no-useless-constructor
  constructor (private terminalInteractionUseCase: TerminalInteractionUseCase) {}

  async handle () {
    try {
      const answers = await this.terminalInteractionUseCase.execute()

      if (!answers) {
        const inputErr = 'Necessary to have at least slug, contract and network informtion'
        throw inputErr
      }

      return answers
    } catch (error) {
      console.error(error)
      return { success: false }
    }
  }
}
