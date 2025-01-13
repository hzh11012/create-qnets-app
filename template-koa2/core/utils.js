const moment = require('moment');

const formatDate = (date, format = 'YYYY-MM-DD HH:mm:ss') => {
    return date ? moment(date).format(format) : null;
};

module.exports = {
    formatDate
};
