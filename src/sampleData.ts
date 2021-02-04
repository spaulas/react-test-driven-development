const today = new Date();

const at = (hours: number) => today.setHours(hours, 0);

export const sampleAppointments = [
  {
    startsAt: at(9),
    customer: {
      firstName: "Charlie",
      lastName: "Patterson",
      phoneNumber: 8019800305,
      stylist: "Deanne Andersen",
      service: "beard trim",
      notes:
        "The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.",
    },
  },
  {
    startsAt: at(10),
    customer: {
      firstName: "Frankie",
      lastName: "Cortez",
      phoneNumber: 8019800305,
      stylist: "Ingrid Johnson",
      service: "haircut",
      notes:
        " But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted.",
    },
  },
  {
    startsAt: at(11),
    customer: {
      firstName: "Casey",
      lastName: "Glass",
      phoneNumber: 4354947822,
      stylist: "Roza Barton",
      service: "nails",
      notes:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  },
  {
    startsAt: at(12),
    customer: {
      firstName: "Ashley",
      lastName: "Holland",
      phoneNumber: 2154528734,
      stylist: "Deanne Andersen",
      service: "depilation",
      notes:
        "or again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. ",
    },
  },
  {
    startsAt: at(13),
    customer: {
      firstName: "Jordan",
      lastName: "Oconnell",
      phoneNumber: 2192240367,
      stylist: "Ingrid Johnson",
      service: "beard trim",
      notes:
        " Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  },
  {
    startsAt: at(14),
    customer: {
      firstName: "Jay",
      lastName: "Mclean",
      phoneNumber: 8582104604,
      stylist: "Roza Barton",
      service: "haircut",
      notes:
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    },
  },
  {
    startsAt: at(15),
    customer: {
      firstName: "Alex",
      lastName: "Page",
      phoneNumber: 5033939203,
      stylist: "Deanne Andersen",
      service: "haircut",
      notes:
        " Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. ",
    },
  },
  {
    startsAt: at(16),
    customer: {
      firstName: "Jules",
      lastName: "Dalton",
      phoneNumber: 5026735915,
      stylist: "Ingrid Johnson",
      service: "beard trim",
      notes: "Et harum quidem rerum facilis est et expedita distinctio.",
    },
  },
  {
    startsAt: at(17),
    customer: {
      firstName: "Stevie",
      lastName: "Mccarthy",
      phoneNumber: 7036661990,
      stylist: "Roza Barton",
      service: "beard trim",
      notes:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    },
  },
];
