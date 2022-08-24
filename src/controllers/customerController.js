const controller= {}

controller.read= (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM customer', (err, rows) => {
            if (err) {
                res.json(err)
            } else {
                res.render('customer', {
                    data: rows,
                })
            }
        })
    })    
}

controller.save= (req, res) => {
    const data= req.body
    
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO customer set ?', [data], (err, rows) => {
            if (err) {
                res.json(err)
            } else {
                res.redirect('/')
            }
        })
    })
}

controller.delete= (req, res) => {
    const { id }= req.params
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM customer WHERE id= ?', [id], (err, rows) => {
            if (err) {
                res.json(err)
            } else {
                res.redirect('/')
            }
        })
    })
}

controller.selectUpdate= (req, res) => {
    const { id }= req.params
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM customer WHERE id= ?', [id], (err, rows) => {
            res.render('customer-edit', {
                data: rows[0]
            })
        })
    })
}

controller.saveUpdate= (req, res) => {
    const { id }= req.params
    const data= req.body
    req.getConnection((err, conn) => {
        conn.query('UPDATE customer set ? WHERE id= ?', [data, id], (err, rows) => {
            if (err) {
                res.json(err)
            } else {
                res.redirect('/')
            }
        })
    })
}

module.exports= controller