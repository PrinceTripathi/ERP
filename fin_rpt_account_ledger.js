



var browser=navigator.appName;

 var savepubcode = "";
 var  savepubname = "";
 var saveacccode = "";
 var saveaccname = "";

 var accountfromcode = "";
 var accountnamefrom = "";
 var accounttocode="";
 var acounttoname="";
 

function forcancel()
{

   //document.getElementById('txtFromdate').focus();
 if(document.getElementById("hdn_user_right").value=="0" || document.getElementById("hdn_user_right").value=="")
  {
     alert("You are not Authorized to see this form")
     window.close();
     return false;
  }
  else
  {
  document.getElementById('txtFromdate').value="";
 document.getElementById('txtTodate').value="";
  document.getElementById('txtAccountName').value="";
 document.getElementById('blAccountType').value="";
 document.getElementById('txt_acc_name').value="";
 document.getElementById('TxtAccCodeName').value="";
  document.getElementById('txt_acc_code').value="";
  document.getElementById('txtAccCodeTo').value = "";
  if ($('hdncontype').value == "Hari Bhoomi") {
      document.getElementById("txtuname").value = $('hdnunitname').value;
      document.getElementById("txtunit").value = $('hdnunit').value;
  }
  else {
      document.getElementById("txtuname").value = "";
      document.getElementById("txtunit").value = "";
  }

  //   document.getElementById('txtunit').disabled=true;
  $('txtuname').focus();
  return false;
  }
}

function Enterf2(event)
{

           if((event.keyCode == 8)||(event.keyCode == 46))
           {
                            if(document.activeElement.id=="txt_acc_name")
                            {      
                                     document.getElementById('txt_acc_code').value="";  
                                     document.getElementById('txt_acc_name').value="";  
                                   
                                     saveacccode = "";
                                     saveaccname = "";
                                    
                            }
                            
                              if(document.activeElement.id=="txtdivision_name")
                            {      
                                     document.getElementById('txtdivision_code').value="";  
                                     document.getElementById('txtdivision_name').value="";  
                                   
                                     savepubcode = "";
                                     savepubname = "";
                                    
                            }
                            
                            if(document.activeElement.id=="txtAccountName")
                            {      
                                     document.getElementById('txtAccountName').value="";  
                                     document.getElementById('blAccountType').value="";  
                                   
                                   
                            }
                            
                              if(document.activeElement.id=="TxtAccCodeName")
                            {      
                                     document.getElementById('TxtAccCodeName').value="";  
                                     document.getElementById('txtAccCodeTo').value="";  
                                  
                                    
                            }
                }


    if(event.keyCode==27)
    {
            if(document.activeElement.id=="lstpublication")
            {
               document.getElementById('divcity').style.display="none"; 
               document.getElementById('txtdivision_name').focus();
             
            }
            
              if(document.activeElement.id=="secsubgroup")
            {
               document.getElementById('divsecsubgroup').style.display="none"; 
             document.getElementById('txt_acc_name').focus();
            }
            
            
            if(document.activeElement.id=="lstACCto")
            {
               document.getElementById('divACCto').style.display="none"; 
              document.getElementById('TxtAccCodeName').focus();
            }
            
              if(document.activeElement.id=="lstAcntType1")
            {
               document.getElementById('divAccounttype1').style.display="none"; 
              document.getElementById('txtAccountName').focus();
            }
    
    }


    if(event.keyCode==113)  
    {       
    
        if(document.activeElement.id=="txtdivision_name")
        {       
                document.getElementById('lstpublication').value="";
                var compcode = document.getElementById('hdncompcode').value;
                document.getElementById("divcity").style.display="block";
                document.getElementById('divcity').style.top=200+ "px" ;
                document.getElementById('divcity').style.left=456+ "px";
                var dateformat = "";
        
                var extra1=(document.getElementById('txtdivision_name').value).toUpperCase();
                var extra2="";
            
             
        
                document.getElementById('lstpublication').focus();
                fin_rpt_account_ledger.fill_division(compcode, dateformat,extra1,extra2,bindpub_callback)
        }


        if (document.activeElement.id == "txtAccountName") 
        {
            document.getElementById('lstAcntType1').value = "";
            var compcode = document.getElementById('hdncompcode').value;
            document.getElementById("divAccounttype1").style.display = "block";
            document.getElementById('divAccounttype1').style.top = 220 + "px";
            document.getElementById('divAccounttype1').style.left = 405 + "px";
            var dateformat = "";

            var extra1 = (document.getElementById('txtAccountName').value).toUpperCase();
            var extra2 = "";

            document.getElementById('lstAcntType1').disabled=false;
           
            document.getElementById('lstAcntType1').focus();
            fin_rpt_account_ledger.fill_accounttype(compcode, dateformat, extra1, extra2, bindacc_callback)
        }


        if (document.activeElement.id == "TxtAccCodeName") {
            document.getElementById('lstACCto').value = "";
            var compcode = document.getElementById('hdncompcode').value;
            document.getElementById("divACCto").style.display = "block";
            document.getElementById('divACCto').style.top = 280 + "px";
            document.getElementById('divACCto').style.left = 405 + "px";
            var dateformat = document.getElementById('lstAcntType1').value;

            var extra1 = (document.getElementById('TxtAccCodeName').value).toUpperCase();
            var extra2 = "";
            var extra3="";
            var extra4="";
            var extra5="";
                extra3=$('txtunit').value;
                extra4=$('hdnuserid').value              
             if($('txtunit').value.indexOf(",")>=0)
               {
                  extra3=""
               
               }
            document.getElementById('lstACCto').focus();
            fin_rpt_account_ledger.fill3_account(compcode, dateformat, extra1, extra2,extra3,extra4,extra5, bindACC1_callback)
        }
        
        
         if(document.activeElement.id=="txt_acc_name")
        {       
                document.getElementById('secsubgroup').value="";
                var compcode = document.getElementById('hdncompcode').value;
                document.getElementById("divsecsubgroup").style.display="block";
                document.getElementById('divsecsubgroup').style.top=260+ "px" ;
                document.getElementById('divsecsubgroup').style.left=405+ "px";
                var dateformat = document.getElementById('lstAcntType1').value;
        
                var extra1=(document.getElementById('txt_acc_name').value).toUpperCase();
                var extra2="";
                var extra3="";
                var extra4="";
                var extra5="";
            
             
        
                document.getElementById('secsubgroup').focus();
                fin_rpt_account_ledger.fill_account(compcode, dateformat,extra1,extra2,extra3,extra4,extra5,bindpub11_callback)
        }
      
            
   }

else if(event.keyCode==13 || event.keyCode==9 && event.shiftKey==false)
{
    // chkfield();
   
        
        if(document.activeElement.id=="lstpublication")
        {
               if(document.getElementById('lstpublication').value=="0")
               {
                 alert("Please select the Main Group");
                 return false;
               }
               document.getElementById("divcity").style.display="none";              
               var page=document.getElementById('lstpublication').value;
               agencycodeglo=page;     
              
                for(var k=0;k <= document.getElementById("lstpublication").length-1;k++)
                {
                    if(document.getElementById('lstpublication').options[k].value==page)
                    {
                    var abc=document.getElementById('lstpublication').options[k].innerText;                                           
                    var splitpub = abc;                   
                    var str = splitpub.split("-");
                    var len1=str.length;           
                    pubcode = str[2];
                    var pubspace = str[1];
                    var pubname = str[0];                   
                    document.getElementById('txtdivision_code').value=pubcode;

                       document.getElementById('txtdivision_name').value=pubname;
                       
                        savepubcode = pubcode;
                        savepubname = pubname;
                     document.getElementById('txtdivision_name').focus();
                 
                    return false;
           
                    }
                }
      
               document.getElementById("divcity").style.display='none';
               return false;
    
     }
     //////////////////////////////////////
     
     ////////////for account name/////////////////
    
     if (document.activeElement.id == "lstAcntType1")
      {
            if ($('lstAcntType1').value == "0") 
            {
                 alert("Please select Account Name");
                return false;
            }
            $("divAccounttype1").style.display = "none";
            var page = $('lstAcntType1').value;
            agencycodeglo = page;
            for (var k = 0; k <= $("lstAcntType1").length - 1; k++)
             {
                if ($('lstAcntType1').options[k].value == page) 
                {
                    var abc = $('lstAcntType1').options[k].innerText;
                    $('blAccountType').value = agencycodeglo;
                    var splitpub = abc;
                    var str = splitpub.split("--");
                    abc = str[1];
                    abc1 = str[0];
                    var abc2 = str[2];
                    $('blAccountType').value = abc;
                    $('txtAccountName').value = abc1;
                    //$('txtagencysubcode').value = abc2;
                     $('txtAccountName').focus();
                    return false;
                }
            }
              document.getElementById("divAccounttype1").style.display='none';
               return false;
        }
       
    
  

 
  
     ////////////end for accont name//////////////////////
     
       ////////////for Toaccount name/////////////////
    
     if (document.activeElement.id == "secsubgroup")
      {
            if ($('secsubgroup').value == "0") 
            {
                 alert("Please select From Account Name");
                return false;
            }
            $("divsecsubgroup").style.display = "none";
            var page = $('secsubgroup').value;
            agencycodeglo = page;
            for(var k=0;k <= document.getElementById("secsubgroup").length-1;k++)
                                {
                     if(document.getElementById('secsubgroup').options[k].value==page)
                                            {
                            var abc=document.getElementById('secsubgroup').options[k].innerText;             
                            var splitpub = abc;
                            
                            var str = splitpub.split("-");
                            var len1=str.length;
                       
                            pubcode = str[2];
                            var pubspace = str[1];
                            var pubname = str[0];
                            document.getElementById('txt_acc_code').value=pubcode;
                            document.getElementById('txt_acc_name').value=pubname;
                            
                              saveacccode = pubcode;
                              saveaccname = pubname;
                              document.getElementById('txt_acc_name').focus();
                     
                                            }
                                            
                                        }  
              document.getElementById("divsecsubgroup").style.display='none';
               return false;
        }
   
     ////////////end for Toaccont name//////////////////////
     
        if(document.activeElement.id=="lstACCto")
        {
               if(document.getElementById('lstACCto').value=="0")
               {
                 alert("Please select the To Account Name.");
                 return false;
               }
               $("divACCto").style.display = "none";
            var page = $('lstACCto').value;
            agencycodeglo = page;
            for (var k = 0; k <= $("lstACCto").length - 1; k++) {
                if ($('lstACCto').options[k].value == page) {
                    var abc = $('lstACCto').options[k].innerText;
                    $('txtAccCodeTo').value = agencycodeglo;
                    var splitpub = abc;
                    var str = splitpub.split("--");
                    abc = str[1];
                    abc1 = str[0];
                    var abc2 = str[2];
                    $('txtAccCodeTo').value = abc;
                    $('TxtAccCodeName').value = abc1;
                    //$('txtagencysubcode').value = abc2;
                    $('TxtAccCodeName').focus();
                    return false;
           
                    }
                }
      
               document.getElementById("divsecsubgroup").style.display='none';
               return false;
    
     }
     if (document.activeElement.id == "txtuname") {
         if ($('txtunit').value == "") {
             alert('please Select Unit Name using by F2')
             $('txtuname').focus();
             return false;
         }
         else {
             $('txtFromdate').focus();
             return false;
         }
     }
     if(document.activeElement.id=="txtdivision_name")
        {
            if($('txtdivision_code').value=="")
            {
                alert('please Select Branch Name')
                $('txtdivision_name').focus();
                return false;
            }
            else
            {
            $('txtFromdate').focus();
            return false;
            }
        }
         if(document.activeElement.id=="txtFromdate")
        {
            if($('txtFromdate').value=="")
            {
                alert('Please Select From Date')
                $('txtFromdate').focus();
                return false;
            }
            else
            {
            $('txtTodate').focus();
            return false;
            }
        }
         if(document.activeElement.id=="txtTodate")
        {
            if($('txtTodate').value=="")
            {
                alert('Please Select To Date')
                $('txtTodate').focus();
                return false;
            }
            else
            {
            $('txtAccountName').focus();
            return false;
            }
        }
        
         if(document.activeElement.id=="txtAccountName")
        {
            if($('blAccountType').value=="")
            {
                alert('Please Select Account Type')
                $('txtAccountName').focus();
                return false;
            }
            else
            {
            $('txt_acc_name').focus();
            return false;
            }
        }
        
        if(document.activeElement.id=="txt_acc_name")
        {
            if($('txt_acc_code').value=="")
            {
                alert('Please Select From Account Name')
                $('txt_acc_name').focus();
                return false;
            }
            else
            {
            $('TxtAccCodeName').focus();
            return false;
            }
        }
        
         if(document.activeElement.id=="TxtAccCodeName")
        {
            if($('txtAccCodeTo').value=="")
            {
                alert('Please Select To Account Name')
                $('TxtAccCodeName').focus();
                return false;
            }
            else
            {
            $('drpnarration').focus();
            return false;
            }
        }
        
         if(document.activeElement.id=="drpnarration")
        {
            $('drpbill_ref').focus();
            return false;
        }
        
          if(document.activeElement.id=="drpbill_ref")
        {
            $('drpvoucher').focus();
            return false;
        }
        
          if(document.activeElement.id=="drpvoucher")
        {
            $('drpformat').focus();
            return false;
        }
        
        
          if(document.activeElement.id=="drpformat")
        {
            $('drpcontinuity').focus();
            return false;
        }
           if(document.activeElement.id=="drpcontinuity")
        {
            $('drpcummulative').focus();
            return false;
        }
        
        
        
         if(document.activeElement.id=="drpcummulative")
        {
            $('btnledger').focus();
            return false;
        }
     

}


    

}








