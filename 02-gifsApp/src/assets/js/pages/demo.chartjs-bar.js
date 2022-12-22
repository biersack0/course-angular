function hexToRGB(t, a) {
  var e = parseInt(t.slice(1, 3), 16),
    o = parseInt(t.slice(3, 5), 16),
    t = parseInt(t.slice(5, 7), 16);
  return a
    ? 'rgba(' + e + ', ' + o + ', ' + t + ', ' + a + ')'
    : 'rgb(' + e + ', ' + o + ', ' + t + ')';
}
!(function (e) {
  'use strict';
  function t() {
    (this.$body = e('body')),
      (this.charts = []),
      (this.defaultColors = ['#727cf5', '#0acf97', '#fa5c7c', '#ffbc00']);
  }
  (t.prototype.borderRadiusExample = function () {
    var t = document.getElementById('border-radius-example'),
      a = t.getAttribute('data-colors'),
      a = a ? a.split(',') : this.defaultColors,
      t = t.getContext('2d'),
      t = new Chart(t, {
        type: 'bar',
        data: {
          labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
          datasets: [
            {
              label: 'Fully Rounded',
              data: [12, -19, 14, -15, 12, -14],
              borderColor: a[0],
              backgroundColor: hexToRGB(a[0], 0.3),
              borderWidth: 2,
              borderRadius: Number.MAX_VALUE,
              borderSkipped: !1
            },
            {
              label: 'Small Radius',
              data: [-10, 19, -15, -8, 12, -7],
              backgroundColor: hexToRGB(a[1], 0.3),
              borderColor: a[1],
              borderWidth: 2,
              borderRadius: 5,
              borderSkipped: !1
            }
          ]
        },
        options: {
          responsive: !0,
          maintainAspectRatio: !1,
          plugins: { legend: { display: !1, position: 'top' } },
          scales: { x: { grid: { display: !1 } }, y: { grid: { display: !1 } } }
        }
      });
    this.charts.push(t);
  }),
    (t.prototype.floatingBarExample = function () {
      var t = document.getElementById('floating-example'),
        a = t.getAttribute('data-colors'),
        a = a ? a.split(',') : this.defaultColors,
        t = t.getContext('2d'),
        t = new Chart(t, {
          type: 'bar',
          data: {
            labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
            datasets: [
              {
                label: 'Fully Rounded',
                data: [12, -19, 14, -15, 12, -14],
                backgroundColor: a[0]
              },
              {
                label: 'Small Radius',
                data: [-10, 19, -15, -8, 12, -7],
                backgroundColor: a[1]
              }
            ]
          },
          options: {
            responsive: !0,
            maintainAspectRatio: !1,
            plugins: { legend: { display: !1, position: 'top' } },
            scales: {
              x: { grid: { display: !1 } },
              y: { grid: { display: !1 } }
            }
          }
        });
      this.charts.push(t);
    }),
    (t.prototype.horizontalExample = function () {
      var t = document.getElementById('horizontal-example'),
        a = t.getAttribute('data-colors'),
        a = a ? a.split(',') : this.defaultColors,
        t = t.getContext('2d'),
        t = new Chart(t, {
          type: 'bar',
          data: {
            labels: ['Jan', 'Feb', 'March', 'April'],
            datasets: [
              {
                label: 'Fully Rounded',
                data: [12, -19, 14, -15],
                borderColor: a[0],
                backgroundColor: hexToRGB(a[0], 0.3),
                borderWidth: 1
              },
              {
                label: 'Small Radius',
                data: [-10, 19, -15, -8],
                backgroundColor: hexToRGB(a[1], 0.3),
                borderColor: a[1],
                borderWidth: 1
              }
            ]
          },
          options: {
            indexAxis: 'y',
            responsive: !0,
            maintainAspectRatio: !1,
            plugins: { legend: { display: !1, position: 'top' } },
            scales: {
              x: { grid: { display: !1 } },
              y: { grid: { display: !1 } }
            }
          }
        });
      this.charts.push(t);
    }),
    (t.prototype.stackedExample = function () {
      var t = document.getElementById('stacked-example'),
        a = t.getAttribute('data-colors'),
        a = a ? a.split(',') : this.defaultColors,
        t = t.getContext('2d'),
        t = new Chart(t, {
          type: 'bar',
          data: {
            labels: ['Jan', 'Feb', 'March', 'April'],
            datasets: [
              {
                label: 'Dataset 1',
                data: [12, -19, 14, -15],
                backgroundColor: a[0]
              },
              {
                label: 'Dataset 2',
                data: [-10, 19, -15, -8],
                backgroundColor: a[1]
              },
              {
                label: 'Dataset 3',
                data: [-10, 19, -15, -8],
                backgroundColor: a[2]
              }
            ]
          },
          options: {
            responsive: !0,
            maintainAspectRatio: !1,
            plugins: { legend: { display: !1, position: 'top' } },
            scales: {
              x: { stacked: !0, grid: { display: !1 } },
              y: { stacked: !0, grid: { display: !1 } }
            }
          }
        });
      this.charts.push(t);
    }),
    (t.prototype.groupStackedExample = function () {
      var t = document.getElementById('group-stack-example'),
        a = t.getAttribute('data-colors'),
        a = a ? a.split(',') : this.defaultColors,
        t = t.getContext('2d'),
        t = new Chart(t, {
          type: 'bar',
          data: {
            labels: ['Jan', 'Feb', 'March', 'April'],
            datasets: [
              {
                label: 'Dataset 1',
                data: [12, -19, 14, -15],
                backgroundColor: a[0],
                stack: 'Stack 0'
              },
              {
                label: 'Dataset 2',
                data: [-10, 19, -15, -8],
                backgroundColor: a[1],
                stack: 'Stack 0'
              },
              {
                label: 'Dataset 3',
                data: [-10, 19, -15, -8],
                backgroundColor: a[2],
                stack: 'Stack 1'
              }
            ]
          },
          options: {
            responsive: !0,
            maintainAspectRatio: !1,
            plugins: { legend: { display: !1, position: 'top' } },
            scales: {
              x: { stacked: !0, grid: { display: !1 } },
              y: { stacked: !0, grid: { display: !1 } }
            }
          }
        });
      this.charts.push(t);
    }),
    (t.prototype.verticalExample = function () {
      var t = document.getElementById('vertical-example'),
        a = t.getAttribute('data-colors'),
        a = a ? a.split(',') : this.defaultColors,
        t = t.getContext('2d'),
        t = new Chart(t, {
          type: 'bar',
          data: {
            labels: ['Jan', 'Feb', 'March', 'April'],
            datasets: [
              {
                label: 'Dataset 1',
                data: [12, -19, 14, -15],
                backgroundColor: a[0]
              },
              {
                label: 'Dataset 2',
                data: [-10, 19, -15, -8],
                backgroundColor: a[1]
              }
            ]
          },
          options: {
            responsive: !0,
            maintainAspectRatio: !1,
            plugins: { legend: { display: !1, position: 'top' } },
            scales: {
              x: { grid: { display: !1 } },
              y: { grid: { display: !1 } }
            }
          }
        });
      this.charts.push(t);
    }),
    (t.prototype.init = function () {
      var a = this;
      (Chart.defaults.font.family =
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif'),
        (Chart.defaults.color = '#8391a2'),
        (Chart.defaults.scale.grid.color = '#8391a2'),
        this.borderRadiusExample(),
        this.floatingBarExample(),
        this.horizontalExample(),
        this.stackedExample(),
        this.groupStackedExample(),
        this.verticalExample(),
        e(window).on('resizeEnd', function (t) {
          e.each(a.charts, function (t, a) {
            try {
              a.destroy();
            } catch (t) {}
          }),
            a.borderRadiusExample(),
            a.floatingBarExample(),
            a.horizontalExample(),
            a.stackedExample(),
            a.groupStackedExample(),
            a.verticalExample();
        }),
        e(window).resize(function () {
          this.resizeTO && clearTimeout(this.resizeTO),
            (this.resizeTO = setTimeout(function () {
              e(this).trigger('resizeEnd');
            }, 500));
        });
    }),
    (e.ChartJs = new t()),
    (e.ChartJs.Constructor = t);
})(window.jQuery),
  (function () {
    'use strict';
    window.jQuery.ChartJs.init();
  })();
