export default function WeatherLookUp() {
  return (
    <>
      <h1 className="text-center">Weather Woofer Pro</h1>
      <div className="flex justify-center">
        <form className="flex items-center">
          <input
            type="text"
            className="mr-2 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            placeholder="Enter text here"
          />
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 bg-sky-500/100 hover:bg-sky-700 text-white font-bold rounded-md focus:outline-none focus:ring focus:ring-sky-500 focus:ring-opacity-50"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