function bindpub_callback(res)
{
    ds=res.value;
    if(ds!= null && typeof(ds) == "object" && ds.Tables[0].Rows.length > 0) 
    {
        var pkgitem = document.getElementById("lstpublication");
        pkgitem.options.length = 0;
        pkgitem.style.width = "350px";
        pkgitem.options[0]=new Option("-Select Branch Name-","0");
        pkgitem.options.length = 1; 

        for (var i = 0  ;  i < ds.Tables[0].Rows.length;  ++i)
        {


            pkgitem.options[pkgitem.options.length] = new Option(repalcestr2quote(ds.Tables[0].Rows[i].Branch_Name) + "--" + ds.Tables[0].Rows[i].Branch_Code, ds.Tables[0].Rows[i].Branch_Code);

         
            pkgitem.options.length;
        }
    }
        $("lstpublication").value="0";
        
       
        
        return false;
}


function bindacc_callback(res) {
    ds = res.value;
    if (ds != null && typeof (ds) == "object" && ds.Tables[0].Rows.length > 0) {
        var pkgitem = document.getElementById("lstAcntType1");
        pkgitem.options.length = 0;
        pkgitem.style.width = "350px";
        pkgitem.options[0] = new Option("-Select Account Name-", "0");
        pkgitem.options.length = 1;

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {


            pkgitem.options[pkgitem.options.length] = new Option(repalcestr2quote(ds.Tables[0].Rows[i].AC_TYPE_DESC) + "--" + ds.Tables[0].Rows[i].AC_TYPE_CODE, ds.Tables[0].Rows[i].AC_TYPE_CODE);


            pkgitem.options.length;
        }
    }
    $("lstAcntType1").value = "0";



    return false;
}

function bindACC1_callback(res) {
    ds = res.value;
    if (ds != null && typeof (ds) == "object" && ds.Tables[0].Rows.length > 0) {
        var pkgitem = document.getElementById("lstACCto");
        pkgitem.options.length = 0;
        pkgitem.style.width = "350px";
        pkgitem.options[0] = new Option("-Select Account Name-", "0");
        pkgitem.options.length = 1;

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {


          pkgitem.options[pkgitem.options.length] = new Option(repalcestr2quote(ds.Tables[0].Rows[i].ACC_NAME)+"--"+ds.Tables[0].Rows[i].CDP,ds.Tables[0].Rows[i].CDP);


            pkgitem.options.length;
        }
    }
    $("lstACCto").value = "0";
$("lstACCto").focus();


    return false;
}


function bindpub11_callback(res)
{
    ds=res.value;
    if(ds!= null && typeof(ds) == "object" && ds.Tables[0].Rows.length > 0) 
    {
        var pkgitem = document.getElementById("secsubgroup");
        pkgitem.options.length = 0; 
        pkgitem.options[0]=new Option("-Select Account Name-","0");
        pkgitem.options.length = 1; 

        for (var i = 0  ;  i < ds.Tables[0].Rows.length;  ++i)
        {
       
        
            pkgitem.options[pkgitem.options.length] = new Option(repalcestr2quote(ds.Tables[0].Rows[i].ACC_NAME)+"--"+ds.Tables[0].Rows[i].CDP,ds.Tables[0].Rows[i].CDP);

         
            pkgitem.options.length;
        }
    }
        $("secsubgroup").value="0";
        
       
        
        return false;
}





function fillmaingrp(mycityval)
{
  //  document.getElementById('hiddenquery').value="query";
 //   if(document.getElementById('hiddenquery').value=="query")
 //   {


        if(document.activeElement.id=="lstpublication")
        {
                    if(document.getElementById('lstpublication').value=="0")
                    {
                            alert("Please select the branch name");
                            return false;
                    }
                           
                    var page=document.getElementById('lstpublication').value;
                    agencycodeglo=page;
                    if(browser!="Microsoft Internet Explorer")
                    {
                                for(var k=0;k <= document.getElementById("lstpublication").length-1;k++)
                                {
                                        var abc=document.getElementById('lstpublication').options[k].innerHTML;
                                        if(document.getElementById('lstpublication').options[k].value==page)
                                        {
                                            document.getElementById('').value=abc;
                                            break;
                                        }
                                }
                    }
                    else
                    {
                                for(var k=0;k <= document.getElementById("lstpublication").length-1;k++)
                                {

                                            if(document.getElementById('lstpublication').options[k].value==page)
                                            {
                                                    var abc=document.getElementById('lstpublication').options[k].innerText;             
                                                    
                                           

                                                  
                                                    var splitpub = abc;
                                                    
                                                    var str = splitpub.split("-");
                                                    var len1=str.length;
                                               
                                                    pubcode = str[2];
                                                    var pubspace = str[1];
                                                    var pubname = str[0];
                                                    
                                                    
                                                  
                                                    
                                                    document.getElementById('txtdivision_code').value=pubcode;

                                                    document.getElementById('txtdivision_name').value=pubname;
                                                     document.getElementById('txtdivision_name').focus();
                                                      savepubcode = pubcode;
                                                      savepubname = pubname;

                                             
                                            }
                                            
                                        }    
                                 }
                                document.getElementById("divcity").style.display='none';
                              //  document.getElementById('txt_prisub_code').focus();
                                return false;
                    }
     
   // }
    
}






