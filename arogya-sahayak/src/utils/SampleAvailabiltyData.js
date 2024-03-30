import { saveDoctorData } from "../utils/firebaseFunctions";

export const doctordata = {
  doctor_id: "123456",
  name: "Dr. Hello World",
  specialization: "NeuroLogist",
  image:
    "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9jdG9yfGVufDB8fDB8fHww",
  education: [
    {
      degree: "Doctor of Medicine (MD)",
      institution: "Harvard Medical School",
      year: 2010,
    },
    {
      degree: "Bachelor of Science in Biology",
      institution: "Stanford University",
      year: 2006,
    },
  ],
  certifications: [
    "Board Certified in Cardiology",
    "Advanced Cardiac Life Support (ACLS)",
  ],
  experience: [
    {
      position: "Attending Cardiologist",
      institution: "Massachusetts General Hospital",
      start_date: "2013-01-01",
      end_date: null,
    },
    {
      position: "Fellow in Cardiology",
      institution: "Johns Hopkins Hospital",
      start_date: "2010-07-01",
      end_date: "2012-12-31",
    },
  ],
  contact: {
    email: "youbrajsingh2576@gmail.com",
    phone: "987109448",
    address: "123 Main Street, Boston, MA, 02110",
  },
  languages_spoken: ["English", "Spanish"],
  biography:
    "Dr. Emily Johnson is a highly skilled cardiologist with extensive experience in diagnosing and treating various heart conditions. She is dedicated to providing compassionate care to her patients and staying updated with the latest advancements in cardiology. Dr. Johnson is board certified and committed to delivering exceptional cardiac care tailored to each individual's needs.",
};


