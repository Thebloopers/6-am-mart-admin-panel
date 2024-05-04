import { useMap, useMapsLibrary } from "@vis.gl/react-google-maps";
import { useEffect, useState } from "react";

export function useDrawingManager(initialValue = null, polygon) {
  const map = useMap();
  const drawing = useMapsLibrary("drawing");

  const [drawingManager, setDrawingManager] = useState(initialValue);

  useEffect(() => {
    if (!map || !drawing) return;

    const newDrawingManager = new drawing.DrawingManager({
      map,
      // drawingMode: polygon ? google.maps.drawing.OverlayType.POLYGON : null,
      drawingControl: true,
      drawingControlOptions: {
        position: google.maps.ControlPosition.TOP_CENTER,
        drawingModes: [
          google.maps.drawing.OverlayType.MARKER,
          polygon && google.maps.drawing.OverlayType.POLYGON,
          // google.maps.drawing.OverlayType.RECTANGLE,
          // google.maps.drawing.OverlayType.POLYLINE,
          // google.maps.drawing.OverlayType.CIRCLE,
        ],
      },
      markerOptions: {
        draggable: true,
      },
      circleOptions: {
        editable: true,
      },
      polygonOptions: {
        editable: true,
        draggable: true,
      },
      rectangleOptions: {
        editable: true,
        draggable: true,
      },
      polylineOptions: {
        editable: true,
        draggable: true,
      },
    });

    setDrawingManager(newDrawingManager);

    return () => {
      if (newDrawingManager) {
        newDrawingManager.setMap(null);
      }
    };
  }, [drawing, map, polygon]);

  return drawingManager;
}
