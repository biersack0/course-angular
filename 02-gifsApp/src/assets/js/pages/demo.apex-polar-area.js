var colors = ['#727cf5', '#0acf97', '#fa5c7c'],
  dataColors = $('#basic-polar-area').data('colors'),
  options = {
    series: [14, 23, 21, 17, 15, 10],
    chart: { height: 380, type: 'polarArea' },
    stroke: { colors: ['#fff'] },
    fill: { opacity: 0.8 },
    labels: ['Vote A', 'Vote B', 'Vote C', 'Vote D', 'Vote E', 'Vote F'],
    legend: { position: 'bottom' },
    colors: (colors = dataColors ? dataColors.split(',') : colors),
    responsive: [
      {
        breakpoint: 480,
        options: { chart: { width: 200 }, legend: { position: 'bottom' } }
      }
    ]
  },
  chart = new ApexCharts(document.querySelector('#basic-polar-area'), options),
  options =
    (chart.render(),
    {
      series: [42, 47, 52, 58, 65],
      chart: { height: 380, type: 'polarArea' },
      labels: ['Rose A', 'Rose B', 'Rose C', 'Rose D', 'Rose E'],
      fill: { opacity: 1 },
      stroke: { width: 1 },
      yaxis: { show: !1 },
      legend: { position: 'bottom' },
      plotOptions: {
        polarArea: { rings: { strokeWidth: 0 }, spokes: { strokeWidth: 0 } }
      },
      theme: {
        monochrome: {
          enabled: !0,
          shadeTo: 'light',
          color: '#727cf5',
          shadeIntensity: 0.6
        }
      }
    });
(chart = new ApexCharts(
  document.querySelector('#monochrome-polar-area'),
  options
)).render();