function fillmaingrp11(mycityval)
{
  //  document.getElementById('hiddenquery').value="query";
 //   if(document.getElementById('hiddenquery').value=="query")
 //   {


        if(document.activeElement.id=="secsubgroup")
        {
                    if(document.getElementById('secsubgroup').value=="0")
                    {
                            alert("Please select the account name");
                            return false;
                    }
                           
                    var page=document.getElementById('secsubgroup').value;
                    agencycodeglo=page;
                    if(browser!="Microsoft Internet Explorer")
                    {
                                for(var k=0;k <= document.getElementById("secsubgroup").length-1;k++)
                                {
                                        var abc=document.getElementById('secsubgroup').options[k].innerHTML;
                                        if(document.getElementById('secsubgroup').options[k].value==page)
                                        {
                                            document.getElementById('').value=abc;
                                            break;
                                        }
                                }
                    }
                    else
                    {
                                for(var k=0;k <= document.getElementById("secsubgroup").length-1;k++)
                                {

                                            if(document.getElementById('secsubgroup').options[k].value==page)
                                            {
                                                    var abc=document.getElementById('secsubgroup').options[k].innerText;             
                                                    
                                           

                                                  
                                                    var splitpub = abc;
                                                    
                                                    var str = splitpub.split("-");
                                                    var len1=str.length;
                                               
                                                    pubcode = str[2];
                                                    var pubspace = str[1];
                                                    var pubname = str[0];
                                                    
                                                    
                                                  
                                                    
                                                    document.getElementById('txt_acc_code').value=pubcode;

                                                    document.getElementById('txt_acc_name').value=pubname;
                                                    
                                                      saveacccode = pubcode;
                                                      saveaccname = pubname;
                                                      document.getElementById('txt_acc_name').focus();
                                             
                                            }
                                            
                                        }    
                                 }
                                document.getElementById("divsecsubgroup").style.display='none';
                              //  document.getElementById('txt_prisub_code').focus();
                                return false;
                    }
     
   // }
    
}







function repalcesinglequote(val)
{
    if(val.indexOf("'")>=0)
    {
        while(val.indexOf("'")>=0)
        {
            val=val.replace("'","^");
        }
    }
    return val;
}


function repalcestr2quote(val)
{
   if(val==null)
   {
     var a11 = "" 
     return a11;
   }

    if(val.indexOf("^")>=0)
    {
        while(val.indexOf("^")>=0)
        {
            val=val.replace("^","'");
        }
    }
    return val;
}





function trim(stringToTrim) 
 {


	return stringToTrim.replace(/^\s+|\s+$/g,"");
 }

// function forpendingreport() 
// {
//     var fromdate = $('txtFromdate').value;
//     var todate = $('txtTodate').value;
//     if (fromdate == "") {
//         alert('Please enter fromdate.');
//         $('txtFromdate').focus();
//         return false;
//     }
//     if (todate == "") {
//         alert('Please enter Todate.');
//         $('txtTodate').focus();
//         return false;
//     }
//     var compcode = $('hdncompcode').value;



//     var view = $('drpformat').value;




//     window.open("fin_rpt_disp_account_ledger2.aspx?compcode=" + compcode + "&view=" + view + "&branchcode=" + savepubcode + "&accountcode=" + saveacccode + "&fromdate=" + fromdate + "&fromdate="+fromdate+"&todate=" + todate, '');

//     return false;
// }
 
 function forreport()
{

//            if($('txtdivision_code').value=="")
//            {
//                alert('please Select Branch Name')
//                $('txtdivision_name').focus();
//                return false;
//            }
     
        
        var fromdate =  $('txtFromdate').value;
        var todate = $('txtTodate').value;
        var unit_name = $('txtunit').value;

        if (unitname55== "") {
            alert('Please enter unit.');
            $('txtuname').focus();
            return false;
        }
        if (fromdate == "") {
            alert('Please enter fromdate.');
            $('txtFromdate').focus();
            return false;
        }
        if(fromdate == "")
        {
                alert('Please enter fromdate.');
                $('txtFromdate').focus();
                return false;
        }
        if(todate == "")
        {
                alert('Please enter Todate.');
                $('txtTodate').focus();
                return false;
        }
        var compcode = $('hdncompcode').value;

 
            if($('txtAccountName').value!="" && $('blAccountType').value=="")
            {
                alert('Please Select Account Type Using by F2')
                $('txtAccountName').value="";
                $('blAccountType').value="";
                $('txtAccountName').focus();
                return false;
            }
         
      
            if($('txt_acc_code').value=="")
            {
                alert('Please Select From Account Name')
                $('txt_acc_name').focus();
                return false;
            }
        
           if($('txtAccCodeTo').value=="")
            {
                alert('Please Select To Account Name')
                $('TxtAccCodeName').focus();
                return false;
            }
         
     var view = $('drpformat').value;
        var branchcode = $('txtdivision_code').value;
        var accounttype = $('blAccountType').value;
        var accountfrom = "";
        var account_name = "";
        var accountto = "";
        var accountnameto = "";

        if (document.getElementById('chbres2').checked == true) {
            accountfrom = accountfromcode.replace("&", "/");
            account_name = accountnamefrom;
            
        }
        else {
            accountfrom = accountfromcode;
            account_name = accountnamefrom.replace("&", "/");
            
        }

        if (document.getElementById('chbres3').checked == true) {

            accountto = accounttocode;
            accountnameto = acounttoname;
        }
        else {

            accountnameto = acounttoname;
            accountto = accounttocode;
        }
        
//        var accountfrom = $('txt_acc_code').value;
//        var account_name = $('txt_acc_name').value.replace("&","/");
//        var accountto = $('txtAccCodeTo').value;
        var narration = $('drpnarration').value;
        var billref = $('drpbill_ref').value;
        var dateformat = $('dateformat').value;
        var actname=$('txtAccountName').value;
        var unit_name1=$('txtuname').value;
        var branch_name=$('txtdivision_name').value;
        var voucher_detail = $('drpvoucher').value;
         var pagebrek = $('drpcontinuity').value;
         var cummulative = $('drpcummulative').value;
         var unitname55 = $('txtunit').value;
         var reporttype = $('drpReportType').value;

         if (document.getElementById('drpselectfrmt').value == "0") {
             alert("plase select the format");
             return false;}
            if (document.getElementById('drpselectfrmt').value =="S") {
                window.open("fin_rpt_disp_account_statement.aspx?compcode=" + compcode + "&view=" + view + "&branchcode=" + branchcode + "&accounttype=" + accounttype + "&accountfrom=" + accountfrom + "&accountto=" + accountto + "&narration=" + narration + "&billref=" + billref + "&dateformat=" + dateformat + "&fromdate=" + fromdate + "&todate=" + todate + "&actname1=" + actname + "&unit_name=" + unit_name + "&branch_name=" + branch_name + "&AC_Name=" + account_name + "&pagebrek=" + pagebrek + "&cummulative=" + cummulative + "&unitname55=" + unitname55 + "&voucher_detail=" + voucher_detail+"&reporttype=" + reporttype, '');

         }
         else {
             var ty = document.getElementById('drpselectfrmt').value;

             window.open("fin_rpt_disp_account_ledger1.aspx?compcode=" + compcode + "&view=" + view + "&branchcode=" + branchcode + "&accounttype=" + accounttype + "&accountfrom=" + accountfrom + "&accountto=" + accountto + "&narration=" + narration + "&billref=" + billref + "&dateformat=" + dateformat + "&fromdate=" + fromdate + "&todate=" + todate + "&actname1=" + actname + "&unit_name=" + unit_name + "&branch_name=" + branch_name + "&AC_Name=" + account_name + "&pagebrek=" + pagebrek + "&cummulative=" + cummulative + "&unitname55=" + unitname55 + "&voucher_detail=" + voucher_detail + "&ty=" + ty + "&reporttype=" + reporttype, '');
            }

       
       return false;
}


function print1()
{
      
     document.getElementById('btnprint').style.display ="none";
     window.print();
     return false;

}
/////////////////////////////////////////////////////////////////////////////////////////////////////////

