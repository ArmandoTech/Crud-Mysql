const controller= {}

controller.list= (req, res) => {
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
            console.log(rows)
            res.send('works')
        })
    })
}

module.exports= controller