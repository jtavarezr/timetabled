import React from "react";
import Event from "./Event";
/*
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const times = [
  "8:00 am",
  "9:00 am",
  "10:00 am",
  "11:00 am",
  "12:00 pm",
  "1:00 pm",
  "2:00 pm",
  "3:00 pm",
  "4:00 pm",
  "5:00 pm",
];

const Calendar = () => {
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          {days.map((day, index) => (
            <th key={index}>{day}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="time">{times[0]}</td>
          <td colSpan={days.length - 1}>
            <Event />
          </td>
        </tr>
        {times.slice(1).map((time, index) => (
          <tr key={index}>
            <td className="time">{time}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Calendar;
*/

const Calendar = () => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const times = [
    "8 AM",
    "9 AM",
    "10 AM",
    "11 AM",
    "12 PM",
    "1 PM",
    "2 PM",
    "3 PM",
    "4 PM",
    "5 PM",
  ]; // Timeslots
  
  
  // Function to generate a random color
  const getRandomColor = () => {
    const colors = ["pink", "blue", "green"];
    return colors[Math.floor(Math.random() * colors.length)];
  };
  
  return (
    <div className="Calendar">
      <table>
        <thead>
          <tr>
            <th key=""></th>
            {days.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Create 10 rows with times and event handling */}
          {/* Row 1 (8 AM) */}
          <tr>
            <td className="time">8 am</td>
            <Event event="Coffee ☕️" location="Starbucks" color="green" />
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event
              event="Fancy Dinner 🎩"
              location="Restaurant"
              color="green"
            />
            <td></td>
          </tr>

          {/* Rows 2 - 10 (repeated structure) */}
          <tr>
            <td className="time">9 am</td>
            <td></td>
            <td></td>
            <td></td>
            <Event event="Subway 🚊" location="Transportation" color="pink" />
            <td></td>
            <td></td>
            <Event event="The Bean 🫘" location="Café" color="blue" />
          </tr>

          <tr>
            <td className="time">10 am</td>
            <Event
              event="Shopping 🛍️"
              location="Mall"
              color={getRandomColor()}
            />
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event
              event="Game Night 🎮"
              location="Friend's House"
              color={getRandomColor()}
            />
            <td></td>
          </tr>

          <tr>
            <td className="time">11 am</td>
            <Event
              event="Lunch Date 🍽️"
              location="Restaurant"
              color={getRandomColor()}
            />
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event event="Hiking 🥾" location="Park" color={getRandomColor()} />
          </tr>
          <tr>
            <td className="time">12 pm</td>
            <Event
              event="Movie Night 🎬"
              location="Home"
              color={getRandomColor()}
            />
            <td></td>
            <td></td>
            <Event
              event="Gym 🏋️‍♂️"
              location="Fitness Center"
              color={getRandomColor()}
            />
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">1 pm</td>
            <td></td>
            <Event
              event="Yoga 🧘‍♂️"
              location="Yoga Studio"
              color={getRandomColor()}
            />
            <td></td>
            <Event
              event="Beach Day 🏖️"
              location="Beach"
              color={getRandomColor()}
            />
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">2 pm</td>
            <td></td>
            <Event
              event="Yoga 🧘‍♂️"
              location="Yoga Studio"
              color={getRandomColor()}
            />
            <td></td>
            <td></td>
            <td></td>
            <Event
              event="Gym 🏋️‍♂️"
              location="Fitness Center"
              color={getRandomColor()}
            />
            <td></td>
          </tr>
          <tr>
            <td className="time">3 pm</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event event="Hiking 🥾" location="Park" color={getRandomColor()} />
          </tr>
          <tr>
            <td className="time">4 pm</td>
            <td></td>
            <td></td>
            <Event
              event="Movie Night 🎬"
              location="Home"
              color={getRandomColor()}
            />
            <td></td>
            <Event
              event="Game Night 🎮"
              location="Friend's House"
              color={getRandomColor()}
            />
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">5 pm</td>
            <Event
              event="Shopping 🛍️"
              location="Mall"
              color={getRandomColor()}
            />
            <td></td>
            <td></td>
            <Event
              event="Lunch Date 🍽️"
              location="Restaurant"
              color={getRandomColor()}
            />
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Calendar;