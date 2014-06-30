alter table broadcast add column direct_url varchar(255) not null;
update broadcast set direct_url = concat('http://office.7bits.it:23680/?from=', time, '#social');