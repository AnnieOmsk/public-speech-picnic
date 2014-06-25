update broadcast set title = "" where title is null;
ALTER TABLE broadcast MODIFY title varchar(255) NOT NULL;