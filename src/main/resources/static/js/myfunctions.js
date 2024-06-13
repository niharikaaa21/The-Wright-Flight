function add_time(time_string,duration){
    var time_array = time_string.split(":");
    var date_object = new Date();
    
    date_object.setHours(time_array[0]*1);
    date_object.setMinutes(time_array[1]*1+duration*1);
    
    return ("0"+date_object.getHours()).slice(-2)+":"+("0"+date_object.getMinutes()).slice(-2);
    
    
    // 16:10 + 120 minutes
    // Set hours to 16
    // Set minutes to 10 + 120 = 130
    // 18:10
    // ("0"+date_object.getHours()).slice(-2)
    // 18 > '018'> 18
    // 2  > '02' > 02
}

var bookings = {};
var countdown_active = false;

function make_time(time_string,date_string){
	var d = new Date();
	
	// Set Time
	var time_array = time_string.split(":"); // time_array[0] is hours, [1] is minutes
	d.setHours(time_array[0]);
	d.setMinutes(time_array[1]);
	
	// Set Date
	var flight_array = date_string.split("-");
	d.setFullYear(flight_array[0]);
	d.setMonth(flight_array[1]-1); // Month starts at 0
	d.setDate(flight_array[2]);
	
	return d;
}

function countdown(){
	for (id in bookings){
		bookings[id].displayTimes();
	}
}

function format_delay(timestamp){
	if(timestamp>86400000){
		return Math.floor(timestamp/86400000)+" days";
	}
	else{
		var h = ("0"+Math.floor(timestamp/3600000)).slice(-2);
		var m = ("0"+Math.floor((timestamp%3600000)/60000)).slice(-2);
		var s = ("0"+Math.floor((timestamp%60000)/1000)).slice(-2);
		return h+":"+m+":"+s;
	}
}

function format_time(t){
	return ("0"+t.getHours()).slice(-2) + ":" + ("0"+t.getMinutes()).slice(-2);
}

function format_date(t){ // Takes in date object
	var y = t.getFullYear();
	var m = ("0"+(t.getMonth()+1)).slice(-2);
	var d = ("0"+t.getDate()).slice(-2);
	
	return y+"-"+m+"-"+d;
}

function format_thousands(d){
	var s = ""+d; // toString
    return (s.length>3) ? s.slice(0,s.length-3)+","+s.slice(-3) : s;
    // 3000 > 3,000
    // 100 > 100
}
function format_distance(d){
	return format_thousands(d) + " km";
}

class Booking{
	constructor(id,original_departure_time,duration,delay,distance){
		this.id = id*1; // toInt
		this.delay = delay*1; // toInt
		this.distance = distance*1; // toInt
		this.duration = duration*1; // toInt
		
		this.departure_time = original_departure_time; // js date object
		this.departure_time.setMinutes(this.departure_time.getMinutes()+this.delay); // Add delay in minutes
		
		this.arrival_time = new Date(this.departure_time.getTime()); // Clone departure_time
		this.arrival_time.setMinutes(this.arrival_time.getMinutes()+this.duration); // Add duration in minutes
	}
	
	displayTimes(){
		$("#departure"+this.id).text(format_time(this.departure_time)); // Putting departure time date object as string in departure span DOM
		$("#date"+this.id).text(format_date(this.departure_time)); // In case delay puts us in a different day
		$("#arrival"+this.id).text(format_time(this.arrival_time));
		$("#clock"+id).text(this.clock);
		$("#distance"+id).text(this.progress);
		$("#status"+id).html(this.status);
	}
	
	get clock(){ // Remaining time until arrival or departure
		var now = new Date();
		
		if(now.getTime()>this.arrival_time.getTime()){ // Flight over
			return "Completed";
		}
		else if(now.getTime()>this.departure_time.getTime()){ // Flight in progress
			return format_delay(this.arrival_time.getTime() - now.getTime()); // Return remaining time on the flight
		}
		else{ // Flight to come
			return format_delay(this.departure_time.getTime() - now.getTime());
		}
	}
	
	get progress(){ // Calculate distance remaining when flight in progress
		var now = new Date();
		
		if(now.getTime()>this.arrival_time.getTime()){ // Flight over
			return format_distance(this.distance);
		}
		else if(now.getTime()>this.departure_time.getTime()){ // Flight in progress
			var minutes = Math.floor((this.arrival_time.getTime() - now.getTime())/60000); // Time left in minutes
			var percentage = minutes/this.duration; // Relative progress left to make (not a percentage)
			var distance_left = Math.floor(this.distance*percentage); // Distance left in km
			return format_distance(distance_left);
		}
		else{ // Flight to come
			return format_distance(this.distance);
		}
	}
	
	get status(){
		var now = new Date();
		
		if(now.getTime()>this.arrival_time.getTime()){ // Flight over
			return '<span style="color:green;">Completed.</span>';
		}
		else if(now.getTime()>this.departure_time.getTime()){ // Flight in progress
			return '<span style="color:red;">In progress.</span>';
		}
		else{ // Flight to come
			if(this.delay>0){
				return "Will be delayed "+this.delay+" minutes."
			}
			else{
				return "On schedule.";
			}
			
		}
	}
}