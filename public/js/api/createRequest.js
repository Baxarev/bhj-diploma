/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.open(options.method, options.url)

  if (options.method === 'GET') {
    xhr.send();
  } else {
    const formData = new FormData
    for (key in options.data) {
      formData.append(key, options.data[key])
    }
    xhr.send(formData);
  }

  xhr.addEventListener('load', () => options.callback(null, xhr.response))
  xhr.addEventListener('error', (e) => options.callback(e.type, null))
};
