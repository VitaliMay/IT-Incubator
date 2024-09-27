
const accessKey = 'AgIOi8YzpBhcLPxcfuRxOgz8rB0kBz01guzjO1JH2Kk'
// const Authentication = `https://api.unsplash.com/photos/?client_id=${accessKey}`

const select = document.querySelector('.header-select');

let startFoto = false;
let numPage = 1
let perPage = 24

let searchDefolt = 'strange'
let startUrl = `https://api.unsplash.com/search/photos?query=${searchDefolt}&per_page=${perPage}&page=${numPage}&orientation=landscape&client_id=${accessKey}`

// для проверки наличия фото
let flag = true

const input = document.querySelector('.header-input')
const form = document.querySelector('.header-form')
const main = document.querySelector('.main')


if (!startFoto) {  // первый раз)
  startFoto = true;

  start();
  getFoto(startUrl)

}
else {
  console.log(`startFoto = ${startFoto}`)

}


/*********************************************************************************************** */

form.addEventListener('submit', (event) => {
  event.preventDefault(); // чтобы не перегружало страницу
  let search = input.value
  let lang = select.value

  let searchRequest = `https://api.unsplash.com/search/photos?query=${search}&per_page=${perPage}&page=${numPage}&lang=${lang}&client_id=${accessKey}`
  // let searchRequest = `https://api.unsplash.com/search/photos?query=${search}&per_page=${perPage}&page=${numPage}&lang=${lang}&orientation=landscape&client_id=${accessKey}`
  // let searchRequest = `https://api.unsplash.com/search/photos?query=${search}&per_page=${perPage}&page=${numPage}&orientation=landscape&client_id=${accessKey}`
  getFoto(searchRequest)
  // input.value = ''  // не по ТЗ
  inputText.focus();
})


/*********************************************************************************************** */

const inputText = document.querySelector('.header-input__text');
const clearButton = document.querySelector('.header-input__clear');

// Отображение крестика, когда в поле ввода есть текст
inputText.addEventListener('input', () => {
  clearButton.style.visibility = inputText.value ? 'visible' : 'hidden';
  clearButton.style.opacity = inputText.value ? '1' : '0';
  inputText.focus();
});

// Очистка поля ввода при нажатии на крестик
clearButton.addEventListener('click', () => {
  inputText.value = '';
  clearButton.style.visibility = 'hidden';
  clearButton.style.opacity = '0'
  inputText.focus();
});

// При вводе текста в поле header-input__text, появится крестик справа от него. 
// Если в поле есть текст, крестик будет отображаться. При клике на крестик текст будет удален.

/*********************************************************************************************** */
/*********************************************************************************************** */

function start(size=perPage) {
  main.innerHTML = '';
  for (let index = 0; index < size; index++) {
    main.innerHTML +=
  `
<a class="cover" target="_blank" href="#">
  <div class="cover-inner cover-inner--ratio">
    <div class="cover-content">

    </div>
  </div>
</a>
`
  }
}


// async function getFoto(url, arrCoverContent) {
async function getFoto(url) {
  try {
    const response = await fetch(url, {
      headers: {
        'Accept-Version': 'v1'
      }
    });
    const data = await response.json();
    // console.log(data)

    if (data.results.length < perPage) {
      start(data.results.length)

      flag = false
    }
    else if (!flag) {
      flag = true
      start()
    }


    let arrCoverContent = Array.from(document.querySelectorAll('.cover-content'))
    let arrCover = Array.from(document.querySelectorAll('.cover'))

    for (let i = 0; i < arrCoverContent.length; i++) {
      // let fotoUrl = data.results[i].urls.full;
      // let fotoUrl = data.results[i].urls.regular;
      let fotoUrl = data.results[i].urls.small;   // нет смысла загружать фоновые картинки большого объема
      arrCoverContent[i].style.backgroundImage =`url(${fotoUrl})`

      let fotoUrlFull = data.results[i].urls.full;   // а вот для загрузки картинки по ссылке надо полный размер
      arrCover[i].href = `${fotoUrlFull}`
    }

  }
  catch (error) {
    console.log(error);
  }

}

/*************************************************************************************************************** */
/*************************************************************************************************************** */

const score = `
Привет! Вроде как всё по ТЗ.
Функционал немного расширен, по сравнению с демкой:
  * Крестик появляется, когда есть текст, и исчезает когда текста нет
  * Добавлен выбор основного языка (без этого поиск на русском не всегда работает корректно)
  * При клике на картинку в новой вкладке открывается полноразмерное фото, которое можно сохранить
  (думал добавить onclick="return false; чтобы не уходить со страницы поиска, 
  но решил, что без него более понятно что происходит ;)
Ну, а дизайн - вот такой из меня дизайнер((
Кстати, по поведению title - так и было задумано. А вот толком для такого поведения цвета подобрать...
Но мы же не дизайн оцениваем ;)
В общем и целом, думаю, максимальный балл я заработал ))

Score = 60

`
console.log(score)
