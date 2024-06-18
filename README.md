# The-Wright-Flight


![Icon](https://github.com/niharikaaa21/The-Wright-Flight/assets/102322171/5d6320cb-f0e5-4ff1-9e5a-62553c04cfb6)


## Overview :
This project is an airline booking and delay tracking website that I developed as a part of my internship. This website has a local database of flights and fetches the relevant flights than can be booked according to the filters applied by the user. The displayed flights can be filtered according to parameters like increasing or decreasing price, among others. Once booked, the updated departure time due to the delay of the flight is shown for the flight, along with the status on the bookings page. The user can track the remaining time left for departure and the progress of the flight once it takes off, both of which are dynamic and updated timely.

## Project Demonstration :

### Demo video :
https://github.com/niharikaaa21/The-Wright-Flight/assets/102322171/1453e58b-32bc-43d5-a9ed-f355c5efa1e2

### Screenshots :

|      Login Page                     | Welcome Page |
|----------------------------------|----------------------------------|
| ![Login Page](https://github.com/niharikaaa21/The-Wright-Flight/assets/102322171/d914a297-e6d7-4a8b-b4c7-7c85dc316c65)       | ![Welcome Page](https://github.com/niharikaaa21/The-Wright-Flight/assets/102322171/20d7d7c3-35f0-4036-bf24-2935a3a0f896) |

|      Search Flights                     | Flight Search Results |
|----------------------------------|----------------------------------|
| ![Search Flights](https://github.com/niharikaaa21/The-Wright-Flight/assets/102322171/5fec1f88-52d5-4a09-88c2-19478bcdfa67)       | ![Flight Search Results](https://github.com/niharikaaa21/The-Wright-Flight/assets/102322171/37eda1ce-11df-42a8-8118-22684fab3b8d) |

|      Bookings Page                     | Fligth Delays Shown |
|----------------------------------|----------------------------------|
| ![Bookings Page](https://github.com/niharikaaa21/The-Wright-Flight/assets/102322171/f2ecaaec-09fb-404b-bea1-88f3189108f0)       | ![Flight Delays Shown](https://github.com/niharikaaa21/The-Wright-Flight/assets/102322171/8ae1053b-f1cc-4d37-9d95-2f3ad9bf82da) |

|      Flight In Progress                     | Distance Is Dynamic For Ongoing Flight |
|----------------------------------|----------------------------------|
| ![Flight In Progress](https://github.com/niharikaaa21/The-Wright-Flight/assets/102322171/e9880d8e-170f-4d19-b1d1-2ac1674d974a)       | ![Distance is Dynamic for Ongoing Flight](https://github.com/niharikaaa21/The-Wright-Flight/assets/102322171/50b70cc4-029a-4d79-ac35-ee92fdd59040) |


## Website Flow :

- **Login Page** :
  
  Existing users can login to the website for booking their flights, and new users can register and create their accounts, followed by logging into their new accounts in order to gain access.
  
- **Welcome Page** :
  
  Users are welcomed to the welcome page, inviting them to explore flights or view their booked flight history.

- **Search Flights** :
  
  According to filters like origin, destination, price range and dates, the user can look for their desired flights, which displays the departure and arrival times, the price, the airline, logo, flight name and also offers an action column to book the flight. The data displayed for the various flights can also be sorted in an ascending or descending order based on the price, departure and arrival times etc.

- **Book Flight** :
  
  After analysing the given flight choices, the user can book a ticket for their desired flight. 

- **Bookings Page** :
  
  This page contains the history of the bookings done by the user. Details like booking date, flight date, flight name, logo, origin, destination, the updated departure and arrival times due to the delay of the flight, distance, status etc are displayed. The columns of distance, status and remaining time are dynamic. The distance shows the distance to be travelled by the flight and counts down to 0 when the flight is in progress. The status column displays the time the flight is delayed by, 'In Progress' : when the flight is ongoing and 'Completed' when the flight has landed. The remaining time column shows the time until the flight takes off, while ongoing - shows the remaining time until arrival and displays 'Completed' once it lands. The delay tracking is dynamic and easy for the flight through these columns.

- **Logout** :
  
  Finally, the user can logout whenever needed. 
  

## Technologies and Tools Used For Development :

- HTML, CSS, Javascript : Used for developing the frontend.
- Bootstrap : Used for improving the responsiveness of the website.
- jqGrid : For displaying the flight and bookings data to the user.
- Spring Boot : Java framework used for development.
- Java : Language used for backend.
- HSQLDB : Database used for storing user, flights and booking information.
- Eclipse EE : I used Eclipse Enterprise Edition to make this website.
