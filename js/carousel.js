
var slider = $("#carousel");
var images = $('#carousel img');
// var radioInput = $('#radios input');
var index = 0;

// ArrangeRadios();

$('#btnPrev').on("click",function(){
    if(index > 0)
    {
        slider.css({"transition":"0.4s ease-in-out"});
        index--;
        slider.css({"transform":"translateX("+ (index * 100) +"%)"}); 
    }
    else
    {
        slider.css({"transition":"none"});
        slider.css({"transform":"translateX(" +( (images.length - 1)  * 100 )+ "%)"}); 
        index = images.length-1;
    }
    // ArrangeRadios();
});
$('#btnNext').on("click",function(){
    if(index < images.length - 1)
    {
        slider.css({"transition":"0.4s ease-in-out"});
        index++;
        slider.css({"transform":"translateX("+ (index * 100) +"%)"}); 
    }
    else
    {
        slider.css({"transition":"none"});
        slider.css({"transform":"translateX(0%)"}); 
        index = 0;
    }
    // ArrangeRadios();
});
// radioInput.on("checked" , () =>
// {
//     for (let i = 0, len = radioInput.length - 1; i < len; i++) {
//         if($(this) === radioInput[i]){
//             console.log(i);
//         }
//     }
// });

// function ArrangeRadios()
// {
//     for(let i=0 ; i < radioInput.length ; i++ )
//     {
//         if(this.index === i){
//             radioInput[i].checked = true;
//         }
//         else{
//             radioInput[i].checked = false;
//         }
//     }
// }