/**
 * 选择框
 * @param  {} parent 容器
 */
function chooseCheckBox(parent) {
    let checkAll  = parent.querySelector("input[checkbox-type = 'all']");  // 获取当前容器下的全选框
    let child = parent.querySelectorAll("input[checkbox-type = 'single']"); // 获取当前容器下的选项选框
    parent.onclick= function(e) {
        let target = e.target;
        if(target.getAttribute("type") === "checkbox") {
            let type = target.getAttribute("checkbox-type");
            if(type === "all") { // 如果点击的为全选框
                checkAll.checked = true;
                for(let i = 0; i < child.length; i++) {
                    child[i].checked = true;
                }
            } else if(type == "single"){
                let num = 0;
                for(let i = 0; i < child.length; i++) {
                    if(child[i].checked) num++;
                }
                if(num === child.length) {
                    checkAll.checked = true;  // 若为全选，则勾选全选状态
                }else if(num === 0){
                    target.checked = true;    // 若其余的都为选中，则至少选中一个，不允许一个都不选
                }else {
                    checkAll.checked = false;
                }
            }
        }
    }
}