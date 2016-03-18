



var totalPrice = 0;
$("#add").click(function(){
	var name=$("#itemName").val();
	var price = parseFloat($("#price").val());
	totalPrice = totalPrice+price;
	// totalPrice=totalPrice+price;
	$("#items").append('<tr><td></td><td>' +name  + ": "+ price  +"$" + '</td></tr>');
	// updatedTotal = total + price;
	$('#regTotal').html(totalPrice +"$");
	// var total=0;
})
















