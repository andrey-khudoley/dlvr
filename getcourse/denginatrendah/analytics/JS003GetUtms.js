const AKhJS003Config = {
  UTMS_DEAL: true,
  UTMS_USER: true,
  DEBUG: false
};

// Селекторы и данные полей
const AKhJS003BlockSelector = '.analytics';
const AKhJS003DealFields = [
  ['utm_source', 1322912],
  ['utm_medium', 1322913],
  ['utm_campaign', 1322914],
  ['utm_content', 1322915],
  ['utm_term', 1322916],
  ['utm_group', 1828608],
  ['gcpc', 1104063]
];
const AKhJS003UserFields = [
  ['sb_161749_id', 944963],
  ['sb_304432_id', 10101726],
  ['sb_project', 10101727],
  ['tg_username', 964664],
  ['tg_id', 10087984],  
  ['utm_source', 298471],
  ['utm_medium', 775829],
  ['utm_campaign', 775830],
  ['utm_content', 1885126],
  ['utm_term', 1764582],
  ['utm_group', 1885127],
  ['sb_id', 944963]
];
const AKhJS003UrlField = ['loc', 805382];

/**
 * Выводит сообщения в консоль.
 * @param {string} message - Сообщение для вывода.
 * @param {boolean} isError - Является ли сообщение ошибкой.
 */
function AKhJS003Log(message, isError = false) {
  if (AKhJS003Config.DEBUG) {
    const logFunction = isError ? console.error : console.log;
    logFunction(`AKh - js003: ${message}`);
  }
}

/**
 * Получает значение параметра из URL.
 * @param {string} name - Название параметра.
 * @returns {string|null} - Значение параметра.
 */
function AKhJS003GetParamValue(name) {
  const searchParams = new URLSearchParams(window.location.search);
  return searchParams.get(name);
}

/**
 * Создаёт скрытый элемент ввода.
 * @param {number} fieldId - ID поля.
 * @param {string} value - Значение для элемента ввода.
 * @param {string} type - Тип поля (например, 'dealCustomFields').
 * @returns {Element} - Созданный элемент ввода.
 */
function AKhJS003CreateHiddenInput(fieldId, value, type) {
  const input = document.createElement('input');
  input.name = `formParams[${type}][${fieldId}]`;
  input.type = 'hidden';
  input.value = value;
  return input;
}

/**
 * Заполняет пользовательские поля данными.
 * @param {Array} data - Поля и соответствующие значения.
 * @param {Element} parentElement - Родительский элемент для вставки элементов ввода.
 * @param {string} type - Тип поля (например, 'dealCustomFields').
 */
function AKhJS003FillFields(data, parentElement, type) {
  data.forEach(([utm, fieldId]) => {
    const utmValue = AKhJS003GetParamValue(utm);
    AKhJS003Log(`Заполнение ${type} данных для поля с ID ${fieldId} используя UTM-параметр: ${utm} = ${utmValue}`);
    if (utmValue) {
      const inputElement = AKhJS003CreateHiddenInput(fieldId, utmValue, type);
      parentElement.appendChild(inputElement);
      AKhJS003Log(`Поле с ID ${fieldId} заполнено значением: ${utmValue}`);
    }
  });
}

/**
 * Заполняет данные URL-адреса страницы.
 * @param {Element} parentElement - Родительский элемент для вставки элемента ввода.
 */
function AKhJS003FillPageUrl(parentElement) {
  const isInsideIframe = window !== window.top;
  let rawUrl;

  if (isInsideIframe) {
    const locValue = AKhJS003GetParamValue('loc');
    if (locValue) {
      const decodedLoc = decodeURIComponent(locValue);
      const locUrl = new URL(decodedLoc);
      rawUrl = locUrl.origin + locUrl.pathname;
    }
  }

  if (!rawUrl) {
    const currentUrl = new URL(window.location.href);
    rawUrl = currentUrl.origin + currentUrl.pathname;
  }

  const inputElement = AKhJS003CreateHiddenInput(AKhJS003UrlField[1], rawUrl, 'dealCustomFields');
  parentElement.appendChild(inputElement);
  AKhJS003Log(`Поле с ID ${AKhJS003UrlField[1]} заполнено значением: ${rawUrl}`);
}

/**
 * Обрабатывает элементы для заполнения необходимыми данными.
 */
function AKhJS003ProcessElements() {
  AKhJS003Log("Скрипт запущен. Начало обработки элементов.");

  const forms = document.querySelectorAll('form');
  forms.forEach((form) => {
    const analyticsElement = form.closest(AKhJS003BlockSelector);
    if (!analyticsElement) {
      return;
    }

    const isDeal = !analyticsElement.classList.contains('no-deal');
    if (isDeal && AKhJS003Config.UTMS_DEAL) {
      AKhJS003FillPageUrl(form);
      AKhJS003FillFields(AKhJS003DealFields, form, 'dealCustomFields');
    }
    if (AKhJS003Config.UTMS_USER) {
      AKhJS003FillFields(AKhJS003UserFields, form, 'userCustomFields');
    }
  });

  AKhJS003Log("Обработка элементов завершена.");
}

function AKhJS003Initialize() {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', AKhJS003ProcessElements);
  } else {
    AKhJS003ProcessElements();
  }
}

AKhJS003Initialize();
