



$(function(){

	$('#setupmandate').on('click',function(){
		setupRedirectWorkflow();

	});
});

function handler(response)
{
	alert(response);
}

function setupRedirectWorkflow()
{
	var invocation = new XMLHttpRequest();
	var url = 'https://api-sandbox.gocardless.com/redirect_flows';
	//var body = '{redirect_flows: { 'description': 'Security Device Purchase','session_token': 'SESS_somerandomalphanumerictoverify','success_redirect_url': 'http://csltestuser.github.io'}}';
    	if(invocation)
    	{
      		invocation.open('POST', url, true);
      		invocation.setRequestHeader('Content-Type', 'application/json');
      		invocation.setRequestHeader('GoCardless-Version', '2015-07-06');
      		invocation.setRequestHeader('Authorization', 'Bearer U15KDpAy1-TrD7ebm4h8oe5LaCx_f8HdAoQbSmC8');
      		invocation.onreadystatechange = handler;
      		invocation.send(); 
    	}

	/*$.ajax({ 
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
  		error:function(reponse){
  			console.log(response);
  		}
	});*/
}

