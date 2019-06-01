const Sequelize = require('sequelize')

// mysql://bc7e130ec2910c:515263d3@us-cdbr-iron-east-02.cleardb.net/heroku_fabd7d90832c378?reconnect=true
const db = new Sequelize(
    'heroku_fabd7d90832c378', // database name
    'bc7e130ec2910c', // username
    '515263d3',  // password
    {
        host: 'us-cdbr-iron-east-02.cleardb.net',
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
       defaultValue:10,
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
