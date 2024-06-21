const daoCommon = require('./common/daoCommon')

const friendDao = {
    ...daoCommon, ...require("./api/friendDao") 
}

const userDao = {
    ...daoCommon, ...require("./api/userDao")
}

module.exports = {friendDao, userDao}
