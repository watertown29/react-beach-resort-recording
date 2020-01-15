import React from 'react'
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import {withRoomConsumer} from '../context';
import Loading from './Loading';

function RoomContainer({context}){
const {loading,sortedRooms,rooms} = context;
if (loading){
                        return <Loading />
                    }
                    return (
                    <div>
                    <RoomsFilter rooms={rooms}></RoomsFilter>
                    <RoomsList rooms={sortedRooms}></RoomsList>
                    </div>
                    )
}

export default withRoomConsumer(RoomContainer)


// import React from 'react'
// import RoomsFilter from './RoomsFilter';
// import RoomsList from './RoomsList';
// import {RoomConsumer} from '../context';
// import Loading from './Loading';

// export default function RoomContainer() {
//     return (
//         <RoomConsumer>
//             {
//                 (value) => {
//                     console.log(value);
//                     const {loading,sortedRooms,rooms} = value
//                     if(loading){
//                         return <Loading />
//                     }
//                     return (
//                     <div>
//                     Hello From Room Container
//                     <RoomsFilter roooms={rooms}></RoomsFilter>
//                     <RoomsList rooms={sortedRooms}></RoomsList>
//                     </div>
//                     )
//                 }
//             }
//         </RoomConsumer>
        
//     )
// }
