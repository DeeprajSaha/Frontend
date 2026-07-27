import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
    return (
        <div className="min-h-screen bg-gray-100">
            <div className="mx-auto max-w-2xl px-5 py-10">
                <h1 className="mb-8 text-center text-4xl font-bold text-gray-800">
                    Todo App
                </h1>

                <TodoForm />

                <TodoList />
            </div>
        </div>
    );
}

export default App;