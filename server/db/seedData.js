const trips = [
  {
    destination: "Lisbon, Portugal",
    startDate: "8/16/2024",
    endDate: "8/23/2024",
    tripPhoto:
      "https://www.travelandleisure.com/thmb/LzWpzDihxjffaFmM9TZWCvm9VyY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/lisbon-portugal-LISBONTG0521-c933a0fb669647619fa580f6c602c4c8.jpg",
  },

  {
    destination: "Copenhagen, Denmark",
    startDate: "10/31/2024",
    endDate: "11/7/2024",
    tripPhoto:
      "https://media.cntraveler.com/photos/5c002c7745e16c465f875830/2:1/w_2560%2Cc_limit/GettyImages-1011529218.jpg",
  },
];

const arrivals = [
  {
    tripId: 1,
    travelerName: "Melissa",
    travelDate: "08/16/2024",
    tripNumber: "TP 244",
    travelOrigin: "Chicago, IL",
    departureTime: "6:00pm",
    travelDestination: "Lisbon, Portugal",
    arrivalTime: "7:55am",
  },

  {
    tripId: 1,
    travelerName: "Lucas",
    travelDate: "08/16/2024",
    tripNumber: "TP 244",
    travelOrigin: "Chicago, IL",
    departureTime: "6:00pm",
    travelDestination: "Lisbon, Portugal",
    arrivalTime: "7:55am",
  },

  {
    tripId: 2,
    travelerName: "Melissa",
    travelDate: "10/31/2024",
    tripNumber: "SK 944",
    travelOrigin: "Chicago, IL",
    departureTime: "8:10pm",
    travelDestination: "Copenhagen, Denmark",
    arrivalTime: "10:05am",
  },

  {
    tripId: 2,
    travelerName: "Lucas",
    travelDate: "10/31/2024",
    tripNumber: "SK 944",
    travelOrigin: "Chicago, IL",
    departureTime: "8:10pm",
    travelDestination: "Copenhagen, Denmark",
    arrivalTime: "10:05am",
  },
];

const departures = [
  {
    tripId: 1,
    travelerName: "Melissa",
    travelDate: "08/23/2024",
    tripNumber: "TP 243",
    travelOrigin: "Lisbon, Portugal",
    departureTime: "12:40pm",
    travelDestination: "Chicago, IL",
    arrivalTime: "4:00pm",
  },

  {
    tripId: 2,
    travelerName: "Melissa",
    travelDate: "11/7/2024",
    tripNumber: "SK 943",
    travelOrigin: "Copenhagen, Denmark",
    departureTime: "1:35pm",
    travelDestination: "Chicago, IL",
    arrivalTime: "3:50pm",
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
    eventDate: "8/17/2024",
    eventTime: "7:30pm",
    eventDescription: "Meet at the restaurant at 7:15pm",
    eventWebsite: "https://www.belcanto.pt/en/",
  },

  {
    tripId: 2,
    eventName: "Dinner at Host",
    eventDate: "11/2/2024",
    eventTime: "7:30pm",
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
