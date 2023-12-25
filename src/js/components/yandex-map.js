// yandex-map
const ymaps = window.ymaps;

const init = () => {
  const map = new ymaps.Map('map', {
    center: [59.94349356415401, 30.42990049999999],
    zoom: 16,
    controls: []
  });

  document.querySelector('.ymaps-2-1-79-map-copyrights-promo').style.display = 'none';
  document.querySelector('.ymaps-2-1-79-copyright__content').style.display = 'none';

  const placemark = new ymaps.Placemark([59.94349356415401, 30.42990049999999], {}, {
    iconLayout: 'default#image',
    iconImageHref: './images/svg/marker.svg',
    iconImageSize: [112, 138],
    iconImageOffset: [-56, -138],
  });

  const mediaQuery = window.matchMedia('(max-width: 758px)')

  function handleTabletChange(e) {
    if (e) {
      placemark.options.set('iconImageSize', [74, 91]);
      placemark.options.set('iconImageOffset', [-37, -91]);
    } else {
      placemark.options.set('iconImageSize', [112, 138]);
      placemark.options.set('iconImageOffset', [-56, -138]);
    }
  }

  handleTabletChange(mediaQuery.matches);

  mediaQuery.addEventListener('change', function (e) {
    handleTabletChange(e.matches);
  })

  map.geoObjects.add(placemark);
}

if (ymaps) {
  ymaps.ready(init);
}
