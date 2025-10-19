

const Contact = () => {
    return (
      <div className="flex-wrap justify-center text-center my-10 ">
        <h1 className="font-bold text-3xl p-4 m-4">Contact Us Page</h1>
        <form className="">
          <div>
            <input
              type="text"
              className=" border border-black p-2 m-2 w-1/4 rounded-lg"
              placeholder="name"
            />
          </div>

          <div>
            <input
              type="text"
              className=" border border-black p-2 m-2 w-1/4 rounded-lg"
              placeholder="message"
            />
          </div>

          <div>
            <button className=" border border-black p-2 m-2 w-1/4 bg-green-500 hover:bg-green-700  text-white font-bold rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600 ring-offset-2">
              Submit
            </button>
          </div>

        </form>
      </div>
    );
  };
  export default Contact;
