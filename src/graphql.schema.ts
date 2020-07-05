
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class TokenInput {
    method?: string;
    mob?: string;
    pwd?: string;
}

export class AllSecurities {
    method?: string;
    token?: string;
    code?: string;
}

export abstract class IQuery {
    abstract get_token(tokenInput?: TokenInput): string | Promise<string>;

    abstract get_all_securities(allSecurities?: AllSecurities): string | Promise<string>;

    abstract loginById(id: string): User | Promise<User>;
}

export class User {
    id: string;
    email: string;
    first_name?: string;
    last_name?: string;
    avatar?: string;
}
