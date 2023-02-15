const mysql = require('mysql');
const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/clientes/', (req, res) => {


    let con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "restaurante"
    });

    let sql = "select * from clientes";

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, function (err, result) {

                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });

});

app.get('/api/clientes/:id', (req, res) => {


    let con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "restaurante"
    });

    let sql = "select * from clientes where id_cliente = ?";
    let parametros = [req.params.id];

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, parametros, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });

});

app.post('/api/clientes/', (req, res) => {

    let con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "restaurante"
    });

    let sql = "insert into clientes " +
        " (nombre) " +
        " values (?)";

    let parametros = [req.body.nombre,

    ];

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, parametros, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });
});

app.put('/api/clientes/:id', (req, res) => {


    let con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "restaurante"
    });

    let sql = " update clientes set nombre = ?, "
    " where id_cliente = ? ";

    let parametros = [req.body.nombre,
        req.params.id
    ];

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, parametros, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });

});

app.delete('/api/clientes/:id', (req, res) => {

    let con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "restaurante"
    });

    let sql = "delete from clientes where id_cliente = ?";

    let parametros = [req.params.id];

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, parametros, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });

});

app.get('/api/categorias/', (req, res) => {


    let con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "restaurante"
    });

    let sql = "select * from categorias";

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, function (err, result) {

                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });

});

app.get('/api/categorias/:id', (req, res) => {


    let con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "restaurante"
    });

    let sql = "select * from categorias where id_categoria = ?";
    let parametros = [req.params.id];

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, parametros, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });

});

app.post('/api/categorias/', (req, res) => {

    let con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "restaurante"
    });

    let sql = "insert into categorias " +
        " (nombre, descripcion) " +
        " values (?, ?)";

    let parametros = [req.body.nombre,
        req.body.descripcion,

    ];

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, parametros, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });
});

app.put('/api/categorias/:id', (req, res) => {


    let con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "restaurante"
    });

    let sql = " update categorias set nombre = ?, " +
        " descripcion = ?, " +
        " where id_categoria = ? ";

    let parametros = [req.body.nombre,
        req.body.descripcion,
        req.params.id
    ];

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, parametros, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });

});

app.delete('/api/categorias/:id', (req, res) => {

    let con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "restaurante"
    });

    let sql = "delete from categorias where id_categoria = ?";

    let parametros = [req.params.id];

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, parametros, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });

});

app.get('/api/combos/', (req, res) => {

    let con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "restaurante"
    });

    let sql = "select * from combos";

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, function (err, result) {

                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });

});

app.get('/api/combos/:id', (req, res) => {


    let con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "restaurante"
    });

    let sql = "select * from combos where id_combo = ?";
    let parametros = [req.params.id];

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, parametros, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });

});

app.post('/api/combos/', (req, res) => {

    let con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "restaurante"
    });

    let sql = "insert into combos " +
        " (id_producto, id_categoria, nombre) " +
        " values (?, ?, ?)";

    let parametros = [req.body.id_producto,
        req.body.id_categoria,
        req.body.nombre,

    ];

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, parametros, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });
});

app.put('/api/combos/:id', (req, res) => {


    let con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "restaurante"
    });

    let sql = " update combos set id_producto = ?, " +
        " id_categoria = ?, " +
        " nombre = ?, " +
        " where id_combo = ? ";

    let parametros = [req.body.id_producto,
        req.body.id_categoria,
        req.body.nombre,
        req.params.id
    ];

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, parametros, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });

});

app.delete('/api/combos/:id', (req, res) => {

    let con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "restaurante"
    });

    let sql = "delete from combos where id_combo = ?";

    let parametros = [req.params.id];

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, parametros, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });

});

app.get('/api/productos/', (req, res) => {

    let con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "restaurante"
    });

    let sql = "select * from productos";

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, function (err, result) {

                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });

});

app.get('/api/productos/:id', (req, res) => {


    let con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "restaurante"
    });

    let sql = "select * from productos where id_producto = ?";
    let parametros = [req.params.id];

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, parametros, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });

});

app.post('/api/productos/', (req, res) => {

    let con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "restaurante"
    });

    let sql = "insert into productos " +
        " (nombre, precio) " +
        " values (?, ?)";

    let parametros = [req.body.nombre,
        req.body.precio
    ];

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, parametros, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });
});

