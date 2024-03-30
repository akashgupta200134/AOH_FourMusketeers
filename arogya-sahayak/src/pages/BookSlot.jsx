import React, { useEffect, useState } from 'react';
import { firestore } from '../firebase.config';
import { collection, doc, setDoc } from 'firebase/firestore';
import { getDoctorDetails, getDoctorId } from '../utils/firebaseFunctions';
import { useParams } from 'react-router-dom';

const BookSlot = () => {
  const [allSlots, setAllSlots] = useState([]);
  // const [docID, setDocId] = useState('');
  const {docID} = useParams();
  const [doctordata, setdoctordata] = useState({});

  useEffect(() => { 
    const getDoctor =async()=>{
      const doctorabc = await getDoctorDetails(docID);
      setdoctordata(doctorabc);
    }
    getDoctor();

    console.log(docID)
  }, []);

  // Set the initial default values for date and time
  const currentDate = new Date().toISOString().split('T')[0];
  const currentTime = new Date().toTimeString().slice(0, 5);

  const [slot, setSlot] = useState({
    date: currentDate,
    from: currentTime,
    to: '',
    allocatedTo: 'none',
  });

  const handleChange = (e) => {
    const fieldName = e.target.name;
    const value = e.target.value;
    setSlot((prev) => {
      prev['docID'] = docID;
      prev[fieldName] = value;
      return { ...prev };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const docRef = doc(collection(firestore, 'slots'));
    await setDoc(docRef, slot);
    setAllSlots((prev) => [...prev, slot]);
    setSlot({
      date: currentDate,
      from: currentTime,
      to: '',
    });
    alert('The slot has been created');
  };

  return (
    <div className="container mx-auto mt-10">
      <form className="bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-6">Input The Available Date and Time Slot</h1>
        <div className="mb-4">
          <label htmlFor="date" className="block text-sm font-semibold text-gray-600">
            Date
          </label>
          <input
            type="date"
            name="date"
            id="date"
            className="w-full py-2 px-3 border rounded-md bg-gray-100"
            value={slot.date}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="from" className="block text-sm font-semibold text-gray-600">
            From
          </label>
          <input
            type="time"
            name="from"
            id="from"
            className="w-full py-2 px-3 border rounded-md bg-gray-100"
            value={slot.from}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="to" className="block text-sm font-semibold text-gray-600">
            To
          </label>
          <input
            type="time"
            name="to"
            id="to"
            className="w-full py-2 px-3 border rounded-md bg-gray-100"
            value={slot.to}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 ml-[500px] px-4 rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          onClick={handleSubmit}
        >
          Add Slot
        </button>
      </form>

      <div className="mt-10">
        <h1 className="text-3xl font-bold mb-4  text-center">Available Slots</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {allSlots.length === 0 ? (
            <p>There Are no Slots</p>
          ) : (
            allSlots.map((slot, index) => (
              <div
                key={index}
                className=" bg-blue-800  rounded-lg p-8 shadow-md text-white"
              >
                <div className="px-6 py-4">
                  <p className="text-lg font-semibold mb-2">Date: {slot.date}</p>
                  <p className="text-lg font-semibold mb-2">Timing: {slot.from}-{slot.to}</p>
                  <p className="text-sm text-gray-200">Doctor: {doctordata?.name}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default BookSlot;
