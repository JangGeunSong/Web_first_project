const COORDS = 'coords';

function saveCoords(coordsObj) {
  localStorage.getItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude
  };
  saveCoords(coordsObj);
}

function handleGeoError() {

}

function askForCoord() {
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError)
}

function loadCoords() {
  const loadedCords = localStorage.getItem(COORDS);
  if(loadedCords === null){
    askForCoord();
  }
  else {

  }
}

function init() {

}

init();
