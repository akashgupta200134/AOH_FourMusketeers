import React from 'react'




  const HospitalList = () => {
    const [allBloodRecords, setAllBloodRecords] = useState([]);
    const [{ user }, dispatch] = useStateValue();
    const [adminEmailData, setAdminEmailData] = useState();
  
    const fetchallRecords = async () => {
      const data = await getAllBloodRecords();
      setAllBloodRecords(data);
      if (user.email) {
        const filteredData = data.filter(record => record.adminEmail === user.email);
        setAdminEmailData(filteredData[0]);
      }
    };

    useEffect(() => {
      fetchallRecords();
    }, []);
  

  return (
 
  )
}


export default BloodBank