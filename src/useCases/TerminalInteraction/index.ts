import { TerminalInteractionController } from './TerminalInteractionController'
import { TerminalInteractionUseCase } from './TerminalInteractionUseCase'

const terminalInteractionUseCase = new TerminalInteractionUseCase()

const terminalInteractionController = new TerminalInteractionController(
  terminalInteractionUseCase
)

export { terminalInteractionUseCase, terminalInteractionController }
