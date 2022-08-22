"use strict";
/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   test.ts                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: hawadh <hawadh@student.42Abudhabi.ae>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/07/22 15:14:25 by hawadh            #+#    #+#             */
/*   Updated: 2022/07/25 16:16:15 by hawadh           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const url = "https://jsonplaceholder.typicode.com/todos/1";
/**
 **	Test reading from API
 **/
axios_1.default.get(url).then((response) => {
    const todo = response.data;
    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;
    logTodo(id, title, completed);
});
const logTodo = (id, title, completed) => {
    console.log(`
	Todo with ID	: ${id}
	Title		: ${title}
	Status	: ${completed}
  `);
};
//# sourceMappingURL=test.js.map