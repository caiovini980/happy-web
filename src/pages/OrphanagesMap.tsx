import React from 'react';
import { Link } from 'react-router-dom'; 
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../images/MapMarker.svg';

import '../styles/pages/orphanages-map.css';

function OrphanagesMap() {
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy"/>

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Existem muitas crianças esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Belém</strong>
                    <span>Pará</span>
                </footer>
            </aside>

            <Map
                center={[-1.4512429, -48.5027925]}
                zoom={15}
                style={{ width: '100%', height: '100%' }} 
            >
                {/*<TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" ></TileLayer>*/}
                <TileLayer 
                    url={`https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} 
                />
            </Map>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#fff"/>
            </Link>
        </div>
    );
}

export default OrphanagesMap;