const Sequelize = require('sequelize')

const db = new Sequelize(
    'task2', // database name
    'task2', // username
    'task2',  // password
    {
        host: 'localhost',
        dialect:'mysql'
    }
)

const Users = db.define('users',{

    name:{
        type : Sequelize.STRING,
        allowNull : false,
    },
   email:{
    type : Sequelize.STRING,
    isEmail: true,
    allowNull:false,
    unique :true,
   },
   credit:{
       type:Sequelize.INTEGER,
       defaultValue:0,
   }
    
})

const Transactions = db.define('transactions',{

    from:{
        type : Sequelize.STRING,
        allowNull : false,
    },
    to:{
        type : Sequelize.STRING,
        allowNull : false,
    },
   time:{
       type:Sequelize.DATE,
       allowNull:false,
   }
    
})

module.exports = {
    db,Users, Transactions
}
