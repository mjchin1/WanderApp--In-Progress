const trips = [
  {
    destination: "Lisbon, Portugal",
    startDate: "8/16/2024",
    tripEndDate: "8/23/2024",
    tripPhoto:
      "https://www.travelandleisure.com/thmb/LzWpzDihxjffaFmM9TZWCvm9VyY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/lisbon-portugal-LISBONTG0521-c933a0fb669647619fa580f6c602c4c8.jpg",
  },

  {
    destination: "Antigua, Guatemala",
    startDate: "10/30/2024",
    endDate: "11/6/2024",
    tripPhoto:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Santa_Catalina_Arch_-_Antigua_Guatemala_Feb_2020.jpg/1200px-Santa_Catalina_Arch_-_Antigua_Guatemala_Feb_2020.jpg",
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
    tripId: 2,
    travelerName: "Melissa",
    travelDate: "10/30/2024",
    tripNumber: "UA 2006",
    travelOrigin: "Chicago, IL",
    departureTime: "8:54am",
    travelDestination: "Guatemala City, Guatemala",
    arrivalTime: "12:35pm",
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
    travelDate: "11/6/2024",
    tripNumber: "UA 2007",
    travelOrigin: "Guatemala City, Guatemala",
    departureTime: "1:28pm",
    travelDestination: "Chicago, IL",
    arrivalTime: "6:10pm",
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
    activityName: "Visit Parque Central",
    activityDescription: "Take a stroll before getting lunch",
    activityPhoto:
      "https://d3e1m60ptf1oym.cloudfront.net/ed60df84-5d8b-4895-af5f-f56a2261bc2f/20181202_7938_xlarge.jpg",
    activityWebsite: "",
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
    eventName: "Dinner at Barriga Llena",
    eventDate: "11/2/2024",
    eventTime: "7:30pm",
    eventDescription: "Meet at the restaurant at 7:15pm",
    eventWebsite: "https://www.instagram.com/tenemoslabarrigallena/?hl=en",
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
  arrivals,
  departures,
  activities,
  calendar,
  users,
};
