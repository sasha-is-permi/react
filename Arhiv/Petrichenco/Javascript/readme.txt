

    1.2  Настройка рабочего пространства



https://code.visualstudio.com/ - устанавливаем Visual studio code

Расширение russian заводим- Microsoft russion languige pack-
русификация 

https://nodejs.org/en/download/ - устанавливаем node.js

В Microsoft visual studio code в расширениях:

Список необходимых плагинов:
All Autocomplete
Auto Close Tag
Auto Complete Tag
Auto Rename Tag
Beautify
Code Runner
Import Cost
JavaScript (ES6) code snippets
jshint
Live Server
Multiple clipboards for VSCode
Reactjs code snippets
Sass
Theme - Oceanic Next
vscode-icons
ESLint

Чтобы появилась иконка с live server:
создать файл html и открыть папку с ней

vscode-icons
Задать тему значков нажать

Плагин emmet стоит по умолчанию:
Для файла html:
! <tab> - создает шапку html

1.3

jshint- программа, проверяющая ошибки в файле js
npm install -g jshint
или

npm i -g jshint

.jshintrc  - файл настроек- чтобы jshint
понимал новый синтаксис

https://jshint.com/docs/options/

файл поместим в корневую рабочую папку с проектами-
будет распространяться на все проекты.
Можно поместить локальный файл настроек, который перебивает глобальный файл


Раздел 2.

4.

Подключаем javascript в файле html:
1) В отдельном файле- самый лучший вариант
2) В теге с помощью onclick=""
3) С помощью вставки <script> </script>

Запускаем файл html - на значок внизу live server- 
открывается google chrome

F12- посмотреть код

Запустить код в терминале:
выделяем кусочек кода, правая кнопка мыши-
Run code

В теге <script type="text/javascript"> </script>
type="text/javascript" - устаревшая конструкция, 
лучше её удалять.

Чтобы избежать ошибок:
<script></script> перед закурывающим тегом body
Это нужно чтобы script заработал после формирования верстки.
И чтобы не тормозить загрузку страницы.

5. Переменные и строгий режим.






