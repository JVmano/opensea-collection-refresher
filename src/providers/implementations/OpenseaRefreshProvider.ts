import axios, { AxiosResponse } from 'axios'
import { IOpensea, IMetadataStats, IOpenseaProvider, IMetadataResponse, IRefreshResponseProperty } from '../IOpenseaProvider'

export class OpenseaRefreshProvider implements IOpenseaProvider {
  private url: string

  async metadata (data: IMetadataStats): Promise<IMetadataResponse> {
    this.url = data.network === 'Mainnet'
      ? `https://api.opensea.io/api/v1/collection/${data.slug}/stats`
      : `https://testnets-api.opensea.io/api/v1/collection/${data.slug}/stats`

    const response: AxiosResponse = await axios.get(this.url, {
      headers: { 'X-API-KEY': data.network === 'Mainnet' ? data.api : '' }
    })

    return response.data
  }

  async refresh (data: IOpensea, supply: number): Promise<IRefreshResponseProperty> {
    this.url = data.network === 'Mainnet'
      ? `https://api.opensea.io/api/v1/asset/${data.address}/${supply}/?force_update=true`
      : `https://testnets-api.opensea.io/api/v1/asset/${data.address}/${supply}/?force_update=true`

    const response: AxiosResponse = await axios.get(this.url, {
      headers: { 'X-API-KEY': data.network === 'Mainnet' ? data.api : '' }
    })

    return response.data
  }
}
