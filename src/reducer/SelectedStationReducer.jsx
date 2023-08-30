export default function SelectedStationReducer(station, action) {
  switch (action.type) {
    case "select_station": {
      return (station = action.station);
    }
    default: {
      return station;
    }
  }
}
