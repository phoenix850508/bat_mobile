export default function CheckedDistrictReducer(district, action) {
  switch (action.type) {
    case "checked_district": {
      return [...district, action.districts];
    }
    case "unchecked_district": {
      const filteredDistrict = district.filter(
        (distr) => distr !== action.districts
      );
      return filteredDistrict;
    }
    case "checked_all": {
      return action.districts;
    }
    case "unchecked_all": {
      return [];
    }
    default: {
      return district;
    }
  }
}
