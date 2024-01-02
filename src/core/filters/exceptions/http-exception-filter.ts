import { ArgumentsHost, Catch, HttpException, Logger } from "@nestjs/common";

@Catch(HttpException)
export class HttpExceptionFilter {

    constructor(private readonly logger: Logger) {}

    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const statusCode = exception.getStatus();
        const errorResponse = exception.getResponse();
        const errorMessage = errorResponse['message'] || exception.message;

        this.logger.error(errorMessage, request.url, errorResponse);

        if (statusCode === 500) {
            response.status(statusCode).json({
                message: 'Internal Server Error'
            });
        } else if (statusCode === 401) {
            response.status(statusCode).json({
                message: errorMessage
            });
        } else {
            response.status(statusCode).json({
                message: errorMessage
            });
        }
    }
}
