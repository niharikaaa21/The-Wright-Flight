$(document).ready(function(){
    $("#bookinglist").jqGrid({
        url: "/bookings",
        mtype: "GET",
        datatype: "json",
        colModel: [
            { label: 'ID', name: 'id', jsonmap: 'id', hidden:true },
            { label: 'Company Logo', name: 'companyLogo', jsonmap:'flight.companyLogo', hidden:true, width: 400 },
            { label: 'Company Name', name: 'companyName', jsonmap:'flight.companyName', hidden:true, width: 400},
            { label: 'Flight Name', name: 'flightName', jsonmap:'flight.flightName', width: 400, formatter:function(cellvalue, options, rowObject){
            	if(rowObject.companyLogo){
            		return '<img width="50px" src="'+rowObject.companyLogo+'" title="'+rowObject.companyName+'"/> '+cellvalue; // Display company logo (with name in hover) next to flight name
            	}
            	else{
            		return '<img width="50px" src="'+rowObject.flight.companyLogo+'" title="'+rowObject.flight.companyName+'"/> '+cellvalue; // Display company logo (with name in hover) next to flight name
            	}
            	
            }},
            { label: 'Origin', name: 'origin', jsonmap:'flight.origin', width: 200 },
            { label: 'Destination', name: 'destination', jsonmap:'flight.destination', width: 200 },
            { label: 'Duration', name: 'duration', jsonmap:'flight.duration', hidden:true, width: 200, formatter:function(cellvalue, options, rowObject){
                return add_time("00:00",cellvalue);
            }   },
            { label: 'Original Departure Time', name: 'originalDepartureTime', jsonmap:'flight.departureTime', width: 200 },
            { label: 'Delay', name: 'delay', jsonmap:'flight.delay', hidden:true, width: 100 },
            { label: 'Departure Time', name: 'departureTime', jsonmap:'flight.departureTime', width: 200, formatter:function(cellvalue, options, rowObject){
            	return '<span id="departure'+rowObject.id+'"></span>';
            } },
            { label: 'Arrival Time', name: 'arrivalTime', jsonmap:'', sortable:false, width: 200, formatter:function(cellvalue, options, rowObject){
            	return '<span id="arrival'+rowObject.id+'"></span>';
            }  },
            { label: 'Booking Date', name: 'bookingDate', width: 400 },
            { label: 'Flight Date', name: 'flightDate', width: 400, formatter:function(cellvalue, options, rowObject){
            	return '<span id="date'+rowObject.id+'"></span>'; // Date is dynamic in case delayed flight is close to midnight
            } },
            { label: 'Distance', name: 'distance', jsonmap:'flight.distance', sortable:false, width: 200, formatter:function(cellvalue, options, rowObject){
            	return '<span id="distance'+rowObject.id+'"></span>';
            } },
            { label: 'Remaining', name: 'remaining', jsonmap:'', sortable: false, width: 300, formatter:function(cellvalue, options, rowObject){
				
				if(typeof bookings[rowObject.id] == 'undefined'){
					var distance = (rowObject.distance) ? rowObject.distance : rowObject.flight.distance;
					var time_string = (rowObject.departureTime) ? rowObject.departureTime : rowObject.flight.departureTime;
					console.log(rowObject);
					var delay = (typeof rowObject.delay != 'undefined') ? rowObject.delay : rowObject.flight.delay;
	            	var duration = (rowObject.duration) ? rowObject.duration : rowObject.flight.duration;
	            	var date_string = rowObject.flightDate;
	            	var dep_time = make_time(time_string,date_string); // js Date object at the original departure time for flight
					
					bookings[rowObject.id] = new Booking(rowObject.id,dep_time,duration,delay,distance);
				}
            	
            	return '<div id="clock'+rowObject.id+'"></div>';
            } },
            { label: 'Status', name: 'status', jsonmap:'', sortable:false, width: 600, formatter:function(cellvalue, options, rowObject){
            	return '<span id="status'+rowObject.id+'"></span>';
            }  }
        ],
        viewrecords: true,
        loadonce:true,
        rowNum: 5,
        width: 1500,
        height: '100%',
        rowList:[5,10,15,20],
        pager: "#bookingpager",
        gridComplete:function(){
        	$("#lui_bookinglist").remove(); // Remove annoying thing that prevents clicking
        	countdown();
        	if(!countdown_active){
				countdown_active = true;
				setInterval(countdown,1000);
			}
        }
    });
});