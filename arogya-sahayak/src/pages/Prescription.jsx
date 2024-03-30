import React, { useEffect } from "react";
import { useStateValue } from "../context/StateProvider";
// import { query, where } from "firebase/firestore";
import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
  addDoc,
  updateDoc,
  where,
  getDoc,
  and,
  limit,
} from "firebase/firestore";
import { firestore } from "../firebase.config";
import { useState } from "react";

const Prescription = () => {
  const [{ user }, dispatch] = useStateValue();
  const [isDoctor, setisDoctor] = useState(false);
  const [doctordata, setdoctordata] = useState();

  const [imageUplaod, setimageUplaod] = useState([]);

  const upsetImage = (file) => {
    setimageUplaod((prev) => {
      return [...prev, file];
    });
  };

  useEffect(() => {
    const checkdoctor = async () => {
      const docRef = collection(firestore, "doctors");

      const q = query(docRef, where("contact.email", "==", "uhuhuh"));
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        console.log("nonethin");
      } else {
        setisDoctor(true);
        querySnapshot.forEach((doc) => {
          setdoctordata(doc.data());
        });
      }
    };
    checkdoctor();
  }, []);

  if (isDoctor === false) {
    return <h1 className="mt-10">U are not a doctor</h1>;
  } else {
    return (
      <div className="mt-10">
        <div className="text-sm leading-6">
          <label htmlFor="Hypertension" className="font-medium text-gray-900">
            Hypertension
          </label>
          <p className="text-gray-500">
            <input
              id="Hypertension"
              name="Hypertension"
              type="file"
              onChange={(e) => {
                upsetImage({
                  file: e.target.files[0],
                  filename: e.target.name,
                });
              }}
            />
          </p>
        </div>
      </div>
    );
  }
};

export default Prescription;
