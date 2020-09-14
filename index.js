function updateMap() {
    fetch('https://api.covid19india.org/state_district_wise.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            for (var i in data) {
                for (var j in data[i].districtData) {
                    let city = j;
                    var active = data[i].districtData[j].active;
                    var recovered = data[i].districtData[j].recovered;
                    var deceased = data[i].districtData[j].deceased;
                    // console.log( j +" " +data[i].districtData[j].active);
                    // Mark on the map 
                    
                }
            }

            
            
        });
}

updateMap();

