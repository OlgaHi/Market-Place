$(document).ready(function() {
  
  $("#customer").submit(function(event){
    event.preventDefault();
    const fullName = $("input#name").val();
    const address = $("input#address").val();
  
    $(".customer_name").text(fullName);
    $(".customer_address").text(address);

    $('#reciept').show()
  })
});