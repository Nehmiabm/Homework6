$(document).ready(function()
{
    $("#err-div").hide();
    $("#postInfo").click(function(){
        $("#err-div").hide();
    const form = $("#contactForm");
   var aurl = form.attr("action");
    var formData = {};
    $(form).find("input[name]").each(function (index, node) {
        formData[node.name] = node.value;
    });
    formData["cType"]=$("#cType").find(":selected").text();
    formData["message"]=$("#message").val();
   $.ajax({
            type:'POST',
            url:aurl,
            data:formData,
            success: function(data) {
                if(data=='success'){
                    alert("Thank you");
                }
             else{
               $("#err-div").show(); 
              for( const err in data){
                 $("#err").append("<li style='color:red'>"+data[err].msg+"</li>");
              }
             
             }
    }        
        });
    });
});