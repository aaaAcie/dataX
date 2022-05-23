var width=376;
var height=227;
var anitime=800;
function Hello()
{
    alert("Hello");
}
//--------------------------------------------------
var num = 0;
var pro = '{ "sites" : [' +
    '{ "width":"360" , "height":"220" },' +
    '{ "width":"720" , "height":"440" },' +
    '{ "width":"440" , "height":"260" } ]}';
var pro2 = '{"sites":[{"width":"'+ width +'" , "height":"'+ height+'"}]}';
var obj = JSON.parse(pro2);
function SetWidth(){
	return obj.sites[num].width;
}
function SetHeight(){
	return obj.sites[num].height;
}