type CurrentLocationProps = {
  latitude: number;
  longitude: number;
};

const CurrentLocation: React.FC<CurrentLocationProps> = ({
  latitude,
  longitude
}: CurrentLocationProps) => {

  return (
    <div>
      {location && (
        <div>
          <p>Latitude: {latitude}</p>
          <p>Longitude: {longitude}</p>
        </div>
      )}
    </div>
  );
}

export default CurrentLocation;