function fillaccounttype1(event) 
{

    var key = event.keyCode ? event.keyCode : event.which;
    if ((event.keyCode == 8) || (event.keyCode == 46 || event.keyCode == 113)) {
        if (document.activeElement.id == "txtAccountName") {
            document.getElementById('txtAccountName').value = "";
            document.getElementById('blAccountType').value = "";

        }
    }
    if (event.keyCode == 113)
     {
        

        if (document.activeElement.id == "txtAccountName") {

            activeid = document.activeElement.id;
            document.getElementById("divaccounttype").style.display = "block";
            var divid = "divaccounttype";
            var listboxid = "lstaccounttype";
            $('lstaccounttype').value = "";
            $('lstaccounttype').value = "";
            var compcode = $('hdncompcode').value;
            $("divaccounttype").style.display = "block";
            $('divaccounttype').style.top = 238 + "px";
            $('divaccounttype').style.left = 444 + "px";
            var dateformat = $('HDN_dateformat').value;
            var companycode = $('hdncompcode').value;
            var extra1 = "";
            var extra2 = "";
            $('lstaccounttype').focus();
            var ds = fin_rpt_account_ledger.fill_accounttype(compcode, dateformat, extra1, extra2)
          
            if (ds == null)
                return false;
            var objadscat = document.getElementById(listboxid);
            objadscat.options.length = 0;
            objadscat.style.width = "350px"
            objadscat.options[0] = new Option("-Select Account Type-", "0");
            //alert(pkgitem.options.length);
            objadscat.options.length = 1;
            for (var i = 0; i < ds.value.Tables[0].Rows.length; ++i) {
                objadscat.options[objadscat.options.length] = new Option(ds.value.Tables[0].Rows[i].AC_TYPE_DESC + "--" + ds.value.Tables[0].Rows[i].AC_TYPE_CODE, ds.value.Tables[0].Rows[i].AC_TYPE_CODE);

                objadscat.options.length;
            }


            aTag = eval(document.getElementById(activeid))
            var btag;
            var leftpos = 0;
            var toppos = 0;
            do {
                aTag = eval(aTag.offsetParent);
                leftpos += aTag.offsetLeft;
                toppos += aTag.offsetTop;
                btag = eval(aTag)
            } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
            var tot = document.getElementById('divaccounttype').scrollLeft;
            var scrolltop = document.getElementById('divaccounttype').scrollTop;
            document.getElementById(divid).style.left = document.getElementById(activeid).offsetLeft + leftpos - tot + "px";
            document.getElementById(divid).style.top = document.getElementById(activeid).offsetTop + toppos - scrolltop + "px"; //"510px";
            //document.getElementById(activeid).style.backgroundColor="#FFFF80";
            document.getElementById(divid).style.display = "block";
            document.getElementById(listboxid).focus();





        }
 
        
        
        
        
    }
}
function onclickaccount(event)
 {
      var browser=navigator.appName;
    
    if (event.keyCode == 13 || event.type == "click") 
    {
        if (document.activeElement.id == "lstaccounttype")
         {
            if ($('lstaccounttype').value == "0")
             {
                // alert("Please select the AcntType");
                return false;
            }
            $("divaccounttype").style.display = "none";
            var page = $('lstaccounttype').value;
            agencycodeglo = page;
            for (var k = 0; k <= $("lstaccounttype").length - 1; k++) {
               if(document.getElementById('lstaccounttype').options[k].selected == true)
               // if ($('lstaccounttype').options[k].value == page)
                 {
                 var abc;
                    if (browser != "Microsoft Internet Explorer")
                     {
                         abc = document.getElementById('lstaccounttype').options[k].textContent;
                    }
                    else 
                    {
                        abc = document.getElementById('lstaccounttype').options[k].innerText;
                    }

                 
                  //  var abc = $('lstAcntType1').options[k].innerText;
                    $('blAccountType').value = agencycodeglo;
                    var splitpub = abc;
                    var str = splitpub.split("--");
                    abc = str[1];
                    abc1 = str[0];
                    var abc2 = str[2];
                    $('blAccountType').value = abc;
                    $('txtAccountName').value = abc1;
                    //$('txtagencysubcode').value = abc2;
                     $('txtAccountName').focus();
                    return false;
                }
            }
        }
        $("divAccounttype1").style.display = "none";
         return false;
    }

    else if (event.keyCode == 27) {
    $("divAccounttype1").style.display = "none";
    $('txtAccountName').focus();
    }
}
function bindaccount_callback(res) {
    ds = res.value;
    if (ds != null && typeof (ds) == "object" && ds.Tables[0].Rows.length > 0) {
        var pkgitem = $("lstaccounttype");
        pkgitem.options.length = 0;
        pkgitem.style.width = "350px";
        pkgitem.options[0] = new Option("-Select Account Type-", "0");
        pkgitem.options.length = 1;
        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            pkgitem.options[pkgitem.options.length] = new Option(repalcestr2quote(ds.Tables[0].Rows[i].AC_TYPE_DESC) + "--" + ds.Tables[0].Rows[i].AC_TYPE_CODE, ds.Tables[0].Rows[i].AC_TYPE_CODE);
            pkgitem.options.length;
        }
    }
    $("lstaccounttype").value = "0";
    $("blAccountType").value = "";
    return false;
}


function fillaccounttype() 
{
    if (event.keyCode == 113) {
        if (document.activeElement.id == "txtAccountName") {

            activeid = document.activeElement.id;
            document.getElementById("divaccounttype").style.display = "block";
            var divid = "divaccounttype";
            var listboxid = "lstaccounttype";
            $('lstaccounttype').value = "";
            $('lstaccounttype').value = "";
            var compcode = $('hdncompcode').value;
            $("divaccounttype").style.display = "block";
            $('divaccounttype').style.top = 238 + "px";
            $('divaccounttype').style.left = 444 + "px";
            var dateformat = $('HDN_dateformat').value;
            var companycode = $('hdncompcode').value;
            var extra1 = "";
            var extra2 = "";
            $('lstaccounttype').focus();
            var ds = fin_rpt_account_ledger.fill_accounttype(compcode, dateformat, extra1, extra2)

            if (ds == null)
                return false;
            var objadscat = document.getElementById(listboxid);
            objadscat.options.length = 0;
            objadscat.style.width = "254px"
            objadscat.options[0] = new Option("-Select Account Type-", "0");
            //alert(pkgitem.options.length);
            objadscat.options.length = 1;
            for (var i = 0; i < ds.value.Tables[0].Rows.length; ++i) {
                objadscat.options[objadscat.options.length] = new Option(ds.value.Tables[0].Rows[i].AC_TYPE_DESC + "--" + ds.value.Tables[0].Rows[i].AC_TYPE_CODE, ds.value.Tables[0].Rows[i].AC_TYPE_CODE);

                objadscat.options.length;
            }


            aTag = eval(document.getElementById(activeid))
            var btag;
            var leftpos = 0;
            var toppos = 0;
            do {
                aTag = eval(aTag.offsetParent);
                leftpos += aTag.offsetLeft;
                toppos += aTag.offsetTop;
                btag = eval(aTag)
            } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
            var tot = document.getElementById('divbranch').scrollLeft;
            var scrolltop = document.getElementById('divbranch').scrollTop;
            document.getElementById(divid).style.left = document.getElementById(activeid).offsetLeft + leftpos - tot + "px";
            document.getElementById(divid).style.top = document.getElementById(activeid).offsetTop + toppos - scrolltop + "px"; //"510px";
            //document.getElementById(activeid).style.backgroundColor="#FFFF80";
            document.getElementById(divid).style.display = "block";
            document.getElementById(listboxid).focus();





        }
    }
}
//function onclickaccount() {
//    if (event.keyCode == 13 || event.type == "click") 
//    {
//        if (document.activeElement.id == "lstaccounttype") 
//        {
//            if ($('lstaccounttype').value == "0") {
//                // alert("Please select the publication");
//                return false;
//            }
//            $("divAccounttype1").style.display = "none";
//            var page = $('lstaccounttype').value;
//            agencycodeglo = page;
//            for (var k = 0; k <= $("lstaccounttype").length - 1; k++)
//             {
//                if ($('lstaccounttype').options[k].value == page)
//                 {
//                    var abc = $('lstaccounttype').options[k].innerText;
//                    $('blAccountType').value = agencycodeglo;
//                    var splitpub = abc;
//                    var str = splitpub.split("--");
//                    abc = str[1];
//                    abc1 = str[0];
//                    var abc2 = str[2];
//                    $('blAccountType').value = abc;
//                    $('txtAccountName').value = abc1;
//                    //$('txtagencysubcode').value = abc2;
//                     $('txtAccountName').focus();
//                    return false;
//                }
//            }
//        }
//       //  $("divAccounttype1").style.display = "none";
//       //  return false;
//    }

