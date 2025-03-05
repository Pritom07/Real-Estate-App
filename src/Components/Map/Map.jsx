// import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
// import PropTypes from "prop-types";
// import "leaflet/dist/leaflet.css";
// import { Icon } from "leaflet";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";

// const Map = ({ position, location }) => {
//   const iconItem = new Icon({
//     iconUrl: "/Images/marker.png",
//     iconSize: [40, 40],
//   });

//   useEffect(() => {
//     AOS.init({ duration: 800, easing: "ease-in-out-sine", once: true });
//   }, []);

//   return (
//     <div data-aos="fade-left" className="w-full h-[910px]">
//       <MapContainer
//         center={position}
//         zoom={13}
//         className="w-full h-full rounded-[8px]"
//       >
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         <Marker position={position} icon={iconItem}>
//           <Popup>{location}</Popup>
//         </Marker>
//       </MapContainer>
//     </div>
//   );
// };

// Map.propTypes = {
//   position: PropTypes.array.isRequired,
//   location: PropTypes.string.isRequired,
// };

// export default Map;

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import PropTypes from "prop-types";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Map = ({ position, location }) => {
  const iconItem = new Icon({
    iconUrl: "/Images/marker.png",
    iconSize: [40, 40],
  });

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out-sine", once: true });
  }, []);

  return (
    <div
      data-aos="fade-left"
      className="w-full h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] rounded-md overflow-hidden"
    >
      <MapContainer
        center={position}
        zoom={13}
        className="w-full h-full rounded-md"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={iconItem}>
          <Popup>{location}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

Map.propTypes = {
  position: PropTypes.array.isRequired,
  location: PropTypes.string.isRequired,
};

export default Map;
