import React from 'react'
import { useParams } from 'react-router-dom';
import { APP_ID, SERVER_SECREAT } from './constant';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';


const VideoPage = () => {
    const {id}=useParams();
    const roomID = id;
      let myMeeting = async (element) => {
     // generate Kit Token
      const appID = APP_ID;
      const serverSecret =SERVER_SECREAT;
      const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,  Date.now().toString(),  "Shrihari");    
      const zp = ZegoUIKitPrebuilt.create(kitToken);
      zp.joinRoom({
        container: element,
        sharedLinks: [
          {
            name: 'copy link',
            url:
             window.location.protocol + '//' + 
             window.location.host + window.location.pathname +
              '?roomID=' +
              roomID,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONaneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
        },
      });
    }
  return (
    <div ref={myMeeting}>

    </div>
  )
}

export default VideoPage;