//    else if (event.keyCode == 27)
//     {
//    $("divAccounttype1").style.display = "none";
//    $('blAccountType').focus();
//    }
//}
//function bindaccount_callback(res)
// {
//    ds = res.value;
//    
//    
////     if(document.getElementById('chbres1').checked==true)
////    {
////    
//     if (ds != null && typeof (ds) == "object" && ds.Tables[0].Rows.length > 0) 
//    {
//        var pkgitem = $("lstaccounttype");
//        pkgitem.options.length = 0;
//        pkgitem.options[0] = new Option("-Select Account Type-", "0");
//        pkgitem.options.length = 1;
//        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) 
//        {
//            pkgitem.options[pkgitem.options.length] = new Option(repalcestr2quote(ds.Tables[0].Rows[i].AC_TYPE_DESC) + "--" + ds.Tables[0].Rows[i].AC_TYPE_CODE, ds.Tables[0].Rows[i].AC_TYPE_CODE);
//            pkgitem.options.length;
//        }
//    }
//    }
//    else
//    {
//    
//       if (ds != null && typeof (ds) == "object" && ds.Tables[0].Rows.length > 0) 
//    {
//        var pkgitem = $("lstaccounttype");
//        pkgitem.options.length = 0;
//        pkgitem.options[0] = new Option("-Select Account Type-", "0");
//        pkgitem.options.length = 1;
//        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) 
//        {
//            pkgitem.options[pkgitem.options.length] = new Option(repalcestr2quote(ds.Tables[0].Rows[i].AC_TYPE_CODE) + "--" + ds.Tables[0].Rows[i].AC_TYPE_DESC, ds.Tables[0].Rows[i].AC_TYPE_DESC);
//            pkgitem.options.length;
//        }
//    }
//    
//    }
//    
//    $("lstaccounttype").value = "0";
//    $("blAccountType").value = "";
//   
//    
//    return false;
//}
//////////////////////////////////////////////////////////////////////////////////////////////////////
function fillaccountfrom(event)
 {
     var key = event.keyCode ? event.keyCode : event.which;
    if (event.keyCode == 113) 
    {
       

        if (document.activeElement.id == "txt_acc_name") {

            activeid = document.activeElement.id;
            document.getElementById("divaccountfrom").style.display = "block";
            var divid = "divaccountfrom";
            var listboxid = "lstaccountfrom";
            $('lstaccountfrom').value = "";
            $('lstaccountfrom').value = "";
            var compcode = $('hdncompcode').value;
            $("divaccountfrom").style.display = "block";
            $('divaccountfrom').style.top = 238 + "px";
            $('divaccountfrom').style.left = 400 + "px";
            var dateformat = $('HDN_dateformat').value;
            var companycode = $('hdncompcode').value;
            var accounttype = $("blAccountType").value;
            var extra1 = $('txt_acc_name').value;
            var extra2 = "";
            var extra3="";
            var extra4="";
            var extra5="";
           
            extra3=$('txtunit').value;
            extra4=$('hdnuserid').value
            
            if($('txtunit').value.indexOf(",")>=0)
              {
                extra3=""
                
              }
            
             $('lstaccountfrom').focus();
           var ds= fin_rpt_account_ledger.fill_account(compcode, accounttype, extra1, extra2,extra3,extra4,extra5)
         
            if (ds == null)
                return false;
            var objadscat = document.getElementById(listboxid);
            objadscat.options.length = 0;
            objadscat.style.width = "254px"
            objadscat.options[0] = new Option("-Select Account From-", "0");
            //alert(pkgitem.options.length);
            objadscat.options.length = 1;
            for (var i = 0; i < ds.value.Tables[0].Rows.length; ++i) {
                objadscat.options[objadscat.options.length] = new Option(ds.value.Tables[0].Rows[i].ACC_NAME + "--" + ds.value.Tables[0].Rows[i].CDP, ds.value.Tables[0].Rows[i].CDP);

                objadscat.options.length;
            }


            aTag = eval(document.getElementById(activeid))
            var btag;
            var leftpos = 0;
            var toppos = 0;
            do {
                aTag = eval(aTag.offsetParent);
                leftpos += aTag.offsetLeft;
                toppos += aTag.offsetTop;
                btag = eval(aTag)
            } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
            var tot = document.getElementById('divaccountfrom').scrollLeft;
            var scrolltop = document.getElementById('divaccountfrom').scrollTop;
            document.getElementById(divid).style.left = document.getElementById(activeid).offsetLeft + leftpos - tot + "px";
            document.getElementById(divid).style.top = document.getElementById(activeid).offsetTop + toppos - scrolltop + "px"; //"510px";
            //document.getElementById(activeid).style.backgroundColor="#FFFF80";
            document.getElementById(divid).style.display = "block";
            document.getElementById(listboxid).focus();





        }

        
        
        
    }
}
function onclickaccountfrom(event) 
{
    var browser = navigator.appName;
    if (event.keyCode == 13 || event.type == "click") 
    {
        if (document.activeElement.id == "lstaccountfrom")
         {
            if ($('lstaccountfrom').value == "0") {
                // alert("Please select the publication");
                return false;
            }
            $("divaccountfrom").style.display = "none";
            var page = $('lstaccountfrom').value;
            agencycodeglo = page;
            for (var k = 0; k <= $("lstaccountfrom").length - 1; k++) 
            {
                if ($('lstaccountfrom').options[k].value == page) 
                {
                    var abc;
                   
                    if (browser != "Microsoft Internet Explorer") {
                        abc = document.getElementById('lstaccountfrom').options[k].textContent;
                    }
                    else {
                        abc = document.getElementById('lstaccountfrom').options[k].innerText;
                    }
                    
                    
                   // var abc = $('lstaccountfrom').options[k].innerText;
                    $('txt_acc_code').value = agencycodeglo;
                    var splitpub = abc;
                    var str = splitpub.split("--");
                    abc = str[1];
                    abc1 = str[0];
                    var abc2 = str[2];
                    accountfromcode = abc;
                    accountnamefrom = abc1;
                    acounttoname = abc1;
                    accounttocode = abc;
//                    $('txt_acc_code').value = abc;
//                    $('txt_acc_name').value = abc1;
                    //$('txtagencysubcode').value = abc2;
                     
                     if(document.getElementById('chbres2').checked==true)
                    {
                    $('txt_acc_code').value = abc;
                    $('txt_acc_name').value = abc1;
                   $('TxtAccCodeName').value = abc1;
                   $('txtAccCodeTo').value = abc;


                   $('txt_acc_code').value = accountfromcode;
                   $('txt_acc_name').value = accountnamefrom;
                   $('TxtAccCodeName').value = acounttoname;
                   $('txtAccCodeTo').value = accounttocode;
                    }
                    else
                    {
                    $('txt_acc_code').value = abc1;
                    $('txt_acc_name').value = abc;
                     $('TxtAccCodeName').value = abc;
                     $('txtAccCodeTo').value = abc1;

                     $('txt_acc_code').value = accountnamefrom;
                     $('txt_acc_name').value = accountfromcode;
                     $('TxtAccCodeName').value = accounttocode;
                     $('txtAccCodeTo').value = acounttoname;
                    }
                     
                     
                     $('txt_acc_name').focus();
                    return false;
                }
            }
        }
    }

    else if (event.keyCode == 27) {
    $("divaccountfrom").style.display = "none";
    $('txt_acc_name').focus();
    }
}
function bindaccountfrom_callback(res)
 {
    ds = res.value;
    
    
    if(document.getElementById('chbres2').checked==true)
    {
    
     if (ds != null && typeof (ds) == "object" && ds.Tables[0].Rows.length > 0) 
    {
        var pkgitem = $("lstaccountfrom");
        pkgitem.options.length = 0;
        pkgitem.options[0] = new Option("-Select Account From-", "0");
        pkgitem.options.length = 1;
        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) 
        {
            pkgitem.options[pkgitem.options.length] = new Option(repalcestr2quote(ds.Tables[0].Rows[i].ACC_NAME) + "--" + ds.Tables[0].Rows[i].CDP, ds.Tables[0].Rows[i].CDP);
            //pkgitem.options[pkgitem.options.length] = new Option(repalcestr2quote(ds.Tables[0].Rows[i].AC_TYPE_DESC) + "--" + ds.Tables[0].Rows[i].AC_TYPE_CODE, ds.Tables[0].Rows[i].AC_TYPE_CODE);
            pkgitem.options.length;
        }
    }
   
    }
    else
    {
    
        if (ds != null && typeof (ds) == "object" && ds.Tables[0].Rows.length > 0) 
    {
        var pkgitem = $("lstaccountfrom");
        pkgitem.options.length = 0;
        pkgitem.options[0] = new Option("-Select Account From-", "0");
        pkgitem.options.length = 1;
        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) 
        {
            pkgitem.options[pkgitem.options.length] = new Option(repalcestr2quote(ds.Tables[0].Rows[i].CDP) + "--" + ds.Tables[0].Rows[i].ACC_NAME, ds.Tables[0].Rows[i].ACC_NAME);
            pkgitem.options.length;
        }
    }
    
    }
    
    $("lstaccountfrom").value = "0";
    $("txt_acc_code").value = "";
    return false;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////


