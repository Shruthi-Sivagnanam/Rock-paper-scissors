var addButton= document.getElementById("add");
var removeButton=document.getElementById("remove");
var removeallButton=document.getElementById("removeall");
var ul=document.getElementById("list");
var li;
var task;
var x=document.body;


addButton.addEventListener("click", addItem);
removeButton.addEventListener("click",removeItem);
removeallButton.addEventListener("click",removeallItem);
setTimeout(() =>{
    clearInterval(t);
    timeout();
},3000);
const t=setInterval(()=>{
    interval();
},10);

function addItem()
{
    li=ul.children;
    task=document.getElementById("todo").value;
    if(task=="")
        document.getElementById("mes").innerHTML="Enter a valid task!!"
    else
    {
        removeItem();
        document.getElementById("mes").innerHTML="";
        
        setTimeout(() => {
            document.getElementById("list").innerHTML +="<li class='item'><input type='checkbox'><label>"+task+"</label></li>";
            clearInterval(int);
            timeout();
        }, 3000);
        const int= setInterval(interval,10);
        document.getElementById("todo").value="";
    }
}
function removeItem()
{
    li=ul.children;
    document.getElementById("mes").innerHTML="";
    
    setTimeout(() => {
        for(var i=0;i<li.length;i++)
            while(li[i] && li[i].children[0].checked)
                ul.removeChild(li[i]);   
            clearInterval(int);
            timeout();
    }, 3000);
    const int= setInterval(interval,10);
}
function removeallItem()
{
    li=ul.children
    setTimeout(()=>{
        for(var i=0;i<li.length;i++)
            while(li[i])
                ul.removeChild(li[i]);
    clearInterval(int);
    timeout();
    },3000);
    const int=setInterval(interval,10);
    document.getElementById("mes").innerHTML="";
}
function timeout()
{
    x.style.opacity="1";
    document.getElementById("loading").innerHTML="";
    document.getElementById("add").disabled=false;
    document.getElementById("remove").disabled=false;
    document.getElementById("removeall").disabled=false;
    document.getElementById("todo").disabled=false;
}
function interval()
{
    x.style.opacity="0.2";
    document.getElementById("loading").innerHTML="<img id='loading-word'src='img/loading.gif'alt='loading'>"
    document.getElementById("add").disabled=true;
    document.getElementById("remove").disabled=true;
    document.getElementById("removeall").disabled=true;
    document.getElementById("todo").disabled=true;
}