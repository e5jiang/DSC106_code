Highcharts.chart('container', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Annual Full TIme Male Student Enrollment Breakdown from 2015-2018'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [{
        name: 'Year',
        colorByPoint: true,
        data: [{
            name: '2015',
            y: 2711
        }, {
            name: '2016',
            y: 2669
        }, {
            name: '2017',
            y: 2725
        }, {
            name: '2018',
            y: 3220
        }]
    }]
});