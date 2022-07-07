import {Action} from '@ngrx/store'

import {Todo} from '../models/todos.model'

// Declare Todo Constants
// Types of Actions and also Payload[data]
export const ADD_TODO = '[todo] ADD_TODO'
export const UPDATE_TODO = '[todo] UPDATE_TODO'
export const DELETE_TODO = '[todo] DELETE_TODO'
export const COMPLETE_TODO = '[todo] COMPLETE_TOD'
export const EDIT_TODO = '[todo] EDIT_TODO'

export const COMPLETE = '[filter] COMPLETE'
export const PENDING = '[filter] PENDING'
export const DELETED = '[filter] DELETED'
export const ALL = '[filter] ALL'


/**
 * Add Todo Action Creator Type
 * @export
 * @class AddTodo
 * @implemetnts {Action}
 */
export class AddTodo implements Action{
    readonly type  = ADD_TODO
    constructor(public payload: string){

    }
}

/**
 * Update Todo Action Creator Type
 * @export
 * @class UpdateTodo
 * @implemetnts {Action}
 */
 export class UpdateTodo implements Action{
    readonly type  = UPDATE_TODO
    constructor(public payload: string){

    }
}

/**
 * Delete Todo Action Creator Type
 * @export
 * @class DeleteTodo
 * @implements {Action}
 */
 export class DeleteTodo implements Action{
    readonly type  = DELETE_TODO
    constructor(public payload: string){

    }
}

/**
 * Complete Todo Action Creator Type
 * @export
 * @class CompleteTodo
 * @implements {Action}
 */
 export class CompleteTodo implements Action{
    readonly type  = COMPLETE_TODO
    constructor(public payload: string){

    }
}

/**
 * Edit Todo Action Creator Type
 * @export
 * @class EditTodo
 * @implements {Action}
 */
 export class EditTodo implements Action{
    readonly type  = EDIT_TODO
    constructor(public payload: string){

    }
}

/**
 * Complete Filter Action Creator Type
 * @export
 * @class Complete
 * @implements {Action}
 */
 export class Complete implements Action{
    readonly type  = COMPLETE
    constructor(public payload: string){

    }
}

/**
 * Pending Filter Action Creator Type
 * @export
 * @class Pending
 * @implements {Action}
 */
 export class Pending implements Action{
    readonly type  = PENDING
    constructor(public payload: string){

    }
}


/**
 * Delete Filter Action Creator Type
 * @export
 * @class Deleted
 * @implements {Action}
 */
 export class Deleted implements Action{
    readonly type  = DELETED
    constructor(public payload: string){

    }
}


/**
 * All Filter Action Creator Type
 * @export
 * @class All
 * @implements {Action}
 */
 export class All implements Action{
    readonly type  = ALL
    constructor(public payload: string){

    }
}

export type AllActions = AddTodo | UpdateTodo | DeleteTodo | CompleteTodo | EditTodo | Complete | Pending | Deleted