app.put('/api/productos/:id', (req, res) => {


    let con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "restaurante"
    });

    let sql = " update productos set nombre = ?, " +
        " precio = ?, " +
        " where id_producto = ? ";

    let parametros = [req.body.nombre,
        req.body.precio,
        req.params.id
    ];

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, parametros, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });

});

app.delete('/api/productos/:id', (req, res) => {

    let con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "restaurante"
    });

    let sql = "delete from productos where id_producto = ?";

    let parametros = [req.params.id];

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, parametros, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });

});

app.get('/api/mesas/', (req, res) => {

    let con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "restaurante"
    });

    let sql = "select * from mesas";

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, function (err, result) {

                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });

});

app.get('/api/mesas/:id', (req, res) => {


    let con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "restaurante"
    });

    let sql = "select * from mesas where id_mesa = ?";
    let parametros = [req.params.id];

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, parametros, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });

});

app.post('/api/mesas/', (req, res) => {

    let con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "restaurante"
    });

    let sql = "insert into mesas " +
        " (id_cliente) " +
        " values (?)";

    let parametros = [req.body.id_cliente

    ];

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, parametros, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });
});

app.put('/api/mesas/:id', (req, res) => {


    let con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "restaurante"
    });

    let sql = " update mesas set id_cliente = ?, " +
        " where id_mesa = ? ";

    let parametros = [req.body.id_cliente,
        req.params.id
    ];

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, parametros, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });

});

app.delete('/api/mesas/:id', (req, res) => {

    let con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "restaurante"
    });

    let sql = "delete from mesas where id_mesa = ?";

    let parametros = [req.params.id];

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, parametros, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });

});

app.get('/api/ordenes/', (req, res) => {

    let con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "restaurante"
    });

    let sql = "select * from ordenes";

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, function (err, result) {

                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });

});

app.get('/api/ordenes/:id', (req, res) => {


    let con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "restaurante"
    });

    let sql = "select * from ordenes where id_orden = ?";
    let parametros = [req.params.id];

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, parametros, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });

});

app.post('/api/ordenes/', (req, res) => {

    let con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "restaurante"
    });

    let sql = "insert into ordenes " +
        " (fecha, estado, id_mesa) " +
        " values (?, ?, ?)";

    let parametros = [req.body.fecha,
        req.body.estado,
        req.body.id_mesa
    ];

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, parametros, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });
});

app.put('/api/ordenes/:id', (req, res) => {


    let con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "restaurante"
    });

    let sql = " update ordenes set fecha = ?, " +
        " estado = ?, " +
        " id_mesa = ?, " +
        " where id_orden = ? ";

    let parametros = [req.body.fecha,
        req.body.estado,
        req.body.id_mesa,
        req.params.id
    ];

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, parametros, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });

});

app.delete('/api/ordenes/:id', (req, res) => {

    let con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "restaurante"
    });

    let sql = "delete from ordenes where id_orden = ?";

    let parametros = [req.params.id];

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, parametros, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });

});

app.get('/api/detalle_orden/', (req, res) => {

    let con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "restaurante"
    });

    let sql = "select * from detalle_orden";

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, function (err, result) {

                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });

});

app.get('/api/detalle_orden/:id', (req, res) => {


    let con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "restaurante"
    });

    let sql = "select * from detalle_orden where id_detalle = ?";
    let parametros = [req.params.id];

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, parametros, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });

});

app.post('/api/detalle_orden/', (req, res) => {

    let con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "restaurante"
    });

    let sql = "insert into detalle_orden " +
        " (id_orden, id_producto) " +
        " values (?, ?)";

    let parametros = [req.body.id_orden,
        req.body.id_producto,
    ];

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, parametros, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });
});

app.put('/api/detalle_orden/:id', (req, res) => {


    let con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "restaurante"
    });

    let sql = " update detalle_orden set id_orden = ?, " +
        " id_producto = ?, " +
        " where id_detalle = ? ";

    let parametros = [req.body.fecha,
        req.body.estado,
        req.body.id_mesa,
        req.params.id
    ];

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, parametros, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });

});

app.delete('/api/detalle_orden/:id', (req, res) => {

    let con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "restaurante"
    });

    let sql = "delete from detalle_orden where id_detalle = ?";

    let parametros = [req.params.id];

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, parametros, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });

});


app.listen(3000);