
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class FindGameTagsInput {
    size?: number;
}

export class TokenInput {
    method: string;
    mob: string;
    pwd: string;
}

export class AllSecurities {
    method: string;
    token: string;
    code: string;
}

export class GameTag {
    gameTagId: string;
    isShow?: number;
    tagName?: string;
}

export abstract class IQuery {
    abstract findGameTags(findGameTagsInput?: FindGameTagsInput): GameTag[] | Promise<GameTag[]>;

    abstract getToken(tokenInput: TokenInput): string | Promise<string>;

    abstract getAllSecurities(allSecurities: AllSecurities): string | Promise<string>;
}
