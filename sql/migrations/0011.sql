-- Adding table `twitter`
DROP TABLE IF EXISTS `twitter`;
CREATE TABLE IF NOT EXISTS `twitter` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_at` varchar(255) NOT NULL,
  `favorite_url` varchar(255) NOT NULL,
  `reply_url` varchar(255) NOT NULL,
  `retweet_url` varchar(255) NOT NULL,
  `favorites_count` int(11) NOT NULL,
  `retweets_count` int(11) NOT NULL,
  `tweet_id` varchar(255) NOT NULL,
  `text` text,
  `url` varchar(255) NOT NULL,
  `user_account` varchar(255) NOT NULL,
  `user_icon` varchar(255) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;
