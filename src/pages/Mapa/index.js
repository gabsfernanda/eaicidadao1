import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';



const containerStyle = {
  width: '100vw',
  height: '75vh'
};

const center = {
  lat: -22.84,
  lng: -45.21
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCHTS7aUHRnpi_iiXa5CSHYnZbWW5BM5HA"
  });
  

  // eslint-disable-next-line no-unused-vars
  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)