CREATE TABLE Hotels (
	id int(11) auto_increment NOT NULL,
	name varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
	stars int(11) NOT NULL,
	latitude varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
	longitude varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
	description text CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL,
	address varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
	district varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL,
	city varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
	state varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
	country varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
	placeId varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
	thumb varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL,
	images json NULL,
	amenities json NULL,
	pois json NULL,
	reviews json NULL,
	createdAt datetime NOT NULL,
	updatedAt datetime NULL,
	cnpj varchar(20) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL,
	CONSTRAINT `PRIMARY` PRIMARY KEY (id)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8
COLLATE=utf8_unicode_ci
COMMENT='';