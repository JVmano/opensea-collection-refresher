export interface IMetadataStats {
  slug: string
  network: string
  api?: string
}

export interface IOpensea {
  slug: string
  address: string
  network: string
  api?: string
}

export interface IMetadataResponseProperties {
  total_supply: number
}

export interface IMetadataResponse {
  stats: IMetadataResponseProperties
}

export interface IRefreshResponseProperty {
  id: number
}

export interface IOpenseaProvider {
  metadata(data: IMetadataStats): Promise<IMetadataResponse>
  refresh(data: IOpensea, supply: number): Promise<IRefreshResponseProperty>
}
