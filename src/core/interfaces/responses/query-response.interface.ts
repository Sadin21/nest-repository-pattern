import { BaseResponse } from "./base-response.interface";

export interface QueryResponse extends BaseResponse {
    data?: any[];
    totalRecords?: number | null;
}
