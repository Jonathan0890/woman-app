import { Marker } from '@react-google-maps/api'; // Agrega esta importación

export const UserMarker = ({ userLocation }) => {
    if (!userLocation || !window.google?.maps?.SymbolPath) return null;

    return (
        <Marker
            position={userLocation}
            icon={{
                path: window.google.maps.SymbolPath.CIRCLE,
                scale: 7,
                fillColor: "#4285F4",
                fillOpacity: 1,
                strokeWeight: 0
            }}
        />
    );
};