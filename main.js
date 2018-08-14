$(document).ready(function(){

    $.ajax({
        type: "GET",
        url: "http://www.redbullshopus.com/products.json",
        success: function(response){
            "<div id='flex_container'>"
            var product = response.products
            for(var i = 0; i < product.length; i++){

                $("#flex_container").append("<div class='redBull-product'>" + 
                    "<h2 class='product_title'>" + product[i].title + "</h2>" + 
                    "<img src=" + product[i].images[0].src + "/>" + 
                    // "<p class='product_description'>" + product[i].body_html + "</p>" +
                    "</div>")

            }
        }
    })
})




