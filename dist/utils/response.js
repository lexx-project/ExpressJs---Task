export const succesResponse = (res, message, data = null, statusCode = 200) => {
    return res.status(statusCode).json({
        succes: true,
        message,
        data,
    });
};
export const errorResponse = (res, message, statusCode = 400, errors = null) => {
    return res.status(statusCode).json({
        succes: false,
        message,
        errors
    });
};
//# sourceMappingURL=response.js.map