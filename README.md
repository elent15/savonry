# Многостраничный сайт [Savonry](https://elent15.github.io/savonry)

### Сайт магазина косметики
 
* Html, css, js
* Методология БЭМ, препроцессор Sass в синтаксисе Scss
* Валидная, адаптивная (до 320px), кроссбраузерная вёрстка, вёрстка Pixel Perfect
* Сайт доступен с клавиатуры и для скринридера
* SVG-спрайт
* Слайдеры (плагин swiper), аккордеоны (js)
* Двухуровневое меню
* Модальные окна: регистрация, вход в личный кабинет, восстановление пароля, написать отзыв
* Стилизованы состояния hover и focus для ссылок, кнопок и полей для ввода данных
  
#### Структура сайта

* Главная страница [index.html](https://elent15.github.io/savonry): слайдеры
* Страницы блога [blog.html](https://elent15.github.io/savonry/blog.html) и отдельной статьи [article.html](https://elent15.github.io/savonry/article.html), страница новостей [news.html](https://elent15.github.io/savonry/news.html)
* Страница "О нас" [about-us.html](https://elent15.github.io/savonry/about-us.html): адаптивное видео 
* Страница "Контакты" [contacts.html](https://elent15.github.io/savonry/contacts.html): яндекс-карта 
* Страница "Доставка и оплата" [delivery.html](https://elent15.github.io/savonry/delivery.html): аккордеон
* Страницы "Оптовикам" [wholesale.html](https://elent15.github.io/savonry/wholesale.html), "Акции" [promotion.html](https://elent15.github.io/savonry/promotion.html), "Новинки" [new-offers.html](https://elent15.github.io/savonry/new-offers.html)
* Страницы личного кабинета:
  * профиль [account-profile.html](https://elent15.github.io/savonry/account-profile.html)
  * смена пароля [account-password.html](https://elent15.github.io/savonry/account-password.html)
  * история заказов [account-history.html](https://elent15.github.io/savonry/account-history.html): аккордеон
  * e-mail рассылка [account-mailing.html](https://elent15.github.io/savonry/account-mailing.html): кастомные радио-кнопки
* Страница корзины [cart.html](https://elent15.github.io/savonry/cart.html) и блок оформления заказа: кастомные радио-кнопки в блоке оформления заказа
* Страница каталога "Ванна и душ" [catalog.html](https://elent15.github.io/savonry/catalog.html):
  * при ширине экрана меньше 758px в блок ссылок на подкаталоги добавлен слайдер
* Страница подкаталога "Бурлящие шарики для ванн" [subcatalog.html](https://elent15.github.io/savonry/subcatalog.html):
  * при ширине экрана меньше 758px в блок ссылок на подкаталоги добавлен слайдер
* Страница товара "Набор BATH BOMB (Набор бурлящих шариков ВИШНЯ-ЧЕРНАЯ СМОРОДИНА-ВИНОГРАД), 3шт." [card.html](https://elent15.github.io/savonry/card.html): 
  * аккордеон
  * слайдер с горизонтальным превью в блоке описания товара
  * в блоке "Отзывы" слайдер и модальное окно "Написать отзыв"

#### Gulp-сборка (Gulp 4)

* команда gulp - сборка проекта в режиме разработки (папка dev):
  * html-файлы из папки src/partials объединены в html-файлы страниц;
  * scss-файлы из папки src/scss объединены в файл main.css;
  * css-файлы из папки src/scss/vendor (сторонние css-файлы) объединены в файл vendor.css;
  * js-файлы из папки src/js/components объединены в файл main.js;
  * изображения в форматах png и jpg из папки src/images конвертированы в формат webp;
  * изображения в формате svg из папки src/images/svg/sprite минифицированы и объединены в svg-спрайт (sprite.svg);
  * шрифты из папки src/fonts конвертированы в форматы woff и woff2
* команда gulp build - итоговая сборка проекта (папка docs):
  * в файле стилей main.css добавлены вендорные префиксы, сгруппированы медиа-запросы;
  * к файлу main.js применён транспайлер babel;
  * минимизированы html-файлы, файлы main.css, vendor.css, main.js;
  * сжаты файлы изображений в форматах jpg, png, svg