function fillaccountto(event)
 {
   var key=event.keyCode?event.keyCode:event.which;
    
    if (event.keyCode == 113)
     {
             if (document.activeElement.id == "TxtAccCodeName") {
          
                activeid = document.activeElement.id;
                document.getElementById("divaccountto").style.display = "block";
                var divid = "divaccountto";
                var listboxid = "lstaccountto";
                $('lstaccountto').value = "";
                $('lstaccountto').value = "";
            var compcode = $('hdncompcode').value;
            $("divaccountto").style.display = "block";
            $('divaccountto').style.top = 275 + "px";
            $('divaccountto').style.left = 400 + "px";
            var dateformat = $('HDN_dateformat').value;
            var companycode = $('hdncompcode').value;
            var accounttype = $("blAccountType").value;
            var extra1 = $('TxtAccCodeName').value;
            var extra2 = "";
            var extra3 = "";
            var extra4 = "";
            var extra5 = "";
            
            if (document.getElementById('chbres2').checked == true) {
                extra2 = accountfromcode; //accountnamefrom
              }
            else {
                extra2 = accountfromcode;
                
            }
                     
           // var extra2 = $('txt_acc_code').value;
            $('lstaccountto').focus();
               
             var ds =fin_rpt_account_ledger.fill_account(compcode, accounttype, extra1, extra2,extra3,extra4,extra5)
                if (ds == null)
                    return false;
                var objadscat = document.getElementById(listboxid);
                objadscat.options.length = 0;
                objadscat.style.width = "254px"
                objadscat.options[0] = new Option("-Select Account To-", "0");
                //alert(pkgitem.options.length);
                objadscat.options.length = 1;
                for (var i = 0; i < ds.value.Tables[0].Rows.length; ++i) {
                    objadscat.options[objadscat.options.length] = new Option(ds.value.Tables[0].Rows[i].ACC_NAME + "--" + ds.value.Tables[0].Rows[i].CDP, ds.value.Tables[0].Rows[i].CDP);
                   
                    objadscat.options.length;
                }


                aTag = eval(document.getElementById(activeid))
                var btag;
                var leftpos = 0;
                var toppos = 0;
                do {
                    aTag = eval(aTag.offsetParent);
                    leftpos += aTag.offsetLeft;
                    toppos += aTag.offsetTop;
                    btag = eval(aTag)
                } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
                var tot = document.getElementById('divaccountto').scrollLeft;
                var scrolltop = document.getElementById('divaccountto').scrollTop;
                document.getElementById(divid).style.left = document.getElementById(activeid).offsetLeft + leftpos - tot + "px";
                document.getElementById(divid).style.top = document.getElementById(activeid).offsetTop + toppos - scrolltop + "px"; //"510px";
                //document.getElementById(activeid).style.backgroundColor="#FFFF80";
                document.getElementById(divid).style.display = "block";
                document.getElementById(listboxid).focus();

           



        }






    }
}
function onclickaccountto(event) 
{
    
        var browser=navigator.appName;
    if (event.keyCode == 13 || event.type == "click")
     {
        if (document.activeElement.id == "lstaccountto")
         {
            if ($('lstaccountto').value == "0") 
            {
                // alert("Please select the publication");
                return false;
            }
            $("divACCto").style.display = "none";
            $("divaccountto").style.display = "none";
            var page = $('lstaccountto').value;
            agencycodeglo = page;
            for (var k = 0; k <= $("lstaccountto").length - 1; k++) 
            {
                if ($('lstaccountto').options[k].value == page)
                 {
                 var abc;
                    if (browser != "Microsoft Internet Explorer")
                     {
                        abc = document.getElementById('lstaccountto').options[k].textContent;
                    }
                    else 
                    {
                        abc = document.getElementById('lstaccountto').options[k].innerText;
                    }
                 
                   //var abc = $('lstACCto').options[k].innerText;
                    $('txtAccCodeTo').value = agencycodeglo;
                    var splitpub = abc;
                    var str = splitpub.split("--");
                    abc = str[1];
                    abc1 = str[0];
                    var abc2 = str[2];
                    accounttocode = abc;
                    acounttoname = abc1;
                    if(document.getElementById('chbres3').checked==true)
                    {
                    $('txtAccCodeTo').value = abc;
                    $('TxtAccCodeName').value = abc1;
                    $('txtAccCodeTo').value = accounttocode;
                    $('TxtAccCodeName').value = acounttoname;
                    }
                    else
                    {
                    $('txtAccCodeTo').value = abc1;
                    $('TxtAccCodeName').value = abc;

                    $('txtAccCodeTo').value = acounttoname;
                    $('TxtAccCodeName').value = accounttocode;
                    }
                    //$('txtagencysubcode').value = abc2;
                    $('TxtAccCodeName').focus();
                  
                    return false;
                }
            }
        }
    }
 else if (event.keyCode == 27) {
 $("divACCto").style.display = "none";
 $("divaccountto").style.display = "none";
 
    $('TxtAccCodeName').focus();
    }
  
}
//function bindaccountto_callback(res)
// {
//    ds = res.value;
//    if (ds != null && typeof (ds) == "object" && ds.Tables[0].Rows.length > 0)
//     {
//        var pkgitem = $("lstaccountto");
//        pkgitem.options.length = 0;
//        pkgitem.options[0] = new Option("-Select Account To-", "0");
//        pkgitem.options.length = 1;
//        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) 
//        {
//            pkgitem.options[pkgitem.options.length] = new Option(repalcestr2quote(ds.Tables[0].Rows[i].ACC_NAME) + "--" + ds.Tables[0].Rows[i].CDP, ds.Tables[0].Rows[i].CDP);
//            pkgitem.options.length;
//        }
//    }
//    $("lstaccountto").value = "0";
//    $("txtAccCodeTo").value = "";
//    return false;
//}
















//function fillaccountto() 
//{
//    if (event.keyCode == 113) 
//    {
//        if (document.activeElement.id == "TxtAccCodeName") 
//        {

//            $('lstaccountto').value = "";
//            var compcode = $('hdncompcode').value;
//            $("divaccountto").style.display = "block";
//            $('divaccountto').style.top = 238 + "px";
//            $('divaccountto').style.left = 444 + "px";
//            var dateformat = $('HDN_dateformat').value;
//            var companycode = $('hdncompcode').value;
//            var accounttype = $("blAccountType").value;
//            var extra1 = "";
//            var extra2 = "";
//            $('lstaccountto').focus();
//           fin_rpt_account_ledger.fill_account(compcode, accounttype, extra1, extra2, bindaccountto_callback)
//        }
//    }
//}
//function onclickaccountto() 
//{
//    if (event.keyCode == 13 || event.type == "click") 
//    {
//        if (document.activeElement.id == "lstACCto") 
//        {
//            if ($('lstACCto').value == "0") {
//                // alert("Please select the publication");
//                return false;
//            }
//            $("divACCto").style.display = "none";
//            var page = $('lstACCto').value;
//            agencycodeglo = page;
//            for (var k = 0; k <= $("lstACCto").length - 1; k++) 
//            {
//                if ($('lstACCto').options[k].value == page) 
//                {
//                    var abc = $('lstACCto').options[k].innerText;
//                    $('txtAccCodeTo').value = agencycodeglo;
//                    var splitpub = abc;
//                    var str = splitpub.split("--");
//                    abc = str[1];
//                    abc1 = str[0];
//                    var abc2 = str[2];
//                    $('txtAccCodeTo').value = abc;
//                    $('TxtAccCodeName').value = abc1;
//                    //$('txtagencysubcode').value = abc2;
//                    $('TxtAccCodeName').focus();
//                    return false;
//                }
//            }
//        }
//        }
//   
//else if (event.keyCode == 27)
// {
//    $("divACCto").style.display = "none";
//    $('txtAccCodeTo').focus();
//    }

//  
//}

