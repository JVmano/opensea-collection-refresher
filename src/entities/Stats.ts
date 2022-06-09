export class Stats {
  public slug: string
  public network: string
  public api: string

  constructor (props: Omit<Stats, 'api'>, api?: string) {
    Object.assign(this, props)

    if (!api) {
      this.api = ''
    }
  }
}
