$(document).ready(function(){


//team page////////////////////////////////////////////////
for(var i = 0; i < team_items.length; i=i+4){

	var row = document.createElement("div");
	$(row).addClass("row");
	$("#team").append(row);		

	switch(team_items.length - i) {
	case 0:
		break;
    case 1:
        var col_md_12 = document.createElement("div");
        $(col_md_12).addClass("col-md-12");
        $(row).append(col_md_12);
        addTeamMember(i + j, col_md_12);
        break;
    case 2:
    	for(var j =0; j<2; j++){
        var col_md_6 = document.createElement("div");
        $(col_md_6).addClass("col-md-6");
        $(row).append(col_md_6);
        addTeamMember(i + j, col_md_6);
   		}
        break;
    case 3:
    	for(var j =0; j<3; j++){
        var col_md_4 = document.createElement("div");
        $(col_md_4).addClass("col-md-4");
        $(row).append(col_md_4);
        addTeamMember(i + j, col_md_4);
   		}
        break;
    default:
    	for(var j =0; j<4; j++){
        var col_md_3 = document.createElement("div");
        $(col_md_3).addClass("col-md-3");
        $(row).append(col_md_3);
        addTeamMember(i + j, col_md_3);
   		}
        break;
    //default:
       // default code block
	}

}


/*<div class="panel panel-default">
            <div class="panel-body center">

              <img src="./img/chris_palmer_profile_11.jpg" class="img-rounded img-responsive profile-pic" alt="Cinque Terre">
            </div>
            <div class="panel-footer center"><h3>Mike Jhonson</h3></div>
          </div> */


          //data-toggle="modal" data-target="#myModal"

function addTeamMember(index, div){
	var panel = document.createElement("div");
	$(panel).addClass("panel panel-default");
	$(div).append(panel);
	var body = document.createElement("div");
	$(body).addClass("panel-body center");
	$(panel).append(body);
	var img = document.createElement("img");
	$(body).append(img);
	$(img).addClass("img-rounded img-responsive profile-pic");
	$(img).attr("src", team_items[index].picture_uri);
	var footer = document.createElement("div");
	$(footer).addClass("panel-footer center");
	$(panel).append(footer);
	var h3 = document.createElement("h3");
	$(footer).append(h3);
	$(h3).html(team_items[index].first_name + " " + team_items[index].last_name);
	$(h3).css("font-weight", "bold");


	var h4_position = document.createElement("h4");
	$(footer).append(h4_position);
	$(h4_position).text(team_items[index].position);

	var h4_phone = document.createElement("h4");
	var h4_email = document.createElement("h4");
	$(footer).append(h4_email);
	$(footer).append(h4_phone);
	

	var span_email = document.createElement("span");
	$(span_email).addClass("glyphicon glyphicon-envelope");
	$(span_email).text(team_items[index].email);
	$(h4_email).append(span_email);
	var span_phone = document.createElement("span");
	$(span_phone).addClass("glyphicon glyphicon-phone");
	$(span_phone).text(team_items[index].phone);
	$(h4_phone).append(span_phone);

	$(span_phone).text(" " + team_items[index].phone);
	$(span_email).text(" " + team_items[index].email);

	var button = document.createElement("button");
	$(button).addClass("btn btn-default btn-lg");
	$(button).attr("type", button);
	$(button).html("Profile");
	$(footer).append(button);

	$(button).attr("data-toggle", "modal");
	$(button).attr("data-target", "#myModal");

	button.index = index;
	$(button).on("click", function(){
		$(".modal-title").text(team_items[this.index].first_name + " " + team_items[this.index].last_name);

		$("#profice-pic-popup").attr("src",team_items[this.index].picture_uri);

		$("#contact-popup").text("Contact " + team_items[this.index].first_name + ":");

		$("#position-popup").text("Position: " + team_items[this.index].position);

		$("#phone-popup").text(" " + team_items[this.index].phone);

		$("#email-popup").text(" " + team_items[this.index].email);

		$("#profile-popup").text("	" + team_items[this.index].about);
	});

	/*$(button).on("click", function(){
		alert(index);
	}); */
}

////////////////////////////////////////////////////////////////////////////////////////

//contact-page/////////////////////////////////////////////////////////////////////////
for(var i = 0; i < team_items.length; i=i+4){

	var row = document.createElement("div");
	$(row).addClass("row");
	$("#contact").append(row);		

	switch(team_items.length - i) {
	case 0:
		break;
    case 1:
        var col_md_12 = document.createElement("div");
        $(col_md_12).addClass("col-md-12");
        $(row).append(col_md_12);
        addTeamMemberContact(i, col_md_12);
        break;
    case 2:
    	for(var j =0; j<2; j++){
        var col_md_6 = document.createElement("div");
        $(col_md_6).addClass("col-md-6");
        $(row).append(col_md_6);
        addTeamMemberContact(i + j, col_md_6);
   		}
        break;
    case 3:
    	for(var j =0; j<3; j++){
        var col_md_4 = document.createElement("div");
        $(col_md_4).addClass("col-md-4");
        $(row).append(col_md_4);
        addTeamMemberContact(i + j, col_md_4);
   		}
        break;
    default:
    	for(var j =0; j<4; j++){
        var col_md_3 = document.createElement("div");
        $(col_md_3).addClass("col-md-3");
        $(row).append(col_md_3);
        addTeamMemberContact(i + j, col_md_3);
   		}
        break;
    //default:
       // default code block
	}

}

 //<h3><span class="glyphicon glyphicon-phone" aria-hidden="true"> 0694545455</span></h3>

function addTeamMemberContact(index, div){
	var panel = document.createElement("div");
	$(panel).addClass("panel panel-default");
	$(div).append(panel);
	/*var body = document.createElement("div");
	$(body).addClass("panel-body center");
	$(panel).append(body);
	var img = document.createElement("img");
	$(body).append(img);
	$(img).addClass("img-rounded img-responsive profile-pic");
	$(img).attr("src", team_items[index].picture_uri);*/
	var footer = document.createElement("div");
	$(footer).addClass("panel-footer center");
	$(panel).append(footer);
	var h3 = document.createElement("h3");
	$(footer).append(h3);
	$(h3).html(team_items[index].first_name + " " + team_items[index].last_name);

	var h3_phone = document.createElement("h3");
	$(footer).append(h3_phone);
	var span_phone = document.createElement("span");
	$(span_phone).addClass("glyphicon glyphicon-phone");
	$(span_phone).text(team_items[index].phone);
	$(h3_phone).append(span_phone);

	var h3_email = document.createElement("h3");
	$(footer).append(h3_email);
	var span_email = document.createElement("span");
	$(span_email).addClass("glyphicon glyphicon-envelope");
	$(span_email).text(team_items[index].email);
	$(h3_email).append(span_email);

	//var h3_phone = document.createElement("h3");
	//$(footer).append(h3_phone);
}

/////////////////////////////////////////////////////////////////////////////////////

//services page//////////////////////////////////////////////////////////////////////
for(var i = 0; i < services_items.length; i=i+3){

	var row = document.createElement("div");
	$(row).addClass("row");
	$("#services").append(row);		

	switch(services_items.length - i) {
	case 0:
		break;
    case 1:
        var col_md_12 = document.createElement("div");
        $(col_md_12).addClass("col-md-12");
        $(row).append(col_md_12);
        addService(i, col_md_12);
        break;
    case 2:
    	for(var j =0; j<2; j++){
        var col_md_6 = document.createElement("div");
        $(col_md_6).addClass("col-md-6");
        $(row).append(col_md_6);
        addService(i + j, col_md_6);
   		}
        break;
    default:
    	for(var j =0; j<3; j++){
        var col_md_4 = document.createElement("div");
        $(col_md_4).addClass("col-md-4");
        $(row).append(col_md_4);
        addService(i + j, col_md_4);
   		}
        break;
	}

}


/*
        <div class="panel panel-default">
    <div class="panel-heading" data-toggle="collapse" href="#collapse1">
      <h4 class="panel-title">
        <a >Collapsible panel</a>
      </h4>
    </div>
    <div id="collapse1" class="panel-collapse collapse">
      <div class="panel-body">Panel Body</div>
      <div class="panel-footer">Panel Footer</div>
    </div>
  </div>
      */

function addService(index, div){
	var panel = document.createElement("div");
	$(panel).addClass("panel panel-default");
	$(div).append(panel);
	var heading = document.createElement("div");
	$(heading).addClass("panel-heading");
	$(heading).attr("data-toggle", "collapse");
	$(heading).attr("href", "#collapse" + index);
	$(panel).append(heading);
	var title = document.createElement("h4");
	$(title).addClass("panel-title");
	$(heading).append(title);
	$(title).text(services_items[index].name);
	var collapse = document.createElement("div");
	$(collapse).attr("id", "collapse" + index);
	$(collapse).addClass("panel-collapse collapse");
	$(panel).append(collapse);
	var body = document.createElement("div");
	$(body).addClass("panel-body center");
	$(collapse).append(body);
	var p = document.createElement("p");
	body.append(p);
	$(p).addClass("p-services")
	$(p).text(services_items[index].about);
	
	//<span class="glyphicon glyphicon-envelope"></span>
	var down_arrow = document.createElement("span");
	$(down_arrow).addClass("glyphicon glyphicon-arrow-down pull-right");
	$(title).append(down_arrow);

	$(heading).on("click", function(){
		if($(this).attr("aria-expanded")=="true"){
			$(down_arrow).removeClass();
			$(down_arrow).addClass("glyphicon glyphicon-arrow-down pull-right");
		}
		else{
			$(down_arrow).removeClass();
			$(down_arrow).addClass("glyphicon glyphicon-arrow-up pull-right");
		}
	});

}

//////////////////////////////////////////////////////////////////////////////////////


//clients page////////////////////////////////////////////////
for(var i = 0; i < team_items.length; i=i+3){

	var row = document.createElement("div");
	$(row).addClass("row");
	$("#clients").append(row);		

	switch(client_items.length - i) {
	case 0:
		break;
    case 1:
        var col_md_12 = document.createElement("div");
        $(col_md_12).addClass("col-md-12");
        $(row).append(col_md_12);
        addClient(i, col_md_12);
        break;
    case 2:
    	for(var j =0; j<2; j++){
        var col_md_6 = document.createElement("div");
        $(col_md_6).addClass("col-md-6");
        $(row).append(col_md_6);
        addClient(i + j, col_md_6);
   		}
        break;
    default:
    	for(var j =0; j<3; j++){
        var col_md_4 = document.createElement("div");
        $(col_md_4).addClass("col-md-4");
        $(row).append(col_md_4);
        addClient(i + j, col_md_4);
   		}
        break;

	}



}

function addClient(index, div){

	var bubble = document.createElement("div");
	$(div).append(bubble);
	$(bubble).addClass("bubble");
	var h4_about = document.createElement("h4");
	$(h4_about).html("&quot;" + client_items[index].about + "&quot;");
	$(bubble).append(h4_about);
	var h4_name = document.createElement("h4");
	$(h4_name).html("- " + client_items[index].name + "<br>" +  "- " + client_items[index].job);
	$(bubble).append(h4_name);
	$(h4_name).addClass("client-bottom");


	var img = document.createElement("img");
	$(img).addClass("img-circle img-responsive profile-pic client-img");
	$(img).attr("alt", "");
	$(img).attr("src", client_items[index].img);
	$(div).append(img);
}

////////////////////////////////////////////////////////////////////////////////////////

});