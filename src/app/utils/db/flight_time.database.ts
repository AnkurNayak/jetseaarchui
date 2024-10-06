import emiR from "@/app/assets/emirates.png";
import luftH from "@/app/assets/lufthansa.png";
import { StaticImageData } from "next/image";

export interface Layover {
  location: string;
  duration: string;
}

export interface Flight {
  flightNumber: string;
  airline: string;
  departureTime: string;
  arrivalTime: string;
  departureAirport: string;
  arrivalAirport: string;
  flightDuration: string;
  layovers: Layover[];
  totalTravelTime: string;
  image: string | StaticImageData;
}

export const FlightTimeDatabase: Flight[] = [
  {
    flightNumber: "AT 4334",
    airline: "Emirates",
    departureTime: "9:45 AM",
    arrivalTime: "11:45 AM",
    departureAirport: "DXB",
    arrivalAirport: "CDG",
    flightDuration: "4h 10min",
    layovers: [],
    totalTravelTime: "8h 42min",
    image: emiR,
  },
  {
    flightNumber: "AT 4334",
    airline: "Lufthansa",
    departureTime: "11:45 PM",
    arrivalTime: "6:45 AM",
    departureAirport: "CDG",
    arrivalAirport: "DXB",
    flightDuration: "2h 10min",
    layovers: [
      {
        location: "Lisbon",
        duration: "6h 32min",
      },
      {
        location: "Paris",
        duration: "n/a",
      },
    ],
    totalTravelTime: "4h 10min",
    image: luftH,
  },
];
