interface FlightData {
  name: string;
  code: string;
  city: string;
  country: string;
  arrivalTime: string;
  departureTime: string;
}

const FlightDetails: FlightData[] = [
  {
    name: "Indira Gandhi International Airport",
    code: "DEL",
    city: "New Delhi",
    country: "India",
    arrivalTime: "2:30 PM",
    departureTime: "10:00 AM",
  },
  {
    name: "Chhatrapati Shivaji Maharaj International Airport",
    code: "BOM",
    city: "Mumbai",
    country: "India",
    arrivalTime: "3:00 PM",
    departureTime: "11:30 AM",
  },
  {
    name: "John F. Kennedy International Airport",
    code: "JFK",
    city: "New York",
    country: "United States",
    arrivalTime: "1:45 PM",
    departureTime: "9:15 AM",
  },
  {
    name: "Dubai International Airport",
    code: "DXB",
    city: "Dubai",
    country: "United Arab Emirates",
    arrivalTime: "4:20 PM",
    departureTime: "12:50 PM",
  },
  {
    name: "Heathrow Airport",
    code: "LHR",
    city: "London",
    country: "United Kingdom",
    arrivalTime: "12:00 PM",
    departureTime: "8:30 AM",
  },
  {
    name: "Singapore Changi Airport",
    code: "SIN",
    city: "Singapore",
    country: "Singapore",
    arrivalTime: "5:00 PM",
    departureTime: "1:15 PM",
  },
  {
    name: "Los Angeles International Airport",
    code: "LAX",
    city: "Los Angeles",
    country: "United States",
    arrivalTime: "6:30 PM",
    departureTime: "2:00 PM",
  },
  {
    name: "Beijing Capital International Airport",
    code: "PEK",
    city: "Beijing",
    country: "China",
    arrivalTime: "10:45 AM",
    departureTime: "6:20 AM",
  },
  {
    name: "Sydney Kingsford Smith International Airport",
    code: "SYD",
    city: "Sydney",
    country: "Australia",
    arrivalTime: "9:30 AM",
    departureTime: "5:45 AM",
  },
  {
    name: "Tokyo Haneda Airport",
    code: "HND",
    city: "Tokyo",
    country: "Japan",
    arrivalTime: "11:00 AM",
    departureTime: "7:15 AM",
  },
];

export default FlightDetails;
