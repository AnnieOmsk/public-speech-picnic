SET FOREIGN_KEY_CHECKS=0;
SET time_zone = "+00:00";

INSERT INTO `zone` (id, name) VALUES (1, "Центральная зона");
INSERT INTO `zone` (id, name) VALUES (2, "Зона №1");
INSERT INTO `zone` (id, name) VALUES (3, "Зона №2");
INSERT INTO `zone` (id, name) VALUES (4, "Торговая зона");
INSERT INTO `zone` (id, name) VALUES (5, "Кинотеатр");

INSERT INTO `organizer` (id, name) VALUES (1, "Организатор мероприятия");
INSERT INTO `organizer` (id, name) VALUES (2, "Мосигра");
INSERT INTO `organizer` (id, name) VALUES (3, "Организатор №1");
INSERT INTO `organizer` (id, name) VALUES (4, "Организатор №2");

INSERT INTO `timeline` (title, start, end, organizer_id, zone_id)
VALUES ("Открытие пикника", "2014-07-01 11:00:00", "2014-07-01 11:30:00", 1, 1);
INSERT INTO `timeline` (title, start, end, organizer_id, zone_id)
VALUES ("Зарядка", "2014-07-01 11:30:00", "2014-07-01 12:00:00", 1, 1);
INSERT INTO `timeline` (title, start, end, organizer_id, zone_id)
VALUES ("Какая-то хурма", "2014-07-02 15:00:00", "2014-07-01 18:30:00", 1, 1);
INSERT INTO `timeline` (title, start, end, organizer_id, zone_id)
VALUES ("Бадминтон", "2014-07-01 12:30:00", "2014-07-01 13:00:00", 1, 2);
INSERT INTO `timeline` (title, start, end, organizer_id, zone_id)
VALUES ("Мафия", "2014-07-01 12:00:00", "2014-07-01 12:30:00", 2, 3);
INSERT INTO `timeline` (title, start, end, organizer_id, zone_id)
VALUES ("Ярмарка омских мастеров", "2014-07-01 12:00:00", "2014-07-01 14:00:00", 3, 4);
INSERT INTO `timeline` (title, start, end, organizer_id, zone_id)
VALUES ("Показ мультфильмов для самых маленьких", "2014-07-01 11:30:00", "2014-07-01 12:30:00", 4, 5);
INSERT INTO `timeline` (title, start, end, organizer_id, zone_id)
VALUES ("Современная анимация", "2014-07-01 12:30:00", "2014-07-01 13:30:00", 3, 5);
INSERT INTO `timeline` (title, start, end, organizer_id, zone_id)
VALUES ("Хурма на послезавтра", "2014-07-03 11:00:00", "2014-07-01 12:30:00", 4, 5);

INSERT INTO journalist (id, login, password, first_name, last_name)
VALUES (1, "test1", "password", "Сергей", "Костарёв");
INSERT INTO journalist (id, login, password, first_name, last_name)
VALUES (2, "test2", "password", "Марина", "Пышина");
INSERT INTO journalist (id, login, password, first_name, last_name)
VALUES (3, "test3", "password", "Алексей", "Владимиров");
INSERT INTO journalist (id, login, password, first_name, last_name)
VALUES (4, "test4", "password", "Зеро", "№2");
INSERT INTO journalist (id, login, password, first_name, last_name)
VALUES (5, "test5", "password", "Вадим", "Пигалёв");

