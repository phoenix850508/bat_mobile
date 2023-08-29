export default function SelectedCityReducer(city, action) {
  switch (action.type) {
    case "changeCity":
      return (city = action.city);
    default:
      return city;
  }
}
