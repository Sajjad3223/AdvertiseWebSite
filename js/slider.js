var inputLeft = $('#input-left');
var inputRight = $('#input-right');

var thumbLeft = $(".slider > .thumb.left");
var thumbRight = $('.slider > .thumb.right');
var range = $('.slider > .range');


function SetLeftValue(){
    
    var _this = inputLeft,
    min = _this.attr('min'),
    max = _this.attr('max');

    _this.val(Math.min(_this.val(), inputRight.val()));

    var percent = ((_this.val() - min) / (max - min)) * 100;

    thumbLeft.css("left" , (percent + "%"));
    range.css("left" , (percent + "%"));
    $('#formPrice').val(parseInt(percent));
}
SetLeftValue();

function SetRightValue(){
    
    var _this = inputRight,
    min = _this.attr('min'),
    max = _this.attr('max');

    _this.val(Math.max(_this.val(), inputLeft.val()));

    var percent = ((_this.val() - min) / (max - min)) * 100 ;

    thumbRight.css("right" , (100 - percent) + "%");
    range.css("right" , (100 - percent) + "%");
    $('#toPrice').val(parseInt(percent));
}
SetRightValue();

inputLeft.on("input" , SetLeftValue);
inputRight.on("input" , SetRightValue);