INSERT INTO broadcast (id, time, likes, content, accepted, lead, journalist_id)
VALUES (1, "2014-06-30 9:00:00", 0, "<p>{EHVF EHVF EHVF EHVF EHVF </p>", 4, "Тем временем на ярмарке", 0);
INSERT INTO broadcast (id, time, likes, content, accepted, lead, journalist_id)
VALUES (2, "2014-07-01 11:00:00", 15, "<p>Состоялось открытие ГОРОДСКОГО ПИКНИКА</p><p>Стартовал третий городской пикник. Рэд сидит, глядя на Золотой шар, и думает: попросить о дочери, а ещё о чем? И с ужасом понимает, что нет у него ни слов, ни мыслей — все он растерял в своих сталкерских вылазках, стычках с охранниками, погоне за деньгами — семью кормить надо, а умеет он только ходить в Зону да сбывать диковинные штучки всяким темным людям, которые неизвестно как ими распоряжаются. И Рэд понимает, что других слов, кроме тех, что выкрикнул перед смертью этот мальчик, так не похожий на своего Стервятника-отца, ему не придумать: «Счастье для всех, даром, и пусть никто не уйдёт обиженный!»</p>", 1, "Торжественно открыли городской пикник", 1);
INSERT INTO broadcast (id, time, likes, content, accepted, lead, journalist_id)
VALUES (3, "2014-07-01 11:30:00", 10, "", 3, "Зарядка началась", 1);
INSERT INTO broadcast (id, time, likes, content, accepted, lead, journalist_id)
VALUES (4, "2014-07-01 12:45:00", 5, "<p>Площадка будет открыта до 18:00</p>", 2, "Открыта площадка для игры в бадминтон", 1);
INSERT INTO broadcast (id, time, likes, content, accepted, lead, journalist_id)
VALUES (5, "2014-07-01 13:20:00", 20, "<p>Омские мастера представили свои работы</p><p><a href=\"#\">Подробности</a></p>", 1, "Тем временем на ярмарке", 1);
INSERT INTO broadcast (id, time, likes, content, accepted, lead, journalist_id)
VALUES (6, "2014-06-30 12:00:00", 0, "<p>Отсидев положенный срок и выйдя на свободу, он находит дочь настолько изменившейся, что врачи говорят, будто она уже и не человек. Мало того что она изменилась внешне — она уже почти ничего не понимает. Чтобы спасти дочь, Рэд отправляется к Золотому </p>", 4, "Тест №3", 1);
INSERT INTO broadcast (id, time, likes, content, accepted, lead, journalist_id)
VALUES (7, "2014-06-30 13:00:00", 0, "<p>Отправившись в тот же день с добычей к скупщикам, Рэд попадает в засаду, его арестовывают и приговаривают к нескольким годам тюрьмы.</p>", 4, "Тест №4", 1);
INSERT INTO broadcast (time, likes, content, accepted, lead, journalist_id)
VALUES ("2014-06-30 10:00:00", 0, "<p>Рэда взять его с собой, — Артур догадался, что Рэдрик отправляется на поиски Золотого шара. Рэдрику жаль Артура, однако он убеждает себя в том, что выбора у него нет: или этот мальчик, или его Мартышка. Артур и Рэдрик, пройдя сквозь все ловушки, расставленные Зоной, подходят, наконец, к шару, и Артур бросается к нему, крича: «Счастье для всех! Даром! Сколько угодно счастья! Все собирайтесь сюда! Хватит всем! Никто не уйдёт обиженный!» И в ту же секунду чудовищная «мясорубка», подхватив его, скручивает, как хозяйки выкручивают белье.</p>", 4, "Тест №1", 1);
INSERT INTO broadcast (time, likes, content, accepted, lead, journalist_id)
VALUES ("2014-06-30 11:00:00", 0, "<p>шару: Барбридж, помня о том, что Рэд не бросил его в Зоне, даёт ему карту, объясняет, как найти шар, и хочет, чтобы Рэд попросил вернуть ему ноги: «Зона взяла, может, Зона и вернёт». По пути к шару нужно преодолеть множество препятствий, которыми полна Зона, но самое страшное — «мясорубка»: один человек должен быть принесён ей в жертву для того, чтобы другой мог подойти к Золотому шару и попросить его исполнить желание. Стервятник объяснил все это Рэду и даже предложил на роль «живой отмычки» кого-нибудь из своих людей — «кого не жалко». Однако Рэдрик берет Артура, сына Барбриджа, красавца, вымоленного у Зоны, который отчаянно просил </p>", 4, "Тест №2", 1);
INSERT INTO broadcast (time, likes, content, accepted, lead, journalist_id)
VALUES ("2014-06-30 14:00:00", 0, "<p>Однако ноги Барбриджу спасти не удаётся. </p>", 4, "Тест №5", 1);

INSERT INTO image (url, preview_url, broadcast_id)
VALUES ("http://belrabbit.ucoz.com/_ph/20/161304832.jpg", "http://belrabbit.ucoz.com/_ph/20/2/161304832.jpg", 5);
INSERT INTO image (url, preview_url, broadcast_id)
VALUES ("http://belrabbit.ucoz.com/_ph/20/402446832.jpg", "http://belrabbit.ucoz.com/_ph/20/2/402446832.jpg", 5);
INSERT INTO image (url, preview_url, broadcast_id)
VALUES ("http://belrabbit.ucoz.com/_ph/20/963720938.jpg", "http://belrabbit.ucoz.com/_ph/20/2/963720938.jpg", 3);
INSERT INTO image (url, preview_url, broadcast_id)
VALUES ("http://belrabbit.ucoz.com/_ph/20/277935788.jpg", "http://belrabbit.ucoz.com/_ph/20/2/277935788.jpg", 6);
INSERT INTO image (url, preview_url, broadcast_id)
VALUES ("http://belrabbit.ucoz.com/_ph/20/2/329134402.jpg", "http://belrabbit.ucoz.com/_ph/20/2/329134402.jpg", 6);
INSERT INTO image (url, preview_url, broadcast_id)
VALUES ("http://belrabbit.ucoz.com/_ph/20/87193351.jpg", "http://belrabbit.ucoz.com/_ph/20/2/87193351.jpg", 7);


