$("#add").click(function(){
    if($("#inputbox1").val()!=""){
        let inpVal = $("<div class='task1'></div>").text($("#inputbox1").val());
        let del = $("<i class='fas fa-trash-alt'></i>");
        let del1 = del.click(function(){
            let p1 = $(this).parent();
            p1.fadeOut(function(){
                p1.remove();
            }); 
        });
        let check = $("<i class='fas fa-check'></i>");
        let check1 = check.click(function(){
            let p2 = $(this).parent();
            p2.fadeOut(function(){
                $(".listgrp2").append(p2);
                p2.fadeIn();
                //if fadeIn() is not used, then the element stays in display:none position.
            });
            $(this).remove();
        });
        inpVal.append(del,check);
        $(".listgrp").append(inpVal);
        $("#inputbox1").val("");
    }
});

$("#clear").click(function(){
    $("#inputbox1").val("");
});