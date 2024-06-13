$(document).ready(function(){
	now = new Date();
	today = now.toISOString().slice(0,10); // Ensure we get the date in the right format
	$("#date_picker").val(today); // Set flight date as today for bookings
	$("#day").val(now.getDay()); // Show flights for today
	
	// AutoComplete
	var availableTags = [
	  "Delhi",
	  "Mumbai",
	  "Bengaluru",
	  "Hyderabad",
	  "Chennai"
	];  
	$( "#origin,#destination" ).autocomplete({  
		source: availableTags  
	});  
	

	// Price range
	$( "#price-range" ).slider({
		range: true,
		min: 6000,
		max: 12000,
		step:100,
		values: [ 7000, 11000 ],
		slide: function( event, ui ) {
			$( "#amount" ).val( "₹" + ui.values[ 0 ] + " - ₹" + ui.values[ 1 ] );
			$("#min_price").val(ui.values[0]);
			$("#max_price").val(ui.values[1]);
		}
	});
	$( "#amount" ).val( "₹" + $( "#price-range" ).slider( "values", 0 ) + " - ₹" + $( "#price-range" ).slider( "values", 1 ) );
	
	// jqGrid
    $("#flightlist").jqGrid({
        url: "/flights",
        mtype: "GET",
        datatype: "json",
        caption:'Available Flights',
        colModel: [
            { label: 'Company Logo', name: 'companyLogo', index: 'company_logo', hidden:true, width: 400 },
            { label: 'Company Name', name: 'companyName', index: 'company_name', hidden:true, width: 400},
            { label: 'Flight Name', name: 'flightName', index: 'flight_name', width: 400, formatter:function(cellvalue, options, rowObject){
            	return '<img width="50px" src="'+rowObject.companyLogo+'" title="'+rowObject.companyName+'"/> '+cellvalue; // Display company logo (with name in hover) next to flight name
            } },
            { label: 'Origin', name: 'origin', index:"origin", width: 200 },
            { label: 'Destination', name: 'destination', index: 'destination', width: 200 },
            { label: 'Distance', name: 'distance', index:"distance", width: 200, formatter:function(cellvalue, options, rowObject){
            	return format_distance(cellvalue);
            } },
            { label: 'Departure Time', name: 'departureTime', index:"departure_time", width: 200 },
            { label: 'Duration', name: 'duration', index:"duration", width: 200, formatter:function(cellvalue, options, rowObject){
                return add_time("00:00",cellvalue);
            }   },
            { label: 'Arrival Time', name: 'arrivalTime', sortable:false, width: 200, formatter:function(cellvalue, options, rowObject){
                return add_time(rowObject.departureTime,rowObject.duration);
            }  },
            { label: 'Price', name: 'price', index:"price", align:"right", width: 200, formatter:function(cellvalue, options, rowObject){
            	return "₹"+format_thousands(cellvalue);
            }   },
            { label: 'Book Flight', width: 200, formatter:function(cellvalue, options, rowObject){
            	return '<a href="/bookflight?flightId='+rowObject.id+'&bookingDate='+today+'&flightDate='+$('#date_picker').val()+'&status=ok">Book it!</a>';
            } }
        ],
        viewrecords: true,
        loadonce:false,
        rowNum: 10,
        width: 1200,
        height: '100%',
        rowList:[5,10,15,20],
        pager: "#flightpager",
        jsonReader: {
        	root:"content",
        	total:"totalPages",
        	records:"totalElements",
            page: function (obj) {
                return obj.number + 1; // Page starts at 0 on server, 1 in jqGrid
            }
        },
        serializeGridData: function(postData){
        	// Start search
        	postData.origin = $("#origin").val();
        	postData.destination = $("#destination").val();
        	postData.min_price = $("#min_price").val();
        	postData.max_price = $("#max_price").val();
        	postData.day = $("#day").val();
        	// End search
        	// Formatting pagination data for server
        	postData.sort = postData.sidx+","+postData.sord; // Sorting
        	postData.size = postData.rows; // Page size
        	postData.page -=1; // Page number is one lower on server
        	console.log(postData); 
        	return postData;
        },
        gridComplete:function(){
        	$("#lui_flightlist").remove(); // Remove annoying thing that prevents clicking
        	$("#launch").on("click",function(){$("#flightlist").trigger("reloadGrid");}); // Reload grid when clicking "View"
        }
    });
	
 // Datepicker
 $("#date_picker").datepicker({
   	dateFormat: '@', // Unix timestamp
   	onSelect: function(dateText){
   		mydate = new Date(dateText*1);
   		$("#day").val(mydate.getDay()); // Get day (0-6 with 0 being Sunday) for search purposes
   		$("#date_picker").val(format_date(mydate)); // Get date to book
   	}
   });
});