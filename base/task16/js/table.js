
function renderTable(container, data, region, product) {
	container.textContent = "";

	let regSel = region.querySelectorAll("input[checkbox-type='single']");
	let proSel = product.querySelectorAll("input[checkbox-type='single']");
	let regSelNum = 0;
	let proSelNum = 0;

	let table = document.createElement("table");
	table.setAttribute("id", "table");
	let thead = document.createElement("tr");
	thead.innerHTML = `
		<th>商品</th>
		<th>地区</th>
		<th>1月</th>
		<th>2月</th>
		<th>3月</th>
		<th>4月</th>
		<th>5月</th>
		<th>6月</th>
		<th>7月</th>
		<th>8月</th>
		<th>9月</th>
		<th>10月</th>
		<th>11月</th>
		<th>12月</th>
	`;

	table.appendChild(thead); // 表头

	for (let i = 0; i < data.length; i++) {
        let tr = document.createElement("tr");
        // 遍历data
        for (let key in data[i]) {
            if (data[i].hasOwnProperty(key)) {
                // 判断data[i]的value是否是数组，非数组则直接添加到td里
                if (!Array.isArray(data[i][key])) {
                    let td = document.createElement("td");
                    td.innerHTML = data[i][key];
                    tr.appendChild(td);
                } else {
                    // 如果是数组，则遍历数组，将数组中的每一项分别创建并添加到td
                    for (let k = 0; k < data[i][key].length; k++) {
                        let td = document.createElement("td");
                        td.innerHTML = data[i][key][k];
                        tr.appendChild(td);
                    }
                }
            }
        }
        table.appendChild(tr);
    }
	container.appendChild(table);

	/** 当地区选择一个，商品选择多个时交换第一列与第二列 **/
	for(let i = 0; i < regSel.length; i++) {
		if(regSel[i].checked) regSelNum++;
	}
	for(let i = 0; i < proSel.length; i++) {
		if(proSel[i].checked) proSelNum++;
	}
	if(regSelNum === 1 && proSelNum !== 1) {
		for(let i = 0; i < table.rows.length; i++) {
			let temp = table.rows[i].cells[0].innerHTML;
			table.rows[i].cells[0].innerHTML = table.rows[i].cells[1].innerHTML;
			table.rows[i].cells[1].innerHTML = temp;
		}
	}
	// console.log(table);
	mergeCell(1, 0);
}


function mergeCell(start, col) {
	let tab = document.getElementById("table");
	for(let i = start; i < tab.rows.length - 1; i++) {
		// 内容若和第一行相同则合并
		if(tab.rows[start].cells[col].innerHTML === tab.rows[i + 1].cells[0].innerHTML) {
			tab.rows[i + 1].cells[col].style.display = "none";
			tab.rows[start].cells[col].rowSpan += 1;  // 相同内容的第一行设置rowspan
		}else {
			mergeCell(i + 1, 0);  // 若不相同则从当前行开始继续判断
		}
	}
}