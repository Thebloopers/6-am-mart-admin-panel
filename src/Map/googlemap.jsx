import React from "react";
import { ControlPosition, Map, MapControl } from "@vis.gl/react-google-maps";

import { UndoRedoControl } from "./undo_redo_control";
import { useDrawingManager } from "./use_drawing_manager";
// import ControlPanel from './control-panel';

const GoogleMap = () => {
  const drawingManager = useDrawingManager();

  return (
    <>
      <Map
        defaultZoom={12}
        defaultCenter={{ lat: 23.2515169765685, lng: 77.46404278347067 }}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
      />

      {/* <ControlPanel /> */}

      <MapControl position={ControlPosition.TOP_CENTER}>
        <UndoRedoControl drawingManager={drawingManager} />
      </MapControl>
    </>
  );
};

export default GoogleMap;
