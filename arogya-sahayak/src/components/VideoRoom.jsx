import React, { useEffect , useState } from 'react'
import AgoraRTC from 'agora-rtc-sdk-ng';
import { VideoPlayer } from './VideoPlayer';


const APP_ID = 'eefade6720ae943b0ad3ecafae5b37419';
const TOKEN = '007eJxTYOh9eWKhqWK6gNSfJ8e29Ukfv/enfvfFmtXLv827s/XgiZpSBQaDVCPDRAvTFFPD5GSTNItESwOzNMu0lJTk1KTkpLRkUynVb6kNgYwMa7W1mRkZIBDEZ2Uoy0xJzWdgAADWCSRr';
const CHANNEL='video';

const  client = AgoraRTC.createClient({

    mode : 'rtc',
    codec: 'vp8',
});

export const VideoRoom = () => {
    const [users ,setUsers] = useState([]);
   
    const [localTracks , setlocalTracks] = useState ([]);

 const handleUserJoined =  async(user,mediaType) => {

    await client.subscribe(user,mediaType);

    if(mediaType === 'video'){
        setUsers((previousUsers) => [...previousUsers,user]);
    }
    
    if(mediaType === 'audio'){
        user.audioTrack.play()

    }



 };
  const handleUserLeft = (user) => {
    setUsers ((previousUsers) => 
    previousUsers.filter((u) => 
 u.uid !== user.uid)
  );
    
  };


useEffect (()  =>{

     client.on('user-published',handleUserJoined);
     client.on('user-left', handleUserLeft);

   client
   .join(APP_ID , CHANNEL, TOKEN , null)
   .then ((uid)  =>
      Promise.all([AgoraRTC.createMicrophoneAndCameraTracks() ,
    uid,
    ])
    ).then(([tracks,uid]) => {
    
    const[audioTrack , videoTrack] = tracks;

    setUsers((previousUsers) => [...previousUsers,{
        uid,
        videoTrack,
        audioTrack,
    }])
    client.publish(tracks);
 })

 return () => {
    for (let track of localTracks) {
      track.stop();
      track.close();
    }

    client.off('user-published',handleUserJoined);
    client.off('user-left', handleUserLeft);
    client.unpublish(localTracks).then(() => client.leave ());
};

   }, [] );
 


  return (

     <div className=' h-full'> 
   

<div className=' flex  justify-center items-center gap-6 mt-12'>
   

 {users.map((user) => (
  <VideoPlayer key={user.uid} user={user} />
))}

</div>
    </div>
    
 );   

};








