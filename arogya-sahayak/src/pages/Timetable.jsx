import React from "react";
import Timehero from "../images/Timebanner.webp";

const TimeTable = () => {
  // Sample data for doctors' timetable
  const timetableData = [
    {
      day: "Monday",
      schedule: [
        {
          department: "Obstetrics and Gynecology Department",
          timing: "9:00 AM - 11:00 AM",
          doctors: ["Dr. Karen Lee"],
          room: "Room 401",
        },
        {
          department: "Pulmonology Department",
          timing: "11:00 AM - 2:00 PM",
          doctors: ["Dr. John Smith"],
          room: "Room 502",
        },
        {
          department: "Neurology Department",
          timing: "3:00 PM - 6:00 PM",
          doctors: ["Dr. Maria Rodriguez"],
          room: "Room 603",
        },
        {
          department: "Emergency Department",
          timing: "6:00 PM - 9:00 PM",
          doctors: ["Dr. Michael Johnson", "Dr. Lisa Chen"],
          room: "Emergency Room",
        },
      ],
    },
    {
      day: "Tuesday",
      schedule: [
        {
          department: "Obstetrics and Gynecology Department",
          timing: "9:00 AM - 11:00 AM",
          doctors: ["Dr. Karen Lee"],
          room: "Room 401",
        },
        {
          department: "Pulmonology Department",
          timing: "11:00 AM - 2:00 PM",
          doctors: ["Dr. John Smith"],
          room: "Room 502",
        },
        {
          department: "Neurology Department",
          timing: "3:00 PM - 6:00 PM",
          doctors: ["Dr. Maria Rodriguez"],
          room: "Room 603",
        },
        {
          department: "Emergency Department",
          timing: "6:00 PM - 9:00 PM",
          doctors: ["Dr. Michael Johnson", "Dr. Lisa Chen"],
          room: "Emergency Room",
        },
      ],
    },
    {
      day: "Wednesday",
      schedule: [
        {
          department: "Obstetrics and Gynecology Department",
          timing: "9:00 AM - 11:00 AM",
          doctors: ["Dr. Karen Lee"],
          room: "Room 401",
        },
        {
          department: "Pulmonology Department",
          timing: "11:00 AM - 2:00 PM",
          doctors: ["Dr. John Smith"],
          room: "Room 502",
        },
        {
          department: "Neurology Department",
          timing: "3:00 PM - 6:00 PM",
          doctors: ["Dr. Maria Rodriguez"],
          room: "Room 603",
        },
        {
          department: "Emergency Department",
          timing: "6:00 PM - 9:00 PM",
          doctors: ["Dr. Michael Johnson", "Dr. Lisa Chen"],
          room: "Emergency Room",
        },
      ],
    },
    {
      day: "Thursday",
      schedule: [
        {
          department: "Obstetrics and Gynecology Department",
          timing: "9:00 AM - 11:00 AM",
          doctors: ["Dr. Karen Lee"],
          room: "Room 401",
        },
        {
          department: "Pulmonology Department",
          timing: "11:00 AM - 2:00 PM",
          doctors: ["Dr. John Smith"],
          room: "Room 502",
        },
        {
          department: "Neurology Department",
          timing: "3:00 PM - 6:00 PM",
          doctors: ["Dr. Maria Rodriguez"],
          room: "Room 603",
        },
        {
          department: "Emergency Department",
          timing: "6:00 PM - 9:00 PM",
          doctors: ["Dr. Michael Johnson", "Dr. Lisa Chen"],
          room: "Emergency Room",
        },
      ],
    },
    {
      day: "Friday",
      schedule: [
        {
          department: "Obstetrics and Gynecology Department",
          timing: "9:00 AM - 11:00 AM",
          doctors: ["Dr. Karen Lee"],
          room: "Room 401",
        },
        {
          department: "Pulmonology Department",
          timing: "11:00 AM - 2:00 PM",
          doctors: ["Dr. John Smith"],
          room: "Room 502",
        },
        {
          department: "Neurology Department",
          timing: "3:00 PM - 6:00 PM",
          doctors: ["Dr. Maria Rodriguez"],
          room: "Room 603",
        },
        {
          department: "Emergency Department",
          timing: "6:00 PM - 9:00 PM",
          doctors: ["Dr. Michael Johnson", "Dr. Lisa Chen"],
          room: "Emergency Room",
        },
      ],
    },
    {
      day: "Saturday",
      schedule: [
        {
          department: "Obstetrics and Gynecology Department",
          timing: "9:00 AM - 11:00 AM",
          doctors: ["Dr. Karen Lee"],
          room: "Room 401",
        },
        {
          department: "Pulmonology Department",
          timing: "11:00 AM - 2:00 PM",
          doctors: ["Dr. John Smith"],
          room: "Room 502",
        },
        {
          department: "Neurology Department",
          timing: "3:00 PM - 6:00 PM",
          doctors: ["Dr. Maria Rodriguez"],
          room: "Room 603",
        },
        {
          department: "Emergency Department",
          timing: "6:00 PM - 9:00 PM",
          doctors: ["Dr. Michael Johnson", "Dr. Lisa Chen"],
          room: "Emergency Room",
        },
      ],
    },
    {
      day: "Sunday",
      schedule: [
        {
          department: "Obstetrics and Gynecology Department",
          timing: "9:00 AM - 11:00 AM",
          doctors: ["Dr. Karen Lee"],
          room: "Room 401",
        },
        {
          department: "Pulmonology Department",
          timing: "11:00 AM - 2:00 PM",
          doctors: ["Dr. John Smith"],
          room: "Room 502",
        },
        {
          department: "Neurology Department",
          timing: "3:00 PM - 6:00 PM",
          doctors: ["Dr. Maria Rodriguez"],
          room: "Room 603",
        },
        {
          department: "Emergency Department",
          timing: "6:00 PM - 9:00 PM",
          doctors: ["Dr. Michael Johnson", "Dr. Lisa Chen"],
          room: "Emergency Room",
        },
      ],
    },
  ];

  return (
    <div className="container mx-auto mt-12">
      <section className="flex items-center justify-center w-full md:pl-36 -mt-20">
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-6xl"
          id="home"
        >
          <div className="md:h-screen flex flex-col justify-center md:pb-36 pt-10 md:pt-0 md:gap-3 gap-1">
            <div className="flex"></div>
            <p className="md:text-6xl text-4xl font-extrabold mt-5">
              Arogya Sahayak Timetable&nbsp;
            </p>
            <p className="mt-5 md:mt-1 text-mediumGrey md:w-3/4 text-xl font-semibold">
              Get to know the complete info of our doctors schedule
            </p>
          </div>
          <div className="relative">
            <div className="md:h-screen md:absolute flex items-center justify-center md:pb-36 h-96 w-[400px] ">
              <img src={Timehero} alt="Hero" />
            </div>
          </div>
        </div>
      </section>

      <h2 className="text-4xl font-extrabold mb-4 text-center -mt-20">
        Hospital Doctor's Timetable
      </h2>

      {timetableData.map((dayData) => (
        <div key={dayData.day} className="border p-4 mb-4 mt-6">
          <h3 className=" text-center text-white text-lg font-bold mb-2 bg-blue-800 p-2">
            {dayData.day}
          </h3>
          <table className="w-full">
            <tbody className=" text-md font-semibold">
              {dayData.schedule.map((slot, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b  bg-blue-100">
                    {slot.department}
                  </td>
                  <td className="py-2 px-4 border-b bg-blue-100 ">
                    {slot.timing}
                  </td>
                  <td className="py-2 px-4 border-b  bg-blue-100">
                    {slot.doctors.join(", ")}
                  </td>
                  <td className="py-2 px-4 border-b bg-blue-100">
                    {slot.room}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default TimeTable;
