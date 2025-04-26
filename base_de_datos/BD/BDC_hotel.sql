CREATE TABLE cliente (
    cliente_id         NUMBER GENERATED ALWAYS AS IDENTITY,
    contrasena_cli         VARCHAR2 (100) NOT NULL, 
    nombre_cli             VARCHAR2(15) NOT NULL,
    apellido_cli           VARCHAR2(15) NOT NULL,
    correo_electronico_cli VARCHAR2(50) NOT NULL,
    telefono_cli           NUMBER(9) NOT NULL
);

ALTER TABLE cliente ADD CONSTRAINT pk_cli_id_cli PRIMARY KEY ( cliente_id );

CREATE TABLE hotel (
    hotel_id  NUMBER(4) NOT NULL,
    nombre_hot    VARCHAR2(20) NOT NULL,
    direccion_hot VARCHAR2(30) NOT NULL,
    categoria VARCHAR2(1) NOT NULL
);

ALTER TABLE hotel ADD CONSTRAINT pk_hot_id_hotel PRIMARY KEY ( hotel_id );

CREATE TABLE habitacion (
    habitacion_id  VARCHAR2(10) NOT NULL,
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
    reserva_id               NUMBER GENERATED ALWAYS AS IDENTITY,
    fecha_entrada            DATE NOT NULL,
    fecha_salida             DATE NOT NULL,
    cantidad_personas        NUMBER(3) NOT NULL,
    cliente_id       NUMBER(8) NOT NULL,
    habitacion_id VARCHAR2(10) NOT NULL
);

ALTER TABLE reserva ADD CONSTRAINT pk_res_id_res PRIMARY KEY ( reserva_id );

ALTER TABLE reserva
    ADD CONSTRAINT fk_cli_res FOREIGN KEY ( cliente_id )
        REFERENCES cliente ( cliente_id );

ALTER TABLE reserva
    ADD CONSTRAINT fk_habit_res FOREIGN KEY ( habitacion_id )
        REFERENCES habitacion ( habitacion_id );

CREATE TABLE usuario (
    usuario_id       VARCHAR2 (20) NOT NULL,
    contrasena_usu       VARCHAR2 (100) NOT NULL,  
    nombre_usu           VARCHAR2 (20) NOT NULL,
    apellido_usu         VARCHAR2 (20) NOT NULL,
    correo_electronico_usu VARCHAR2 (50) NOT NULL,
    telefono_usu         NUMBER (9) NOT NULL,
    rol              VARCHAR2 (20) NOT NULL
);

ALTER TABLE usuario ADD CONSTRAINT pk_usu_id_usu PRIMARY KEY ( usuario_id );

INSERT INTO usuario (usuario_id, contrasena_usu, nombre_usu, apellido_usu, correo_electronico_usu, telefono_usu, rol)
VALUES ('admin_01', 'pacific_admin', 'JOSÉ','FUENZALIDA','j.fuenz@pacific.reef',974532221, 'Administrador' );

INSERT INTO hotel (hotel_id, nombre_hot, direccion_hot, categoria)
VALUES (1, 'Miramar', 'Los húsares 320', 'B'); 

INSERT INTO hotel (hotel_id, nombre_hot, direccion_hot, categoria)
VALUES (2, 'Siena', 'Carretera Nacional 34 Km 78 R2', 'A');

INSERT INTO hotel (hotel_id, nombre_hot, direccion_hot, categoria)
VALUES (3, 'Bellavista', 'Panamericana 65, Colina Verde', 'B');

UPDATE hotel 
SET categoria='C'
WHERE hotel_id=1;

INSERT INTO habitacion ( habitacion_id, tipo, capacidad, precio, hotel_id)
VALUES ('MIR-101', 'Turista Ind.', 1, 50000, 1);

INSERT INTO habitacion ( habitacion_id, tipo, capacidad, precio, hotel_id)
VALUES ('MIR-202', 'Turista Doble', 2, 80000, 1);

INSERT INTO habitacion ( habitacion_id, tipo, capacidad, precio, hotel_id)
VALUES ('MIR-303', 'Turista Doble', 2, 90000, 1);

INSERT INTO habitacion ( habitacion_id, tipo, capacidad, precio, hotel_id)
VALUES ('MIR-404', 'Turista Suite', 3, 150000, 1);

INSERT INTO habitacion ( habitacion_id, tipo, capacidad, precio, hotel_id)
VALUES ('MIR-505', 'Turista Suite', 4, 230000, 1);

INSERT INTO habitacion ( habitacion_id, tipo, capacidad, precio, hotel_id)
VALUES ('MIR-606', 'Premium Suite', 5, 350000, 1);

INSERT INTO habitacion ( habitacion_id, tipo, capacidad, precio, hotel_id)
VALUES ('MIR-707', 'Premium Deluxe', 6, 500000, 1);


INSERT INTO cliente (contrasena_cli, nombre_cli, apellido_cli, correo_electronico_cli, telefono_cli)
VALUES ('meyerfranz1', 'Franz', 'Meyer', 'franz_meyer_pr@gmail.com', 949823331);

INSERT INTO reserva (fecha_entrada, fecha_salida, cantidad_personas, cliente_id, habitacion_id)
VALUES (
    TO_DATE('2025-05-10 14:00:00', 'YYYY-MM-DD HH24:MI:SS'),
    TO_DATE('2025-05-15 12:00:00', 'YYYY-MM-DD HH24:MI:SS'),
    2, 1, 'MIR-303');

commit;    





