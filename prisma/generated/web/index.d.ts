
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model gk_about
 * 
 */
export type gk_about = $Result.DefaultSelection<Prisma.$gk_aboutPayload>
/**
 * Model gk_event
 * 
 */
export type gk_event = $Result.DefaultSelection<Prisma.$gk_eventPayload>
/**
 * Model gk_news
 * 
 */
export type gk_news = $Result.DefaultSelection<Prisma.$gk_newsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Gk_abouts
 * const gk_abouts = await prisma.gk_about.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Gk_abouts
   * const gk_abouts = await prisma.gk_about.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.gk_about`: Exposes CRUD operations for the **gk_about** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Gk_abouts
    * const gk_abouts = await prisma.gk_about.findMany()
    * ```
    */
  get gk_about(): Prisma.gk_aboutDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gk_event`: Exposes CRUD operations for the **gk_event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Gk_events
    * const gk_events = await prisma.gk_event.findMany()
    * ```
    */
  get gk_event(): Prisma.gk_eventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gk_news`: Exposes CRUD operations for the **gk_news** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Gk_news
    * const gk_news = await prisma.gk_news.findMany()
    * ```
    */
  get gk_news(): Prisma.gk_newsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    gk_about: 'gk_about',
    gk_event: 'gk_event',
    gk_news: 'gk_news'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "gk_about" | "gk_event" | "gk_news"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      gk_about: {
        payload: Prisma.$gk_aboutPayload<ExtArgs>
        fields: Prisma.gk_aboutFieldRefs
        operations: {
          findUnique: {
            args: Prisma.gk_aboutFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gk_aboutPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.gk_aboutFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gk_aboutPayload>
          }
          findFirst: {
            args: Prisma.gk_aboutFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gk_aboutPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.gk_aboutFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gk_aboutPayload>
          }
          findMany: {
            args: Prisma.gk_aboutFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gk_aboutPayload>[]
          }
          create: {
            args: Prisma.gk_aboutCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gk_aboutPayload>
          }
          createMany: {
            args: Prisma.gk_aboutCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.gk_aboutDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gk_aboutPayload>
          }
          update: {
            args: Prisma.gk_aboutUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gk_aboutPayload>
          }
          deleteMany: {
            args: Prisma.gk_aboutDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.gk_aboutUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.gk_aboutUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gk_aboutPayload>
          }
          aggregate: {
            args: Prisma.Gk_aboutAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGk_about>
          }
          groupBy: {
            args: Prisma.gk_aboutGroupByArgs<ExtArgs>
            result: $Utils.Optional<Gk_aboutGroupByOutputType>[]
          }
          count: {
            args: Prisma.gk_aboutCountArgs<ExtArgs>
            result: $Utils.Optional<Gk_aboutCountAggregateOutputType> | number
          }
        }
      }
      gk_event: {
        payload: Prisma.$gk_eventPayload<ExtArgs>
        fields: Prisma.gk_eventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.gk_eventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gk_eventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.gk_eventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gk_eventPayload>
          }
          findFirst: {
            args: Prisma.gk_eventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gk_eventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.gk_eventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gk_eventPayload>
          }
          findMany: {
            args: Prisma.gk_eventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gk_eventPayload>[]
          }
          create: {
            args: Prisma.gk_eventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gk_eventPayload>
          }
          createMany: {
            args: Prisma.gk_eventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.gk_eventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gk_eventPayload>
          }
          update: {
            args: Prisma.gk_eventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gk_eventPayload>
          }
          deleteMany: {
            args: Prisma.gk_eventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.gk_eventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.gk_eventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gk_eventPayload>
          }
          aggregate: {
            args: Prisma.Gk_eventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGk_event>
          }
          groupBy: {
            args: Prisma.gk_eventGroupByArgs<ExtArgs>
            result: $Utils.Optional<Gk_eventGroupByOutputType>[]
          }
          count: {
            args: Prisma.gk_eventCountArgs<ExtArgs>
            result: $Utils.Optional<Gk_eventCountAggregateOutputType> | number
          }
        }
      }
      gk_news: {
        payload: Prisma.$gk_newsPayload<ExtArgs>
        fields: Prisma.gk_newsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.gk_newsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gk_newsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.gk_newsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gk_newsPayload>
          }
          findFirst: {
            args: Prisma.gk_newsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gk_newsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.gk_newsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gk_newsPayload>
          }
          findMany: {
            args: Prisma.gk_newsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gk_newsPayload>[]
          }
          create: {
            args: Prisma.gk_newsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gk_newsPayload>
          }
          createMany: {
            args: Prisma.gk_newsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.gk_newsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gk_newsPayload>
          }
          update: {
            args: Prisma.gk_newsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gk_newsPayload>
          }
          deleteMany: {
            args: Prisma.gk_newsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.gk_newsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.gk_newsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gk_newsPayload>
          }
          aggregate: {
            args: Prisma.Gk_newsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGk_news>
          }
          groupBy: {
            args: Prisma.gk_newsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Gk_newsGroupByOutputType>[]
          }
          count: {
            args: Prisma.gk_newsCountArgs<ExtArgs>
            result: $Utils.Optional<Gk_newsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    gk_about?: gk_aboutOmit
    gk_event?: gk_eventOmit
    gk_news?: gk_newsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model gk_about
   */

  export type AggregateGk_about = {
    _count: Gk_aboutCountAggregateOutputType | null
    _avg: Gk_aboutAvgAggregateOutputType | null
    _sum: Gk_aboutSumAggregateOutputType | null
    _min: Gk_aboutMinAggregateOutputType | null
    _max: Gk_aboutMaxAggregateOutputType | null
  }

  export type Gk_aboutAvgAggregateOutputType = {
    id: number | null
  }

  export type Gk_aboutSumAggregateOutputType = {
    id: number | null
  }

  export type Gk_aboutMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    is_active: boolean | null
    created_at: Date | null
    image: string | null
  }

  export type Gk_aboutMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    is_active: boolean | null
    created_at: Date | null
    image: string | null
  }

  export type Gk_aboutCountAggregateOutputType = {
    id: number
    title: number
    description: number
    is_active: number
    created_at: number
    image: number
    _all: number
  }


  export type Gk_aboutAvgAggregateInputType = {
    id?: true
  }

  export type Gk_aboutSumAggregateInputType = {
    id?: true
  }

  export type Gk_aboutMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    is_active?: true
    created_at?: true
    image?: true
  }

  export type Gk_aboutMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    is_active?: true
    created_at?: true
    image?: true
  }

  export type Gk_aboutCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    is_active?: true
    created_at?: true
    image?: true
    _all?: true
  }

  export type Gk_aboutAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which gk_about to aggregate.
     */
    where?: gk_aboutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gk_abouts to fetch.
     */
    orderBy?: gk_aboutOrderByWithRelationInput | gk_aboutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: gk_aboutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gk_abouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gk_abouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned gk_abouts
    **/
    _count?: true | Gk_aboutCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Gk_aboutAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Gk_aboutSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Gk_aboutMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Gk_aboutMaxAggregateInputType
  }

  export type GetGk_aboutAggregateType<T extends Gk_aboutAggregateArgs> = {
        [P in keyof T & keyof AggregateGk_about]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGk_about[P]>
      : GetScalarType<T[P], AggregateGk_about[P]>
  }




  export type gk_aboutGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: gk_aboutWhereInput
    orderBy?: gk_aboutOrderByWithAggregationInput | gk_aboutOrderByWithAggregationInput[]
    by: Gk_aboutScalarFieldEnum[] | Gk_aboutScalarFieldEnum
    having?: gk_aboutScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Gk_aboutCountAggregateInputType | true
    _avg?: Gk_aboutAvgAggregateInputType
    _sum?: Gk_aboutSumAggregateInputType
    _min?: Gk_aboutMinAggregateInputType
    _max?: Gk_aboutMaxAggregateInputType
  }

  export type Gk_aboutGroupByOutputType = {
    id: number
    title: string
    description: string | null
    is_active: boolean
    created_at: Date
    image: string
    _count: Gk_aboutCountAggregateOutputType | null
    _avg: Gk_aboutAvgAggregateOutputType | null
    _sum: Gk_aboutSumAggregateOutputType | null
    _min: Gk_aboutMinAggregateOutputType | null
    _max: Gk_aboutMaxAggregateOutputType | null
  }

  type GetGk_aboutGroupByPayload<T extends gk_aboutGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Gk_aboutGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Gk_aboutGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Gk_aboutGroupByOutputType[P]>
            : GetScalarType<T[P], Gk_aboutGroupByOutputType[P]>
        }
      >
    >


  export type gk_aboutSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    is_active?: boolean
    created_at?: boolean
    image?: boolean
  }, ExtArgs["result"]["gk_about"]>



  export type gk_aboutSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    is_active?: boolean
    created_at?: boolean
    image?: boolean
  }

  export type gk_aboutOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "is_active" | "created_at" | "image", ExtArgs["result"]["gk_about"]>

  export type $gk_aboutPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "gk_about"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
      is_active: boolean
      created_at: Date
      image: string
    }, ExtArgs["result"]["gk_about"]>
    composites: {}
  }

  type gk_aboutGetPayload<S extends boolean | null | undefined | gk_aboutDefaultArgs> = $Result.GetResult<Prisma.$gk_aboutPayload, S>

  type gk_aboutCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<gk_aboutFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Gk_aboutCountAggregateInputType | true
    }

  export interface gk_aboutDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['gk_about'], meta: { name: 'gk_about' } }
    /**
     * Find zero or one Gk_about that matches the filter.
     * @param {gk_aboutFindUniqueArgs} args - Arguments to find a Gk_about
     * @example
     * // Get one Gk_about
     * const gk_about = await prisma.gk_about.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends gk_aboutFindUniqueArgs>(args: SelectSubset<T, gk_aboutFindUniqueArgs<ExtArgs>>): Prisma__gk_aboutClient<$Result.GetResult<Prisma.$gk_aboutPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Gk_about that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {gk_aboutFindUniqueOrThrowArgs} args - Arguments to find a Gk_about
     * @example
     * // Get one Gk_about
     * const gk_about = await prisma.gk_about.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends gk_aboutFindUniqueOrThrowArgs>(args: SelectSubset<T, gk_aboutFindUniqueOrThrowArgs<ExtArgs>>): Prisma__gk_aboutClient<$Result.GetResult<Prisma.$gk_aboutPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gk_about that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gk_aboutFindFirstArgs} args - Arguments to find a Gk_about
     * @example
     * // Get one Gk_about
     * const gk_about = await prisma.gk_about.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends gk_aboutFindFirstArgs>(args?: SelectSubset<T, gk_aboutFindFirstArgs<ExtArgs>>): Prisma__gk_aboutClient<$Result.GetResult<Prisma.$gk_aboutPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gk_about that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gk_aboutFindFirstOrThrowArgs} args - Arguments to find a Gk_about
     * @example
     * // Get one Gk_about
     * const gk_about = await prisma.gk_about.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends gk_aboutFindFirstOrThrowArgs>(args?: SelectSubset<T, gk_aboutFindFirstOrThrowArgs<ExtArgs>>): Prisma__gk_aboutClient<$Result.GetResult<Prisma.$gk_aboutPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Gk_abouts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gk_aboutFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Gk_abouts
     * const gk_abouts = await prisma.gk_about.findMany()
     * 
     * // Get first 10 Gk_abouts
     * const gk_abouts = await prisma.gk_about.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gk_aboutWithIdOnly = await prisma.gk_about.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends gk_aboutFindManyArgs>(args?: SelectSubset<T, gk_aboutFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gk_aboutPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Gk_about.
     * @param {gk_aboutCreateArgs} args - Arguments to create a Gk_about.
     * @example
     * // Create one Gk_about
     * const Gk_about = await prisma.gk_about.create({
     *   data: {
     *     // ... data to create a Gk_about
     *   }
     * })
     * 
     */
    create<T extends gk_aboutCreateArgs>(args: SelectSubset<T, gk_aboutCreateArgs<ExtArgs>>): Prisma__gk_aboutClient<$Result.GetResult<Prisma.$gk_aboutPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Gk_abouts.
     * @param {gk_aboutCreateManyArgs} args - Arguments to create many Gk_abouts.
     * @example
     * // Create many Gk_abouts
     * const gk_about = await prisma.gk_about.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends gk_aboutCreateManyArgs>(args?: SelectSubset<T, gk_aboutCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Gk_about.
     * @param {gk_aboutDeleteArgs} args - Arguments to delete one Gk_about.
     * @example
     * // Delete one Gk_about
     * const Gk_about = await prisma.gk_about.delete({
     *   where: {
     *     // ... filter to delete one Gk_about
     *   }
     * })
     * 
     */
    delete<T extends gk_aboutDeleteArgs>(args: SelectSubset<T, gk_aboutDeleteArgs<ExtArgs>>): Prisma__gk_aboutClient<$Result.GetResult<Prisma.$gk_aboutPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Gk_about.
     * @param {gk_aboutUpdateArgs} args - Arguments to update one Gk_about.
     * @example
     * // Update one Gk_about
     * const gk_about = await prisma.gk_about.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends gk_aboutUpdateArgs>(args: SelectSubset<T, gk_aboutUpdateArgs<ExtArgs>>): Prisma__gk_aboutClient<$Result.GetResult<Prisma.$gk_aboutPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Gk_abouts.
     * @param {gk_aboutDeleteManyArgs} args - Arguments to filter Gk_abouts to delete.
     * @example
     * // Delete a few Gk_abouts
     * const { count } = await prisma.gk_about.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends gk_aboutDeleteManyArgs>(args?: SelectSubset<T, gk_aboutDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gk_abouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gk_aboutUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Gk_abouts
     * const gk_about = await prisma.gk_about.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends gk_aboutUpdateManyArgs>(args: SelectSubset<T, gk_aboutUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Gk_about.
     * @param {gk_aboutUpsertArgs} args - Arguments to update or create a Gk_about.
     * @example
     * // Update or create a Gk_about
     * const gk_about = await prisma.gk_about.upsert({
     *   create: {
     *     // ... data to create a Gk_about
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gk_about we want to update
     *   }
     * })
     */
    upsert<T extends gk_aboutUpsertArgs>(args: SelectSubset<T, gk_aboutUpsertArgs<ExtArgs>>): Prisma__gk_aboutClient<$Result.GetResult<Prisma.$gk_aboutPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Gk_abouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gk_aboutCountArgs} args - Arguments to filter Gk_abouts to count.
     * @example
     * // Count the number of Gk_abouts
     * const count = await prisma.gk_about.count({
     *   where: {
     *     // ... the filter for the Gk_abouts we want to count
     *   }
     * })
    **/
    count<T extends gk_aboutCountArgs>(
      args?: Subset<T, gk_aboutCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Gk_aboutCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Gk_about.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Gk_aboutAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Gk_aboutAggregateArgs>(args: Subset<T, Gk_aboutAggregateArgs>): Prisma.PrismaPromise<GetGk_aboutAggregateType<T>>

    /**
     * Group by Gk_about.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gk_aboutGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends gk_aboutGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: gk_aboutGroupByArgs['orderBy'] }
        : { orderBy?: gk_aboutGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, gk_aboutGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGk_aboutGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the gk_about model
   */
  readonly fields: gk_aboutFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for gk_about.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__gk_aboutClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the gk_about model
   */
  interface gk_aboutFieldRefs {
    readonly id: FieldRef<"gk_about", 'Int'>
    readonly title: FieldRef<"gk_about", 'String'>
    readonly description: FieldRef<"gk_about", 'String'>
    readonly is_active: FieldRef<"gk_about", 'Boolean'>
    readonly created_at: FieldRef<"gk_about", 'DateTime'>
    readonly image: FieldRef<"gk_about", 'String'>
  }
    

  // Custom InputTypes
  /**
   * gk_about findUnique
   */
  export type gk_aboutFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gk_about
     */
    select?: gk_aboutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gk_about
     */
    omit?: gk_aboutOmit<ExtArgs> | null
    /**
     * Filter, which gk_about to fetch.
     */
    where: gk_aboutWhereUniqueInput
  }

  /**
   * gk_about findUniqueOrThrow
   */
  export type gk_aboutFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gk_about
     */
    select?: gk_aboutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gk_about
     */
    omit?: gk_aboutOmit<ExtArgs> | null
    /**
     * Filter, which gk_about to fetch.
     */
    where: gk_aboutWhereUniqueInput
  }

  /**
   * gk_about findFirst
   */
  export type gk_aboutFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gk_about
     */
    select?: gk_aboutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gk_about
     */
    omit?: gk_aboutOmit<ExtArgs> | null
    /**
     * Filter, which gk_about to fetch.
     */
    where?: gk_aboutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gk_abouts to fetch.
     */
    orderBy?: gk_aboutOrderByWithRelationInput | gk_aboutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for gk_abouts.
     */
    cursor?: gk_aboutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gk_abouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gk_abouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of gk_abouts.
     */
    distinct?: Gk_aboutScalarFieldEnum | Gk_aboutScalarFieldEnum[]
  }

  /**
   * gk_about findFirstOrThrow
   */
  export type gk_aboutFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gk_about
     */
    select?: gk_aboutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gk_about
     */
    omit?: gk_aboutOmit<ExtArgs> | null
    /**
     * Filter, which gk_about to fetch.
     */
    where?: gk_aboutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gk_abouts to fetch.
     */
    orderBy?: gk_aboutOrderByWithRelationInput | gk_aboutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for gk_abouts.
     */
    cursor?: gk_aboutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gk_abouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gk_abouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of gk_abouts.
     */
    distinct?: Gk_aboutScalarFieldEnum | Gk_aboutScalarFieldEnum[]
  }

  /**
   * gk_about findMany
   */
  export type gk_aboutFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gk_about
     */
    select?: gk_aboutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gk_about
     */
    omit?: gk_aboutOmit<ExtArgs> | null
    /**
     * Filter, which gk_abouts to fetch.
     */
    where?: gk_aboutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gk_abouts to fetch.
     */
    orderBy?: gk_aboutOrderByWithRelationInput | gk_aboutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing gk_abouts.
     */
    cursor?: gk_aboutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gk_abouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gk_abouts.
     */
    skip?: number
    distinct?: Gk_aboutScalarFieldEnum | Gk_aboutScalarFieldEnum[]
  }

  /**
   * gk_about create
   */
  export type gk_aboutCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gk_about
     */
    select?: gk_aboutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gk_about
     */
    omit?: gk_aboutOmit<ExtArgs> | null
    /**
     * The data needed to create a gk_about.
     */
    data: XOR<gk_aboutCreateInput, gk_aboutUncheckedCreateInput>
  }

  /**
   * gk_about createMany
   */
  export type gk_aboutCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many gk_abouts.
     */
    data: gk_aboutCreateManyInput | gk_aboutCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * gk_about update
   */
  export type gk_aboutUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gk_about
     */
    select?: gk_aboutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gk_about
     */
    omit?: gk_aboutOmit<ExtArgs> | null
    /**
     * The data needed to update a gk_about.
     */
    data: XOR<gk_aboutUpdateInput, gk_aboutUncheckedUpdateInput>
    /**
     * Choose, which gk_about to update.
     */
    where: gk_aboutWhereUniqueInput
  }

  /**
   * gk_about updateMany
   */
  export type gk_aboutUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update gk_abouts.
     */
    data: XOR<gk_aboutUpdateManyMutationInput, gk_aboutUncheckedUpdateManyInput>
    /**
     * Filter which gk_abouts to update
     */
    where?: gk_aboutWhereInput
    /**
     * Limit how many gk_abouts to update.
     */
    limit?: number
  }

  /**
   * gk_about upsert
   */
  export type gk_aboutUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gk_about
     */
    select?: gk_aboutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gk_about
     */
    omit?: gk_aboutOmit<ExtArgs> | null
    /**
     * The filter to search for the gk_about to update in case it exists.
     */
    where: gk_aboutWhereUniqueInput
    /**
     * In case the gk_about found by the `where` argument doesn't exist, create a new gk_about with this data.
     */
    create: XOR<gk_aboutCreateInput, gk_aboutUncheckedCreateInput>
    /**
     * In case the gk_about was found with the provided `where` argument, update it with this data.
     */
    update: XOR<gk_aboutUpdateInput, gk_aboutUncheckedUpdateInput>
  }

  /**
   * gk_about delete
   */
  export type gk_aboutDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gk_about
     */
    select?: gk_aboutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gk_about
     */
    omit?: gk_aboutOmit<ExtArgs> | null
    /**
     * Filter which gk_about to delete.
     */
    where: gk_aboutWhereUniqueInput
  }

  /**
   * gk_about deleteMany
   */
  export type gk_aboutDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which gk_abouts to delete
     */
    where?: gk_aboutWhereInput
    /**
     * Limit how many gk_abouts to delete.
     */
    limit?: number
  }

  /**
   * gk_about without action
   */
  export type gk_aboutDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gk_about
     */
    select?: gk_aboutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gk_about
     */
    omit?: gk_aboutOmit<ExtArgs> | null
  }


  /**
   * Model gk_event
   */

  export type AggregateGk_event = {
    _count: Gk_eventCountAggregateOutputType | null
    _avg: Gk_eventAvgAggregateOutputType | null
    _sum: Gk_eventSumAggregateOutputType | null
    _min: Gk_eventMinAggregateOutputType | null
    _max: Gk_eventMaxAggregateOutputType | null
  }

  export type Gk_eventAvgAggregateOutputType = {
    id: number | null
  }

  export type Gk_eventSumAggregateOutputType = {
    id: number | null
  }

  export type Gk_eventMinAggregateOutputType = {
    id: number | null
    schedule: string | null
    title: string | null
    content: string | null
    slug: string | null
    is_active: boolean | null
    type: string | null
    created_at: Date | null
  }

  export type Gk_eventMaxAggregateOutputType = {
    id: number | null
    schedule: string | null
    title: string | null
    content: string | null
    slug: string | null
    is_active: boolean | null
    type: string | null
    created_at: Date | null
  }

  export type Gk_eventCountAggregateOutputType = {
    id: number
    schedule: number
    title: number
    content: number
    slug: number
    is_active: number
    type: number
    created_at: number
    _all: number
  }


  export type Gk_eventAvgAggregateInputType = {
    id?: true
  }

  export type Gk_eventSumAggregateInputType = {
    id?: true
  }

  export type Gk_eventMinAggregateInputType = {
    id?: true
    schedule?: true
    title?: true
    content?: true
    slug?: true
    is_active?: true
    type?: true
    created_at?: true
  }

  export type Gk_eventMaxAggregateInputType = {
    id?: true
    schedule?: true
    title?: true
    content?: true
    slug?: true
    is_active?: true
    type?: true
    created_at?: true
  }

  export type Gk_eventCountAggregateInputType = {
    id?: true
    schedule?: true
    title?: true
    content?: true
    slug?: true
    is_active?: true
    type?: true
    created_at?: true
    _all?: true
  }

  export type Gk_eventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which gk_event to aggregate.
     */
    where?: gk_eventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gk_events to fetch.
     */
    orderBy?: gk_eventOrderByWithRelationInput | gk_eventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: gk_eventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gk_events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gk_events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned gk_events
    **/
    _count?: true | Gk_eventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Gk_eventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Gk_eventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Gk_eventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Gk_eventMaxAggregateInputType
  }

  export type GetGk_eventAggregateType<T extends Gk_eventAggregateArgs> = {
        [P in keyof T & keyof AggregateGk_event]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGk_event[P]>
      : GetScalarType<T[P], AggregateGk_event[P]>
  }




  export type gk_eventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: gk_eventWhereInput
    orderBy?: gk_eventOrderByWithAggregationInput | gk_eventOrderByWithAggregationInput[]
    by: Gk_eventScalarFieldEnum[] | Gk_eventScalarFieldEnum
    having?: gk_eventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Gk_eventCountAggregateInputType | true
    _avg?: Gk_eventAvgAggregateInputType
    _sum?: Gk_eventSumAggregateInputType
    _min?: Gk_eventMinAggregateInputType
    _max?: Gk_eventMaxAggregateInputType
  }

  export type Gk_eventGroupByOutputType = {
    id: number
    schedule: string | null
    title: string
    content: string | null
    slug: string
    is_active: boolean
    type: string | null
    created_at: Date
    _count: Gk_eventCountAggregateOutputType | null
    _avg: Gk_eventAvgAggregateOutputType | null
    _sum: Gk_eventSumAggregateOutputType | null
    _min: Gk_eventMinAggregateOutputType | null
    _max: Gk_eventMaxAggregateOutputType | null
  }

  type GetGk_eventGroupByPayload<T extends gk_eventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Gk_eventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Gk_eventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Gk_eventGroupByOutputType[P]>
            : GetScalarType<T[P], Gk_eventGroupByOutputType[P]>
        }
      >
    >


  export type gk_eventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schedule?: boolean
    title?: boolean
    content?: boolean
    slug?: boolean
    is_active?: boolean
    type?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["gk_event"]>



  export type gk_eventSelectScalar = {
    id?: boolean
    schedule?: boolean
    title?: boolean
    content?: boolean
    slug?: boolean
    is_active?: boolean
    type?: boolean
    created_at?: boolean
  }

  export type gk_eventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "schedule" | "title" | "content" | "slug" | "is_active" | "type" | "created_at", ExtArgs["result"]["gk_event"]>

  export type $gk_eventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "gk_event"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      schedule: string | null
      title: string
      content: string | null
      slug: string
      is_active: boolean
      type: string | null
      created_at: Date
    }, ExtArgs["result"]["gk_event"]>
    composites: {}
  }

  type gk_eventGetPayload<S extends boolean | null | undefined | gk_eventDefaultArgs> = $Result.GetResult<Prisma.$gk_eventPayload, S>

  type gk_eventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<gk_eventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Gk_eventCountAggregateInputType | true
    }

  export interface gk_eventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['gk_event'], meta: { name: 'gk_event' } }
    /**
     * Find zero or one Gk_event that matches the filter.
     * @param {gk_eventFindUniqueArgs} args - Arguments to find a Gk_event
     * @example
     * // Get one Gk_event
     * const gk_event = await prisma.gk_event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends gk_eventFindUniqueArgs>(args: SelectSubset<T, gk_eventFindUniqueArgs<ExtArgs>>): Prisma__gk_eventClient<$Result.GetResult<Prisma.$gk_eventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Gk_event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {gk_eventFindUniqueOrThrowArgs} args - Arguments to find a Gk_event
     * @example
     * // Get one Gk_event
     * const gk_event = await prisma.gk_event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends gk_eventFindUniqueOrThrowArgs>(args: SelectSubset<T, gk_eventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__gk_eventClient<$Result.GetResult<Prisma.$gk_eventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gk_event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gk_eventFindFirstArgs} args - Arguments to find a Gk_event
     * @example
     * // Get one Gk_event
     * const gk_event = await prisma.gk_event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends gk_eventFindFirstArgs>(args?: SelectSubset<T, gk_eventFindFirstArgs<ExtArgs>>): Prisma__gk_eventClient<$Result.GetResult<Prisma.$gk_eventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gk_event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gk_eventFindFirstOrThrowArgs} args - Arguments to find a Gk_event
     * @example
     * // Get one Gk_event
     * const gk_event = await prisma.gk_event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends gk_eventFindFirstOrThrowArgs>(args?: SelectSubset<T, gk_eventFindFirstOrThrowArgs<ExtArgs>>): Prisma__gk_eventClient<$Result.GetResult<Prisma.$gk_eventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Gk_events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gk_eventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Gk_events
     * const gk_events = await prisma.gk_event.findMany()
     * 
     * // Get first 10 Gk_events
     * const gk_events = await prisma.gk_event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gk_eventWithIdOnly = await prisma.gk_event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends gk_eventFindManyArgs>(args?: SelectSubset<T, gk_eventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gk_eventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Gk_event.
     * @param {gk_eventCreateArgs} args - Arguments to create a Gk_event.
     * @example
     * // Create one Gk_event
     * const Gk_event = await prisma.gk_event.create({
     *   data: {
     *     // ... data to create a Gk_event
     *   }
     * })
     * 
     */
    create<T extends gk_eventCreateArgs>(args: SelectSubset<T, gk_eventCreateArgs<ExtArgs>>): Prisma__gk_eventClient<$Result.GetResult<Prisma.$gk_eventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Gk_events.
     * @param {gk_eventCreateManyArgs} args - Arguments to create many Gk_events.
     * @example
     * // Create many Gk_events
     * const gk_event = await prisma.gk_event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends gk_eventCreateManyArgs>(args?: SelectSubset<T, gk_eventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Gk_event.
     * @param {gk_eventDeleteArgs} args - Arguments to delete one Gk_event.
     * @example
     * // Delete one Gk_event
     * const Gk_event = await prisma.gk_event.delete({
     *   where: {
     *     // ... filter to delete one Gk_event
     *   }
     * })
     * 
     */
    delete<T extends gk_eventDeleteArgs>(args: SelectSubset<T, gk_eventDeleteArgs<ExtArgs>>): Prisma__gk_eventClient<$Result.GetResult<Prisma.$gk_eventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Gk_event.
     * @param {gk_eventUpdateArgs} args - Arguments to update one Gk_event.
     * @example
     * // Update one Gk_event
     * const gk_event = await prisma.gk_event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends gk_eventUpdateArgs>(args: SelectSubset<T, gk_eventUpdateArgs<ExtArgs>>): Prisma__gk_eventClient<$Result.GetResult<Prisma.$gk_eventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Gk_events.
     * @param {gk_eventDeleteManyArgs} args - Arguments to filter Gk_events to delete.
     * @example
     * // Delete a few Gk_events
     * const { count } = await prisma.gk_event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends gk_eventDeleteManyArgs>(args?: SelectSubset<T, gk_eventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gk_events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gk_eventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Gk_events
     * const gk_event = await prisma.gk_event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends gk_eventUpdateManyArgs>(args: SelectSubset<T, gk_eventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Gk_event.
     * @param {gk_eventUpsertArgs} args - Arguments to update or create a Gk_event.
     * @example
     * // Update or create a Gk_event
     * const gk_event = await prisma.gk_event.upsert({
     *   create: {
     *     // ... data to create a Gk_event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gk_event we want to update
     *   }
     * })
     */
    upsert<T extends gk_eventUpsertArgs>(args: SelectSubset<T, gk_eventUpsertArgs<ExtArgs>>): Prisma__gk_eventClient<$Result.GetResult<Prisma.$gk_eventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Gk_events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gk_eventCountArgs} args - Arguments to filter Gk_events to count.
     * @example
     * // Count the number of Gk_events
     * const count = await prisma.gk_event.count({
     *   where: {
     *     // ... the filter for the Gk_events we want to count
     *   }
     * })
    **/
    count<T extends gk_eventCountArgs>(
      args?: Subset<T, gk_eventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Gk_eventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Gk_event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Gk_eventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Gk_eventAggregateArgs>(args: Subset<T, Gk_eventAggregateArgs>): Prisma.PrismaPromise<GetGk_eventAggregateType<T>>

    /**
     * Group by Gk_event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gk_eventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends gk_eventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: gk_eventGroupByArgs['orderBy'] }
        : { orderBy?: gk_eventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, gk_eventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGk_eventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the gk_event model
   */
  readonly fields: gk_eventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for gk_event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__gk_eventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the gk_event model
   */
  interface gk_eventFieldRefs {
    readonly id: FieldRef<"gk_event", 'Int'>
    readonly schedule: FieldRef<"gk_event", 'String'>
    readonly title: FieldRef<"gk_event", 'String'>
    readonly content: FieldRef<"gk_event", 'String'>
    readonly slug: FieldRef<"gk_event", 'String'>
    readonly is_active: FieldRef<"gk_event", 'Boolean'>
    readonly type: FieldRef<"gk_event", 'String'>
    readonly created_at: FieldRef<"gk_event", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * gk_event findUnique
   */
  export type gk_eventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gk_event
     */
    select?: gk_eventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gk_event
     */
    omit?: gk_eventOmit<ExtArgs> | null
    /**
     * Filter, which gk_event to fetch.
     */
    where: gk_eventWhereUniqueInput
  }

  /**
   * gk_event findUniqueOrThrow
   */
  export type gk_eventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gk_event
     */
    select?: gk_eventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gk_event
     */
    omit?: gk_eventOmit<ExtArgs> | null
    /**
     * Filter, which gk_event to fetch.
     */
    where: gk_eventWhereUniqueInput
  }

  /**
   * gk_event findFirst
   */
  export type gk_eventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gk_event
     */
    select?: gk_eventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gk_event
     */
    omit?: gk_eventOmit<ExtArgs> | null
    /**
     * Filter, which gk_event to fetch.
     */
    where?: gk_eventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gk_events to fetch.
     */
    orderBy?: gk_eventOrderByWithRelationInput | gk_eventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for gk_events.
     */
    cursor?: gk_eventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gk_events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gk_events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of gk_events.
     */
    distinct?: Gk_eventScalarFieldEnum | Gk_eventScalarFieldEnum[]
  }

  /**
   * gk_event findFirstOrThrow
   */
  export type gk_eventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gk_event
     */
    select?: gk_eventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gk_event
     */
    omit?: gk_eventOmit<ExtArgs> | null
    /**
     * Filter, which gk_event to fetch.
     */
    where?: gk_eventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gk_events to fetch.
     */
    orderBy?: gk_eventOrderByWithRelationInput | gk_eventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for gk_events.
     */
    cursor?: gk_eventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gk_events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gk_events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of gk_events.
     */
    distinct?: Gk_eventScalarFieldEnum | Gk_eventScalarFieldEnum[]
  }

  /**
   * gk_event findMany
   */
  export type gk_eventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gk_event
     */
    select?: gk_eventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gk_event
     */
    omit?: gk_eventOmit<ExtArgs> | null
    /**
     * Filter, which gk_events to fetch.
     */
    where?: gk_eventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gk_events to fetch.
     */
    orderBy?: gk_eventOrderByWithRelationInput | gk_eventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing gk_events.
     */
    cursor?: gk_eventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gk_events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gk_events.
     */
    skip?: number
    distinct?: Gk_eventScalarFieldEnum | Gk_eventScalarFieldEnum[]
  }

  /**
   * gk_event create
   */
  export type gk_eventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gk_event
     */
    select?: gk_eventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gk_event
     */
    omit?: gk_eventOmit<ExtArgs> | null
    /**
     * The data needed to create a gk_event.
     */
    data: XOR<gk_eventCreateInput, gk_eventUncheckedCreateInput>
  }

  /**
   * gk_event createMany
   */
  export type gk_eventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many gk_events.
     */
    data: gk_eventCreateManyInput | gk_eventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * gk_event update
   */
  export type gk_eventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gk_event
     */
    select?: gk_eventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gk_event
     */
    omit?: gk_eventOmit<ExtArgs> | null
    /**
     * The data needed to update a gk_event.
     */
    data: XOR<gk_eventUpdateInput, gk_eventUncheckedUpdateInput>
    /**
     * Choose, which gk_event to update.
     */
    where: gk_eventWhereUniqueInput
  }

  /**
   * gk_event updateMany
   */
  export type gk_eventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update gk_events.
     */
    data: XOR<gk_eventUpdateManyMutationInput, gk_eventUncheckedUpdateManyInput>
    /**
     * Filter which gk_events to update
     */
    where?: gk_eventWhereInput
    /**
     * Limit how many gk_events to update.
     */
    limit?: number
  }

  /**
   * gk_event upsert
   */
  export type gk_eventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gk_event
     */
    select?: gk_eventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gk_event
     */
    omit?: gk_eventOmit<ExtArgs> | null
    /**
     * The filter to search for the gk_event to update in case it exists.
     */
    where: gk_eventWhereUniqueInput
    /**
     * In case the gk_event found by the `where` argument doesn't exist, create a new gk_event with this data.
     */
    create: XOR<gk_eventCreateInput, gk_eventUncheckedCreateInput>
    /**
     * In case the gk_event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<gk_eventUpdateInput, gk_eventUncheckedUpdateInput>
  }

  /**
   * gk_event delete
   */
  export type gk_eventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gk_event
     */
    select?: gk_eventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gk_event
     */
    omit?: gk_eventOmit<ExtArgs> | null
    /**
     * Filter which gk_event to delete.
     */
    where: gk_eventWhereUniqueInput
  }

  /**
   * gk_event deleteMany
   */
  export type gk_eventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which gk_events to delete
     */
    where?: gk_eventWhereInput
    /**
     * Limit how many gk_events to delete.
     */
    limit?: number
  }

  /**
   * gk_event without action
   */
  export type gk_eventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gk_event
     */
    select?: gk_eventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gk_event
     */
    omit?: gk_eventOmit<ExtArgs> | null
  }


  /**
   * Model gk_news
   */

  export type AggregateGk_news = {
    _count: Gk_newsCountAggregateOutputType | null
    _avg: Gk_newsAvgAggregateOutputType | null
    _sum: Gk_newsSumAggregateOutputType | null
    _min: Gk_newsMinAggregateOutputType | null
    _max: Gk_newsMaxAggregateOutputType | null
  }

  export type Gk_newsAvgAggregateOutputType = {
    id: number | null
  }

  export type Gk_newsSumAggregateOutputType = {
    id: number | null
  }

  export type Gk_newsMinAggregateOutputType = {
    id: number | null
    schedule: string | null
    title: string | null
    content: string | null
    slug: string | null
    is_active: boolean | null
    type: string | null
    created_at: Date | null
  }

  export type Gk_newsMaxAggregateOutputType = {
    id: number | null
    schedule: string | null
    title: string | null
    content: string | null
    slug: string | null
    is_active: boolean | null
    type: string | null
    created_at: Date | null
  }

  export type Gk_newsCountAggregateOutputType = {
    id: number
    schedule: number
    title: number
    content: number
    slug: number
    is_active: number
    type: number
    created_at: number
    _all: number
  }


  export type Gk_newsAvgAggregateInputType = {
    id?: true
  }

  export type Gk_newsSumAggregateInputType = {
    id?: true
  }

  export type Gk_newsMinAggregateInputType = {
    id?: true
    schedule?: true
    title?: true
    content?: true
    slug?: true
    is_active?: true
    type?: true
    created_at?: true
  }

  export type Gk_newsMaxAggregateInputType = {
    id?: true
    schedule?: true
    title?: true
    content?: true
    slug?: true
    is_active?: true
    type?: true
    created_at?: true
  }

  export type Gk_newsCountAggregateInputType = {
    id?: true
    schedule?: true
    title?: true
    content?: true
    slug?: true
    is_active?: true
    type?: true
    created_at?: true
    _all?: true
  }

  export type Gk_newsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which gk_news to aggregate.
     */
    where?: gk_newsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gk_news to fetch.
     */
    orderBy?: gk_newsOrderByWithRelationInput | gk_newsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: gk_newsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gk_news from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gk_news.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned gk_news
    **/
    _count?: true | Gk_newsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Gk_newsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Gk_newsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Gk_newsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Gk_newsMaxAggregateInputType
  }

  export type GetGk_newsAggregateType<T extends Gk_newsAggregateArgs> = {
        [P in keyof T & keyof AggregateGk_news]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGk_news[P]>
      : GetScalarType<T[P], AggregateGk_news[P]>
  }




  export type gk_newsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: gk_newsWhereInput
    orderBy?: gk_newsOrderByWithAggregationInput | gk_newsOrderByWithAggregationInput[]
    by: Gk_newsScalarFieldEnum[] | Gk_newsScalarFieldEnum
    having?: gk_newsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Gk_newsCountAggregateInputType | true
    _avg?: Gk_newsAvgAggregateInputType
    _sum?: Gk_newsSumAggregateInputType
    _min?: Gk_newsMinAggregateInputType
    _max?: Gk_newsMaxAggregateInputType
  }

  export type Gk_newsGroupByOutputType = {
    id: number
    schedule: string | null
    title: string
    content: string | null
    slug: string
    is_active: boolean
    type: string | null
    created_at: Date
    _count: Gk_newsCountAggregateOutputType | null
    _avg: Gk_newsAvgAggregateOutputType | null
    _sum: Gk_newsSumAggregateOutputType | null
    _min: Gk_newsMinAggregateOutputType | null
    _max: Gk_newsMaxAggregateOutputType | null
  }

  type GetGk_newsGroupByPayload<T extends gk_newsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Gk_newsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Gk_newsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Gk_newsGroupByOutputType[P]>
            : GetScalarType<T[P], Gk_newsGroupByOutputType[P]>
        }
      >
    >


  export type gk_newsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schedule?: boolean
    title?: boolean
    content?: boolean
    slug?: boolean
    is_active?: boolean
    type?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["gk_news"]>



  export type gk_newsSelectScalar = {
    id?: boolean
    schedule?: boolean
    title?: boolean
    content?: boolean
    slug?: boolean
    is_active?: boolean
    type?: boolean
    created_at?: boolean
  }

  export type gk_newsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "schedule" | "title" | "content" | "slug" | "is_active" | "type" | "created_at", ExtArgs["result"]["gk_news"]>

  export type $gk_newsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "gk_news"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      schedule: string | null
      title: string
      content: string | null
      slug: string
      is_active: boolean
      type: string | null
      created_at: Date
    }, ExtArgs["result"]["gk_news"]>
    composites: {}
  }

  type gk_newsGetPayload<S extends boolean | null | undefined | gk_newsDefaultArgs> = $Result.GetResult<Prisma.$gk_newsPayload, S>

  type gk_newsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<gk_newsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Gk_newsCountAggregateInputType | true
    }

  export interface gk_newsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['gk_news'], meta: { name: 'gk_news' } }
    /**
     * Find zero or one Gk_news that matches the filter.
     * @param {gk_newsFindUniqueArgs} args - Arguments to find a Gk_news
     * @example
     * // Get one Gk_news
     * const gk_news = await prisma.gk_news.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends gk_newsFindUniqueArgs>(args: SelectSubset<T, gk_newsFindUniqueArgs<ExtArgs>>): Prisma__gk_newsClient<$Result.GetResult<Prisma.$gk_newsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Gk_news that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {gk_newsFindUniqueOrThrowArgs} args - Arguments to find a Gk_news
     * @example
     * // Get one Gk_news
     * const gk_news = await prisma.gk_news.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends gk_newsFindUniqueOrThrowArgs>(args: SelectSubset<T, gk_newsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__gk_newsClient<$Result.GetResult<Prisma.$gk_newsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gk_news that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gk_newsFindFirstArgs} args - Arguments to find a Gk_news
     * @example
     * // Get one Gk_news
     * const gk_news = await prisma.gk_news.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends gk_newsFindFirstArgs>(args?: SelectSubset<T, gk_newsFindFirstArgs<ExtArgs>>): Prisma__gk_newsClient<$Result.GetResult<Prisma.$gk_newsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gk_news that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gk_newsFindFirstOrThrowArgs} args - Arguments to find a Gk_news
     * @example
     * // Get one Gk_news
     * const gk_news = await prisma.gk_news.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends gk_newsFindFirstOrThrowArgs>(args?: SelectSubset<T, gk_newsFindFirstOrThrowArgs<ExtArgs>>): Prisma__gk_newsClient<$Result.GetResult<Prisma.$gk_newsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Gk_news that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gk_newsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Gk_news
     * const gk_news = await prisma.gk_news.findMany()
     * 
     * // Get first 10 Gk_news
     * const gk_news = await prisma.gk_news.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gk_newsWithIdOnly = await prisma.gk_news.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends gk_newsFindManyArgs>(args?: SelectSubset<T, gk_newsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gk_newsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Gk_news.
     * @param {gk_newsCreateArgs} args - Arguments to create a Gk_news.
     * @example
     * // Create one Gk_news
     * const Gk_news = await prisma.gk_news.create({
     *   data: {
     *     // ... data to create a Gk_news
     *   }
     * })
     * 
     */
    create<T extends gk_newsCreateArgs>(args: SelectSubset<T, gk_newsCreateArgs<ExtArgs>>): Prisma__gk_newsClient<$Result.GetResult<Prisma.$gk_newsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Gk_news.
     * @param {gk_newsCreateManyArgs} args - Arguments to create many Gk_news.
     * @example
     * // Create many Gk_news
     * const gk_news = await prisma.gk_news.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends gk_newsCreateManyArgs>(args?: SelectSubset<T, gk_newsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Gk_news.
     * @param {gk_newsDeleteArgs} args - Arguments to delete one Gk_news.
     * @example
     * // Delete one Gk_news
     * const Gk_news = await prisma.gk_news.delete({
     *   where: {
     *     // ... filter to delete one Gk_news
     *   }
     * })
     * 
     */
    delete<T extends gk_newsDeleteArgs>(args: SelectSubset<T, gk_newsDeleteArgs<ExtArgs>>): Prisma__gk_newsClient<$Result.GetResult<Prisma.$gk_newsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Gk_news.
     * @param {gk_newsUpdateArgs} args - Arguments to update one Gk_news.
     * @example
     * // Update one Gk_news
     * const gk_news = await prisma.gk_news.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends gk_newsUpdateArgs>(args: SelectSubset<T, gk_newsUpdateArgs<ExtArgs>>): Prisma__gk_newsClient<$Result.GetResult<Prisma.$gk_newsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Gk_news.
     * @param {gk_newsDeleteManyArgs} args - Arguments to filter Gk_news to delete.
     * @example
     * // Delete a few Gk_news
     * const { count } = await prisma.gk_news.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends gk_newsDeleteManyArgs>(args?: SelectSubset<T, gk_newsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gk_news.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gk_newsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Gk_news
     * const gk_news = await prisma.gk_news.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends gk_newsUpdateManyArgs>(args: SelectSubset<T, gk_newsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Gk_news.
     * @param {gk_newsUpsertArgs} args - Arguments to update or create a Gk_news.
     * @example
     * // Update or create a Gk_news
     * const gk_news = await prisma.gk_news.upsert({
     *   create: {
     *     // ... data to create a Gk_news
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gk_news we want to update
     *   }
     * })
     */
    upsert<T extends gk_newsUpsertArgs>(args: SelectSubset<T, gk_newsUpsertArgs<ExtArgs>>): Prisma__gk_newsClient<$Result.GetResult<Prisma.$gk_newsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Gk_news.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gk_newsCountArgs} args - Arguments to filter Gk_news to count.
     * @example
     * // Count the number of Gk_news
     * const count = await prisma.gk_news.count({
     *   where: {
     *     // ... the filter for the Gk_news we want to count
     *   }
     * })
    **/
    count<T extends gk_newsCountArgs>(
      args?: Subset<T, gk_newsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Gk_newsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Gk_news.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Gk_newsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Gk_newsAggregateArgs>(args: Subset<T, Gk_newsAggregateArgs>): Prisma.PrismaPromise<GetGk_newsAggregateType<T>>

    /**
     * Group by Gk_news.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gk_newsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends gk_newsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: gk_newsGroupByArgs['orderBy'] }
        : { orderBy?: gk_newsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, gk_newsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGk_newsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the gk_news model
   */
  readonly fields: gk_newsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for gk_news.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__gk_newsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the gk_news model
   */
  interface gk_newsFieldRefs {
    readonly id: FieldRef<"gk_news", 'Int'>
    readonly schedule: FieldRef<"gk_news", 'String'>
    readonly title: FieldRef<"gk_news", 'String'>
    readonly content: FieldRef<"gk_news", 'String'>
    readonly slug: FieldRef<"gk_news", 'String'>
    readonly is_active: FieldRef<"gk_news", 'Boolean'>
    readonly type: FieldRef<"gk_news", 'String'>
    readonly created_at: FieldRef<"gk_news", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * gk_news findUnique
   */
  export type gk_newsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gk_news
     */
    select?: gk_newsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gk_news
     */
    omit?: gk_newsOmit<ExtArgs> | null
    /**
     * Filter, which gk_news to fetch.
     */
    where: gk_newsWhereUniqueInput
  }

  /**
   * gk_news findUniqueOrThrow
   */
  export type gk_newsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gk_news
     */
    select?: gk_newsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gk_news
     */
    omit?: gk_newsOmit<ExtArgs> | null
    /**
     * Filter, which gk_news to fetch.
     */
    where: gk_newsWhereUniqueInput
  }

  /**
   * gk_news findFirst
   */
  export type gk_newsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gk_news
     */
    select?: gk_newsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gk_news
     */
    omit?: gk_newsOmit<ExtArgs> | null
    /**
     * Filter, which gk_news to fetch.
     */
    where?: gk_newsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gk_news to fetch.
     */
    orderBy?: gk_newsOrderByWithRelationInput | gk_newsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for gk_news.
     */
    cursor?: gk_newsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gk_news from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gk_news.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of gk_news.
     */
    distinct?: Gk_newsScalarFieldEnum | Gk_newsScalarFieldEnum[]
  }

  /**
   * gk_news findFirstOrThrow
   */
  export type gk_newsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gk_news
     */
    select?: gk_newsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gk_news
     */
    omit?: gk_newsOmit<ExtArgs> | null
    /**
     * Filter, which gk_news to fetch.
     */
    where?: gk_newsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gk_news to fetch.
     */
    orderBy?: gk_newsOrderByWithRelationInput | gk_newsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for gk_news.
     */
    cursor?: gk_newsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gk_news from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gk_news.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of gk_news.
     */
    distinct?: Gk_newsScalarFieldEnum | Gk_newsScalarFieldEnum[]
  }

  /**
   * gk_news findMany
   */
  export type gk_newsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gk_news
     */
    select?: gk_newsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gk_news
     */
    omit?: gk_newsOmit<ExtArgs> | null
    /**
     * Filter, which gk_news to fetch.
     */
    where?: gk_newsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gk_news to fetch.
     */
    orderBy?: gk_newsOrderByWithRelationInput | gk_newsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing gk_news.
     */
    cursor?: gk_newsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gk_news from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gk_news.
     */
    skip?: number
    distinct?: Gk_newsScalarFieldEnum | Gk_newsScalarFieldEnum[]
  }

  /**
   * gk_news create
   */
  export type gk_newsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gk_news
     */
    select?: gk_newsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gk_news
     */
    omit?: gk_newsOmit<ExtArgs> | null
    /**
     * The data needed to create a gk_news.
     */
    data: XOR<gk_newsCreateInput, gk_newsUncheckedCreateInput>
  }

  /**
   * gk_news createMany
   */
  export type gk_newsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many gk_news.
     */
    data: gk_newsCreateManyInput | gk_newsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * gk_news update
   */
  export type gk_newsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gk_news
     */
    select?: gk_newsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gk_news
     */
    omit?: gk_newsOmit<ExtArgs> | null
    /**
     * The data needed to update a gk_news.
     */
    data: XOR<gk_newsUpdateInput, gk_newsUncheckedUpdateInput>
    /**
     * Choose, which gk_news to update.
     */
    where: gk_newsWhereUniqueInput
  }

  /**
   * gk_news updateMany
   */
  export type gk_newsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update gk_news.
     */
    data: XOR<gk_newsUpdateManyMutationInput, gk_newsUncheckedUpdateManyInput>
    /**
     * Filter which gk_news to update
     */
    where?: gk_newsWhereInput
    /**
     * Limit how many gk_news to update.
     */
    limit?: number
  }

  /**
   * gk_news upsert
   */
  export type gk_newsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gk_news
     */
    select?: gk_newsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gk_news
     */
    omit?: gk_newsOmit<ExtArgs> | null
    /**
     * The filter to search for the gk_news to update in case it exists.
     */
    where: gk_newsWhereUniqueInput
    /**
     * In case the gk_news found by the `where` argument doesn't exist, create a new gk_news with this data.
     */
    create: XOR<gk_newsCreateInput, gk_newsUncheckedCreateInput>
    /**
     * In case the gk_news was found with the provided `where` argument, update it with this data.
     */
    update: XOR<gk_newsUpdateInput, gk_newsUncheckedUpdateInput>
  }

  /**
   * gk_news delete
   */
  export type gk_newsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gk_news
     */
    select?: gk_newsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gk_news
     */
    omit?: gk_newsOmit<ExtArgs> | null
    /**
     * Filter which gk_news to delete.
     */
    where: gk_newsWhereUniqueInput
  }

  /**
   * gk_news deleteMany
   */
  export type gk_newsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which gk_news to delete
     */
    where?: gk_newsWhereInput
    /**
     * Limit how many gk_news to delete.
     */
    limit?: number
  }

  /**
   * gk_news without action
   */
  export type gk_newsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gk_news
     */
    select?: gk_newsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gk_news
     */
    omit?: gk_newsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Gk_aboutScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    is_active: 'is_active',
    created_at: 'created_at',
    image: 'image'
  };

  export type Gk_aboutScalarFieldEnum = (typeof Gk_aboutScalarFieldEnum)[keyof typeof Gk_aboutScalarFieldEnum]


  export const Gk_eventScalarFieldEnum: {
    id: 'id',
    schedule: 'schedule',
    title: 'title',
    content: 'content',
    slug: 'slug',
    is_active: 'is_active',
    type: 'type',
    created_at: 'created_at'
  };

  export type Gk_eventScalarFieldEnum = (typeof Gk_eventScalarFieldEnum)[keyof typeof Gk_eventScalarFieldEnum]


  export const Gk_newsScalarFieldEnum: {
    id: 'id',
    schedule: 'schedule',
    title: 'title',
    content: 'content',
    slug: 'slug',
    is_active: 'is_active',
    type: 'type',
    created_at: 'created_at'
  };

  export type Gk_newsScalarFieldEnum = (typeof Gk_newsScalarFieldEnum)[keyof typeof Gk_newsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const gk_aboutOrderByRelevanceFieldEnum: {
    title: 'title',
    description: 'description',
    image: 'image'
  };

  export type gk_aboutOrderByRelevanceFieldEnum = (typeof gk_aboutOrderByRelevanceFieldEnum)[keyof typeof gk_aboutOrderByRelevanceFieldEnum]


  export const gk_eventOrderByRelevanceFieldEnum: {
    schedule: 'schedule',
    title: 'title',
    content: 'content',
    slug: 'slug',
    type: 'type'
  };

  export type gk_eventOrderByRelevanceFieldEnum = (typeof gk_eventOrderByRelevanceFieldEnum)[keyof typeof gk_eventOrderByRelevanceFieldEnum]


  export const gk_newsOrderByRelevanceFieldEnum: {
    schedule: 'schedule',
    title: 'title',
    content: 'content',
    slug: 'slug',
    type: 'type'
  };

  export type gk_newsOrderByRelevanceFieldEnum = (typeof gk_newsOrderByRelevanceFieldEnum)[keyof typeof gk_newsOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type gk_aboutWhereInput = {
    AND?: gk_aboutWhereInput | gk_aboutWhereInput[]
    OR?: gk_aboutWhereInput[]
    NOT?: gk_aboutWhereInput | gk_aboutWhereInput[]
    id?: IntFilter<"gk_about"> | number
    title?: StringFilter<"gk_about"> | string
    description?: StringNullableFilter<"gk_about"> | string | null
    is_active?: BoolFilter<"gk_about"> | boolean
    created_at?: DateTimeFilter<"gk_about"> | Date | string
    image?: StringFilter<"gk_about"> | string
  }

  export type gk_aboutOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    image?: SortOrder
    _relevance?: gk_aboutOrderByRelevanceInput
  }

  export type gk_aboutWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: gk_aboutWhereInput | gk_aboutWhereInput[]
    OR?: gk_aboutWhereInput[]
    NOT?: gk_aboutWhereInput | gk_aboutWhereInput[]
    title?: StringFilter<"gk_about"> | string
    description?: StringNullableFilter<"gk_about"> | string | null
    is_active?: BoolFilter<"gk_about"> | boolean
    created_at?: DateTimeFilter<"gk_about"> | Date | string
    image?: StringFilter<"gk_about"> | string
  }, "id">

  export type gk_aboutOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    image?: SortOrder
    _count?: gk_aboutCountOrderByAggregateInput
    _avg?: gk_aboutAvgOrderByAggregateInput
    _max?: gk_aboutMaxOrderByAggregateInput
    _min?: gk_aboutMinOrderByAggregateInput
    _sum?: gk_aboutSumOrderByAggregateInput
  }

  export type gk_aboutScalarWhereWithAggregatesInput = {
    AND?: gk_aboutScalarWhereWithAggregatesInput | gk_aboutScalarWhereWithAggregatesInput[]
    OR?: gk_aboutScalarWhereWithAggregatesInput[]
    NOT?: gk_aboutScalarWhereWithAggregatesInput | gk_aboutScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"gk_about"> | number
    title?: StringWithAggregatesFilter<"gk_about"> | string
    description?: StringNullableWithAggregatesFilter<"gk_about"> | string | null
    is_active?: BoolWithAggregatesFilter<"gk_about"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"gk_about"> | Date | string
    image?: StringWithAggregatesFilter<"gk_about"> | string
  }

  export type gk_eventWhereInput = {
    AND?: gk_eventWhereInput | gk_eventWhereInput[]
    OR?: gk_eventWhereInput[]
    NOT?: gk_eventWhereInput | gk_eventWhereInput[]
    id?: IntFilter<"gk_event"> | number
    schedule?: StringNullableFilter<"gk_event"> | string | null
    title?: StringFilter<"gk_event"> | string
    content?: StringNullableFilter<"gk_event"> | string | null
    slug?: StringFilter<"gk_event"> | string
    is_active?: BoolFilter<"gk_event"> | boolean
    type?: StringNullableFilter<"gk_event"> | string | null
    created_at?: DateTimeFilter<"gk_event"> | Date | string
  }

  export type gk_eventOrderByWithRelationInput = {
    id?: SortOrder
    schedule?: SortOrderInput | SortOrder
    title?: SortOrder
    content?: SortOrderInput | SortOrder
    slug?: SortOrder
    is_active?: SortOrder
    type?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _relevance?: gk_eventOrderByRelevanceInput
  }

  export type gk_eventWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: gk_eventWhereInput | gk_eventWhereInput[]
    OR?: gk_eventWhereInput[]
    NOT?: gk_eventWhereInput | gk_eventWhereInput[]
    schedule?: StringNullableFilter<"gk_event"> | string | null
    title?: StringFilter<"gk_event"> | string
    content?: StringNullableFilter<"gk_event"> | string | null
    is_active?: BoolFilter<"gk_event"> | boolean
    type?: StringNullableFilter<"gk_event"> | string | null
    created_at?: DateTimeFilter<"gk_event"> | Date | string
  }, "id" | "slug">

  export type gk_eventOrderByWithAggregationInput = {
    id?: SortOrder
    schedule?: SortOrderInput | SortOrder
    title?: SortOrder
    content?: SortOrderInput | SortOrder
    slug?: SortOrder
    is_active?: SortOrder
    type?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: gk_eventCountOrderByAggregateInput
    _avg?: gk_eventAvgOrderByAggregateInput
    _max?: gk_eventMaxOrderByAggregateInput
    _min?: gk_eventMinOrderByAggregateInput
    _sum?: gk_eventSumOrderByAggregateInput
  }

  export type gk_eventScalarWhereWithAggregatesInput = {
    AND?: gk_eventScalarWhereWithAggregatesInput | gk_eventScalarWhereWithAggregatesInput[]
    OR?: gk_eventScalarWhereWithAggregatesInput[]
    NOT?: gk_eventScalarWhereWithAggregatesInput | gk_eventScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"gk_event"> | number
    schedule?: StringNullableWithAggregatesFilter<"gk_event"> | string | null
    title?: StringWithAggregatesFilter<"gk_event"> | string
    content?: StringNullableWithAggregatesFilter<"gk_event"> | string | null
    slug?: StringWithAggregatesFilter<"gk_event"> | string
    is_active?: BoolWithAggregatesFilter<"gk_event"> | boolean
    type?: StringNullableWithAggregatesFilter<"gk_event"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"gk_event"> | Date | string
  }

  export type gk_newsWhereInput = {
    AND?: gk_newsWhereInput | gk_newsWhereInput[]
    OR?: gk_newsWhereInput[]
    NOT?: gk_newsWhereInput | gk_newsWhereInput[]
    id?: IntFilter<"gk_news"> | number
    schedule?: StringNullableFilter<"gk_news"> | string | null
    title?: StringFilter<"gk_news"> | string
    content?: StringNullableFilter<"gk_news"> | string | null
    slug?: StringFilter<"gk_news"> | string
    is_active?: BoolFilter<"gk_news"> | boolean
    type?: StringNullableFilter<"gk_news"> | string | null
    created_at?: DateTimeFilter<"gk_news"> | Date | string
  }

  export type gk_newsOrderByWithRelationInput = {
    id?: SortOrder
    schedule?: SortOrderInput | SortOrder
    title?: SortOrder
    content?: SortOrderInput | SortOrder
    slug?: SortOrder
    is_active?: SortOrder
    type?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _relevance?: gk_newsOrderByRelevanceInput
  }

  export type gk_newsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: gk_newsWhereInput | gk_newsWhereInput[]
    OR?: gk_newsWhereInput[]
    NOT?: gk_newsWhereInput | gk_newsWhereInput[]
    schedule?: StringNullableFilter<"gk_news"> | string | null
    title?: StringFilter<"gk_news"> | string
    content?: StringNullableFilter<"gk_news"> | string | null
    is_active?: BoolFilter<"gk_news"> | boolean
    type?: StringNullableFilter<"gk_news"> | string | null
    created_at?: DateTimeFilter<"gk_news"> | Date | string
  }, "id" | "slug">

  export type gk_newsOrderByWithAggregationInput = {
    id?: SortOrder
    schedule?: SortOrderInput | SortOrder
    title?: SortOrder
    content?: SortOrderInput | SortOrder
    slug?: SortOrder
    is_active?: SortOrder
    type?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: gk_newsCountOrderByAggregateInput
    _avg?: gk_newsAvgOrderByAggregateInput
    _max?: gk_newsMaxOrderByAggregateInput
    _min?: gk_newsMinOrderByAggregateInput
    _sum?: gk_newsSumOrderByAggregateInput
  }

  export type gk_newsScalarWhereWithAggregatesInput = {
    AND?: gk_newsScalarWhereWithAggregatesInput | gk_newsScalarWhereWithAggregatesInput[]
    OR?: gk_newsScalarWhereWithAggregatesInput[]
    NOT?: gk_newsScalarWhereWithAggregatesInput | gk_newsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"gk_news"> | number
    schedule?: StringNullableWithAggregatesFilter<"gk_news"> | string | null
    title?: StringWithAggregatesFilter<"gk_news"> | string
    content?: StringNullableWithAggregatesFilter<"gk_news"> | string | null
    slug?: StringWithAggregatesFilter<"gk_news"> | string
    is_active?: BoolWithAggregatesFilter<"gk_news"> | boolean
    type?: StringNullableWithAggregatesFilter<"gk_news"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"gk_news"> | Date | string
  }

  export type gk_aboutCreateInput = {
    title: string
    description?: string | null
    is_active?: boolean
    created_at?: Date | string
    image: string
  }

  export type gk_aboutUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    is_active?: boolean
    created_at?: Date | string
    image: string
  }

  export type gk_aboutUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: StringFieldUpdateOperationsInput | string
  }

  export type gk_aboutUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: StringFieldUpdateOperationsInput | string
  }

  export type gk_aboutCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    is_active?: boolean
    created_at?: Date | string
    image: string
  }

  export type gk_aboutUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: StringFieldUpdateOperationsInput | string
  }

  export type gk_aboutUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: StringFieldUpdateOperationsInput | string
  }

  export type gk_eventCreateInput = {
    schedule?: string | null
    title: string
    content?: string | null
    slug: string
    is_active?: boolean
    type?: string | null
    created_at?: Date | string
  }

  export type gk_eventUncheckedCreateInput = {
    id?: number
    schedule?: string | null
    title: string
    content?: string | null
    slug: string
    is_active?: boolean
    type?: string | null
    created_at?: Date | string
  }

  export type gk_eventUpdateInput = {
    schedule?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type gk_eventUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    schedule?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type gk_eventCreateManyInput = {
    id?: number
    schedule?: string | null
    title: string
    content?: string | null
    slug: string
    is_active?: boolean
    type?: string | null
    created_at?: Date | string
  }

  export type gk_eventUpdateManyMutationInput = {
    schedule?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type gk_eventUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    schedule?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type gk_newsCreateInput = {
    schedule?: string | null
    title: string
    content?: string | null
    slug: string
    is_active?: boolean
    type?: string | null
    created_at?: Date | string
  }

  export type gk_newsUncheckedCreateInput = {
    id?: number
    schedule?: string | null
    title: string
    content?: string | null
    slug: string
    is_active?: boolean
    type?: string | null
    created_at?: Date | string
  }

  export type gk_newsUpdateInput = {
    schedule?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type gk_newsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    schedule?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type gk_newsCreateManyInput = {
    id?: number
    schedule?: string | null
    title: string
    content?: string | null
    slug: string
    is_active?: boolean
    type?: string | null
    created_at?: Date | string
  }

  export type gk_newsUpdateManyMutationInput = {
    schedule?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type gk_newsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    schedule?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type gk_aboutOrderByRelevanceInput = {
    fields: gk_aboutOrderByRelevanceFieldEnum | gk_aboutOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type gk_aboutCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    image?: SortOrder
  }

  export type gk_aboutAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type gk_aboutMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    image?: SortOrder
  }

  export type gk_aboutMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    image?: SortOrder
  }

  export type gk_aboutSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type gk_eventOrderByRelevanceInput = {
    fields: gk_eventOrderByRelevanceFieldEnum | gk_eventOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type gk_eventCountOrderByAggregateInput = {
    id?: SortOrder
    schedule?: SortOrder
    title?: SortOrder
    content?: SortOrder
    slug?: SortOrder
    is_active?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
  }

  export type gk_eventAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type gk_eventMaxOrderByAggregateInput = {
    id?: SortOrder
    schedule?: SortOrder
    title?: SortOrder
    content?: SortOrder
    slug?: SortOrder
    is_active?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
  }

  export type gk_eventMinOrderByAggregateInput = {
    id?: SortOrder
    schedule?: SortOrder
    title?: SortOrder
    content?: SortOrder
    slug?: SortOrder
    is_active?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
  }

  export type gk_eventSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type gk_newsOrderByRelevanceInput = {
    fields: gk_newsOrderByRelevanceFieldEnum | gk_newsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type gk_newsCountOrderByAggregateInput = {
    id?: SortOrder
    schedule?: SortOrder
    title?: SortOrder
    content?: SortOrder
    slug?: SortOrder
    is_active?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
  }

  export type gk_newsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type gk_newsMaxOrderByAggregateInput = {
    id?: SortOrder
    schedule?: SortOrder
    title?: SortOrder
    content?: SortOrder
    slug?: SortOrder
    is_active?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
  }

  export type gk_newsMinOrderByAggregateInput = {
    id?: SortOrder
    schedule?: SortOrder
    title?: SortOrder
    content?: SortOrder
    slug?: SortOrder
    is_active?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
  }

  export type gk_newsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}