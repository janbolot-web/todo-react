
function App() {
  return (
    <div class="h-screen w-full flex flex-col items-center justify-center bg-teal-200 font-sans">
      <div class="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-3xl">
        <div class="mb-4">
          <div class="flex mt-4">
            <input class="shadow appearance-none border outline-none rounded w-full py-2 px-3 mr-4 text-slate-600" placeholder="Add Todo" />
            <button class="flex-no-shrink p-2 border-2 rounded text-teal-500 border-teal-500 hover:text-white hover:bg-teal-500">Add</button>
          </div>
        </div>
      </div>
      <div class="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-3xl">
        <h1 class="text-slate-800 text-3xl font-bold pb-3 border-b-2 mb-5">Todo List</h1>
        <div>
          <div class="flex mb-4 items-center">
            <p class="w-full text-grey-darkest">Add another component to Tailwind Components</p>
            <button class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-500 border-green-500 hover:bg-green-500">Done</button>
            <button class="flex-no-shrink p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-500">Remove</button>
          </div> <div class="flex mb-4 items-center">
            <p class="w-full text-grey-darkest">Add another component to Tailwind Components</p>
            <button class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-500 border-green-500 hover:bg-green-500">Done</button>
            <button class="flex-no-shrink p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-500">Remove</button>
          </div>
          <div class="flex mb-4 items-center">
            <p class="w-full line-through text-green">Submit Todo App Component to Tailwind Components</p>
            <button class="flex-no-shrink w-36 p-2 ml-4 mr-2 border-2 rounded  hover:text-white text-slate-500 border-slate-500 hover:bg-slate-500">Not Done</button>
            <button class="flex-no-shrink p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-500">Remove</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
