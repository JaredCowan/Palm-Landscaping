!(function($) {
  $(document).on("ready", function() {
    var job_data = [
      {"month": "2015-12", "quote": 407, "invoice": 1660, "job": 40},
      {"month": "2015-11", "quote": 351, "invoice": 629, "job":  40},
      {"month": "2015-10", "quote": 3269, "invoice": 618, "job": 340},
      {"month": "2015-09", "quote": 3246, "invoice": 961, "job": 840},
      {"month": "2015-08", "quote": 3171, "invoice": 2676, "job": 740},
      {"month": "2015-07", "quote": 3155, "invoice": 3681, "job": 240},
      {"month": "2015-06", "quote": 2226, "invoice": 4620, "job": 140},
      {"month": "2015-05", "quote": 3245, "invoice": 2567, "job": 40},
      {"month": "2015-04", "quote": 2289, "invoice": 3428, "job": 40},
      {"month": "2015-03", "quote": 5245, "invoice": 4245, "job": 440},
      {"month": "2015-02", "quote": 1245, "invoice": 1300, "job": 40},
      {"month": "2015-01", "quote": 2245, "invoice": 2209, "job": 140}
    ];

    var time_data = [
      {"day": "2015-07-07", "projected": 1, "actual": 1},
      {"day": "2015-07-06", "projected": 7, "actual": 4},
      {"day": "2015-07-05", "projected": 2, "actual": 2},
      {"day": "2015-07-04", "projected": 6, "actual": 6},
      {"day": "2015-07-03", "projected": 4, "actual": 7},
      {"day": "2015-07-02", "projected": 9, "actual": 7},
      {"day": "2015-07-01", "projected": 7, "actual": 7}
    ];

    var customer_data = [
      {"month": "2015-12", "rating": 97},
      {"month": "2015-11", "rating": 95},
      {"month": "2015-10", "rating": 96},
      {"month": "2015-09", "rating": 94},
      {"month": "2015-08", "rating": 89},
      {"month": "2015-07", "rating": 89},
      {"month": "2015-06", "rating": 85},
      {"month": "2015-05", "rating": 80},
      {"month": "2015-04", "rating": 83},
      {"month": "2015-03", "rating": 83},
      {"month": "2015-02", "rating": 79},
      {"month": "2015-01", "rating": 75}
    ];

    var marketing_data = [
      {"month": "2015-12", "new": 37, "email": 37, "search": 37},
      {"month": "2015-11", "new": 29, "email": 20, "search": 09},
      {"month": "2015-10", "new": 24, "email": 13, "search": 11},
      {"month": "2015-09", "new": 21, "email": 10, "search": 11},
      {"month": "2015-08", "new": 17, "email": 13, "search": 04},
      {"month": "2015-07", "new": 17, "email": 11, "search": 06},
      {"month": "2015-06", "new": 17, "email": 19, "search": 8},
      {"month": "2015-05", "new": 15, "email": 8, "search": 7},
      {"month": "2015-04", "new": 16, "email": 4, "search": 12},
      {"month": "2015-03", "new": 15, "email": 4, "search": 11},
      {"month": "2015-02", "new": 12, "email": 2, "search": 10},
      {"month": "2015-01", "new": 09, "email": 4, "search": 5}
    ];

    var initCharts = function() {
      Morris.Line({
        element: 'job-graph',
        data: job_data,
        xkey: 'month',
        ykeys: ['quote', 'invoice', "job"],
        labels: ['Quotes', 'Invoices', "Jobs"],
        lineColors:['#8075c4','#f00', '#ffcc00']
      });

      Morris.Line({
        element: 'time-graph',
        data: time_data,
        xkey: 'day',
        ykeys: ['projected', 'actual'],
        labels: ['Projected', 'Actual'],
        lineColors:['#8075c4','#f00']
      });

      Morris.Line({
        element: 'customer-graph',
        data: customer_data,
        xkey: 'month',
        ymax: 100,
        goals: [100],
        goalStrokeWidth: 1,
        goalLineColors: ['#4CFF00'],
        ykeys: ['rating'],
        labels: ['Rating'],
        lineColors:['#8075c4','#f00', '#ffcc00']
      });

      Morris.Line({
        element: 'marketing-graph',
        data: marketing_data,
        xkey: 'month',
        ykeys: ['new', 'email', "search"],
        labels: ['New Customers', 'Email', "Search"],
        lineColors:['#4CFF00', '#8075c4', '#ffcc00']
      });
    };

    $(window).on("resize load", function() {
      $(".refresh-graph").html("");
      initCharts();
    });
  });
})(jQuery);
