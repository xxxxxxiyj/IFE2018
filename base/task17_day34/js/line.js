function lineChart(data) {
    var lineChart = document.getElementById("line-chart");
    var chartWidth = lineChart.width,
        chartHeight = lineChart.height,
        chartPadding = 25,
        axisWidth = chartWidth - chartPadding,
        axisHeight = chartHeight - chartPadding * 1.5;
    const dataRadius = 5;
    const colors = ["#27a1ea", "#9cdc82", "#ff9f69", "#d660a8", "#6370de", "#32d3eb", "#d4ec59", "#feb64d", "#b55cbd"];
    const dataDis =  48;
    var maxNum = 0;
    var newData = [];

    // 找到数据中的最大值Max  并过滤出数据中的销量数据
    for(let i = 0; i < data.length; i++) {
        if(typeof data[0] != "number") {
            let temp = Math.max(...data[i].sale);
            if(temp > maxNum) {
                maxNum = temp;
            }
            newData.push(data[i].sale);  
        }else {
            maxNum = Math.max(...data);
            newData.push(data[i]);
        }
        
    }
    // console.log(maxNum);

    // 比例折算
    var rate = maxNum / (axisHeight - chartPadding);
    var ctx = lineChart.getContext("2d");
    ctx.clearRect(0,0,chartWidth,chartHeight);
    // 横轴与纵轴
    ctx.beginPath();
    ctx.moveTo(chartPadding, 0);
    ctx.lineTo(chartPadding, axisHeight);
    ctx.lineTo(axisWidth, axisHeight);
    ctx.lineWidth = "2";
    ctx.strokeStyle = "#000";
    // ctx.closePath();
    ctx.stroke();

    // 绘制折线图
    for(let i = 0; i < newData.length; i++) {
        for(let j = 0; j < newData[i].length; j++) {
            let x1 = chartPadding + (j + 1) * dataRadius + (j + 1) * dataDis;
            let y1 = axisHeight - newData[i][j] / rate;
            let x2 = chartPadding + (j + 2) * dataRadius + (j + 2) * dataDis;
            let y2 = axisHeight - newData[i][j + 1] / rate;
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.strokeStyle = colors[i];
            ctx.fillStyle = colors[i];
            ctx.lineWidth = 2;
            ctx.closePath();
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(x1, y1, dataRadius, 0, Math.PI * 2, false);
            ctx.closePath();
            ctx.fill();
        }
    }     
}

