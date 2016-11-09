#creates database for the parking App
create database parkingApp;
#using this database
use parkingApp;

#creating a table for user information
create table user (
id int not null auto_increment,
name varchar(50),
email varchar(100),
status varchar(100),

primary key(id)
);

insert into user (name, email, status) values ('John Smith', 'jsmith@gmail.com', 
'faculty, handicap');
insert into user (name, email, status) values ('Jane Smith', 'smithjane@gmail.com', 
'commuter');
insert into user (name, email, status) values ('John Doe', 'jdoe@gmail.com', 
'resident');


create table parkingLot (
id int not null auto_increment, 
name varchar(70),
vehiclesEntered int not null,
vehiclesExited int not null,
primary key(id)
);

insert into parkingLot (name, vehiclesEntered, vehiclesExited) values ('GG Lot', 23, 
12);
insert into parkingLot (name, vehiclesEntered, vehiclesExited) values ('Library Lot', 50, 
30);
insert into parkingLot (name, vehiclesEntered, vehiclesExited) values ('Baseball Stadium Lot', 3, 
0);




