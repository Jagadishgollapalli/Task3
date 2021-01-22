var request=new XMLHttpRequest();
request.open("GET","https://restcountries.eu/rest/v2/all",true);
request.send();
request.onload=function(){
    var data=JSON.parse(this.response);
    for(i=0;i<=data.length;i++){
        try{
            var lang=data[i].latlng;
        var name=data[i].name;
        wd(name,...lang)
        }
        catch (e) {
            console.log('Invalid co-ordinate data for country: ' + name + ' ' + e.message);
        }
    
    }
}

var wd = function (name, lat, lang) {
	var request = new XMLHttpRequest();
	var url =
		'https://api.openweathermap.org/data/2.5/weather?lat=' +
		lat +
		'&lon=' +
		lang +
		'&appid=b2658b66e79ba602351e12efe0d9c1bd';

	request.open('GET', url, true);
	request.send();
	request.onload = function () {
		try {
			var result = JSON.parse(this.response);
			console.log(`${name} : ${result.main.temp}`);
		} catch (e) {
			console.log('undefined response' + name);
		}
	};
};