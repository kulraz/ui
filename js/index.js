document.addEventListener("DOMContentLoaded", function() {
  const selector = document.querySelector(".choices")

  const choices = new Choices(selector, {
    searchEnabled: false,
    placeholder: false,
    itemSelectText: '',
    classNames: {
      containerOuter: 'choices header_choices',
     },
  });

});


//map

    // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    function init() {
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [48.872185, 2.354224],
            zoom: 11
        });

        myPlacemark = new ymaps.Placemark([48.872185, 2.354224], {
          // Свойства.
          hintContent: 'Собственный значок метки'
        },
       { iconLayout: 'default#image',
          // Опции.
          // Своё изображение иконки метки.
          iconImageHref: 'img/formap.svg',
          // Размеры метки.
          iconImageSize: [26, 40],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-3, -40]
      });
      myMap.geoObjects.add(myPlacemark)
      myMap.controls.remove('geolocationControl'); // удаляем геолокацию
      myMap.controls.remove('searchControl'); // удаляем поиск
      myMap.controls.remove('trafficControl'); // удаляем контроль трафика
      myMap.controls.remove('typeSelector'); // удаляем тип
      myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
      myMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
      myMap.controls.remove('rulerControl'); // удаляем контрол правил
      myMap.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
      }

//scroll

      new SimpleBar(document.getElementById('scroll'), {
        scrollbarMaxSize: 70,
        autoHide: false,
      });

//mask

        var selector = document.getElementById("tel");

        var im = new Inputmask("+7-999-999-99-99");
        im.mask(selector);

//validation

new window.JustValidate('.js-form', {
  colorWrong: '#FF5C00',
  rules: {
    name: {
      required: true
    },
    tel: {
      required: true,
      function: (name, value) => {
        const ph = tel.inputmask.unmaskedvalue();
        return Number(ph) && ph.length ===  10;
    }},
    email: {
      required: true,
      email: true
    },
  },
    messages: {
      name: {
        required: 'Вы не ввели имя'
      },
      tel: {
        required: 'Вы не ввели телефон',
        function: 'Не достаточное количество символов'
      },
      email: {
        required: 'Вы не ввели e-mail'
      }
  },
});

//tooltip

tippy('#myButton', {
  content: 'Глава 2, страница 176',
  theme: 'gray',
});


