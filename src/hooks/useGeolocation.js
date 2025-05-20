import { useState, useEffect } from 'react';

export const useGeolocation = () => {
    const [userLocation, setUserLocation] = useState(null);
    const [geoError, setGeoError] = useState(null);

    useEffect(() => {
        if (!navigator.geolocation) {
            setGeoError('Geolocation is not supported by your browser');
            return;
        }

        const success = position => {
            setUserLocation({
                lat: position.coords.latitude,
                lng: position.coords.longitude
            });
        };

        const error = err => {
            setGeoError(`Error getting location: ${err.message}`);
        };

        navigator.geolocation.getCurrentPosition(success, error);
    }, []);

    return { userLocation, geoError };
};