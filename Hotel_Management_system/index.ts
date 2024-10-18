import { HotelService } from './Services/HotelServices';
import { BookingService } from './Services/BookingServices';
import { Hotel } from './Models/Hotel';
import { Customer } from './Models/Customer';
import { Booking } from './Models/Booking';

// Initialize services
const hotelService = new HotelService();
const bookingService = new BookingService();

// Adding hotels
hotelService.addHotel({ id: 1, name: 'Hotel Paradise', location: 'New York', roomsAvailable: 10, rating: 4.5 });
hotelService.addHotel({ id: 2, name: 'Ocean View', location: 'Miami', roomsAvailable: 5, rating: 4.7 });

// Adding customers
const customer: Customer = { id: 1, name: 'John Doe', email: 'john@example.com', phone: '1234567890' };

// Creating a booking
const booking: Booking = {
    id: 1,
    customer: customer,
    hotel: hotelService.findHotelById(1)!, // Assuming the hotel exists
    checkInDate: new Date('2024-10-15'),
    checkOutDate: new Date('2024-10-20'),
    status: 'confirmed',
};

// Adding the booking
bookingService.addBooking(booking);

// Display all hotels
console.log('Available Hotels:', hotelService.getAllHotels());

// Display all bookings
console.log('Bookings:', bookingService.getAllBookings());
