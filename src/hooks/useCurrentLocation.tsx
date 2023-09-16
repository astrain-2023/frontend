import { useState, useEffect } from "react";

const useCurrentLocation = () => {
  const [location, setLocation] = useState<GeolocationCoordinates | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser.');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation(position.coords);
      },
      () => {
        setError('Unable to retrieve your location.');
      }
    );
  }, []);

  console.table(location)

  return { latitude: location?.latitude, longitude: location?.longitude, error }
}

export default useCurrentLocation