



$(function(){

	$('#setupmandate').on('click',function(){
		setupRedirectWorkflow();

	});
});

function setupRedirectWorkflow()
{


	$.ajax({ 
		method:'POST',
		url:'https://api-sandbox.gocardless.com/redirect_flows',
		data: {  
			redirect_flows: {
    		'description': 'Security Device Purchase',
    		'session_token': 'SESS_somerandomalphanumerictoverify',
    		'success_redirect_url': 'http://csltestuser.github.io'
  			}
  		},
  		success :function(response){
  			console.log(response);
  		},
  		error:function(jqXHR, textStatus, errorThrown) {
  			console.log(textStatus, errorThrown);
		}
	});
}

