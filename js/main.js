$(function(){
    //#region Manage Theme
    const theme = localStorage.getItem('theme');
    if(theme === 'dark')
    {
        $('body').addClass('dark');
        $('body').removeClass('light');
    }
    else
    {
        $('body').addClass('light');
        $('body').removeClass('dark');
    }

    const toggleDarkModeIcons = function(){
        if($('body').hasClass('dark')){
            $(".moon").hide();
            $(".sun").fadeIn();
        }
        else{
            $(".sun").hide();
            $(".moon").fadeIn();
        }
    }
    const storeTheme = function(){
        if($('body').hasClass('dark')){
            localStorage.setItem('theme','dark');
        }
        else
            localStorage.setItem('theme','light');
    }
    const switchTheme = function(){
        $('body').toggleClass('light dark');
        toggleDarkModeIcons();
        storeTheme();
    }
    toggleDarkModeIcons();
    $('#switchTheme').click(switchTheme);
    $('#switchThemeMenu').click(switchTheme);
    //#endregion
    
    $("#menuExpander").click(function()
    {
        $('#menuContainer').slideToggle();
    });
    
    $("#filterToggler").click(function()
    {
        $('.FilterBox').slideToggle();
        $('#filterToggler').toggleClass('active');
    });
    
})