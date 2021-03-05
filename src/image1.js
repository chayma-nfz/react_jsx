import React from 'react';
import video from './images/myvideo.mp4';



 function videoo(){
    return (
<div>
<video style={{ width: 320, height: 240 }}  src={video} type="video/mp4"    controls />
</div>



    )
}
export default videoo ;