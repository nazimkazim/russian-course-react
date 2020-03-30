import React from "react";
import FlowersFilter from "./FlowersFilter";
import FlowersList from "./FlowersList";
import { withLessonConsumer } from "../context";
import Loading from "./Loading";

function LessonsContainer({ context }) {
  const { loading, sortedFlowers, flowers } = context;

  return (
    <>
      <FlowersFilter flowers={flowers} />
      {loading ? (
        <Loading words="цветы загружаются" />
      ) : (
        <FlowersList flowers={sortedFlowers} />
      )}
    </>
  );
}

export default withLessonConsumer(LessonsContainer);

/* export default function RoomsContainer() {
    return (
        <RoomConsumer>
            {
                (value) => {
                    const {loading, sortedRooms, rooms} = value
                    if (loading) {
                        return <Loading/>
                    }
                    return (
                        <div>
                            Hello from roomsContainer
                            <RoomsFilter rooms={rooms}/>
                            <RoomsList rooms={sortedRooms}/>
                        </div>
                    )
                }
            }
        </RoomConsumer>
        
    )
} */
