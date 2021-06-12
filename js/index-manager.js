$(function(){
            var btnListStyle = $('#listStyle');
            var btnGridStyle = $('#gridStyle');

            $('.filterToggler').click(function(){
                $('.filterToggler').toggleClass('active');
            });

            $('.grid').show();
            $('.list').hide();

            btnListStyle.click(function(){
                if(!btnListStyle.hasClass('active')){
                    btnListStyle.toggleClass('active');
                    btnGridStyle.toggleClass('active');
                    $('.grid').hide();
                    $('.list').show();
                }
            });
            btnGridStyle.click(function(){
                if(!btnGridStyle.hasClass('active')){
                    btnGridStyle.toggleClass('active');
                    btnListStyle.toggleClass('active');
                    $('.list').hide();
                    $('.grid').show();
                }
            });
            
            var advertiseSubGroup = $('.AdvertiseSubGroup');
            var advertiseShahrestan = $('.Shahrestan');

            $('.AdvertiseGroup > select').change(function(){
                if($(this).find(':selected').val() != "")
                {
                    if(advertiseSubGroup.hasClass('hidden'))
                        advertiseSubGroup.removeClass('hidden');
                }
                else{
                    if(!advertiseSubGroup.hasClass('hidden'))
                        advertiseSubGroup.addClass('hidden');
                }
            });

            $('.Ostan > select').change(function(){
                if($(this).find(':selected').val() != "")
                {
                    if(advertiseShahrestan.hasClass('hidden'))
                        advertiseShahrestan.removeClass('hidden');
                }
                else{
                    if(!advertiseShahrestan.hasClass('hidden'))
                        advertiseShahrestan.addClass('hidden');
                }
            });
        
            var filtersContainer = $('.filters');

            removeAllFilters = function(){
                filtersContainer.children().remove();
            }

            $('select').change(function(){
                if($(this).find(':selected').val() != ""){

                    filterManager($(this).attr('name'));

                    let btn = $('<button class="filterObject"></button>');
                    btn.append($('<span>&times;</span>'));
                    btn.append(($('<span></span>').html($(this).find(':selected').text())));
                    btn.data("filter",$(this).attr('name'));
                    filtersContainer.append(btn);
                    btn.click(removeFilter);
                }
                else{
                    filterManager($(this).attr('name'));
                }
            });

            filterManager = function(modifiedInput){
                
                for (let i = 0; i < filtersContainer.children().length; i++) {
                    let element = filtersContainer.children()[i];
                    // console.log(element.data("filter"))
                    if(modifiedInput == $(element).data("filter"))
                    {
                        element.remove();
                    }
                }
            }

            removeFilter = function(){
                $(this).remove();
            }
            
        });
    