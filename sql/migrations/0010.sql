-- Adding table `instagram`
DROP TABLE IF EXISTS `instagram`;
CREATE TABLE IF NOT EXISTS `instagram` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `comments_count` int(11),
  `likes_count` int(11),
  `media_id` varchar(255) NOT NULL,
  `image_url` varchar(255) NOT NULL,
  `text` text,
  `time` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;
