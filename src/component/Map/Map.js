import React from 'react';
// import GoogleMap from './GoogleMap';
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps"
const Map = () => {
    return (
        <div style={{width: '100vh', height: '100vh'}}>
            <WrappedMap 
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
                AIzaSyCBJNDl0N0uhvTokknQlQnAcolr0dmGKts
            }`}
            loadingElement={<div style={{height: '100%'}}></div>}
            containerElement={<div style={{height: '100%'}}></div>}
            mapElement={<div style={{height: '100%'}}></div>}

            />

        </div>
        
    );
};
const Mapped = () => {
    return (
        <div>
            <GoogleMap
                defaultZoom={10}
                defaultCenter={{ lat: 22.330370, lng: 91.832626 }}
            />
        </div>
    )
}
const WrappedMap = withScriptjs(withGoogleMap(Map))
export default Map;