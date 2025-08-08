import { MainLayout } from '@shared/components/MainLayout';

function App() {
  return (
    <MainLayout>
      <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Welcome to the Atlandrak Platform</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">This is a placeholder for the 'main' application.</p>
      </div>
    </MainLayout>
  );
}
export default App;
