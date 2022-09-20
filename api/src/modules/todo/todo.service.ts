import { nanoid } from 'nanoid';

import { CreateTodoBody } from './todo.schema';

// todo type input
export async function createTodo(input: CreateTodoBody): Promise<{}> {
  const shortId = `todo_${nanoid()}`;

  return {
    shortId,
  };
}
