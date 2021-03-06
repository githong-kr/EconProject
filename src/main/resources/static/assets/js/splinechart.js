function splineChart(dataArray, indicator, title) {

    var dataPoints = [];
    var x;
    var y;
    for( var i = 0; i < dataArray.length; i++) {
        x = new Date(dataArray[i].date.substring(0,4), dataArray[i].date.substring(5,7)-1, dataArray[i].date.substring(8,10), 0);
        if( dataArray[i].rate != 0 ) {
            y = dataArray[i].rate;
        }
        dataPoints.push({x, y});
    }

    var stripLines = [];
    var value, color, labelFontColor, label, interval;
    if( indicator == "credit-spread" ) {
        interval = 2;

        value = 2.0;
        color = "green";
        labelFontColor = "green";
        label = "Average"
        stripLines.push({value, color, labelFontColor, label});

        value = 5.0;
        color = "red";
        labelFontColor = "red";
        label = "Dangerous"
        stripLines.push({value, color, labelFontColor, label});

    } else if( indicator == "tenyr-infl" ) {
        interval = 1;

        value = 2.0;
        color = "green";
        labelFontColor = "green";
        label = "Target"
        stripLines.push({value, color, labelFontColor, label});
    }

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        animationDuration: 2000,
        zoomEnabled: true,
        //title: {text:title},
        axisY: {
            //title: "Rate",
            valueFormatString: "#.##",
            suffix: "%",
            interval: interval,
            stripLines: stripLines
        },
        data: [{
            lineColor:"#f2849e",
            yValueFormatString: "#.##",
            xValueFormatString: "YYYY-MM-DD",
            type: "spline",
            dataPoints: dataPoints
        }]
    });
    chart.render();
}

function splineChart2(dataArray, indicator, title) {

    var dataPoints = [];
    var x;
    var y;
    for( var i = 0; i < dataArray.length; i++) {
        x = new Date(dataArray[i].date.substring(0,4), dataArray[i].date.substring(5,7)-1, dataArray[i].date.substring(8,10), 0);
        if( dataArray[i].rate != 0 ) {
            y = dataArray[i].rate;
        }
        dataPoints.push({x, y});
    }

    var options = {
        series: [{
            name: 'Rate',
            data: dataPoints
        }],
        chart: {
            type: 'area',
            stacked: false,
            height: 350,
            zoom: {
                type: 'x',
                enabled: true,
                autoScaleYaxis: true
            },
            toolbar: {
                autoSelected: 'zoom'
            },
            dropShadow: {
                enabled: false,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 7,
                color: '#000',
                opacity: 1
            }
        },
        dataLabels: {
            enabled: false
        },
        markers: {
            size: 0,
        },
        stroke: {
            width: 1
        },
        title: {
            text: title,
            align: 'left'
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.5,
                opacityTo: 0,
                stops: [0, 90, 100]
            },
        },
        yaxis: {
            labels: {
                formatter: function(val, index) {
                    return val.toFixed(2);
                },
            },
            title: {
                text: 'Rate'
            },
        },
        xaxis: {
            type: 'datetime',
        },
        tooltip: {
            shared: false,
            y: {
                formatter: function(val, index) {
                    return val.toFixed(2);
                }
            }
        },
        responsive: [
            {
                breakpoint: 1000,
                options: {
                    plotOptions: {
                        bar: {
                            horizontal: false
                        }
                    },
                    legend: {
                        position: "bottom"
                    }
                }
            }
        ]
    };

    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
}

function splineChart3(dataArray, indicator, title) {
    var dataPoints = [];
    var x;
    var y;
    for( var i = 0; i < dataArray.length; i++) {
        x = new Date(dataArray[i].date.substring(0,4), dataArray[i].date.substring(5,7)-1, dataArray[i].date.substring(8,10), 0);
        if( dataArray[i].rate != 0 ) {
            y = dataArray[i].rate;
        }
        dataPoints.push({x, y});
    }

    var stripLines = [];
    var value, color, labelFontColor, label, interval;
    if( indicator == "credit-spread" ) {
        interval = 2;

        value = 2.0;
        color = "green";
        labelFontColor = "green";
        label = "Average"
        stripLines.push({value, color, labelFontColor, label});

        value = 5.0;
        color = "red";
        labelFontColor = "red";
        label = "Dangerous"
        stripLines.push({value, color, labelFontColor, label});

    } else if( indicator == "tenyr-infl" ) {
        interval = 1;

        value = 2.0;
        color = "green";
        labelFontColor = "green";
        label = "Target"
        stripLines.push({value, color, labelFontColor, label});
    }

    var ctx = document.getElementById('myChart').getContext('2d');
    ctx.canvas.width = 1000;
    ctx.canvas.height = 300;

    var color = Chart.helpers.color;
    var cfg = {
        data: {
            datasets: [{
                label: title,
                borderColor: "#f2849e",
                data: dataPoints,
                type: 'line',
                pointRadius: 0,
                fill: false,
                lineTension: 0,
                borderWidth: 2
            }]
        },
        options: {
            animation: {
                duration: 2000
            },
            scales: {
                xAxes: [{
                    type: 'time',
                    time: {
                        month: 'YYYY MMM'
                    },
                    distribution: 'series',
                    offset: true,
                    ticks: {
                        major: {
                            enabled: true,
                            fontStyle: 'bold'
                        },
                        source: 'data',
                        autoSkip: true,
                        autoSkipPadding: 75,
                        maxRotation: 0,
                        sampleSize: 100
                    },
                    afterBuildTicks: function(scale, ticks) {
                        var majorUnit = scale._majorUnit;
                        var firstTick = ticks[0];
                        var i, ilen, val, tick, currMajor, lastMajor;

                        val = moment(ticks[0].value);
                        if ((majorUnit === 'minute' && val.second() === 0)
                            || (majorUnit === 'hour' && val.minute() === 0)
                            || (majorUnit === 'day' && val.hour() === 9)
                            || (majorUnit === 'month' && val.date() <= 3 && val.isoWeekday() === 1)
                            || (majorUnit === 'year' && val.month() === 0)) {
                            firstTick.major = true;
                        } else {
                            firstTick.major = false;
                        }
                        lastMajor = val.get(majorUnit);

                        for (i = 1, ilen = ticks.length; i < ilen; i++) {
                            tick = ticks[i];
                            val = moment(tick.value);
                            currMajor = val.get(majorUnit);
                            tick.major = currMajor !== lastMajor;
                            lastMajor = currMajor;
                        }
                        return ticks;
                    }
                }],
                yAxes: [{
                    gridLines: {
                        drawBorder: false
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Rate (%)'
                    }
                }]
            },
            tooltips: {
                intersect: false,
                mode: 'index',
                callbacks: {
                    label: function(tooltipItem, myData) {
                        var label = myData.datasets[tooltipItem.datasetIndex].label || '';
                        if (label) {
                            label += ': ';
                        }
                        label += parseFloat(tooltipItem.value).toFixed(2);
                        return label;
                    }
                }
            }
        }
    };

    var chart = new Chart(ctx, cfg);
}