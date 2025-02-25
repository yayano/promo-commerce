import React from "react";

const NewsLetterBox = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="text-center">
      <p className="text-2x1 font-medium text-gray-800 dark:text-gray-200">
        Abonnez-vous maintenant et obtenez 20 % de réduction
      </p>
      <p className="text-gray-400 dark:text-gray-300 mt-3">
        Rejoignez notre communauté et soyez le premier à recevoir nos offres
        exclusives, des nouvelles et des conseils de mode.
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
      >
        <input
          type="email"
          placeholder="Entrer votre email"
          className="w-full sm:flex-1 outline-none dark:bg-[#121212] dark:text-gray-200"
          required
        />
        <button
          type="submit"
          className="bg-black text-white dark:text-[#121212] dark:bg-[#fff] dark:opacity-85 text-xs px-10 py-4"
        >
          S'ABONNER
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
