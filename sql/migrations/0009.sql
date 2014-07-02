-- Adding table `twitter_blacklist`
DROP TABLE IF EXISTS `twitter_blacklist`;
CREATE TABLE IF NOT EXISTS `twitter_blacklist` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `message_id` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- Adding table `instagram_blacklist`
DROP TABLE IF EXISTS `instagram_blacklist`;
CREATE TABLE IF NOT EXISTS `instagram_blacklist` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `media_url` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- Adding table `instagram_whitelist`
DROP TABLE IF EXISTS `instagram_whitelist`;
CREATE TABLE IF NOT EXISTS `instagram_whitelist` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `media_url` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;
