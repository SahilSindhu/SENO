window.onload = function(){
    // createOption();
    // selectRegion();
}

function createOption(){
    let selectbox = TW.seno.dom.find('.selectBox')[0];
    TW.seno.data.forEach((ele,idx)=>{
       let option = TW.seno.dom.create('option');
       let key=Object.keys(ele)[0];
       let txt = TW.seno.dom.createText(option,key);
       TW.seno.dom.append(option,txt);
       option.setAttribute('value',key);
       TW.seno.dom.append(selectbox,option);
    });
}
function selectRegion(){
    var selectbox = TW.seno.dom.find('.selectBox')[0];
    selectbox.addEventListener('change',()=>{
        let idx = selectbox.options[selectbox.selectedIndex].index;
        let key = Object.keys(TW.seno.data[idx]);
        key = key[0];
        let inputfield = TW.seno.dom.find('input')[0];
        let currentData = TW.seno.data[idx];
        inputfield.setAttribute('value' , currentData[key][0].name);
      
    })
}