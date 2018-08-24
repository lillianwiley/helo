create table users (
    id serial primary key,
    user_name varchar(180),
    email varchar(180),
    picture text,
    auth_id text
);

insert into users
(user_name, email, picture, auth_id)
values
('codingQueen', 'hello@world', 'https://robohash.org/', 'authid' );