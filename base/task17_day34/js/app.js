
var regionSelect = document.getElementById("region-radio-wrapper");
var productSelect = document.getElementById("product-radio-wrapper");
var tableWrapper = document.getElementById("table-wrapper");

var checkBox = document.querySelectorAll("input[type='checkbox'");
for(let i = 0; i < checkBox.length; i++) {
	checkBox[i].checked = true;
}
renderTable(tableWrapper, getData(), regionSelect, productSelect);

chooseCheckBox(regionSelect);
chooseCheckBox(productSelect);

regionSelect.onchange = function() {
	let data = getData();
	// console.log(data);
	renderTable(tableWrapper, data, regionSelect, productSelect);
}
productSelect.onchange = function() {
	let data = getData();
	// console.log(data);
	renderTable(tableWrapper, data, regionSelect, productSelect);
}

drawBar(sourceData);