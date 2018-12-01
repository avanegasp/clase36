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
      $.ajax({"url":"https://apijade.herokuapp.com/api/v1/products/8", "method": "DELETE", data: JSON.stringify({_method: "delete"}), contentType: "application/json" , success: function(data){
        $('body').prepend(`<h3>${data.name}: ${data.price}</h3>`)
      }, error: function(error){
          console.log(error)
      }
    })
  })
})
