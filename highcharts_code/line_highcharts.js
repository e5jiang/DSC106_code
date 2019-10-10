var line_container = document.getElementById("container");
Highcharts.chart(line_container, {

    title: {
        text: 'Full Time Male Student Enrollment per Year'
    },


    yAxis: {
        title: {
            text: 'Fulltime Men Enrolled'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2005
        }
    },

    series: [{
        name: 'Fulltime Men Enrolled',
        data: [1607, 2031, 1838, 1893, 1695, 1858, 1583, 2328, 2616, 2538, 2711, 2669, 2725, 3220] 
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});