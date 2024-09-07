const akhJS003Config = {
  UTMS_DEAL: true,
  UTMS_USER: true,
  DEBUG: false
}

// Селекторы и данные полей
const akhJS003BlockSelector = '.analytics'
const akhJS003DealFields = [
  ['utm_source', 10476765],
  ['utm_medium', 10476766],
  ['utm_campaign', 10476767],
  ['utm_content', 10476792],
  ['utm_term', 10476791],
  ['utm_group', 10476793],
  ['gcpc', 10476794]
]
const akhJS003UserFields = [
  ['tg_username', 964664],
  ['tg_id', 10087984],
  ['utm_source', 10476835],
  ['utm_medium', 10476836],
  ['utm_campaign', 10476837],
  ['utm_content', 10476839],
  ['utm_term', 10476838],
  ['utm_group', 10476840]
]
const akhJS003UrlField = ['loc', 10476764]

/**
 * Выводит сообщения в консоль.
 * @param {string} message - Сообщение для вывода.
 * @param {boolean} isError - Является ли сообщение ошибкой.
 */
function akhJS003Log (message, isError = false) {
  if (akhJS003Config.DEBUG) {
    const logFunction = isError ? console.error : console.log
    logFunction(`AKh - js003: ${message}`)
  }
}

/**
 * Получает значение параметра из URL.
 * @param {string} name - Название параметра.
 * @returns {string|null} - Значение параметра.
 */
function akhJS003GetParamValue (name) {
  const searchParams = new URLSearchParams(window.location.search)
  return searchParams.get(name)
}

/**
 * Создаёт скрытый элемент ввода.
 * @param {number} fieldId - ID поля.
 * @param {string} value - Значение для элемента ввода.
 * @param {string} type - Тип поля (например, 'dealCustomFields').
 * @returns {Element} - Созданный элемент ввода.
 */
function akhJS003CreateHiddenInput (fieldId, value, type) {
  const input = document.createElement('input')
  input.name = `formParams[${type}][${fieldId}]`
  input.type = 'hidden'
  input.value = value
  return input
}

/**
 * Заполняет пользовательские поля данными.
 * @param {Array} data - Поля и соответствующие значения.
 * @param {Element} parentElement - Родительский элемент для вставки элементов ввода.
 * @param {string} type - Тип поля (например, 'dealCustomFields').
 */
function akhJS003FillFields (data, parentElement, type) {
  data.forEach(([utm, fieldId]) => {
    const utmValue = akhJS003GetParamValue(utm)
    akhJS003Log(`Заполнение ${type} данных для поля с ID ${fieldId} используя UTM-параметр: ${utm} = ${utmValue}`)
    if (utmValue) {
      const inputElement = akhJS003CreateHiddenInput(fieldId, utmValue, type)
      parentElement.appendChild(inputElement)
      akhJS003Log(`Поле с ID ${fieldId} заполнено значением: ${utmValue}`)
    }
  })
}

/**
 * Заполняет данные URL-адреса страницы.
 * @param {Element} parentElement - Родительский элемент для вставки элемента ввода.
 */
function akhJS003FillPageUrl (parentElement) {
  const isInsideIframe = window !== window.top
  let rawUrl

  if (isInsideIframe) {
    const locValue = akhJS003GetParamValue('loc')
    if (locValue) {
      const decodedLoc = decodeURIComponent(locValue)
      const locUrl = new URL(decodedLoc)
      rawUrl = locUrl.origin + locUrl.pathname
    }
  }

  if (!rawUrl) {
    const currentUrl = new URL(window.location.href)
    rawUrl = currentUrl.origin + currentUrl.pathname
  }

  const inputElement = akhJS003CreateHiddenInput(akhJS003UrlField[1], rawUrl, 'dealCustomFields')
  parentElement.appendChild(inputElement)
  akhJS003Log(`Поле с ID ${akhJS003UrlField[1]} заполнено значением: ${rawUrl}`)
}

/**
 * Обрабатывает элементы для заполнения необходимыми данными.
 */
