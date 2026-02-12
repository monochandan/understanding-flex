
const select_display = document.getElementById("display-select")
const select_align_items = document.getElementById("align-item-select")
const select_justify_content = document.getElementById("justify-content-select")


function setProp(prop, value){
    console.log(prop)
    console.log(value)
    document.documentElement.style.setProperty(prop, value)
}

// console.log(select.value)
select_display.addEventListener("change", function(e){
    console.log(e.target.value)
    setProp("--display", e.target.value)     
});

select_align_items.addEventListener("change", function(e){
    console.log(e.target.value)
    setProp("--align", e.target.value)     
});

select_justify_content.addEventListener("change", function(e){
    console.log(e.target.value)
    setProp("--justify", e.target.value)     
});