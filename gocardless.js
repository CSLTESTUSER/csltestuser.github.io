



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
  		beforesend:function(xhr){
			xhr.setRequestHeader("Content-Type","application/json");
			xhr.setRequestHeader("GoCardless-Version","2015-07-06");
			xhr.setRequestHeader("Authorization","Bearer U15KDpAy1-TrD7ebm4h8oe5LaCx_f8HdAoQbSmC8");
			console.log(xhr);
		}, 
  		success :function(response){
  			console.log(response);
  		},
  		error:function(jqXHR, textStatus, errorThrown) {
  			console.log(jqXHR);
		}
	});
}

