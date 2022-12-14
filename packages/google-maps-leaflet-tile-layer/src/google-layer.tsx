import React from 'react';
import {TileLayerOptions} from 'leaflet';
import {TileLayer} from 'react-leaflet';

export interface Props {
  /**
   * @param {string[]} subdomains if subdomain is down, try another
   */
  subdomains ?: string[]
}

const defaultProps: Props & TileLayerOptions = { subdomains: ['mt0', 'mt1', 'mt2'] };

export default function GoogleLayer({subdomains}: Props & TileLayerOptions = defaultProps) {
  return <TileLayer url="https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
                    subdomains={subdomains}/>
}
