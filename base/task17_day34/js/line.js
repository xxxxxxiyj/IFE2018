function lineChart(data) {
    var lineChart = document.getElementById("line-chart");
    var chartWidth = lineChart.width,
        chartHeight = lineChart.height,
        chartPadding = 25,
        axisWidth = chartWidth - chartPadding,
        axisHeight = chartHeight - chartPadding * 1.5;
    console.log(axisHeight);
    const dataRadius = 2.5;
    const colors = ["#27a1ea", "#9cdc82", "#ff9f69", "#d660a8", "#6370de", "#32d3eb", "#d4ec59", "#feb64d", "#b55cbd"];
    const dataDis =  55;
    var maxNum = 0;

    // 数据中的最大值Max
    for(let i = 0; i < data.length; i++) {
        for(let j = 0; j < data[i].sale.length; j++) {
            let temp = data[i].sale[j];
            if(temp > maxNum) {
                maxNum = temp;
            }
        }
    }
    // console.log(maxNum);

    // 比例折算
    var rate = maxNum / (axisHeight - chartPadding);
    var ctx = lineChart.getContext("2d");
    // 横轴与纵轴
    ctx.beginPath();
    ctx.moveTo(chartPadding, 0);
    ctx.lineTo(chartPadding, axisHeight);
    ctx.lineTo(axisWidth, axisHeight);
    ctx.lineWidth = "2";
    ctx.strokeStyle = "#000";
    // ctx.closePath();
    ctx.stroke();

    for(let i = 0; i < data.length; i++) {
        for(let j = 0; j < data[i].sale.length; j++) {
            let num = parseInt(data[i].sale[j]);
            let x = chartPadding + (j + 1) * dataRadius + (j + 1) * dataDis;
            let y = axisHeight - num / rate;
            ctx.beginPath();
            // console.log(y);
            ctx.arc(x, y, dataRadius, 0, Math.PI * 2, false);
            ctx.fillStyle = colors[i];
            ctx.closePath();
            ctx.fill();

            if(j !== 0 && j !== data[i].sale.length - 1) {
                let lastX = chartPadding + j* dataRadius + j * dataDis;
                let lastY = axisHeight - parseInt(data[i].sale[j - 1]) / rate;
                ctx.beginPath();
                ctx.moveTo(lastX, lastY);
                ctx.lineTo(x, y);
                ctx.strokeStyle = colors[i];
                ctx.lineWidth = 2;
                ctx.closePath();
                ctx.stroke();
            }
        }
    }


}