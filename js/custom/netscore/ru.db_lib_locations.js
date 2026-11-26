var db_lib_locations = [
  // city
  {'id': 633, 'name': 'Астана', 'region_id': 10933, 'type_city': true }
, { 'id': 5500, 'name': 'Алматы', 'region_id': 10939, 'type_city': true }
, { 'id': 9462, 'name': 'Актау', 'region_id': 10936, 'type_city': true }
, { 'id': 1832, 'name': 'Атырау', 'region_id': 10937, 'type_city': true }
, { 'id': 980, 'name': 'Караганда', 'region_id': 10935, 'type_city': true }
, { 'id': 8756, 'name': 'Павлодар', 'region_id': 10938, 'type_city': true }
, { 'id': 155, 'name': 'Петропавловск', 'region_id': 10940, 'type_city': true }
, { 'id': 10913, 'name': 'Семей', 'region_id': 10928, 'type_city': true }
, { 'id': 2948, 'name': 'Тараз', 'region_id': 10934, 'type_city': true }
, { 'id': 4325, 'name': 'Шымкент', 'region_id': 10929, 'type_city': true }

// region
, { 'id': 10933, 'name': 'Акмолинская обл.', 'type_region': true }
, { 'id': 10930, 'name': 'Актюбинская обл.', 'type_region': true }
, { 'id': 10939, 'name': 'Алматинская обл.', 'type_region': true }
, { 'id': 10937, 'name': 'Атырауская обл.', 'type_region': true }
, { 'id': 9852, 'name': 'Байконур.', 'type_region': true }
, { 'id': 10928, 'name': 'Восточно-Казахстанская обл.', 'type_region': true }
, { 'id': 10934, 'name': 'Жамбылская обл.', 'type_region': true }
, { 'id': 10941, 'name': 'Западно-Казахстанская обл.', 'type_region': true }
, { 'id': 10935, 'name': 'Карагандинская обл.', 'type_region': true }
, { 'id': 10932, 'name': 'Костанайская обл.', 'type_region': true }
, { 'id': 10931, 'name': 'Кызылординская обл.', 'type_region': true }
, { 'id': 10936, 'name': 'Мангистауская обл.', 'type_region': true }
, { 'id': 10938, 'name': 'Павлодарская обл.', 'type_region': true }
, { 'id': 10940, 'name': 'Северо-Казахстанская обл.', 'type_region': true }
, { 'id': 10929, 'name': 'Южно-Казахстанская обл.', 'type_region': true }

//Байконур
, { 'id': 9852, 'name': 'Байконур', 'region_id': 9852, 'type_region_city': true }

// Almaty region
, { 'id': 7241, 'name': 'Талдыкурган', 'region_id': 10939, 'type_region_city': true }
, { 'id': 5547, 'name': 'Капчагай', 'region_id': 10939, 'type_region_city': true }
, { 'id': 9565, 'name': 'Талгар', 'region_id': 10939, 'type_region_city': true }
, { 'id': 2265, 'name': 'Каскелен', 'region_id': 10939, 'type_region_city': true }
, { 'id': 5547, 'name': 'Капчагай', 'region_id': 10939, 'type_region_city': true }
, { 'id': 5666, 'name': 'Актогай', 'region_id': 10939, 'type_region_city': true }
, { 'id': 4700, 'name': 'Баканас', 'region_id': 10939, 'type_region_city': true }
, { 'id': 8851, 'name': 'Бурундай', 'region_id': 10939, 'type_region_city': true }
, { 'id': 7448, 'name': 'Иссык', 'region_id': 10939, 'type_region_city': true }
, { 'id': 7338, 'name': 'Нарынкол', 'region_id': 10939, 'type_region_city': true }
, { 'id': 10922, 'name': 'Текели', 'region_id': 10939, 'type_region_city': true }
, { 'id': 2512, 'name': 'Узунагач', 'region_id': 10939, 'type_region_city': true }
, { 'id': 4727, 'name': 'Уштобе', 'region_id': 10939, 'type_region_city': true }
, { 'id': 9064, 'name': 'Чилик', 'region_id': 10939, 'type_region_city': true }
, { 'id': 10264, 'name': 'Чунджа', 'region_id': 10939, 'type_region_city': true }

// Akmola region
, { 'id': 3851, 'name': 'Кокшетау', 'region_id': 10933, 'type_region_city': true }
, { 'id': 3062, 'name': 'Степногорск', 'region_id': 10933, 'type_region_city': true }
, { 'id': 4250, 'name': 'Атбасар', 'region_id': 10933, 'type_region_city': true }
, { 'id': 9973, 'name': 'Ак-Коль', 'region_id': 10933, 'type_region_city': true }
, { 'id': 6786, 'name': 'Аршалы', 'region_id': 10933, 'type_region_city': true }
, { 'id': 151, 'name': 'Балкашино', 'region_id': 10933, 'type_region_city': true }

// Aktub region

, { 'id': 10502, 'name': 'Актобе', 'region_id': 10930, 'type_region_city': true }
, { 'id': 2524, 'name': 'Хромтау', 'region_id': 10930, 'type_region_city': true }
, { 'id': 2027, 'name': 'Октябрьск', 'region_id': 10930, 'type_region_city': true }
, { 'id': 1460, 'name': 'Алга', 'region_id': 10930, 'type_region_city': true }
, { 'id': 6062, 'name': 'Эмба', 'region_id': 10930, 'type_region_city': true }
, { 'id': 5983, 'name': 'Акшам', 'region_id': 10930, 'type_region_city': true }
, { 'id': 9470, 'name': 'Байганин', 'region_id': 10930, 'type_region_city': true }
, { 'id': 5754, 'name': 'Иргиз', 'region_id': 10930, 'type_region_city': true }
, { 'id': 6122, 'name': 'Карабутак', 'region_id': 10930, 'type_region_city': true }
, { 'id': 8641, 'name': 'Мартук', 'region_id': 10930, 'type_region_city': true }
, { 'id': 9955, 'name': 'Новоалексеевка', 'region_id': 10930, 'type_region_city': true }
, { 'id': 2921, 'name': 'Уил', 'region_id': 10930, 'type_region_city': true }
, { 'id': 1756, 'name': 'Челкар', 'region_id': 10930, 'type_region_city': true }
, { 'id': 3326, 'name': 'Шубаркудук', 'region_id': 10930, 'type_region_city': true }
   
   // Atirau region
, { 'id': 7980, 'name': 'Кульсары', 'region_id': 10937, 'type_region_city': true }
, { 'id': 2411, 'name': 'Доссор', 'region_id': 10937, 'type_region_city': true }
, { 'id': 6092, 'name': 'Индерборский', 'region_id': 10937, 'type_region_city': true }
//, { 'id': 700019, 'name': 'Балыкчи', 'region_id': 10937, 'type_region_city': true }
, { 'id': 9306, 'name': 'Байчунас', 'region_id': 10937, 'type_region_city': true }
, { 'id': 8805, 'name': 'Ганюшкино', 'region_id': 10937, 'type_region_city': true }
, { 'id': 3698, 'name': 'Каратон', 'region_id': 10937, 'type_region_city': true }
, { 'id': 8970, 'name': 'Макат', 'region_id': 10937, 'type_region_city': true }
, { 'id': 7252, 'name': 'Махамбет', 'region_id': 10937, 'type_region_city': true }
, { 'id': 6753, 'name': 'Миялы', 'region_id': 10937, 'type_region_city': true }

//Восточно-Казахстанская обл.
, { 'id': 1597, 'name': 'Усть-Каменогорск', 'region_id': 10928, 'type_region_city': true }
, { 'id': 10874, 'name': 'Риддер', 'region_id': 10928, 'type_region_city': true }
, { 'id': 9389, 'name': 'Зыряновск', 'region_id': 10928, 'type_region_city': true }
//, { 'id': 700029, 'name': 'Шемонаихч', 'region_id': 10928, 'type_region_city': true }
, { 'id': 7443, 'name': 'Акжар', 'region_id': 10928, 'type_region_city': true }
//, { 'id': 700031, 'name': 'Аксуат', 'region_id': 10928, 'type_region_city': true }
, { 'id': 9708, 'name': 'Асубулак', 'region_id': 10928, 'type_region_city': true }
//, { 'id': 700033, 'name': 'Ауэзов', 'region_id': 10928, 'type_region_city': true }
//, { 'id': 700034, 'name': 'Аягуз', 'region_id': 10928, 'type_region_city': true }
//, { 'id': 700035, 'name': 'Баштараз', 'region_id': 10928, 'type_region_city': true }
, { 'id': 10625, 'name': 'Белогорский', 'region_id': 10928, 'type_region_city': true }
, { 'id': 5739, 'name': 'Белоусовка', 'region_id': 10928, 'type_region_city': true }
, { 'id': 5665, 'name': 'Георгиевка', 'region_id': 10928, 'type_region_city': true }
, { 'id': 620, 'name': 'Курчатов', 'region_id': 10928, 'type_region_city': true }

//Жамбылская обл.
//, { 'id': 700040, 'name': 'Георгиевка', 'region_id': 10934, 'type_region_city': true }
, { 'id': 614, 'name': 'Чу', 'region_id': 10934, 'type_region_city': true }
, { 'id': 5184, 'name': 'Мерке', 'region_id': 10934, 'type_region_city': true }
, { 'id': 7970, 'name': 'Новотроицкое', 'region_id': 10934, 'type_region_city': true }
, { 'id': 1329, 'name': 'Акколь', 'region_id': 10934, 'type_region_city': true }
, { 'id': 3454, 'name': 'Байкадам', 'region_id': 10934, 'type_region_city': true }

//Западно-Казахстанская обл.
, { 'id': 8965, 'name': 'Уральск', 'region_id': 10941, 'type_region_city': true }
//, { 'id': 700047, 'name': 'Аксай', 'region_id': 10941, 'type_region_city': true }
//, { 'id': 700048, 'name': 'Чапаев', 'region_id': 10941, 'type_region_city': true }
//, { 'id': 700049, 'name': 'Дарьинское', 'region_id': 10941, 'type_region_city': true }
//, { 'id': 700050, 'name': 'Деркул', 'region_id': 10941, 'type_region_city': true }
//, { 'id': 700051, 'name': 'Джамбейты', 'region_id': 10941, 'type_region_city': true }
//, { 'id': 700053, 'name': 'Каратобе', 'region_id': 10941, 'type_region_city': true }
//, { 'id': 700054, 'name': 'Переметное', 'region_id': 10941, 'type_region_city': true }
//, { 'id': 700055, 'name': 'Фурманово', 'region_id': 10941, 'type_region_city': true }

//Карагандинская обл.
, { 'id': 8268, 'name': 'Темиртау', 'region_id': 10935, 'type_region_city': true }
, { 'id': 1488, 'name': 'Жезказган', 'region_id': 10935, 'type_region_city': true }
, { 'id': 4407, 'name': 'Балхаш', 'region_id': 10935, 'type_region_city': true }
, { 'id': 10026, 'name': 'Шахтинск', 'region_id': 10935, 'type_region_city': true }
, { 'id': 2340, 'name': 'Абай', 'region_id': 10935, 'type_region_city': true }
, { 'id': 8811, 'name': 'Агадырь', 'region_id': 10935, 'type_region_city': true }
//, { 'id': 1941, 'name': 'Актас', 'region_id': 10935, 'type_region_city': true }
//, { 'id': 7147, 'name': 'Актас', 'region_id': 10935, 'type_region_city': true }

//Костанайская обл.
, { 'id': 9391, 'name': 'Костанай', 'region_id': 10932, 'type_region_city': true }
, { 'id': 3177, 'name': 'Рудный', 'region_id': 10932, 'type_region_city': true }
, { 'id': 6264, 'name': 'Лисаковск', 'region_id': 10932, 'type_region_city': true }
//, { 'id': 700063, 'name': 'Джетыгара', 'region_id': 10932, 'type_region_city': true }
//, { 'id': 700064, 'name': 'Затобольск', 'region_id': 10932, 'type_region_city': true }

//Кызылординская обл.
, { 'id': 700065, 'name': 'Кызылорда', 'region_id': 10931, 'type_region_city': true }
, { 'id': 700067, 'name': 'Байконур', 'region_id': 10931, 'type_region_city': true }
, { 'id': 700068, 'name': 'Яныкурган', 'region_id': 10931, 'type_region_city': true }
, { 'id': 700069, 'name': 'Чиили', 'region_id': 10931, 'type_region_city': true }
, { 'id': 700070, 'name': 'Казалинск', 'region_id': 10931, 'type_region_city': true }


//Мангистауская обл.
//, { 'id': 5525, 'name': 'Актау', 'region_id': 10936, 'type_region_city': true }
//, { 'id': 700071, 'name': 'Новый Узень', 'region_id': 10936, 'type_region_city': true }
//, { 'id': 700072, 'name': 'Бейнеу', 'region_id': 10936, 'type_region_city': true }
//, { 'id': 700073, 'name': 'Форт-Шевченко', 'region_id': 10936, 'type_region_city': true }
//, { 'id': 700074, 'name': 'Баутино', 'region_id': 10936, 'type_region_city': true }


//Павлодарская обл.
, { 'id': 10926, 'name': 'Экибастуз', 'region_id': 10938, 'type_region_city': true }
, { 'id': 10927, 'name': 'Аксу', 'region_id': 10938, 'type_region_city': true }
//, { 'id': 700078, 'name': 'Железинка', 'region_id': 10938, 'type_region_city': true }
//, { 'id': 700079, 'name': 'Щербакты', 'region_id': 10938, 'type_region_city': true }

//Северо-Казахстанская обл.
//, { 'id': 700080, 'name': 'Булаево', 'region_id': 10940, 'type_region_city': true }
//, { 'id': 700081, 'name': 'Сергеевка', 'region_id': 10940, 'type_region_city': true }
, { 'id': 10829, 'name': 'Мамлютка', 'region_id': 10940, 'type_region_city': true }
//, { 'id': 700083, 'name': 'Преснова', 'region_id': 10940, 'type_region_city': true }

//Южно-Казахстанская обл.
, { 'id': 10923, 'name': 'Туркестан', 'region_id': 10929, 'type_region_city': true }
//, { 'id': 700085, 'name': 'Сарыагач', 'region_id': 10929, 'type_region_city': true }
, { 'id': 5713, 'name': 'Кентау', 'region_id': 10929, 'type_region_city': true }
//, { 'id': 700087, 'name': 'Джетысай', 'region_id': 10929, 'type_region_city': true }
]
