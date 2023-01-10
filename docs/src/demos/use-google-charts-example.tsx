import {useGoogleCharts} from '@eisberg-labs/use-google-charts';
import {useRef} from 'react';

export default function UseGoogleChartsExample(){
  const chartRef = useRef<HTMLDivElement>();
  useGoogleCharts(() => {
    const data = google.visualization.arrayToDataTable([
      ['Country', 'Popularity'],
      ['Germany', 200],
      ['United States', 300],
      ['Brazil', 400],
      ['Canada', 500],
      ['France', 600],
      ['RU', 700]
    ]);

    const chart = new google.visualization.GeoChart(chartRef.current);

    chart.draw(data, {});}, {
    'packages':['geochart'],
  })

  return (
    <>
      <h4>GeoChart Example</h4>
      <div ref={chartRef}></div>
    </>
  )
}
