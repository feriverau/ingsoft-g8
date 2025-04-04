CREATE TABLE cliente (
    cliente_id         NUMBER(8) NOT NULL,
    nombre             VARCHAR2(15) NOT NULL,
    apellido           VARCHAR2(15) NOT NULL,
    correo_electronico VARCHAR2(15) NOT NULL,
    telefono           NUMBER(9) NOT NULL
);

ALTER TABLE cliente ADD CONSTRAINT pk_cli_id_cli PRIMARY KEY ( cliente_id );

CREATE TABLE hotel (
    hotel_id  NUMBER(4) NOT NULL,
    nombre    VARCHAR2(20) NOT NULL,
    direccion VARCHAR2(30) NOT NULL,
    categoria VARCHAR2(1) NOT NULL
);

ALTER TABLE hotel ADD CONSTRAINT pk_hot_id_hotel PRIMARY KEY ( hotel_id );

CREATE TABLE habitacion (
    habitacion_id  NUMBER(6) NOT NULL,
    tipo           VARCHAR2(15) NOT NULL,
    capacidad      NUMBER(2) NOT NULL,
    precio         NUMBER(7) NOT NULL,
    hotel_id NUMBER(4) NOT NULL
);

ALTER TABLE habitacion ADD CONSTRAINT pk_habit_id_habit PRIMARY KEY ( habitacion_id );
ALTER TABLE habitacion
    ADD CONSTRAINT fk_hotel_habit FOREIGN KEY ( hotel_id )
        REFERENCES hotel ( hotel_id );



CREATE TABLE reserva (
    reserva_id               NUMBER(10) NOT NULL,
    fecha_entrada            DATE NOT NULL,
    fecha_salida             DATE NOT NULL,
    cantidad_personas        NUMBER(3) NOT NULL,
    cliente_id       NUMBER(8) NOT NULL,
    habitacion_id NUMBER(6) NOT NULL
);

ALTER TABLE reserva ADD CONSTRAINT pk_res_id_res PRIMARY KEY ( reserva_id );

ALTER TABLE reserva
    ADD CONSTRAINT fk_cli_res FOREIGN KEY ( cliente_id )
        REFERENCES cliente ( cliente_id );

ALTER TABLE reserva
    ADD CONSTRAINT fk_habit_res FOREIGN KEY ( habitacion_id )
        REFERENCES habitacion ( habitacion_id );


