$(function(){
    $('input').on('input',this, function(){
        if(this.type === "password")
        {
            var span = this.parentElement.querySelector("span");
            if(this.value !== "")
            {
                span.style.display = "block";
            }
            else{
                span.style.display = "none";
            }
        }
    });
    
    $('form > div > span').click(this,function(){
        var input = this.parentElement.querySelector('input');
        if(input.type  === "password")
            {
                input.type = "text";
            }
        else
            {
                input.type = "password";
            }
    })
});