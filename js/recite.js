var sen = new Array();
var str = document.getElementsByClassName("English");
var sen_cn = $('.Chinese');
var ClozeOnfflag=0;
var TransOnfflag=0;

function ClozeOn()
{
    if(ClozeOnfflag==0)
    {
        for(var i=0;i<str.length;i++)
        {
            sen[i]=str[i].innerHTML;
            str[i].innerHTML=str[i].innerHTML.replace(/(?<=(\b[A-z]{1,}))[A-z]/g,"_");
        }
        ClozeOnfflag=1;
    }else if(ClozeOnfflag==1)
    {
        for(var i=0;i<sen.length;i++)
        {
            str[i].innerHTML = sen[i];
        }
        ClozeOnfflag=0;
    }
}

function TransOn()
{
    if(TransOnfflag==0)
    {
        sen_cn.hide();
        TransOnfflag=1;
    }else if(TransOnfflag==1)
    {
        sen_cn.show();
        TransOnfflag=0;
    }
}