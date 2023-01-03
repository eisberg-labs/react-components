import useScript, { ScriptStatus } from '@charlietango/use-script';
import { useEffect } from 'react';

/**
 * Initializes google charts.
 *
 * @param {Function} loadCallback draw chart callback
 * @param {google.LoadOptions} props google.charts.load options e.g. {}
 * @param {string | number} version version of google charts, current by default
 */
export default function useGoogleCharts(
  loadCallback: () => void,
  props: google.LoadOptions,
  version: string | number = 'current'
) {
  const [ready, status] = useScript('https://www.gstatic.com/charts/loader.js');

  useEffect(() => {
    if (status === ScriptStatus.READY) {
      if (!window && !(window as any).google) {
        // shouldn't happen
        return;
      }
      google.charts.load(version, props);
      google.charts.setOnLoadCallback(loadCallback);
    }
  }, [status]);
}
