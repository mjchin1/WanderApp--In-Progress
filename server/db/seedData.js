const trips = [
  {
    destination: "Lisbon",
    startDate: "2024-08-16",
    endDate: "2024-08-23",
    tripPhoto:
      "https://www.travelandleisure.com/thmb/LzWpzDihxjffaFmM9TZWCvm9VyY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/lisbon-portugal-LISBONTG0521-c933a0fb669647619fa580f6c602c4c8.jpg",
  },

  {
    destination: "Copenhagen",
    startDate: "2024-10-31",
    endDate: "2024-11-07",
    tripPhoto:
      "https://media.cntraveler.com/photos/5c002c7745e16c465f875830/2:1/w_2560%2Cc_limit/GettyImages-1011529218.jpg",
  },
];

const arrivals = [
  {
    tripId: 1,
    travelerName: "Melissa",
    travelDate: "2024-08-16",
    arrivalDate: "2024-08-17",
    tripNumber: "TP 244",
    travelOrigin: "Chicago",
    departureTime: "18:00",
    travelDestination: "Lisbon",
    arrivalTime: "07:55",
  },

  {
    tripId: 1,
    travelerName: "Lucas",
    travelDate: "2024-08-16",
    arrivalDate: "2024-08-17",
    tripNumber: "TP 244",
    travelOrigin: "Chicago",
    departureTime: "18:00",
    travelDestination: "Lisbon",
    arrivalTime: "07:55",
  },

  {
    tripId: 2,
    travelerName: "Melissa",
    travelDate: "2024-10-31",
    arrivalDate: "2024-11-01",
    tripNumber: "SK 944",
    travelOrigin: "Chicago",
    departureTime: "20:10",
    travelDestination: "Copenhagen",
    arrivalTime: "10:05",
  },

  {
    tripId: 2,
    travelerName: "Lucas",
    travelDate: "2024-10-31",
    arrivalDate: "2024-11-01",
    tripNumber: "SK 944",
    travelOrigin: "Chicago",
    departureTime: "20:10",
    travelDestination: "Copenhagen",
    arrivalTime: "10:05",
  },
];

const departures = [
  {
    tripId: 1,
    travelerName: "Melissa",
    travelDate: "2024-08-23",
    arrivalDate: "2024-08-23",
    tripNumber: "TP 243",
    travelOrigin: "Lisbon",
    departureTime: "12:40",
    travelDestination: "Chicago",
    arrivalTime: "16:00",
  },

  {
    tripId: 1,
    travelerName: "Lucas",
    travelDate: "2024-08-23",
    arrivalDate: "2024-08-23",
    tripNumber: "TP 243",
    travelOrigin: "Lisbon",
    departureTime: "12:40",
    travelDestination: "Chicago",
    arrivalTime: "16:00",
  },

  {
    tripId: 2,
    travelerName: "Melissa",
    travelDate: "2024-11-07",
    arrivalDate: "2024-11-07",
    tripNumber: "SK 943",
    travelOrigin: "Copenhagen",
    departureTime: "13:35",
    travelDestination: "Chicago",
    arrivalTime: "15:50",
  },

  {
    tripId: 2,
    travelerName: "Lucas",
    travelDate: "2024-11-07",
    arrivalDate: "2024-11-07",
    tripNumber: "SK 943",
    travelOrigin: "Copenhagen",
    departureTime: "13:35",
    travelDestination: "Chicago",
    arrivalTime: "15:50",
  },
];

const activities = [
  {
    tripId: 1,
    activityName: "Day Trip to Porto",
    activityDescription:
      "Visitng the oldest winery in Porto for a tour and a tasting.",
    activityPhoto:
      "https://images.prismic.io/bounce/acec95d0-acc6-42e0-883c-57d168a9ffd0_maksym-kaharlytskyi-3uJt73tr4hI-unsplash.jpg?auto=format%2Ccompress&w=1466&fit=crop&ar=3%3A2",
    activityWebsite:
      "https://www.tripadvisor.com/Attraction_Products-g189169-t11891-zfg11868-a_contentId.123435055902+14327704512-Northern_Portugal.html",
  },

  {
    tripId: 2,
    activityName: "Visit Rosenborg Garden",
    activityDescription: "Take a stroll before getting lunch",
    activityPhoto:
      "https://traveladdicts.net/wp-content/uploads/2017/05/Copenhagen-Denmark-Rosenborg-Castle-Slot-from-gardens.jpg",
    activityWebsite:
      "https://www.visitcopenhagen.com/copenhagen/planning/kings-garden-gdk420899",
  },
];

const calendar = [
  {
    tripId: 1,
    eventName: "Dinner at Belcanto",
    eventDate: "2024-08-17",
    eventTime: "19:30",
    eventDescription: "Meet at the restaurant at 7:15pm",
    eventWebsite: "https://www.belcanto.pt/en/",
  },

  {
    tripId: 2,
    eventName: "Dinner at Host",
    eventDate: "2024-11-02",
    eventTime: "19:30",
    eventDescription: "Meet at the restaurant at 7:15pm",
    eventWebsite: "https://cofoco.dk/en/hoest/",
  },
];

const users = [
  {
    name: "Melissa",
    username: "Melissa1",
    password: "letsgo99",
  },
];

module.exports = {
  trips,
  arrivals,
  departures,
  activities,
  calendar,
  users,
};
