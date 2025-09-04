// src/pages/Events.jsx
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";

const CALENDAR_ID = "110bd1c91fbdaf0d074dba1b229089b4a980758df4cba5b87dcd5131319c4b57@group.calendar.google.com";
const API_KEY = "AIzaSyCedcWYdE4eBgrFp5oiYo09K2qkN_0u1S8";

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const now = new Date().toISOString();
        const oneMonthLater = new Date();
        oneMonthLater.setMonth(oneMonthLater.getMonth() + 1);

        const response = await fetch(
          `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}&timeMin=${now}&timeMax=${oneMonthLater.toISOString()}&singleEvents=true&orderBy=startTime`
        );
        const data = await response.json();
        if (data.items) {
          setEvents(data.items);
        }
      } catch (error) {
        console.error("Error fetching calendar events:", error);
      }
    };

    fetchEvents();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString(undefined, {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
  };

  return (
    <div className="bg-gray-900 text-gray-100 font-sans min-h-screen">
      <Navbar />

      <section className="py-24 px-6 max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Upcoming Events</h1>
        <p className="text-gray-300 max-w-3xl mx-auto mb-12">
          Our events are coming soon! Join the waitlist to reserve your spot and stay updated.
        </p>

        {events.length === 0 ? (
          <p className="text-gray-400">No events scheduled for the next month. Check back soon!</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-gray-800 p-6 rounded-lg shadow text-left flex flex-col justify-between hover:scale-105 transform transition duration-500"
              >
                <div>
                  <h3 className="text-xl font-semibold mb-2">{event.summary || "Untitled Event"}</h3>
                  <p className="text-gray-400 mb-2">{formatDate(event.start.dateTime || event.start.date)}</p>
                  {event.location && (
                    <p className="text-gray-400 mb-2">📍 {event.location}</p>
                  )}
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {/* Routes internally to /waitlist page */}
                  <Button to="/waitlist" className="bg-orange-500 hover:bg-orange-600">
                    Join Waitlist
                  </Button>
                  {event.location && (
                    <Button
                      href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(event.location)}`}
                      className="bg-gray-700 hover:bg-gray-600"
                    >
                      Get Directions
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}
