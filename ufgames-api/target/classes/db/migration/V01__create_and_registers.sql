CREATE TABLE client
(
    id serial NOT NULL,
    date_birth timestamp without time zone,
    email character varying(255),
    name character varying(255),
    CONSTRAINT client_pkey PRIMARY KEY (id)
);

INSERT INTO client (date_birth, email, name) VALUES ('2010-08-25 00:00:00', 'raul@gmail.com', 'Raul da Silva');
INSERT INTO client (date_birth, email, name) VALUES ('2011-07-24 00:00:00', 'robbin@gmail.com', 'Robbin de Paula');
INSERT INTO client (date_birth, email, name) VALUES ('2012-06-23 00:00:00', 'montenegro@gmail.com', 'Montenegro Robertp');
INSERT INTO client (date_birth, email, name) VALUES ('2013-05-22 00:00:00', 'amanda@gmail.com', 'Amanda Cruvinel');
INSERT INTO client (date_birth, email, name) VALUES ('2014-04-21 00:00:00', 'paula@gmail.com', 'Paula Paty');

CREATE TABLE product
(
    id serial NOT NULL,
    description character varying(255),
    name character varying(255),
    price double precision NOT NULL,
    CONSTRAINT product_pkey PRIMARY KEY (id)
);

INSERT INTO product( description, name, price) VALUES ('Um frenético jogo de ação e sobrevivência...', 'Far cry', '65.80');
INSERT INTO product( description, name, price) VALUES ('Guie sua civilização a vitória...', 'Age of Empires', '350.80');
INSERT INTO product( description, name, price) VALUES ('Conquiste títulos com o seu time...', 'FIFA 2021', '200.57');

CREATE TABLE sale
(
    id serial NOT NULL,
    client_id bigint NOT NULL,
    CONSTRAINT sale_pkey PRIMARY KEY (id),
    CONSTRAINT fk_client_id FOREIGN KEY (client_id)
        REFERENCES client (id) MATCH SIMPLE
        ON UPDATE NO ACTION ON DELETE NO ACTION
);

CREATE TABLE public.sale_products
(
    sale_id bigint NOT NULL,
    products_id bigint NOT NULL,
    CONSTRAINT fk_sale_id FOREIGN KEY (sale_id)
        REFERENCES sale (id) MATCH SIMPLE
        ON UPDATE NO ACTION ON DELETE NO ACTION,
    CONSTRAINT fk_products_id FOREIGN KEY (products_id)
        REFERENCES product (id) MATCH SIMPLE
        ON UPDATE NO ACTION ON DELETE NO ACTION
);