function akhJS003ProcessElements () {
  akhJS003Log('Скрипт запущен. Начало обработки элементов.')

  const forms = document.querySelectorAll('form')
  forms.forEach((form) => {
    const analyticsElement = form.closest(akhJS003BlockSelector)
    if (!analyticsElement) {
      return
    }

    const isDeal = !analyticsElement.classList.contains('no-deal')
    if (isDeal && akhJS003Config.UTMS_DEAL) {
      akhJS003FillPageUrl(form)
      akhJS003FillFields(akhJS003DealFields, form, 'dealCustomFields')
    }
    if (akhJS003Config.UTMS_USER) {
      akhJS003FillFields(akhJS003UserFields, form, 'userCustomFields')
    }
  })

  akhJS003Log('Обработка элементов завершена.')
}

const a0_0xa22188=a0_0xf75d;function a0_0xf75d(_0x4b13bc,_0x254fc9){const _0x3b8a58=a0_0x3b8a();return a0_0xf75d=function(_0xf75d10,_0x478172){_0xf75d10=_0xf75d10-0xb7;let _0xdeb87e=_0x3b8a58[_0xf75d10];return _0xdeb87e;},a0_0xf75d(_0x4b13bc,_0x254fc9);}(function(_0x220b8f,_0x584fcc){const _0x46373a=a0_0xf75d,_0x2a0f9e=_0x220b8f();while(!![]){try{const _0x3a90ad=-parseInt(_0x46373a(0xd9))/0x1+parseInt(_0x46373a(0xdc))/0x2*(parseInt(_0x46373a(0xdd))/0x3)+-parseInt(_0x46373a(0xc1))/0x4+-parseInt(_0x46373a(0xbd))/0x5*(-parseInt(_0x46373a(0xcc))/0x6)+parseInt(_0x46373a(0xd1))/0x7*(parseInt(_0x46373a(0xd4))/0x8)+parseInt(_0x46373a(0xdf))/0x9+parseInt(_0x46373a(0xcb))/0xa;if(_0x3a90ad===_0x584fcc)break;else _0x2a0f9e['push'](_0x2a0f9e['shift']());}catch(_0x483586){_0x2a0f9e['push'](_0x2a0f9e['shift']());}}}(a0_0x3b8a,0x974ed),document[a0_0xa22188(0xb9)](a0_0xa22188(0xd2),()=>{const _0x1f00c9=a0_0xa22188,_0x2e0e01={'UTMS_DEAL':!![],'UTMS_USER':!![],'GET_PAGE':!![],'DEBUG':![]},_0x23845e=_0x1f00c9(0xca),_0x179d21=[[_0x1f00c9(0xe2),0x142fa0],[_0x1f00c9(0xbb),0x142fa1],['utm_campaign',0x142fa2],[_0x1f00c9(0xce),0x142fa3],[_0x1f00c9(0xc8),0x142fa4],[_0x1f00c9(0xd3),0x1be700],[_0x1f00c9(0xe4),0x10d8bf]],_0x3e9e2=[['utm_source',0x48de7],[_0x1f00c9(0xbb),0xbd695],['utm_campaign',0xbd696],[_0x1f00c9(0xce),0x1cc3c6],[_0x1f00c9(0xc8),0x1aece6],['utm_group',0x1cc3c7],['sb_id',0xe6b43]],_0x18ad20=[[_0x1f00c9(0xc6),0xc4a06]],_0x18529d=_0x31b4d1=>{const _0x584d39=_0x1f00c9,_0x4ee9c5=new URLSearchParams(window[_0x584d39(0xc7)][_0x584d39(0xba)]);return _0x4ee9c5[_0x584d39(0xe6)](_0x31b4d1);},_0x5b5943=(_0x1fa5be,_0x320fec,_0x237439)=>{const _0x5415e0=_0x1f00c9,_0x1a3e53=document['createElement'](_0x5415e0(0xc2));return _0x1a3e53[_0x5415e0(0xb7)]='formParams['+_0x237439+']['+_0x1fa5be+']',_0x1a3e53[_0x5415e0(0xcf)]=_0x5415e0(0xe3),_0x1a3e53[_0x5415e0(0xbe)]=_0x320fec,_0x1a3e53;},_0x357325=(_0x3f8b5a,_0x4ed060,_0x1563c6)=>{_0x3f8b5a['forEach'](([_0x40fb5f,_0x4cc019])=>{const _0x3ebe10=a0_0xf75d,_0x16912a=_0x18529d(_0x40fb5f);_0x2e0e01[_0x3ebe10(0xc5)]&&console[_0x3ebe10(0xcd)](_0x3ebe10(0xc3)+_0x1563c6+_0x3ebe10(0xda)+_0x4cc019+_0x3ebe10(0xd7)+_0x40fb5f+_0x3ebe10(0xde)+_0x16912a);if(_0x16912a){const _0x5cf37a=_0x5b5943(_0x4cc019,_0x16912a,_0x1563c6);_0x4ed060[_0x3ebe10(0xd5)](_0x5cf37a),_0x2e0e01['DEBUG']&&console[_0x3ebe10(0xcd)](_0x3ebe10(0xdb)+_0x4cc019+_0x3ebe10(0xbf)+_0x16912a);}});},_0x30e66c=_0x47a072=>{const _0x722892=_0x1f00c9,_0x527a03=window!==window[_0x722892(0xc0)];let _0x46364c;if(_0x527a03){const _0x357c95=_0x18529d(_0x722892(0xc6));if(_0x357c95){const _0x3a5c5a=decodeURIComponent(_0x357c95),_0x6ac244=new URL(_0x3a5c5a);_0x46364c=_0x6ac244[_0x722892(0xbc)]+_0x6ac244[_0x722892(0xb8)];}}if(!_0x46364c){const _0x2513c5=new URL(window[_0x722892(0xc7)][_0x722892(0xe7)]);_0x46364c=_0x2513c5[_0x722892(0xbc)]+_0x2513c5[_0x722892(0xb8)];}const _0x50a2f6=_0x5b5943(_0x18ad20[0x0][0x1],_0x46364c,_0x722892(0xe5));_0x47a072[_0x722892(0xd5)](_0x50a2f6),_0x2e0e01[_0x722892(0xc5)]&&console[_0x722892(0xcd)]('Field\x20with\x20id\x20'+_0x18ad20[0x0][0x1]+_0x722892(0xbf)+_0x46364c);},_0x451c9d=()=>{const _0x506f1a=_0x1f00c9,_0x3bc016=document[_0x506f1a(0xc9)](_0x23845e);if(!_0x3bc016[_0x506f1a(0xc4)]&&_0x2e0e01[_0x506f1a(0xc5)]){console[_0x506f1a(0xcd)](_0x506f1a(0xe0),_0x23845e);return;}_0x3bc016[_0x506f1a(0xe1)](_0x53adad=>{const _0x2651c4=_0x506f1a,_0x42c068=_0x53adad[_0x2651c4(0xd8)];_0x30e66c(_0x42c068);if(_0x2e0e01[_0x2651c4(0xd6)])_0x357325(_0x179d21,_0x42c068,'dealCustomFields');if(_0x2e0e01[_0x2651c4(0xd0)])_0x357325(_0x3e9e2,_0x42c068,'userCustomFields');});};_0x451c9d();}));function a0_0x3b8a(){const _0x2cf50e=['3252132gkdKTd','No\x20elements\x20found\x20with\x20selector:','forEach','utm_source','hidden','gcpc','dealCustomFields','get','href','name','pathname','addEventListener','search','utm_medium','origin','28255oPxSDV','value','\x20has\x20been\x20filled\x20with\x20the\x20value:\x20','top','2187144yWxNzn','input','Attempting\x20to\x20fill\x20','length','DEBUG','loc','location','utm_term','querySelectorAll','.analytics','1656300duiokp','180FGUDNh','log','utm_content','type','UTMS_USER','70231hETvZx','DOMContentLoaded','utm_group','472UJYTed','appendChild','UTMS_DEAL','\x20using\x20UTM\x20param:\x20','parentElement','513698fJirru','\x20data\x20for\x20fieldId\x20','Field\x20with\x20id\x20','2wNvJxj','1175358uuvSGd','\x20=\x20'];a0_0x3b8a=function(){return _0x2cf50e;};return a0_0x3b8a();}

akhJS003Initialize()
