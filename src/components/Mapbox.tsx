import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

type MapboxProps = {
  latitude: number;
  longitude: number;
  zoom: number;
};

const Mapbox: React.FC<MapboxProps> = ({ latitude, longitude, zoom }) => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || '';

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [longitude, latitude],
      zoom: zoom
    });

    // Clean up on component unmount
    return () => map.remove();
  }, [latitude, longitude, zoom]);

  return <div ref={mapContainerRef} style={{ width: '100%', height: '400px' }}></div>;
};

export default Mapbox;
