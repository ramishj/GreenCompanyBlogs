// src/EventsPage.tsx
import React, { useEffect, useState } from "react";
import "./HomeEvents.css";

interface Event {
  title: string;
  speaker: string;
  date: string;
  mode?: string;
  imageUrl: string;
  timestamp: number; // Unix timestamp in seconds
}

const EventsPage: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [latestEvent, setLatestEvent] = useState<Event | null>(null);
  const [timeRemaining, setTimeRemaining] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const fetchEvents = async () => {
      const data = {
        events: [
          {
            title: "Digital Marketing Webinar",
            speaker: "Ramish Jamal",
            date: "05 June, 2024 / 08:30 AM - 10:00 AM",
            mode: "Online",
            imageUrl: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
            timestamp: 1727981400 // Unix timestamp for 01 June, 2024 / 08:30 AM
          },
          {
            title: "Social Media Marketing and Its Trends in 2024",
            speaker: "Jamal",
            date: "Aug 4, 2024",
            imageUrl: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
            timestamp: 1727981400 // Unix timestamp for Aug 4, 2024
          },
          {
            title: "Brand Management in Contemporary World",
            speaker: "Lina Thompson",
            date: "Aug 20, 2024",
            imageUrl: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
            timestamp: 1729353000 // Unix timestamp for Aug 20, 2024
          },
          {
            title: "Explaining the Theory of Relativity and its Compatibility with Quran",
            speaker: "Dr. John Doe",
            date: "Sep 14, 2024",
            imageUrl: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
            timestamp: 1731466200 // Unix timestamp for Sep 14, 2024
          }
        ]
      };
      setEvents(data.events);

      if (data.events.length > 0) {
        setLatestEvent(data.events[0]);
      }
    };

    fetchEvents();
  }, []);

  useEffect(() => {
    if (!latestEvent) return;

    const calculateTimeRemaining = () => {
      const now = Math.floor(Date.now() / 1000); // Current time in seconds
      const difference = latestEvent.timestamp - now;
      const days = Math.floor(difference / (60 * 60 * 24));
      const hours = Math.floor((difference % (60 * 60 * 24)) / (60 * 60));
      const minutes = Math.floor((difference % (60 * 60)) / 60);
      const seconds = Math.floor(difference % 60);

      setTimeRemaining({ days, hours, minutes, seconds });
    };

    calculateTimeRemaining();
    const interval = setInterval(calculateTimeRemaining, 1000);

    return () => clearInterval(interval);
  }, [latestEvent]);

  return (
    <div className="container">
      <h1 className="header">Events and Online Discussions</h1>
      {latestEvent && (
        <section className="exclusive-event-section">
          <div className="event-card-exclusive">
            <img className="event-image" src={latestEvent.imageUrl} alt="Event" />
            <div className="event-details">
              <div className="countdown">
                <div className="time-box">
                  <div className="time-number">{timeRemaining.days}</div>
                  <div className="time-label">Days</div>
                </div>
                <div className="time-box">
                  <div className="time-number">{timeRemaining.hours}</div>
                  <div className="time-label">Hours</div>
                </div>
                <div className="time-box">
                  <div className="time-number">{timeRemaining.minutes}</div>
                  <div className="time-label">Minutes</div>
                </div>
                <div className="time-box">
                  <div className="time-number">{timeRemaining.seconds}</div>
                  <div className="time-label">Seconds</div>
                </div>
              </div>
              <div className="event-info">
                <h2 className="event-title">{latestEvent.title}</h2>
                <h3 className="event-subtitle">(Trends in 2024)</h3>
                <p className="event-speaker">By: {latestEvent.speaker}</p>
                <p className="add-to-calendar">+ Add to Calendar</p>
                <p className="event-date">{latestEvent.date}</p>
                <p className="event-mode">{latestEvent.mode}</p>
                <button className="register-button">Register Now</button>
              </div>
            </div>
          </div>
        </section>
      )}
      <section className="upcoming-events-section">
        <h2 className="section-title">Upcoming Events</h2>
        <div className="events-grid">
          {events.slice(1).map((event, index) => (
            <div className="event-card" key={index}>
              <img className="event-thumbnail" src={event.imageUrl} alt="Event" />
              <div className="event-description">
                <p className="event-date-small">{event.date}</p>
                <h3 className="event-name">{event.title}</h3>
                <p className="event-speaker-small">By: {event.speaker}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="load-more-button">Load More</button>
      </section>
    </div>
  );
};

export default EventsPage;
