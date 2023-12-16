import { useRef, useEffect } from 'react'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'

function FullScreenMap() {
  const mapDiv = useRef<HTMLDivElement | null>(null)
  const map = useRef<maplibregl.Map | null>(null)

  const apiKey =
    'AAPK5e1e06a76c5c4db88767e30f32babd2fAf2QCDuKFxpRfZm3Va781ZeXsGOO7uUIlk0iBknNAYyjtgw6YG4MXbr-3w1AU1RG'
  const basemapEnum = 'arcgis/navigation'

  useEffect(() => {
    if (mapDiv.current && !map.current) {
      map.current = new maplibregl.Map({
        container: mapDiv.current,
        style: `https://basemapstyles-api.arcgis.com/arcgis/rest/services/styles/v2/styles/${basemapEnum}?token=${apiKey}`,
        center: [15, 65],
        zoom: 4,
      })
    }
  }, [])

  return <div ref={mapDiv} style={{ height: '100vh', width: '100%' }} />
}

export default FullScreenMap
