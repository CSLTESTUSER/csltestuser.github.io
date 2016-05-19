

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
  		headers : { 
  			'Accept': 'text/plain',
  			'Authorization':'Bearer U15KDpAy1-TrD7ebm4h8oe5LaCx_f8HdAoQbSmC8',
			'Content-Type' :'application/json',
			'Origin':'http://csltestuser.github.io',
			'GoCardless-Version':'2015-07-06'
		},
  		success :function(jqXHR, textStatus, errorThrown){
  			alert(textStatus);
  		},
  		error:function(jqXHR, textStatus, errorThrown){
  			alert(textStatus);
  		}
	});
}

