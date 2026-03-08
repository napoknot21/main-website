"use client"

import { useEffect, useRef } from "react"
import { MapContainer, TileLayer, CircleMarker, Tooltip, useMap } from "react-leaflet"
import "leaflet/dist/leaflet.css"

type OfficeId = "luxembourg" | "monaco" | "geneva"

interface OfficePin {
    id: OfficeId
    nameKey: string
    lat: number
    lng: number
}

interface Props {
    activeOffice: OfficeId
    onSelect: (id: OfficeId) => void
    offices: OfficePin[]
}

// Fly to the active office smoothly — with mounted guard to avoid errors
function FlyTo({ lat, lng }: { lat: number; lng: number }) {
    const map = useMap()
    const mounted = useRef(true)
    useEffect(() => {
        mounted.current = true
        return () => { mounted.current = false }
    }, [])
    useEffect(() => {
        if (mounted.current) {
            map.flyTo([lat, lng], 9, { duration: 1.2 })
        }
    }, [lat, lng, map])
    return null
}

import { useLanguage } from "@/lib/language-context"

export default function OfficeMapInner({ activeOffice, onSelect, offices }: Props) {
    const { t } = useLanguage()
    const active = offices.find((o) => o.id === activeOffice)!

    // Centre view so all pins are visible
    const lats = offices.map((o) => o.lat)
    const lngs = offices.map((o) => o.lng)
    const centerLat = (Math.min(...lats) + Math.max(...lats)) / 2
    const centerLng = (Math.min(...lngs) + Math.max(...lngs)) / 2

    return (
        <MapContainer
            center={[centerLat, centerLng]}
            zoom={5}
            zoomControl={false}
            scrollWheelZoom={false}
            touchZoom={false}
            boxZoom={false}
            keyboard={false}
            dragging={false}
            doubleClickZoom={false}
            attributionControl={false}
            style={{ width: "100%", height: "100%", background: "#f8f9fb" }}
        >
            {/* Light CartoDB Positron tiles — clean, minimal, corporate */}
            <TileLayer
                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
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
                        radius={isActive ? 10 : 7}
                        pathOptions={{
                            fillColor: isActive ? "#3972E5" : "#9eb8f0",
                            fillOpacity: 1,
                            color: isActive ? "rgba(57,114,229,0.3)" : "rgba(57,114,229,0.15)",
                            weight: isActive ? 10 : 4,
                        }}
                        eventHandlers={{
                            click: () => onSelect(office.id),
                        }}
                    >
                        <Tooltip
                            permanent
                            direction="top"
                            offset={[0, -16]}
                            className="office-map-tooltip"
                        >
                            {t(office.nameKey)}
                        </Tooltip>
                    </CircleMarker>
                )
            })}
        </MapContainer>
    )
}
