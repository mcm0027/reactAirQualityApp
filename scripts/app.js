google.charts.load('current', {'packages':['line', 'corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var chartDiv = document.getElementById('chart_div');

    var data = new google.visualization.DataTable();
    data.addColumn('date', 'Month');
    data.addColumn('number', "City Air Quality");
    data.addColumn('number', "National Average Air Quality");

    data.addRows([
        [new Date(2014, 1, 1),  -.5,  5.7],
        [new Date(2014, 1, 2),   .4,  8.7],
        [new Date(2014, 1, 3),   .5,   12],
        [new Date(2014, 1, 4),  2.9, 15.3],
        [new Date(2014, 1, 5),  6.3, 18.6],
        [new Date(2014, 1, 6),    9, 20.9],
        [new Date(2014, 1, 7), 10.6, 19.8],
        [new Date(2014, 1, 8), 10.3, 16.6],
        [new Date(2014, 1, 9),  7.4, 13.3],
        [new Date(2014, 1, 10),  4.4,  9.9],
        [new Date(2014, 1, 11), 1.1,  6.6],
        [new Date(2014, 1, 12), -.2,  4.5],
        [new Date(2014, 1, 13), -.2,  4.5],
        [new Date(2014, 1, 14), -.2,  4.5]
    ]);

    var classicOptions = {
        title: 'Air Quality Over Two Week Period Compared to National Average',
        width: 900,
        height: 500,
        // Gives each series an axis that matches the vAxes number below.
        series: {
            0: {targetAxisIndex: 0},
            1: {targetAxisIndex: 1}
        },
        // vAxes: {
        //     // Adds titles to each axis.
        //     0: {title: 'City'},
        //     1: {title: 'Country'}
        // },
        hAxis: {
            ticks: [new Date(2014, 1, 1),
                // new Date(2014, 1, 2),
                new Date(2014, 1, 3),
                // new Date(2014, 1, 4),
                new Date(2014, 1, 5),
                // new Date(2014, 1, 6),
                new Date(2014, 1, 7),
                // new Date(2014, 1, 8),
                new Date(2014, 1, 9),
                // new Date(2014, 1, 10),
                new Date(2014, 1, 11),
                // new Date(2014, 1, 12),
                new Date(2014, 1, 13),
                // new Date(2014, 1, 14)
            ]
        },
        vAxis: {
            viewWindow: {
                max: 30
            }
        },
        fontSize: 14

    };


    function drawClassicChart() {
        var classicChart = new google.visualization.LineChart(chartDiv);
        classicChart.draw(data, classicOptions);
    }

    drawClassicChart();

}