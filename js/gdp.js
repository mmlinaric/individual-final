// Source: https://www.worldometers.info/gdp/croatia-gdp/

google.charts.load('current', {'packages': ['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var nominalData = google.visualization.arrayToDataTable([
        ['Year', 'GDP Nominal (Billion USD)'],
        ['2003', 35.25],
        ['2004', 41.84],
        ['2005', 45.01],
        ['2006', 49.59],
        ['2007', 59.30],
        ['2008', 68.48],
        ['2009', 62.32],
        ['2010', 58.98],
        ['2011', 62.90],
        ['2012', 57.55],
        ['2013', 59.85],
        ['2014', 59.61],
        ['2015', 51.01],
        ['2016', 52.65],
        ['2017', 56.19],
        ['2018', 61.67],
        ['2019', 61.47],
        ['2020', 57.96],
        ['2021', 69.01],
        ['2022', 71.20],
        ['2023', 84.39]
    ]);

    var nominalOptions = {
        title: 'Croatia GDP Nominal (Current USD)',
        curveType: 'function',
        legend: {position: 'bottom'},
        vAxis: {title: 'Billion USD'},
        width: '100%',
    }

    var chart = new google.visualization.LineChart(document.getElementById("nominal_chart"));
    chart.draw(nominalData, nominalOptions);

    // Growth graph
    var nominalData = google.visualization.arrayToDataTable([
        ['Year', 'GDP Growth Rate (%)'],
        ['2003', 5.57],
        ['2004', 4.17],
        ['2005', 4.33],
        ['2006', 5.08],
        ['2007', 5.05],
        ['2008', 1.97],
        ['2009', -6.81],
        ['2010', -1.33],
        ['2011', -0.10],
        ['2012', -2.25],
        ['2013', -0.13],
        ['2014', -0.56],
        ['2015', 2.32],
        ['2016', 3.46],
        ['2017', 3.28],
        ['2018', 2.90],
        ['2019', 3.10],
        ['2020', -8.31],
        ['2021', 12.63],
        ['2022', 7.29],
        ['2023', 3.30]
    ]);

    var nominalOptions = {
        title: 'Croatia GDP Annual Growth Rate (%)',
        curveType: 'function',
        legend: {position: 'bottom'},
        vAxis: {title: 'Growth Rate (%)'},
        width: '100%',
    }

    var chart = new google.visualization.LineChart(document.getElementById("growth_chart"));
    chart.draw(nominalData, nominalOptions);
}  