import inquirer from 'inquirer'
import chalk from 'chalk'
import figlet from 'figlet'

export class TerminalInteractionUseCase {
  async execute () {
    try {
      console.log(
        chalk.green(
          figlet.textSync('Opensea Refresher', {
            font: 'Doom',
            horizontalLayout: 'default',
            verticalLayout: 'default'
          })
        )
      )

      const questions: Array<Object> = [
        {
          name: 'slug',
          type: 'input',
          message: 'Type the collection slug wanted:'
        },
        {
          name: 'address',
          type: 'input',
          message: 'Type the contract address:'
        },
        {
          name: 'network',
          type: 'list',
          message: 'Which network the collection are? [ETH]',
          choices: ['Mainnet', 'Testnet']
        },
        {
          name: 'api',
          type: 'input',
          message: 'If the collection are in Mainnet. Type your Opensea API Key'
        }
      ]

      return inquirer.prompt(questions)
    } catch (error) {
      console.error(error)
      process.exit(1)
    }
  }
}
