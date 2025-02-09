import React from 'react'
import './Channel.css'
import channel from '../../assets/channel1.jpg'
import channel2 from '../../assets/channel2.jpg'
import channel3 from '../../assets/channel3.png'
import channel4 from '../../assets/channel4.jpg'
import channel5 from '../../assets/channel5.png'
import channel6 from '../../assets/channel6.png'
import channel7 from '../../assets/channel7.png'
import channel8 from '../../assets/channel8.png'
import channel9 from '../../assets/channel9.png'

let channels = [channel, channel2, channel3, channel4, channel5, channel6, channel7, channel8, channel9]

function Channel() {
  return (
    <>
        <div className="channel">
            <h1>Channels</h1>
            <div className="channel-list">
            {channels.map((item, index) => {
                return <img src={item} alt="" key={index} />
            })}
            </div>
        </div>
    </>
  )
}

export default Channel