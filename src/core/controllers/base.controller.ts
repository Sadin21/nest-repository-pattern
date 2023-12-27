import { BaseResponse, QueryResponse } from "../interfaces";

export abstract class BaseController {
  
    // protected abstract create(...params: any): BaseResponse | Promise<BaseResponse>;
    // protected abstract update(...params: any): BaseResponse | Promise<BaseResponse>;
    // protected abstract delete(...params: any): BaseResponse | Promise<BaseResponse>;
    // protected abstract query(...params: any): QueryResponse | Promise<QueryResponse>;
    // protected abstract getById(...params: any): BaseResponse | Promise<BaseResponse>;
  
    /**
     * Create an uniform error object
     *
     * @param err - Error detail object
     * @param message - Error message
     * @param code - Error code
     * @returns BaseResponse object with error data
    */
    protected createErrObj(err: any, message = '', code = ''): BaseResponse{
      return { code, message, error: err };
    }
  
    /**
     * Create an uniform success object
     *
     * @param data - Query data and total record
     * @param message - Success message
     * @param code - Success code
     * @returns QueryResponse object with success data
    */
    protected createQueryObj({ data, total }: { data: any, total?: number | null }, message = 'Success', code = 'SUCCESS'): QueryResponse{
      return { code, message, data, totalRecords: total };
    }
  
    /**
     * Create an uniform success object
     *
     * @param data - Success obj
     * @param message - Success message
     * @param code - Success code
     * @returns BaseResponse object with success data
    */
    protected createSuccessObj(data: any, message = 'Success', code = 'SUCCESS'): BaseResponse{
      return { code, message, data };
    }
}
