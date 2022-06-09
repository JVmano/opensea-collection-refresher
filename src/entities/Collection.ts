export class Collection {
  public slug: string
  public address: string
  public network: string
  public api: string

  constructor (props: Omit<Collection, 'api'>, api?: string) {
    Object.assign(this, props)

    if (!api) {
      this.api = ''
    }
  }
}