//function bindaccountto_callback(res)
// {
//    ds = res.value;
//    
//    
//    if(document.getElementById('chbres2').checked==true)
//    {
//    
//     if (ds != null && typeof (ds) == "object" && ds.Tables[0].Rows.length > 0) 
//    {
//        var pkgitem = $("lstaccountfrom");
//        pkgitem.options.length = 0;
//        pkgitem.options[0] = new Option("-Select Account From-", "0");
//        pkgitem.options.length = 1;
//        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) 
//        {
//            pkgitem.options[pkgitem.options.length] = new Option(repalcestr2quote(ds.Tables[0].Rows[i].ACC_NAME) + "--" + ds.Tables[0].Rows[i].CDP, ds.Tables[0].Rows[i].CDP);
//            pkgitem.options.length;
//        }
//    }
//   
//    }
//    else
//    {
//    
//        if (ds != null && typeof (ds) == "object" && ds.Tables[0].Rows.length > 0) 
//    {
//        var pkgitem = $("lstaccountfrom");
//        pkgitem.options.length = 0;
//        pkgitem.options[0] = new Option("-Select Account From-", "0");
//        pkgitem.options.length = 1;
//        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) 
//        {
//            pkgitem.options[pkgitem.options.length] = new Option(repalcestr2quote(ds.Tables[0].Rows[i].CDP) + "--" + ds.Tables[0].Rows[i].ACC_NAME, ds.Tables[0].Rows[i].ACC_NAME);
//            pkgitem.options.length;
//        }
//    }
//    
//    }
//    
//    $("lstaccountfrom").value = "0";
//    $("txt_acc_code").value = "";
//    return false;
//}








 function bindaccountto_callback(res)
 {
    ds = res.value;
    
     if(document.getElementById('chbres3').checked==true)
    {
    
    
    if (ds != null && typeof (ds) == "object" && ds.Tables[0].Rows.length > 0)
     {
        var pkgitem = $("lstaccountto");
        pkgitem.options.length = 0;
        pkgitem.options[0] = new Option("-Select Account To-", "0");
        pkgitem.options.length = 1;
        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            pkgitem.options[pkgitem.options.length] = new Option(repalcestr2quote(ds.Tables[0].Rows[i].ACC_NAME) + "--" + ds.Tables[0].Rows[i].CDP, ds.Tables[0].Rows[i].CDP);
            pkgitem.options.length;
        }
    }
    }
    
    else
     {
     
     if (ds != null && typeof (ds) == "object" && ds.Tables[0].Rows.length > 0)
     {
        var pkgitem = $("lstaccountto");
        pkgitem.options.length = 0;
        pkgitem.options[0] = new Option("-Select Account To-", "0");
        pkgitem.options.length = 1;
        
         for (var i = 0; i < ds.Tables[0].Rows.length; ++i) 
        {
            pkgitem.options[pkgitem.options.length] = new Option(repalcestr2quote(ds.Tables[0].Rows[i].CDP) + "--" + ds.Tables[0].Rows[i].ACC_NAME, ds.Tables[0].Rows[i].ACC_NAME);
            pkgitem.options.length;
        }
        
        
    }
   } 
    
   
     
    $("lstaccountto").value = "0";
    $("txtAccCodeTo").value = "";
    return false;
}


