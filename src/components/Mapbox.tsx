import React, { useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl'

import 'mapbox-gl/dist/mapbox-gl.css'

type MapboxProps = {
  latitude: number
  longitude: number
  zoom: number
}

const Mapbox: React.FC<MapboxProps> = ({ latitude, longitude, zoom }) => {
  const mapContainerRef = useRef(null)
  const markerRef = useRef<mapboxgl.Marker | null>(null)
  const mapRef = useRef<mapboxgl.Map | null>(null)

  useEffect(() => {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || ''

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current!,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [longitude, latitude],
      zoom: zoom
    })

    // Driving indicator
    mapRef.current.on('load', () => {
      markerRef.current = new mapboxgl.Marker({
        color: "#000",
      })
      .setLngLat([longitude, latitude])
      .addTo(mapRef.current!)
    })

    const nav = new mapboxgl.NavigationControl();
    mapRef.current.addControl(nav, 'top-right'); 

    return () => mapRef.current?.remove()
  }, [])

  useEffect(() => {
    if (markerRef.current) {
      markerRef.current.setLngLat([longitude, latitude])
    }
    if (mapRef.current) {
      mapRef.current.setCenter([longitude, latitude])
    }
  }, [latitude, longitude]) 

  return <div ref={mapContainerRef} style={{ width: '100%', height: '100%' }} />
}

export default Mapbox
