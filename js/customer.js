$(function () {
    //点击行的状态
    $('#Tbody').on('click','tr',function () {
        $(this).addClass('success').siblings('tr').removeClass('success');
    })
    //点击头部的li的状态
    $('.top_center:eq(0) li').on('click',function () {
        $(this).addClass('top_active').siblings('li').removeClass('top_active');
    })
    $('.top_right:eq(0)').on('click',function () {
        $('#top_isshow').slideToggle();
        // console.log(1);
    })
    $('.top_img:eq(0)').on('click',function () {
        $('#top_isshow').slideToggle();
        // console.log(1);
    })
})