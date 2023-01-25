import React from 'react';
import { TileLayerOptions } from 'leaflet';
import * as ReactLeaflet from 'react-leaflet';

export interface Props {
  /**
   * @param {string[]} subdomains if subdomain is down, try another
   */
  subdomains?: string[];
}

const defaultProps: Props & TileLayerOptions = { subdomains: ['mt0', 'mt1', 'mt2'] };

export default function GoogleLayer(props: Props & TileLayerOptions = defaultProps) {
  return (
    <ReactLeaflet.TileLayer {...defaultProps} {...props} url="https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}" />
  );
}
