import { useState } from "react";

const BookingDetails = ({ previousbookings, upcomingBooking }) => {
  // console.log("pre",previousbookings);
  // console.log("upc",upcomingBooking);
  const [showBookings, setShowBookings] = useState(true);

  return (
    
      <div className="container p-2 mx-auto sm:p-4 text-gray-800 mt-10 bg-white min-h-screen">
        <h2 className="mb-4 text-2xl font-semibold leading-tight"></h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <thead className="bg-gray-300">
              <tr className="text-center">
                <th className="p-3">BOOKING ID</th>
                <th className="p-3">TURF</th>
                <th className="p-3">DATE</th>
                <th className="p-3">TIME</th>
                <th className="p-3">STATUS</th>
              </tr>
            </thead>
            <tbody>
            {showBookings ? (
            <>
              {upcomingBooking.map((booking, index) => (
                <tr className="text-center" key={index}>
                  <th className="p-2">{booking?._id}</th>
                  <td className="p-2">{booking?.turf?.turfName}</td>
                  <td className="p-2">{new Date(booking?.bookDate).toLocaleDateString()}</td>
                  <td className="p-2">{booking?.time}</td>
                  <td className="p-2">
                    {" "}
                    {booking?.payment === "Success" ? (
                      <button className="btn-sm btn-success p-2 rounded-3xl">
                        {booking?.payment}
                      </button>
                    ) : (
                      <button className="btn-warning btn-sm p-2 rounded-3xl">
                        {booking?.payment}
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </>
          ) : (
            <>
              {previousbookings.map((booking, index) => (
                <tr className="text-center"  key={index}>
                  <th className="p-2">{booking?._id}</th>
                  <td className="p-2">{booking?.turf?.turfName}</td>
                  <td className="p-2">{new Date(booking?.bookDate).toLocaleDateString()}</td>
                  <td className="p-2">{booking?.time}</td>
                  <td className="p-2">
                    {" "}
                    {booking?.payment === "Success" ? (
                      <button className="btn-sm btn-success p-2 rounded-3xl">
                        {booking?.payment}
                      </button>
                    ) : (
                      <button className="btn-warning btn-sm p-2 rounded-3xl">
                        {booking?.payment}
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </>
          )}
            </tbody>
          </table>
           {showBookings ? (
        <button
        className="btn btn-border-2 float-right mt-5"
        onClick={() => setShowBookings(false)}
        >
          Show Previous Bookings
        </button>
      ) : (
        <button
          className="btn btn-border-2 float-right mt-5"
          onClick={() => setShowBookings(true)}
          >
          Show UpcomingBookings Orders
        </button>
      )}
        </div>
      </div>

      
  
  );
};

export default BookingDetails;
