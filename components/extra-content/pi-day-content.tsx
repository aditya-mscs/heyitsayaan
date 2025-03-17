import { piValue } from "@/lib/utils/pi-value"

export function PiDayContent() {
  return (
    <div className="mt-4 p-4 bg-muted/30 rounded-lg overflow-x-auto">
      <h4 className="font-semibold mb-2">Value of Pi to 250 decimal places:</h4>
      <p className="text-sm font-mono break-all">{piValue}</p>
    </div>
  )
}

