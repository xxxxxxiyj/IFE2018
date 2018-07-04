// function 生成一组CheckBox( CheckBox容器, CheckBox选项的参数对象或者数组 ) {
//     生成全选checkbox的html，给一个自定义属性表示为全选checkbox，比如checkbox-type="all"
//     遍历参数对象 {
//         生成各个子选项checkbox的html，给一个自定义属性表示为子选项
//     }
//     容器innerHTML = 生成好的html集合

//     给容器做一个事件委托 = function() {
//         if 是checkbox
//             读取自定义属性
//             if 全选
//                 做全选对应的逻辑
//             else
//                 做子选项对应的逻辑
//                 点击之前判断是否是唯一一个选中的单个checkbox，如果是则阻止这次默认点击事件
//                 点击之后判断是否满足了全选状态，并对应修改全选checkbox的状态
//     }
// }

function createCheckBox(parent) {
    let child = parent.childNodes;
    // console.log(child[0]);
    parent.onclick = function(e) {
        let target = e.target;
        if(target.getAttribute("type") === "checkbox") {
            let type = target.getAttribute("checkbox-type");
            if(type === "all") {
                for(let i = 0; i < child.length; i++) {
                    child[i].checked = true;
                }
            } else {
                // let num = 0; 
                // for(let i = 0; i < child.length; i++) {
                //     if(child[i].checked) num++;
                // }
                // if() {
                //     e.preventDefault();  // 阻止此次默认点击事件
                // }
                
            }
        }
    }
}