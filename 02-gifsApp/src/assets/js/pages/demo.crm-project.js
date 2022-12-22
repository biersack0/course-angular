!(function (e) {
  'use strict';
  function t() {
    (this.$body = e('body')), (this.charts = []);
  }
  (t.prototype.init = function () {
    this.initCharts();
  }),
    (t.prototype.initCharts = function () {
      var t = ['#727cf5', '#0acf97'],
        o = e('#crm-project-statistics').data('colors'),
        r = {
          chart: { height: 326, type: 'bar', toolbar: { show: !1 } },
          plotOptions: {
            bar: { horizontal: !1, endingShape: 'rounded', columnWidth: '25%' }
          },
          dataLabels: { enabled: !1 },
          stroke: { show: !0, width: 3, colors: ['transparent'] },
          colors: (t = o ? o.split(',') : t),
          series: [
            { name: 'Projects', data: [56, 38, 85, 72, 28, 69, 55, 52, 69] },
            {
              name: 'Working Hours',
              data: [176, 185, 256, 240, 187, 205, 191, 114, 194]
            }
          ],
          xaxis: {
            categories: [
              'Feb',
              'Mar',
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
              'Oct'
            ]
          },
          legend: { offsetY: 7 },
          fill: { opacity: 1 },
          grid: {
            row: { colors: ['transparent', 'transparent'], opacity: 0.2 },
            borderColor: '#f1f3fa',
            padding: { bottom: 5 }
          }
        },
        t =
          (new ApexCharts(
            document.querySelector('#crm-project-statistics'),
            r
          ).render(),
          ['#727cf5', '#0acf97']),
        r = {
          chart: { height: 256, type: 'donut' },
          legend: { show: !1 },
          stroke: { colors: ['transparent'] },
          series: [82, 37],
          labels: ['Done Projects', 'Pending Projects'],
          colors: (t = (o = e('#monthly-target').data('colors'))
            ? o.split(',')
            : t),
          responsive: [
            {
              breakpoint: 480,
              options: { chart: { width: 200 }, legend: { position: 'bottom' } }
            }
          ]
        };
      new ApexCharts(document.querySelector('#monthly-target'), r).render();
    }),
    (e.CrmProject = new t()),
    (e.CrmProject.Constructor = t);
})(window.jQuery),
  (function (o) {
    'use strict';
    o(document).ready(function (t) {
      o.CrmProject.init();
    });
  })(window.jQuery);
var colors = ['#727cf5', '#0acf97', '#fa5c7c', '#ffbc00'],
  dataColors = $('#project-overview-chart').data('colors'),
  options = {
    chart: { height: 326, type: 'radialBar' },
    colors: (colors = dataColors ? dataColors.split(',') : colors),
    series: [85, 70, 80, 65],
    labels: [
      'Product Design',
      'Web Development',
      'Illustration Design',
      'UI/UX Design'
    ],
    plotOptions: { radialBar: { track: { margin: 5 } } }
  },
  chart = new ApexCharts(
    document.querySelector('#project-overview-chart'),
    options
  );
chart.render();