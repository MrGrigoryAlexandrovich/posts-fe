import PostForm from "./components/PostForm";
import PostList from "./components/PostList";

const Home = () => (
  <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    <main className="p-8 max-w-2xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold text-center text-green-600">
        Posts CRUD
      </h1>
      <p className="text-2xl leading-1">Create post</p>
      <PostForm />
      <PostList />
    </main>
  </div>
);

export default Home;
