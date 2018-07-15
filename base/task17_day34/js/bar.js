/* 绘制柱状图 */
function drawBar(data) {
	var barGraph = document.querySelector("#bar-graph");
	var graphWidth = 700;  // 图像区域的宽度
	var graphHeight = 300; // 图像区域的高度
	const graphPadding = 25; 
	const axisWidth = graphWidth - graphPadding; // x轴的宽度
	const axisHeight = graphHeight - graphPadding * 1.5;  // y轴的高度
	const barGap = 12;   // 柱子的间隔宽度
	const barWidth = ((axisWidth - barGap * 15) / 12) / data.length; // 一个柱子的宽度
	const barColor = ["#27a1ea", "#9cdc82", "#ff9f69", "#d660a8", "#6370de", "#32d3eb", "#d4ec59", "#feb64d", "#b55cbd"];
	// const barColor = ["#17139c", "#9cdc82", "#ff9f69", "#d660a8", "#6370de", "#32d3eb", "#d4ec59", "#feb64d", "#b55cbd"];
	const axisColor = "#000";	
	var dataMax = 0;
	var newData = [];

	barGraph.setAttribute("width", graphWidth);
	barGraph.setAttribute("height", graphHeight);

	// 	拿到柱状图中的最大值Max
	for(let i = 0; i < data.length; i++) {
		if(typeof data[0] != "number") {
			let temp = Math.max(...data[i].sale);
			if(temp > dataMax) {
				dataMax = temp;
			}
			newData.push(data[i].sale);
		}else {
			dataMax = Math.max(...data);
			newData.push(data[i]);
		}		
	}
	// console.log(newData.length);

	// 	数据和像素的折算比例
	var rate = dataMax / (axisHeight - graphPadding);

	// 	绘制横轴及纵轴
	let barHtml = [];
	barHtml.push("<line x1=" + graphPadding + " y1=0 x2=" + graphPadding + " y2=" + axisHeight + " stroke=" + axisColor + " stroke-width='2'/>");
	barHtml.push("<line x1=" + graphPadding + " y1=" + axisHeight + " x2=" + axisWidth + " y2=" + axisHeight + " stroke=" + axisColor + " stroke-width='2'/>");
	
	// 绘制柱状图
	for(let i = 0; i < newData.length; i++) {
		for(let j = 0; j < newData[i].length; j++) {
			let num = parseInt(newData[i][j]);
			let barBlock = data.length * barWidth;
			let x = graphPadding + (j + 1) * barGap + i * barWidth + j * barBlock;
			barHtml.push("<rect width=" + barWidth + " height=" + (num / rate) + " x=" + x + " y=" + (axisHeight - num / rate) + " fill=" + barColor[i] + " />");
		}		
	}
	barGraph.innerHTML = barHtml.join(""); 

}