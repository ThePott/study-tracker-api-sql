import { NextFunction, Request, Response } from 'express';

export const ErrorTypes = {
    DATABASE: 'DATABASE_ERROR',
    VALIDATION: 'VALIDATION_ERROR',
    AUTHORIZATION: 'AUTHORIZATION_ERROR',
    NOT_FOUND: 'NOT_FOUND_ERROR',
    UNKNOWN: 'UNKNOWN_ERROR'
};

export const errorHandler = (error: any, req: Request, res: Response, next: NextFunction) => {
    console.error({ error })
    console.error('---- search error based on', Object.keys(error))

    let statusCode = 500;
    let errorType = ErrorTypes.UNKNOWN;
    let message = 'An unexpected error occurred';

    switch (error.name) {
        case 'ValidationError':
            statusCode = 400;
            errorType = ErrorTypes.VALIDATION;
            message = error.message || 'Invalid input data';
            break;
        case 'AuthorizationError':
            statusCode = 403;
            errorType = ErrorTypes.AUTHORIZATION;
            message = error.message || 'You are not authorized to perform this action';
            break;
        case 'NotFoundError':
            statusCode = 404;
            errorType = ErrorTypes.NOT_FOUND;
            message = error.message || 'Requested resource not found';
            break;
        case 'DatabaseError':
            statusCode = 500;
            errorType = ErrorTypes.DATABASE;
            message = error.message || 'A database error occurred';
            break;
    }

    res.status(statusCode).json({
        error: {
            type: errorType,
            message: message,
            ...(process.env.NODE_ENV === 'development' && { details: error.stack })
        }
    });
};
