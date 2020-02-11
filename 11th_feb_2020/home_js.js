
    var response1;
$.ajax({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/users",
    success: function (response) {
        var tabData = "";
        response1 = response;
        response.forEach(function(val,ind) {
                    tabData = tabData+ "<tr><td><input type='text' class='form-control ip' value='"+val.id+"' readonly></td><td><input class='form-control ip' value='"+val.name+"' readonly></td><td><input class='form-control ip' value='"+val.email+"' readonly></td><td> <input class='form-control ip' value='"+val.phone+"' readonly></td><td> <input class='form-control ip' value='"+val.address.city+"' readonly></td><td><div class='row' id='prim'> <span class='col-md-3' ><a href='view1.html?id="+ind+"'><i class='fas fa-eye'></i></a></span><span class='col-md-3' onclick='edit3("+ind+")'><i class='fas fa-pencil-alt'></i></span><span class='col-md-3' onclick='delete1("+ind+")'><i class='fas fa-trash'></i></span></div> <div id='sec' class='row d-none'><button class='col-md-5 btn btn-sm btn-success' onclick='saveit("+ind+")'>save</button><button class='btn btn-danger col-md-5 offset-md-1' onclick='cancelit("+ind+")'>cancel</div>"+"</td></tr>";
                }); 
       $("#tb1").html(tabData);
    }
})

//    resp.forEach(function(val,ind) {
//        tabData = tabData+ "<tr><td><input type='text' class='form-control ip' value='"+val.id+"' readonly></td><td><input class='form-control ip' value='"+val.name+"' readonly></td><td><input class='form-control ip' value='"+val.email+"' readonly></td><td> <input class='form-control ip' value='"+val.phone+"' readonly></td><td> <input class='form-control ip' value='"+val.address.city+"' readonly></td><td><div class='row' id='prim'> <span class='col-md-3' ><a href='view1.html?id="+ind+"'><i class='fas fa-eye'></i></a></span><span class='col-md-3' onclick='edit3("+ind+")'><i class='fas fa-pencil-alt'></i></span><span class='col-md-3' onclick='delete1("+ind+")'><i class='fas fa-trash'></i></span></div> <div id='sec' class='row d-none'><button class='col-md-5 btn btn-sm btn-success' onclick='saveit("+ind+")'>save</button><button class='btn btn-danger col-md-5 offset-md-1' onclick='cancelit("+ind+")'>cancel</div>"+"</td></tr>";
//    });
//    document.getElementById("tb1").innerHTML = tabData;
//
//var http1;
function delete1(id1){
    ger = id1;
    var url1 = ""
    var ident = $("#tb1");
    ident[0].children[ger].classList.add("d-none");
    url1 = "https://jsonplaceholder.typicode.com/users/"+(ger+1);
    $.ajax({
        method: "DELETE",
        url: url1,
        success: function (response1) { 
            console.log(response1);
         }
    });
        
    }

//var ttk;
//

var inn;
function edit3(param1){
     inn = $("#tb1")[0].children[param1].innerHTML;
    for(var i=1;i<=4;i++){
        $("#tb1")[0].children[param1].children[i].children[0].classList.remove("ip");
        $("#tb1")[0].children[param1].children[i].children[0].removeAttribute("readonly");
    }
    $("#tb1")[0].children[param1].children[5].children[0].classList.add("d-none");
    $("#tb1")[0].children[param1].children[5].children[1].classList.remove("d-none");
    //ttk = pen2;
    //console.log(pen2);
    //document.querySelector(".ip").classList.remove("ip")
 
}
//
  function cancelit(ind1){
    $("#tb1")[0].children[ind1].innerHTML = inn;
}
//
function saveit(ind1){
    var fio = [];
    for(var i=0;i<=4;i++){
        fio.push($("#tb1")[0].children[ind1].children[i].children[0].value);
    }
    //$(".ip")[3].addAttribute("readonly");
    //$(".ip")[3].addClass("ip");

    //document.getElementById("tb1").children[ind1].innerHTML = "<tr><td><input type='text' class='form-control ip' value='"+fio[0]+"' readonly></td><td><input class='form-control ip' value='"+fio[1]+"' readonly></td><td><input class='form-control ip' value='"+fio[2]+"' readonly></td><td> <input class='form-control ip' value='"+fio[3]+"' readonly></td><td> <input class='form-control ip' value='"+fio[4]+"' readonly></td><td><div class='row' id='prim'> <span class='col-md-3' ><a href='view1.html?id="+ind1+"'><i class='fas fa-eye'></i></a></span><span class='col-md-3' onclick='edit3("+ind1+")'><i class='fas fa-pencil-alt'></i></span><span class='col-md-3' onclick='delete1("+ind1+")'><i class='fas fa-trash'></i></span></div> <div id='sec' class='row d-none'><button class='col-md-5 btn btn-sm btn-success' onclick='saveit("+ind1+")'>save</button><button class='btn btn-danger col-md-5 offset-md-1' onclick='cancelit("+ind1+")'>cancel</div>"+"</td></tr>";

var ob1 = {
    name:  $("#tb1")[0].children[ind1].children[1].children[0].value,
    email: $("#tb1")[0].children[ind1].children[2].children[0].value
}

$.ajax({
    method:"POST",
    url: "https://jsonplaceholder.typicode.com/users/",
    data: ob1,
    success: function(response){
        console.log(response);
    }
});
for(var i=0;i<=4;i++){
    $("#tb1")[0].children[ind1].children[i].children[0].setAttribute("readonly","");
    $("#tb1")[0].children[ind1].children[i].children[0].classList.add("ip"); 
}

$("#tb1")[0].children[ind1].children[5].children[1].classList.add("d-none")
$("#tb1")[0].children[ind1].children[5].children[0].classList.remove("d-none");

}

//document.getElementById("tb1").attributes("readonly");
