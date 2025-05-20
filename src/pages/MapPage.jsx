import { useState, useEffect, useCallback, useMemo } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { useGeolocation } from '../hooks/useGeolocation';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { UserMarker } from '../components/UserMarker';
import Sidebar from '../components/Sidebar';

const MapPage = () => {
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [locations, setLocations] = useState([]);
    const { userLocation, geoError } = useGeolocation();

    // Configuración inicial del mapa
    const mapStyles = useMemo(() => ({
        height: '100vh',
        width: '100%'
    }), []);

    // Memoizar las ubicaciones iniciales
    const initialLocations = useMemo(() => [
        {
            name: "SOS - Lucas",
            position: { lat: 40.416775, lng: -3.703790 },
            distance: "Calculando..."
        },
    ], []);

    // Cálculo de distancias con dependencias correctas
    const calculateDistances = useCallback(async () => {
        if (!userLocation || !window.google) return;

        try {
            const service = new window.google.maps.DistanceMatrixService();
            const updatedLocations = await Promise.all(
                initialLocations.map(async location => {
                    const response = await service.getDistanceMatrix({
                        origins: [userLocation],
                        destinations: [location.position],
                        travelMode: 'WALKING',
                    });

                    return {
                        ...location,
                        distance: response.rows[0].elements[0].distance?.text || "No disponible"
                    };
                })
            );

            setLocations(updatedLocations);
        } catch (error) {
            console.error("Error calculando distancias:", error);
        }
    }, [userLocation, initialLocations]); // Added initialLocations dependency

    useEffect(() => {
        calculateDistances();
    }, [calculateDistances]);

    return (
        <>
            <Sidebar />
            <div className="h-96 w-full rounded-lg shadow-lg">
                <LoadScript
                    googleMapsApiKey={import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY}
                    libraries={['places']}
                >
                    {geoError ? (
                        <div className="text-red-500 p-4">{geoError}</div>
                    ) : (
                        <GoogleMap
                            mapContainerStyle={mapStyles}
                            zoom={15}
                            center={userLocation || initialLocations[0].position}
                        >
                            {locations.map((location, index) => (
                                <Marker
                                    key={index}
                                    position={location.position}
                                    onClick={() => setSelectedLocation(location)}
                                >
                                    {selectedLocation === location && (
                                        <InfoWindow onCloseClick={() => setSelectedLocation(null)}>
                                            <div className="text-gray-700">
                                                <h3 className="font-bold">{location.name}</h3>
                                                <p>{location.distance} desde tu ubicación</p>
                                            </div>
                                        </InfoWindow>
                                    )}
                                </Marker>
                            ))}

                            {/* Componente UserMarker seguro */}
                            <UserMarker userLocation={userLocation} />
                        </GoogleMap>
                    )}
                </LoadScript>
            </div>
        </>
    );
};

export default MapPage;