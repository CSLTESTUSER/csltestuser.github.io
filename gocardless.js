

$(function(){
	$('#setupmandate').on('click',function(){
			setupRedirectWorkflow();
	});
});

function setupRedirectWorkflow()
{
	$.ajax({ 
		type:'POST',
		url:'https://api-sandbox.gocardless.com/redirect_flows',
		beforesend:function(xhr){
			xhr.setRequestHeader('GoCardless-Version','2015-07-06');
			xhr.setRequestHeader('Authorization','Bearer U15KDpAy1-TrD7ebm4h8oe5LaCx_f8HdAoQbSmC8');
		},
		contentType:'application/json',
		data: {  
			"redirect_flows": {
    		"description": "Security Device Purchase",
    		"session_token": "SESS_somerandomalphanumerictoverify",
    		"success_redirect_url": "http://csltestuser.github.io"
  			}
  		},
  		sucess:function(response){
  			var data=$.parseJSON(response);
  			console.log(data);
  		},
  		error:function(response){

  		}

	});

}