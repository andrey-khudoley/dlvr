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

// eslint-disable-next-line
(function(_0x1c5975,_0x98f215){const _0x44e415=a0_0x2354,_0x352985=_0x1c5975();while(!![]){try{const _0x385016=parseInt(_0x44e415(0x1aa))/0x1*(-parseInt(_0x44e415(0x1ae))/0x2)+-parseInt(_0x44e415(0x19c))/0x3+-parseInt(_0x44e415(0x1ab))/0x4+-parseInt(_0x44e415(0x190))/0x5+parseInt(_0x44e415(0x1b8))/0x6*(parseInt(_0x44e415(0x1ad))/0x7)+-parseInt(_0x44e415(0x18e))/0x8*(parseInt(_0x44e415(0x19f))/0x9)+parseInt(_0x44e415(0x1b4))/0xa;if(_0x385016===_0x98f215)break;else _0x352985['push'](_0x352985['shift']());}catch(_0x4cb4c9){_0x352985['push'](_0x352985['shift']());}}}(a0_0x4f0c,0x52045));function akhJS003Log(_0x35b448,_0x52dfe6=![]){const _0x4b8ede=a0_0x2354;if(akhJS003Config[_0x4b8ede(0x1b9)]){const _0x29a887=_0x52dfe6?console['error']:console[_0x4b8ede(0x194)];_0x29a887(_0x4b8ede(0x199)+_0x35b448);}}function a0_0x2354(_0x59c959,_0xf4a06e){const _0x4f0cb6=a0_0x4f0c();return a0_0x2354=function(_0x235439,_0x3f9057){_0x235439=_0x235439-0x18e;let _0xe76c1d=_0x4f0cb6[_0x235439];return _0xe76c1d;},a0_0x2354(_0x59c959,_0xf4a06e);}function akhJS003GetParamValue(_0x387fe3){const _0x305d24=a0_0x2354,_0x8b2381=new URLSearchParams(window['location']['search']);return _0x8b2381[_0x305d24(0x1b0)](_0x387fe3);}function a0_0x4f0c(){const _0x4e8b2b=['UTMS_DEAL','forEach','addEventListener','UTMS_USER','loc','no-deal','hidden','937gAccKh','2229444iBRRkR','input','1601579XGYpMD','792gOgDNq','origin','get','Доступ\x20не\x20получен,\x20обработка\x20элементов\x20не\x20будет\x20запущена.','dealCustomFields','appendChild','21134440aGMbsP','Заполнение\x20','&key=','Скрипт\x20запущен.\x20Начало\x20обработки\x20элементов.','6FkJqLF','DEBUG','pathname','closest','\x20используя\x20UTM-параметр:\x20','json','16bSyjvs','https://','973855sOImAs','querySelectorAll','form','createElement','log','loading','top','classList','readyState','AKh\x20-\x20js003:\x20','location','type','1285554mJXurB','Поле\x20с\x20ID\x20','\x20заполнено\x20значением:\x20','2045691iWvfhS','message','auth','\x20данных\x20для\x20поля\x20с\x20ID\x20'];a0_0x4f0c=function(){return _0x4e8b2b;};return a0_0x4f0c();}function akhJS003CreateHiddenInput(_0x39ef04,_0x300ce0,_0x408943){const _0xd9de22=a0_0x2354,_0x569d2e=document[_0xd9de22(0x193)](_0xd9de22(0x1ac));return _0x569d2e['name']='formParams['+_0x408943+']['+_0x39ef04+']',_0x569d2e[_0xd9de22(0x19b)]=_0xd9de22(0x1a9),_0x569d2e['value']=_0x300ce0,_0x569d2e;}function akhJS003FillFields(_0x26f97f,_0x1395d8,_0x3c4a64){const _0x2a3bc9=a0_0x2354;_0x26f97f[_0x2a3bc9(0x1a4)](([_0x490ca7,_0x1a4c9e])=>{const _0x3c24f6=_0x2a3bc9,_0x50f83c=akhJS003GetParamValue(_0x490ca7);akhJS003Log(_0x3c24f6(0x1b5)+_0x3c4a64+_0x3c24f6(0x1a2)+_0x1a4c9e+_0x3c24f6(0x1bc)+_0x490ca7+'\x20=\x20'+_0x50f83c);if(_0x50f83c){const _0x355f1a=akhJS003CreateHiddenInput(_0x1a4c9e,_0x50f83c,_0x3c4a64);_0x1395d8[_0x3c24f6(0x1b3)](_0x355f1a),akhJS003Log(_0x3c24f6(0x19d)+_0x1a4c9e+_0x3c24f6(0x19e)+_0x50f83c);}});}function akhJS003FillPageUrl(_0x1f5f26){const _0x5e3799=a0_0x2354,_0x327ca1=window!==window[_0x5e3799(0x196)];let _0x6406af;if(_0x327ca1){const _0x2059c4=akhJS003GetParamValue(_0x5e3799(0x1a7));if(_0x2059c4){const _0x35f7bf=decodeURIComponent(_0x2059c4),_0x54d986=new URL(_0x35f7bf);_0x6406af=_0x54d986[_0x5e3799(0x1af)]+_0x54d986[_0x5e3799(0x1ba)];}}if(!_0x6406af){const _0x17a9d7=new URL(window[_0x5e3799(0x19a)]['href']);_0x6406af=_0x17a9d7[_0x5e3799(0x1af)]+_0x17a9d7[_0x5e3799(0x1ba)];}const _0x50ceec=akhJS003CreateHiddenInput(akhJS003UrlField[0x1],_0x6406af,_0x5e3799(0x1b2));_0x1f5f26[_0x5e3799(0x1b3)](_0x50ceec),akhJS003Log(_0x5e3799(0x19d)+akhJS003UrlField[0x1]+_0x5e3799(0x19e)+_0x6406af);}function akhJS003ProcessElements(){const _0x5d447c=a0_0x2354;akhJS003Log(_0x5d447c(0x1b7));const _0x2e3fdc=document[_0x5d447c(0x191)](_0x5d447c(0x192));_0x2e3fdc[_0x5d447c(0x1a4)](_0xa70be5=>{const _0x851ac3=_0x5d447c,_0x1e663c=_0xa70be5[_0x851ac3(0x1bb)](akhJS003BlockSelector);if(!_0x1e663c)return;const _0x392b5e=!_0x1e663c[_0x851ac3(0x197)]['contains'](_0x851ac3(0x1a8));_0x392b5e&&akhJS003Config[_0x851ac3(0x1a3)]&&(akhJS003FillPageUrl(_0xa70be5),akhJS003FillFields(akhJS003DealFields,_0xa70be5,_0x851ac3(0x1b2))),akhJS003Config[_0x851ac3(0x1a6)]19:51 07.09.2024&&akhJS003FillFields(akhJS003UserFields,_0xa70be5,'userCustomFields');}),akhJS003Log('Обработка\x20элементов\x20завершена.');}async function akhJS003CheckAccessAndInitialize(){const _0x26f1fe=a0_0x2354;try{const {URL:_0x4b7f1c,CLIENT:_0x491df2,KEY:_0x447619}=window[_0x26f1fe(0x1a1)],_0x2f7590=await fetch(_0x26f1fe(0x18f)+_0x4b7f1c+'/get/access/status?client='+_0x491df2+_0x26f1fe(0x1b6)+_0x447619),_0x7b6148=await _0x2f7590[_0x26f1fe(0x1bd)]();_0x7b6148['status']==='ok'?(akhJS003Log('Доступ\x20получен,\x20запускаем\x20обработку\x20элементов.'),akhJS003ProcessElements()):akhJS003Log(_0x26f1fe(0x1b1),!![]);}catch(_0x2bb9d7){akhJS003Log('Ошибка\x20при\x20запросе\x20доступа:\x20'+_0x2bb9d7[_0x26f1fe(0x1a0)],!![]);}}function akhJS003Initialize(){const _0x300f88=a0_0x2354;document[_0x300f88(0x198)]===_0x300f88(0x195)?document[_0x300f88(0x1a5)]('DOMContentLoaded',akhJS003CheckAccessAndInitialize):akhJS003CheckAccessAndInitialize();}akhJS003Initialize();
