const Strings = {
    appName: 'Event Booking App',
    bookNow: 'Book Now',
    bookEvent: 'Book Event',
    bookingSuccessTitle: 'Booking Confirmed',
    bookingSuccessMessage: (name: string, email: string) =>
      `Thank you, ${name}! We'll contact you at ${email}`,
    namePlaceholder: '*Full Name',
    emailPlaceholder: '*Email',
    phonePlaceholder: '*Phone Number',
    validation: {
      name: 'Name is required',
      email: 'Email is required',
      phone: 'Phone is required',
      emailInvalid: 'Invalid email',
      phoneInvalid: 'Phone must be numeric',
    },
  };
  
  export default Strings;
  