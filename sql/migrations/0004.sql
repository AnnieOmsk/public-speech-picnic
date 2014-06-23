alter table broadcast add column images_link varchar(255);
update
  broadcast
set
  images_link = concat("http://ucarecdn.com/", images, "/gallery/-/nav/thumbs/-/fit/cover/-/loop/true/-/allowfullscreen/native/-/thumbwidth/100/")
where
  images is not null;