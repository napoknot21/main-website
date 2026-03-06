"use client"

import { useEffect } from "react"
import { MapContainer, TileLayer, CircleMarker, Tooltip, useMap } from "react-leaflet"
import "leaflet/dist/leaflet.css"

type OfficeId = "luxembourg" | "monaco"

interface OfficePin {
    id: OfficeId
    name: string
    lat: number
    lng: number
}

interface Props {
    activeOffice: OfficeId
    onSelect: (id: OfficeId) => void
    offices: OfficePin[]
}

// Fly to the active office when it changes
function FlyTo({ lat, lng }: { lat: number; lng: number }) {
    const map = useMap()
    useEffect(() => {
        map.flyTo([lat, lng], 9, { duration: 1.2 })
    }, [lat, lng, map])
    return null
}

export default function OfficeMapInner({ activeOffice, onSelect, offices }: Props) {
    const active = offices.find((o) => o.id === activeOffice)!

    // Centre the initial view between both cities
    const centerLat = (offices[0].lat + offices[1].lat) / 2
    const centerLng = (offices[0].lng + offices[1].lng) / 2

    return (
        <MapContainer
            center={[centerLat, centerLng]}
            zoom={5.5}
            zoomControl={false}
            scrollWheelZoom={false}
            dragging={false}
            doubleClickZoom={false}
            attributionControl={false}
            style={{ width: "100%", height: "100%", background: "#061237" }}
        >
            {/* Dark premium tile layer — CartoDB Dark Matter */}
            <TileLayer
                url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                subdomains="abcd"
                maxZoom={19}
            />

            {/* Fly to active pin on change */}
            <FlyTo lat={active.lat} lng={active.lng} />

            {/* Office pins */}
            {offices.map((office) => {
                const isActive = office.id === activeOffice
                return (
                    <CircleMarker
                        key={office.id}
                        center={[office.lat, office.lng]}
                        radius={isActive ? 9 : 6}
                        pathOptions={{
                            fillColor: isActive ? "#3972E5" : "rgba(57,114,229,0.4)",
                            fillOpacity: 1,
                            color: isActive ? "rgba(57,114,229,0.4)" : "rgba(57,114,229,0.15)",
                            weight: isActive ? 8 : 3,
                        }}
                        eventHandlers={{
                            click: () => onSelect(office.id),
                        }}
                    >
                        <Tooltip
                            permanent
                            direction="top"
                            offset={[0, -14]}
                            className="office-map-tooltip"
                        >
                            {office.name}
                        </Tooltip>
                    </CircleMarker>
                )
            })}
        </MapContainer>
    )
}
