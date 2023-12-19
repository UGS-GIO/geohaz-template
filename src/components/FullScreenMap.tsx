import { useEffect, useRef } from 'react'
import maplibregl from 'maplibre-gl'

function FullScreenMap() {
  const mapDiv = useRef(null)

  useEffect(() => {
    if (mapDiv.current) {
      const map = new maplibregl.Map({
        container: mapDiv.current,
        style: 'https://demotiles.maplibre.org/style.json',
        zoom: 4,
        center: [15, 65], // Longitude, latitude
      })

      return () => map.remove()
    }
  }, [])

  return (
    <div
      ref={mapDiv}
      style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        width: '100%',
      }}
    />
  )
}

export default FullScreenMap
