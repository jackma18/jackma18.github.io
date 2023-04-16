//动态内容
$.ajax({
    url: 'http://kkk.dsxfs.com/api/vdk/getVdkSetting',
    type: 'post',
    // dataType:"jsonp",
    // jsonp:"callback",
    // success:function(data){

    //     console.log(data)

    // }
    success(res) {

        // console.log(res)
        console.log(JSON.parse(res))

        $('#jiaochen_url').prop('href',JSON.parse(res).url[0].jiaochen_url)
        $('#jihuochaxun_url').prop('href',JSON.parse(res).url[0].jihuochaxun_url)
        $('#jihuochaxun_url2').prop('href',JSON.parse(res).url[0].jihuochaxun_url)

        $('#content1').text(JSON.parse(res).url[4].content)
        $('#img1').prop('src',`http://admin.dsxfs.com${JSON.parse(res).url[4].logo}`)
        $('#title1').text(JSON.parse(res).url[4].title)
        $('#price1').text(JSON.parse(res).url[4].price)
        $('#priced_num1').text(JSON.parse(res).url[4].priced_num)

        $('#content2').text(JSON.parse(res).url[5].content)
        $('#img2').prop('src',`http://admin.dsxfs.com${JSON.parse(res).url[5].logo}`)
        $('#title2').text(JSON.parse(res).url[5].title)
        $('#price2').text(JSON.parse(res).url[5].price)
        $('#priced_num2').text(JSON.parse(res).url[5].priced_num)

        $('#content3').text(JSON.parse(res).url[2].content)
        $('#img3').prop('src',`http://admin.dsxfs.com${JSON.parse(res).url[2].logo}`)
        $('#title3').text(JSON.parse(res).url[2].title)
        $('#price3').text(JSON.parse(res).url[2].price)
        $('#priced_num3').text(JSON.parse(res).url[2].priced_num)

        $('#content4').text(JSON.parse(res).url[3].content)
        $('#img4').prop('src',`http://admin.dsxfs.com${JSON.parse(res).url[3].logo}`)
        $('#title4').text(JSON.parse(res).url[3].title)
        $('#price4').text(JSON.parse(res).url[3].price)
        $('#priced_num4').text(JSON.parse(res).url[3].priced_num)

    }

});

//文本展示
$.ajax({
    url: 'http://kkk.dsxfs.com/api/article/getTextContent',
    type: 'post',
    success(res) {

        console.log('文本展示',JSON.parse(res))
        // console.log('开关',JSON.parse(res).data.type)
        // console.log('文案',JSON.parse(res).data.content)

        $('.text').text(JSON.parse(res).data.content)

        if(JSON.parse(res).data.type){
            $('.notice').css('display','block')
        }else{
            $('.notice').css('display','none')
        }

    }
});