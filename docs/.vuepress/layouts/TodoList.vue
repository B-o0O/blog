<script setup>
    import { ref, onMounted } from 'vue';
    import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue';
    import { createClient } from '@supabase/supabase-js';

    const supabaseUrl = 'https://wnaccbkoxojacytankrx.supabase.co';
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InduYWNjYmtveG9qYWN5dGFua3J4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ5MDAyNDQsImV4cCI6MjA2MDQ3NjI0NH0.sCAUORrQU_6hC0bC6p5cYzt4Wv8Jt4d9zA6D6QF5s20';
    const supabase = createClient(supabaseUrl, supabaseKey);

    const todos = ref([]);
    const newTodo = ref('');


    const fetchTodos = async () => {
        const { data } = await supabase.from('todos').select('*');
        todos.value = data || [];
    };

    const addTodo = async () => {
        if (!newTodo.value) return;
        const { data } = await supabase.from('todos').insert([{ title: newTodo.value }]).select();

        todos.value.push(...data);
        newTodo.value = '';
    };

    const updateTodo = async (todo) => {
        await supabase.from('todos').update({ title: todo.title }).eq('id', todo.id);
    };

    const deleteTodo = async (id) => {
        await supabase.from('todos').delete().eq('id', id);
        todos.value = todos.value.filter((todo) => todo.id !== id);
    };

    onMounted(fetchTodos);
</script>

<template>
    <ParentLayout>
        <template #page>
            <main class="page">
                <div class="todo-wrapper">
                    <form @submit.prevent="addTodo">
                        <input v-model="newTodo" placeholder="Add a new task" />
                        <button type="submit">Add</button>
                    </form>
                    <ul>
                        <li v-for="todo in todos" :key="todo.id">
                            <input type="text" v-model="todo.title" @blur="updateTodo(todo)" />
                            <button @click="deleteTodo(todo.id)">Delete</button>
                        </li>
                    </ul>
                </div>
            </main>
        </template>
    </ParentLayout>
</template>

<style lang="scss">
    @use '@vuepress/theme-default/styles/mixins';

    .todo-wrapper {
        @include mixins.content-wrapper;

        padding-top: calc(var(--navbar-height) + 1rem) !important;
        padding-bottom: 0 !important;
        font-size: 0.875em;

        form {
            display: flex;
            margin-bottom: 1rem;

            input {
                flex: 1;
                margin-right: 0.5rem;
                padding: 0.5rem;
                border: 1px solid #ccc;
                border-radius: 4px;
            }

            button {
                padding: 0.5rem 1rem;
                background-color: #0d8d4a;
                color: #030303;
                border: 1px;
                border-radius: 4px;
                cursor: pointer;

                &:hover {
                    background-color: var(--vp-c-brand-dark);
                }
            }
        }

        ul {
            list-style: none;
            padding: 0;

            li {
                display: flex;
                justify-content: space-between;
                margin-bottom: 0.5rem;

                input {
                    flex: 1;
                    margin-right: 0.5rem;
                    padding: 0.5rem;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                }

                button {
                    padding: 0.5rem;
                    background-color: #860000;
                    color: #000000;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;

                    &:hover {
                        background-color: var(--vp-c-danger-dark);
                    }
                }
            }
        }
    }
</style>