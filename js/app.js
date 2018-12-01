$(document).ready(function(){
  $.ajax({"url": "https://s3.amazonaws.com/makeitreal/countries.json",
    "method": "get", "success": function(data){
      data.forEach(function(country){
        $('body').append(`<h3>${country.name}</h3>`)
      })
		  console.log(data)
	  }
  })
})
