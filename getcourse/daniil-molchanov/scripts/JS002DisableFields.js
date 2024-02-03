/**
 * Отключает ручное редактирование для указанных полей.
 */
var AKhJS002DisableFields = function() {
  var fieldIds = [
      // Заказы
      '10101856', '10101860', '10101861', '10101863', '10101864',
      '10101865', '10101866', '10101867', '10101868', '10101869', 
      '10101870', '10101871', '10101872', '10101873', '10101874', 
      '10101875', '10101876', '10101877', '10102001', '10102002', 
      '10102003', '10102004', '10102005', '10102006', '10102007',
      '10102008', '10102009', '10102010', '10102032', '10102011',
      '10102012', '10102013', '10102014',

      // Пользователи
      '10101756', '10101759', '10101762', '10101763', '10101767', 
      '10101771', '10101998', '10101773', '10101793', '10101794', 
      '10101795', '10101796', '10101797', '10101798', '10101799', 
      '10101800', '10101801', '10101802', '10101803', '10101804', 
      '10101805', '10101806', '10101807', '10101808', '10101809'
  ];

  $.each(fieldIds, function(_, id) {
      $('#field-input-' + id).prop('disabled', true);
  });
};

$(AKhJS002DisableFields);