function chkfield()
//function chkfield(event)
{
    if(event.keyCode=="13")
    {
        if(document.activeElement.id=="txtdivision_name")
        {
            if($('txtdivision_code').value=="")
            {
                alert('please Select Branch Name')
                $('txtdivision_name').focus();
                return false;
            }
            else
            {
            $('txtFromdate').focus();
            return false;
            }
        }
         if(document.activeElement.id=="txtFromdate")
        {
            if($('txtFromdate').value=="")
            {
                alert('Please Select From Date')
                $('txtFromdate').focus();
                return false;
            }
            else
            {
            $('txtTodate').focus();
            return false;
            }
        }
         if(document.activeElement.id=="txtTodate")
        {
            if($('txtTodate').value=="")
            {
                alert('Please Select To Date')
                $('txtTodate').focus();
                return false;
            }
            else
            {
            $('txtAccountName').focus();
            return false;
            }
        }
        
         if(document.activeElement.id=="txtAccountName")
        {
            if($('blAccountType').value=="")
            {
                alert('Please Select Account Type')
                $('txtAccountName').focus();
                return false;
            }
            else
            {
            $('txt_acc_name').focus();
            return false;
            }
        }
        
        if(document.activeElement.id=="txt_acc_name")
        {
            if($('txt_acc_code').value=="")
            {
                alert('Please Select From Account Name')
                $('txt_acc_name').focus();
                return false;
            }
            else
            {
            $('TxtAccCodeName').focus();
            return false;
            }
        }
        
         if(document.activeElement.id=="TxtAccCodeName")
        {
            if($('txtAccCodeTo').value=="")
            {
                alert('Please Select To Account Name')
                $('TxtAccCodeName').focus();
                return false;
            }
            else
            {
            $('lbnarration').focus();
            return false;
            }
        }
        
         if(document.activeElement.id=="lbnarration")
        {
            $('lbbill_ref').focus();
            return false;
        }
        
          if(document.activeElement.id=="lbbill_ref")
        {
            $('lblview').focus();
            return false;
        }
        
         if(document.activeElement.id=="lblview")
        {
            $('btnledger').focus();
            return false;
        }
    }
}
/***********************change in vaishali bill repot**********************/

 function forpendingreport() 
 {

//       if($('txtdivision_code').value=="")
//            {
//                alert('please Select Branch Name')
//                $('txtdivision_name').focus();
//                return false;
//            }
     
        
        var fromdate =  $('txtFromdate').value;
        var todate = $('txtTodate').value;
        if(fromdate == "")
        {
                alert('Please enter fromdate.');
                $('txtFromdate').focus();
                return false;
        }
        if(todate == "")
        {
                alert('Please enter Todate.');
                $('txtTodate').focus();
                return false;
        }
        var compcode = $('hdncompcode').value;

 
//            if($('blAccountType').value=="")
//            {
//                alert('Please Select Account Type')
//                $('txtAccountName').focus();
//                return false;
//            }
         
      
//            if($('txt_acc_code').value=="")
//            {
//                alert('Please Select From Account Name')
//                $('txt_acc_name').focus();
//                return false;
//            }
//        
//           if($('txtAccCodeTo').value=="")
//            {
//                alert('Please Select To Account Name')
//                $('TxtAccCodeName').focus();
//                return false;
//            }
         
    
        var view = $('drpformat').value;
        var branchcode = $('txtdivision_code').value;
        var accounttype = $('blAccountType').value;
        var accountfrom = "";
        var accountto = "";
        var account_name = "";
        
       
        var accountnameto = "";

        if (document.getElementById('chbres2').checked == true) {
            accountfrom = accountfromcode.replace("&", "/");
            account_name = accountnamefrom;

        }
        else {
            accountfrom = accountfromcode;
            account_name = accountnamefrom.replace("&", "/");

        }

        if (document.getElementById('chbres3').checked == true) {

            accountto = accounttocode;
            accountnameto = acounttoname;
        }
        else {

            accountnameto = acounttoname;
            accountto = accounttocode;
        }
       
       
       
        var narration = $('drpnarration').value;
        var billref = $('drpbill_ref').value;
        var dateformat = $('dateformat').value;
        var actname=$('txtAccountName').value;
        var unit_name = $('txtunit').value;
        var unit_name111 = $('txtuname').value;
        var branch_name=$('txtdivision_name').value;
        var voucher_detail = $('drpvoucher').value;
        var Pending_on = $('drppending').value;
        var account_to = $('TxtAccCodeName').value;
        
        if(document.activeElement.id=="btnpendbills")
        {
        var bill_type="Accountwise"
        window.open("fin_rpt_disp_account_ledger2.aspx?compcode=" + compcode + "&unit_name111=" + unit_name111 + "&view=" + view + "&branchcode=" + branchcode + "&accounttype=" + accounttype + "&acntto=" + accountnameto + "&acntfrom=" + account_name + "&accountfrom=" + accountfrom + "&accountto=" + accountto + "&narration=" + narration + "&billref=" + billref + "&dateformat=" + dateformat + "&fromdate=" + fromdate + "&todate=" + todate + "&actname1=" + actname + "&unit_name=" + unit_name + "&branch_name=" + branch_name + "&AC_Name=" + account_name + "&voucher_detail=" + voucher_detail + "&Pending_on=" + Pending_on + "&bill_type=" +bill_type, '');
        }
        else if(document.activeElement.id=="btnagwisebills")
        {
        var bill_type="Agencywise"
        window.open("fin_rpt_disp_account_ledger2.aspx?compcode=" + compcode + "&unit_name111=" + unit_name111 + "&view=" + view + "&branchcode=" + branchcode + "&accounttype=" + accounttype + "&acntto=" + accountnameto + "&acntfrom=" + account_name + "&accountfrom=" + accountfrom + "&accountto=" + accountto + "&narration=" + narration + "&billref=" + billref + "&dateformat=" + dateformat + "&fromdate=" + fromdate + "&todate=" + todate + "&actname1=" + actname + "&unit_name=" + unit_name + "&branch_name=" + branch_name + "&AC_Name=" + account_name + "&voucher_detail=" + voucher_detail + "&Pending_on=" + Pending_on + "&bill_type=" +bill_type, '');
        }
       return false;
   }

   function Enterf267(event) 
   {
       if ((event.keyCode == 8) || (event.keyCode == 46 || event.keyCode == 113)) {
           if (document.activeElement.id == "txtuname") {
               document.getElementById('txtuname').value = "";
               document.getElementById('txtunit').value = "";

           }
       }

       var key1 = event.keyCode ? event.keyCode : event.which;
       if (key1 == 113 || event.type == "click") {

       if (document.activeElement.id == "txtuname")
            {

               activeid = document.activeElement.id;
               document.getElementById("divprinting").style.display = "block";
               var divid = "divprinting";
               var listboxid = "lstprint";
               $('lstprint').value = "";
               document.getElementById('lstprint').value = "";
               var compcode = document.getElementById('hdncompcode').value;
               document.getElementById("divprinting").style.display = "block";
               document.getElementById('divprinting').style.top = 150 + "px";
               document.getElementById('divprinting').style.left = 420 + "px";
               var dateformat = "";
               var compcode = document.getElementById('hdncompcode').value;
               var uid = document.getElementById('hdnuserid').value;
               var extra1 = (document.getElementById('txtuname').value).toUpperCase();
               var extra2 = "";
               var maingrup = "";
               var unitu = document.getElementById('hdnunit').value;


               document.getElementById('lstprint').focus();


             var ds= fin_rpt_account_ledger.fill_printcenter(compcode, uid, extra1, extra2)
               if (ds == null)
                   return false;
               var objadscat = document.getElementById(listboxid);
               objadscat.options.length = 0;
               objadscat.style.width = "254px"
               objadscat.options[0] = new Option("-Select Branch-");
               //alert(pkgitem.options.length);
               objadscat.options.length = 1;
               for (var i = 0; i < ds.value.Tables[0].Rows.length; ++i) {
                   objadscat.options[objadscat.options.length] = new Option(ds.value.Tables[0].Rows[i].center + "--" + ds.value.Tables[0].Rows[i].Pub_cent_Code, ds.value.Tables[0].Rows[i].Pub_cent_Code);

                   objadscat.options.length;
               }


               aTag = eval(document.getElementById(activeid))
               var btag;
               var leftpos = 0;
               var toppos = 0;
               do {
                   aTag = eval(aTag.offsetParent);
                   leftpos += aTag.offsetLeft;
                   toppos += aTag.offsetTop;
                   btag = eval(aTag)
               } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
               var tot = document.getElementById('divprinting').scrollLeft;
               var scrolltop = document.getElementById('divprinting').scrollTop;
               document.getElementById(divid).style.left = document.getElementById(activeid).offsetLeft + leftpos - tot + "px";
               document.getElementById(divid).style.top = document.getElementById(activeid).offsetTop + toppos - scrolltop + "px"; //"510px";
               //document.getElementById(activeid).style.backgroundColor="#FFFF80";
               document.getElementById(divid).style.display = "block";
               document.getElementById(listboxid).focus();





           }
}
           
           
           
           
       }
  


   function bindprint_callback(res) {
       ds = res.value;
       if (ds != null && typeof (ds) == "object" && ds.Tables[0].Rows.length > 0) {
           var pkgitem = document.getElementById("lstprint");
           pkgitem.options.length = 0;
           pkgitem.style.width = "350px";
           pkgitem.options[0] = new Option("-Select Printing Center-", "0");
           pkgitem.options.length = 1;

           for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
               pkgitem.options[pkgitem.options.length] = new Option(ds.Tables[0].Rows[i].center + "--" + ds.Tables[0].Rows[i].Pub_cent_Code, ds.Tables[0].Rows[i].Pub_cent_Code);


               pkgitem.options.length;
           }
       }
       $("lstprint").value = "0";


       return false;
   }

   function fillprintcent(event) {
       var key1 = event.keyCode ? event.keyCode : event.which;

       if (key1 == 13 || event.type == "click") {
           if (document.activeElement.id == "lstprint") {
               if (document.getElementById('lstprint').value == "0") {
                   alert("Please select Printing Center");
                   return false;
               }

               var page = document.getElementById('lstprint').value;
               agencycodeglo = page;
               if (browser != "Microsoft Internet Explorer") {

                   for (var k = 0; k <= document.getElementById("lstprint").length - 1; k++) {

                       if (document.getElementById('lstprint').options[k].value == page) {

                           var abc = document.getElementById('lstprint').options[k].textContent;
                           //document.getElementById('hdnprincode').value=abc;
                           var splitpub = abc;
                           var str = splitpub.split("--");
                           var pubcode = str[0];
                           var pubspace = str[1];

                           document.getElementById('txtuname').value = pubcode;
                           document.getElementById('txtunit').value = pubspace;
                           break;
                       }
                   }
               }
               else {
                   for (var k = 0; k <= document.getElementById("lstprint").length - 1; k++) {


                       if (document.getElementById('lstprint').options[k].value == page) {
                           var abc = document.getElementById('lstprint').options[k].innerText;

                           // document.getElementById('hdnprincode').value=abc;
                           var splitpub = abc;
                           var str = splitpub.split("--");
                           var pubcode = str[0];
                           var pubspace = str[1];

                           document.getElementById('txtuname').value = pubcode;
                           document.getElementById('txtunit').value = pubspace;
                       }
                   }
               }
               document.getElementById("divprinting").style.display = 'none';

               return false;
           }
       }
       else if (event.keyCode == 27) {
       document.getElementById('txtuname').focus();
           document.getElementById("divprinting").style.display = 'none';
           return false;
       }
       //return false;

   }

   /*--------------------------------------------Check box --------------------*/
   function Enterf21(event) 
   {
       if (document.getElementById('chk_unit_name').checked == true) {

           $('txtuname').value = "";
           $('txtunit').value = "";

           document.getElementById("txtunit").disabled = true;
           document.getElementById("txtuname").disabled = true;

           var key1 = event.keyCode ? event.keyCode : event.which;
           if (key1 == 113 || event.type == "click") {

               if (document.activeElement.id == "chk_unit_name") {
                   var compcode = document.getElementById('hdncompcode').value;
                   document.getElementById("divprinting1").style.display = "block";
                   var compcode = document.getElementById('hdncompcode').value;
                   var uid = document.getElementById('hdnuserid').value;
                   var extra1 = "";
                   var extra2 = "";
                   activeid = document.activeElement.id;
                   aTag = eval(document.getElementById(activeid))
                   var btag;
                   var leftpos = 0;
                   var toppos = 0;
                   do {
                       aTag = eval(aTag.offsetParent);
                       leftpos += aTag.offsetLeft;
                       toppos += aTag.offsetTop;
                       btag = eval(aTag)
                   } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
                   var tot = document.getElementById('divprinting1').scrollLeft;
                   var scrolltop = document.getElementById('divprinting1').scrollTop;
                   document.getElementById('divprinting1').style.left = "515px";
                   document.getElementById('divprinting1').style.top = "190px";
                   document.getElementById("divprinting1").style.display = "block";
                   fin_rpt_account_ledger.fill_printcenter(compcode, uid, extra1, extra2, binddivision_callback1)

               }
           }
           
       }
       else {
           document.getElementById("divprinting1").style.display = "none";
           document.getElementById("txtuname").disabled = false;
           document.getElementById("txtunit").disabled = false;
           document.getElementById('txtuname').focus();
           return true;
       }


   }

   var ds1 = "";
   function binddivision_callback1(res) {
       var hdsview = "";
       ds1 = res.value;
       if (ds1 != null && typeof (ds1) == "object" && ds1.Tables[0].Rows.length > 0) {
           hdsview += "<div  style='overflow:auto; height:100px;'><table style='border:0px solid black;margin-top:0px;margin-bottom:0px;margin-left:0px;' cellpadding='0' cellspacing='0'>"
           if (browser != "Microsoft Internet Explorer") {
               hdsview += "<tr style='overflow:auto; position: fixed;'>"
               hdsview += "<td  align='center'CssClass='LabelText' bgcolor=#7DAAE3  >"
               hdsview += "<button type='button' onclick='okclick1(event);'>OK</button>"
               hdsview += "</td>"
               hdsview += "<td  align='center'CssClass='LabelText'style='width:145px;' bgcolor=#7DAAE3 >Printing Center</td>"
               hdsview += "</tr>"
               hdsview += "<tr style='height:22px;'><td colspan='2'></td></tr>";
           }
           else {
               hdsview += "<tr style='overflow:auto; position: relative;'>"
               hdsview += "<td  align='center'CssClass='LabelText' bgcolor=#7DAAE3  >"
               hdsview += "<button type='button' onclick='okclick1(event);'>OK</button>"
               hdsview += "</td>"
               hdsview += "<td  align='center'CssClass='LabelText' bgcolor=#7DAAE3 >Printing Center</td>"
               hdsview += "</tr>"
           }
           for (var i = 0; i < ds1.Tables[0].Rows.length; ++i) {
               hdsview += "<tr>"
               hdsview += "<td  align='left' >"
               hdsview += "<input type='checkbox' class='dropdown_large_corr'; align='left' id=chkprintcenter~" + i + " >"
               hdsview += "</td>"

               hdsview += "<td id=printcenter~" + i + " align='left'  style='font-size:11px;font-family:Verdana;'>" + ds1.Tables[0].Rows[i].center + "~~" + ds1.Tables[0].Rows[i].Pub_cent_Code, ds1.Tables[0].Rows[i].Pub_cent_Code

               hdsview += "</td>"
               hdsview += "</tr>"

           }


           document.getElementById('view19').innerHTML = hdsview;
       }
       //document.getElementById('chkprintcenter~0').focus();

       return false;
   }



   function okclick1(event)
    {
        if (document.getElementById('chk_unit_name').checked == true) 
       {
           var printcenter_code = "";

           for (var i = 0; i < ds1.Tables[0].Rows.length; i++) 
           {
               if (document.getElementById('chkprintcenter~' + i).checked == true) 
               {
                   chk_printingCtr = "1";
                   $('txtuname').value += ds1.Tables[0].Rows[i].center + ","
                   $('txtunit').value += ds1.Tables[0].Rows[i].Pub_cent_Code + ","

               }

           }
       }
       document.getElementById("divprinting1").style.display = "none";
       return false;
   }