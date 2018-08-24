$(document).ready(function(){
    $("#getWeather").click(function(e){
        e.preventDefault();

        const city = $("#city").val();
        const country = $("#country").val();
        console.log(city + " " + country)
        if(city && country){
            $.ajax({
                url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "," + 
                country + "&units=metric&appid=7aca2942856bab3c48dcd8e20dcf3d4a",
                type: "GET",
                dataType: "json",
                success: function(data){
                    console.log(data)
                    let showData = showOnHtml(data);
                    $("#show").html(showData);
                    
                }
            })
        }else{
            $("#error").html("The field must be filled correctly!");
        }
    });
    function showOnHtml(data){
        return "<h3>Pogoda: "  + data.weather[0].main + "</h3><br/>" +
        "<h3>Zachmurzenie: " + data.weather[0].description + "</h3><br/>" +  
        "<h3>Temp: "+ data.main.temp + " &#186</h3><br/>" +
        "<h3>Ciśnienie: " + data.main.pressure + "</h3><br/>" +
        "<h3>Wiatr: " + data.wind.speed + " m/s" + "</h3><br/>" 
    }
});