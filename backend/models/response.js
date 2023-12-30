const createSuccessResponse = (data) => {
    return {
        status: 'success',
        message: 'Operation successful',
        data: data,
    };
};

const createErrorResponse = (message) => {
    return {
        status: 'error',
        message: message,
    };
};

module.exports = {
    createSuccessResponse,
    createErrorResponse,
};
