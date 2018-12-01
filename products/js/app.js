let urlApi = "https://apijade.herokuapp.com/api/v1/products"
$(document).ready(function(){
  $.ajax({"url": urlApi,
    "method": "get", "success": function(data){
      data.forEach(function(product){
        $('body').append(`<h3>${product.name}: ${product.price}</h3>`)
      })
		  console.log(data)
	  }
  })
  $('form').submit(function(e){
    e.preventDefault()
      name = $('#name').val()
        console.log(name)
      price = $('#price').val()
        console.log(price)
      $.ajax({"url":urlApi, "method": "delete", data: JSON.stringify({name :name, price :price}), contentType: "application/json" , success: function(data){
        $('body').prepend(`<h3>${data.name}: ${data.price}</h3>`)
      }
    })
  })
})
