$(function() {
    //轮播图数据请求
    //console.log(1234354);
    $.ajax({
        url:'http://127.0.0.1:9091/api/getlunbo',
        success:function(data){
            //var datas =JSON.parse(data);
            //console.log(data);
            //for (var i = 0; i <data.length ; i++) {
            //
            //    var slides ='<div class="swiper-slide">'+
            //        '<a href="'+data[i].url+'">'+
            //        '<img src="'+data[i].img+'" alt=""/>'+
            //        '<span class="share">'+
            //         data[i].title+
            //        '</span>'+
            //        '</a>'+
            //        '</div>';
            //
            //    $('.swiper-wrapper').append(slides);
            //}

            $('.swiper-wrapper').append(template('slide',{
                datas:data
            }));

            var swiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                slidesPerView: 1,
                paginationClickable: true,
                spaceBetween: 0, //表示轮播图直接的间距 如果不要设置为0或者去掉这个属性
                loop: true, //循环 无缝轮播
                autoplay: 2000, //轮播图自动播放
                noSwiping : false,

            });
        }

    })

    //tab栏切换数据请求

    $.ajax({
        url:'http://127.0.0.1:9091/api/gethometab/1',
        data:{
            type:1
        },
        success:function(data){
            //console.log(data);
            $('#home ul').append(template('cut',{
                cuts:data
            }));
        }
    })
    $.ajax({
        url:'http://127.0.0.1:9091/api/gethometab/2',
        data:{
            type:2
        },
        success:function(data){
            //console.log(data);
            $('#profile ul').append(template('cut',{
                cuts:data
            }));
        }
    })

    $.ajax({
        url:'http://127.0.0.1:9091/api/gethometab/3',
        data:{
            type:3
        },
        success:function(data){
            //console.log(data);
            $('#messages  ul').append(template('cut',{
                cuts:data
            }));
        }
    })
    $.ajax({
        url:'http://127.0.0.1:9091/api/gethometab/4',
        data:{
            type:4
        },
        success:function(data){
            //console.log(data);
            $('#settings ul').append(template('cut',{
                cuts:data
            }));
        }
    })

})


