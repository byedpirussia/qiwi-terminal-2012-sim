var db_lib_locations = [
  { 'id': 0, 'name': 'Все' }
, { 'id': 5500, 'name': 'Алматы' }
, { 'id': 633, 'name': 'Астана' }
, { 'id': 9462, 'name': 'Актау' }
, { 'id': 1832, 'name': 'Атырау' }
, { 'id': 980, 'name': 'Караганда' }
, { 'id': 8756, 'name': 'Павлодар' }
, { 'id': 155, 'name': 'Петропавловск' }
, { 'id': 10913, 'name': 'Семей' }
, { 'id': 2948, 'name': 'Тараз' }
, { 'id': 4325, 'name': 'Шымкент' }

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
, { 'id': 700771, 'name': 'Байконур', 'region_id': 9852, 'type_region_city': true }

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

, { 'id': 700001, 'name': 'Актобе', 'region_id': 10930, 'type_region_city': true }
, { 'id': 700002, 'name': 'Хромтау', 'region_id': 10930, 'type_region_city': true }
, { 'id': 700003, 'name': 'Октябрьск', 'region_id': 10930, 'type_region_city': true }
, { 'id': 700004, 'name': 'Алга', 'region_id': 10930, 'type_region_city': true }
, { 'id': 700005, 'name': 'Эмба', 'region_id': 10930, 'type_region_city': true }
, { 'id': 700006, 'name': 'Акшам', 'region_id': 10930, 'type_region_city': true }
, { 'id': 700007, 'name': 'Байганин', 'region_id': 10930, 'type_region_city': true }
, { 'id': 700008, 'name': 'Иргиз', 'region_id': 10930, 'type_region_city': true }
, { 'id': 700009, 'name': 'Карабутак', 'region_id': 10930, 'type_region_city': true }
, { 'id': 700011, 'name': 'Мартук', 'region_id': 10930, 'type_region_city': true }
, { 'id': 700012, 'name': 'Новоалексеевка', 'region_id': 10930, 'type_region_city': true }
, { 'id': 700013, 'name': 'Уил', 'region_id': 10930, 'type_region_city': true }
, { 'id': 700014, 'name': 'Челкар', 'region_id': 10930, 'type_region_city': true }
, { 'id': 700015, 'name': 'Шубаркудук', 'region_id': 10930, 'type_region_city': true }

// Atirau region
, { 'id': 1832, 'name': 'Атырау', 'region_id': 10937, 'type_region_city': true }
, { 'id': 700016, 'name': 'Кульсары', 'region_id': 10937, 'type_region_city': true }
, { 'id': 700017, 'name': 'Доссор', 'region_id': 10937, 'type_region_city': true }
, { 'id': 700018, 'name': 'Индерборский', 'region_id': 10937, 'type_region_city': true }
, { 'id': 700019, 'name': 'Балыкчи', 'region_id': 10937, 'type_region_city': true }
, { 'id': 700020, 'name': 'Байчунас', 'region_id': 10937, 'type_region_city': true }
, { 'id': 700021, 'name': 'Ганюшкино', 'region_id': 10937, 'type_region_city': true }
, { 'id': 700022, 'name': 'Каратон', 'region_id': 10937, 'type_region_city': true }
, { 'id': 700023, 'name': 'Макат', 'region_id': 10937, 'type_region_city': true }
, { 'id': 700024, 'name': 'Махамбет', 'region_id': 10937, 'type_region_city': true }
, { 'id': 700025, 'name': 'Миялы', 'region_id': 10937, 'type_region_city': true }

//Восточно-Казахстанская обл.
, { 'id': 700026, 'name': 'Усть-Каменогорск', 'region_id': 10928, 'type_region_city': true }
, { 'id': 10913, 'name': 'Семей', 'region_id': 10928, 'type_region_city': true }
, { 'id': 700027, 'name': 'Риддер', 'region_id': 10928, 'type_region_city': true }
, { 'id': 700028, 'name': 'Зыряновск', 'region_id': 10928, 'type_region_city': true }
, { 'id': 700029, 'name': 'Шемонаихч', 'region_id': 10928, 'type_region_city': true }
, { 'id': 700030, 'name': 'Акжар', 'region_id': 10928, 'type_region_city': true }
, { 'id': 700031, 'name': 'Аксуат', 'region_id': 10928, 'type_region_city': true }
, { 'id': 700032, 'name': 'Асубулак', 'region_id': 10928, 'type_region_city': true }
, { 'id': 700033, 'name': 'Ауэзов', 'region_id': 10928, 'type_region_city': true }
, { 'id': 700034, 'name': 'Аягуз', 'region_id': 10928, 'type_region_city': true }
, { 'id': 700035, 'name': 'Баштараз', 'region_id': 10928, 'type_region_city': true }
, { 'id': 700036, 'name': 'Белогорский', 'region_id': 10928, 'type_region_city': true }
, { 'id': 700037, 'name': 'Белоусовка', 'region_id': 10928, 'type_region_city': true }
, { 'id': 700038, 'name': 'Георгиевка', 'region_id': 10928, 'type_region_city': true }
, { 'id': 700039, 'name': 'Курчатов', 'region_id': 10928, 'type_region_city': true }

//Жамбылская обл.
, { 'id': 2948, 'name': 'Тараз', 'region_id': 10934, 'type_region_city': true }
, { 'id': 700040, 'name': 'Георгиевка', 'region_id': 10934, 'type_region_city': true }
, { 'id': 700041, 'name': 'Чу', 'region_id': 10934, 'type_region_city': true }
, { 'id': 700042, 'name': 'Мерке', 'region_id': 10934, 'type_region_city': true }
, { 'id': 700043, 'name': 'Новотроицкое', 'region_id': 10934, 'type_region_city': true }
, { 'id': 700044, 'name': 'Акколь', 'region_id': 10934, 'type_region_city': true }
, { 'id': 700045, 'name': 'Байкадам', 'region_id': 10934, 'type_region_city': true }

//Западно-Казахстанская обл.
, { 'id': 700046, 'name': 'Уральск', 'region_id': 10941, 'type_region_city': true }
, { 'id': 700047, 'name': 'Аксай', 'region_id': 10941, 'type_region_city': true }
, { 'id': 700048, 'name': 'Чапаев', 'region_id': 10941, 'type_region_city': true }
, { 'id': 700049, 'name': 'Дарьинское', 'region_id': 10941, 'type_region_city': true }
, { 'id': 700050, 'name': 'Деркул', 'region_id': 10941, 'type_region_city': true }
, { 'id': 700051, 'name': 'Джамбейты', 'region_id': 10941, 'type_region_city': true }
, { 'id': 700053, 'name': 'Каратобе', 'region_id': 10941, 'type_region_city': true }
, { 'id': 700054, 'name': 'Переметное', 'region_id': 10941, 'type_region_city': true }
, { 'id': 700055, 'name': 'Фурманово', 'region_id': 10941, 'type_region_city': true }

//Карагандинская обл.
, { 'id': 980, 'name': 'Караганда', 'region_id': 10935, 'type_region_city': true }
, { 'id': 700053, 'name': 'Темиртау', 'region_id': 10935, 'type_region_city': true }
, { 'id': 700054, 'name': 'Жезказган', 'region_id': 10935, 'type_region_city': true }
, { 'id': 700055, 'name': 'Балхаш', 'region_id': 10935, 'type_region_city': true }
, { 'id': 700056, 'name': 'Шахтинск', 'region_id': 10935, 'type_region_city': true }
, { 'id': 700057, 'name': 'Абай', 'region_id': 10935, 'type_region_city': true }
, { 'id': 700058, 'name': 'Агадырь', 'region_id': 10935, 'type_region_city': true }
, { 'id': 700059, 'name': 'Актас', 'region_id': 10935, 'type_region_city': true }

//Костанайская обл.
, { 'id': 700060, 'name': 'Костанай', 'region_id': 10932, 'type_region_city': true }
, { 'id': 700061, 'name': 'Рудный', 'region_id': 10932, 'type_region_city': true }
, { 'id': 700062, 'name': 'Лисаковск', 'region_id': 10932, 'type_region_city': true }
, { 'id': 700063, 'name': 'Джетыгара', 'region_id': 10932, 'type_region_city': true }
, { 'id': 700064, 'name': 'Затобольск', 'region_id': 10932, 'type_region_city': true }

//Кызылординская обл.
, { 'id': 700065, 'name': 'Кызылорда', 'region_id': 10931, 'type_region_city': true }
, { 'id': 700067, 'name': 'Байконур', 'region_id': 10931, 'type_region_city': true }
, { 'id': 700068, 'name': 'Яныкурган', 'region_id': 10931, 'type_region_city': true }
, { 'id': 700069, 'name': 'Чиили', 'region_id': 10931, 'type_region_city': true }
, { 'id': 700070, 'name': 'Казалинск', 'region_id': 10931, 'type_region_city': true }


//Мангистауская обл.
, { 'id': 9462, 'name': 'Актау', 'region_id': 10936, 'type_region_city': true }
, { 'id': 700071, 'name': 'Новый Узень', 'region_id': 10936, 'type_region_city': true }
, { 'id': 700072, 'name': 'Бейнеу', 'region_id': 10936, 'type_region_city': true }
, { 'id': 700073, 'name': 'Форт-Шевченко', 'region_id': 10936, 'type_region_city': true }
, { 'id': 700074, 'name': 'Баутино', 'region_id': 10936, 'type_region_city': true }


//Павлодарская обл.
, { 'id': 8756, 'name': 'Павлодар', 'region_id': 10938, 'type_region_city': true }
, { 'id': 700076, 'name': 'Экибастуз', 'region_id': 10938, 'type_region_city': true }
, { 'id': 700077, 'name': 'Аксу', 'region_id': 10938, 'type_region_city': true }
, { 'id': 700078, 'name': 'Железинка', 'region_id': 10938, 'type_region_city': true }
, { 'id': 700079, 'name': 'Щербакты', 'region_id': 10938, 'type_region_city': true }

//Северо-Казахстанская обл.
, { 'id': 155, 'name': 'Петропавловск', 'region_id': 10940, 'type_region_city': true }
, { 'id': 700080, 'name': 'Булаево', 'region_id': 10940, 'type_region_city': true }
, { 'id': 700081, 'name': 'Сергеевка', 'region_id': 10940, 'type_region_city': true }
, { 'id': 700082, 'name': 'Мамлютка', 'region_id': 10940, 'type_region_city': true }
, { 'id': 700083, 'name': 'Преснова', 'region_id': 10940, 'type_region_city': true }

//Южно-Казахстанская обл.
, { 'id': 4325, 'name': 'Шымкент', 'region_id': 10929, 'type_region_city': true }
, { 'id': 700084, 'name': 'Туркестан', 'region_id': 10929, 'type_region_city': true }
, { 'id': 700085, 'name': 'Сарыагач', 'region_id': 10929, 'type_region_city': true }
, { 'id': 700086, 'name': 'Кентау', 'region_id': 10929, 'type_region_city': true }
, { 'id': 700087, 'name': 'Джетысай', 'region_id': 10929, 'type_region_city': true }
]