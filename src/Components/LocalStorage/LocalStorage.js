import { toast } from "react-toastify";

const getFavouritiesList = () => {
  const favourities = localStorage.getItem("Favourities");
  if (favourities) {
    return JSON.parse(favourities);
  } else {
    return [];
  }
};

const getTotal = () => {
  return getFavouritiesList().length;
};

const stringiFyingArray = (desiredArray) => {
  const stringified = JSON.stringify(desiredArray);
  localStorage.setItem("Favourities", stringified);
};

const setEstateIdToLocalstorage = (id) => {
  const desiredArray = getFavouritiesList();
  if (desiredArray) {
    const checked = desiredArray.find((idx) => idx == id);
    if (!checked) {
      desiredArray.push(id);
      stringiFyingArray(desiredArray);
      toast.success("Estate added in the Favourities list");
      return desiredArray.length;
    } else {
      toast.warn("Already added in the Favourities list");
      return desiredArray.length;
    }
  }
};

const removeEstate = (idx) => {
  const FavouritiesList = getFavouritiesList();
  const filteredList = FavouritiesList.filter((id) => id != idx);
  stringiFyingArray(filteredList);
  toast.success("Estate Remove Successfully");
  const len = getTotal();
  return { len, getFavouritiesList };
};

export {
  getFavouritiesList,
  setEstateIdToLocalstorage,
  getTotal,
  removeEstate,
};
