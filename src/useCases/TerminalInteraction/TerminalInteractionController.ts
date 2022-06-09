import { TerminalInteractionUseCase } from './TerminalInteractionUseCase'

export class TerminalInteractionController {
  // eslint-disable-next-line no-useless-constructor
  constructor (private terminalInteractionUseCase: TerminalInteractionUseCase) {}

  async handle () {
    try {
      const answers = await this.terminalInteractionUseCase.execute()
      return answers
    } catch (error) {
      console.error(`Status: ${error?.response.status}`)
      console.error(`Text: ${error?.response.statusText}`)
      return { success: false }
    }
  }
}
