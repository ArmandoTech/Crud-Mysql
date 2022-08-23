const controller= {}

controller.list= (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM customer', (err, customers) => {
            if (err) {
                res.json(err)
            } else {
                res.render('customer', {
                    data: customers,
                })
            }
        })
    })    
}

module.exports= controller