
const accessKey = 'AgIOi8YzpBhcLPxcfuRxOgz8rB0kBz01guzjO1JH2Kk'

const Authentication = `https://api.unsplash.com/photos/?client_id=${accessKey}`

// const input = document.querySelector('.header-input')

// let search = input.value
// console.log(search)
// // let search = `computer`
// let numImg = 30   // количество фото на странице
// let numPage = 2   // номер запрашиваемой страницы

// // const searchRequest = `https://api.unsplash.com/search/photos?query=${search}&per_page=${numImg}&orientation=landscape&client_id=${accessKey}`
// const searchRequest = `https://api.unsplash.com/search/photos?query=${search}&per_page=${numImg}&page=${numPage}&orientation=landscape&client_id=${accessKey}`
// // const searchRequest = `https://api.unsplash.com/search/photos?query=${search}&per_page=${numImg}&orientation=landscape&client_id=${accessKey}`


// Другие параметры запроса могут определять:

// количество данных на странице: per_page=30
// страницу, с которой получаем информацию : page=1
// необходимость учитывать все перечисленные ключевые слова: tag_mode=all
// размер изображения: extras=url_m - средний (medium)
// ориентация изображения: orientation=landscape - альбомная, то есть ширина больше высоты
// Доступные в API методы и параметры запросов описываются в документации API.

/*********************************************** */

// Location
// The API is available at https://api.unsplash.com/. Responses are sent as JSON

// Version
// All requests receive the v1 version of the API. We encourage you to specifically request this via the Accept-Version header:
// Accept-Version: v1

// Пагинация
// Запросы, возвращающие несколько элементов (например, список фотографий), 
// по умолчанию будут разбиты на страницы по 10 элементов, максимум до 30. 
// Можно указать необязательные параметры запроса page и per_page, 
// чтобы определить, какая страница и количество элементов на странице, 
// которые будут возвращены, соответственно.

// Если страница не указана, будет возвращена первая страница.

// Заголовки пагинации
// Дополнительная информация о нумерации страниц возвращается в заголовках ответа:

// Parameters
// param	Description
// username	The user’s username. Required.
// page	Page number to retrieve. (Optional; default: 1)
// per_page	Number of items per page. (Optional; default: 10)
// order_by	How to sort the photos. Optional. (Valid values: latest, oldest, popular, views, downloads; default: latest)
// stats	Show the stats for each user’s photo. (Optional; default: false)
// resolution	The frequency of the stats. (Optional; default: “days”)
// quantity	The amount of for each stat. (Optional; default: 30)
// orientation	Filter by photo orientation. Optional. (Valid values: landscape, portrait, squarish)

/************************************************ */

// пример
// const Authenticaxxxx = `https://api.unsplash.com/search/photos?query=spring&per_page=30&orientation=landscape&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo`

// Public Authentication
// Most actions can be performed without requiring authentication from a specific user. For example, searching, fetching, or downloading a photo does not require a user to log in.

// To authenticate requests in this way, pass your application’s access key via the HTTP Authorization header:

// Authorization: Client-ID YOUR_ACCESS_KEY
// You can also pass this value using a client_id query parameter:

// https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY



/****************************************** */

const arrInfo = [
  accessKey,
  Authentication
];

export default arrInfo




