import React, { Component } from "react";

const UseCases = () => {
  return (
    <>
      <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl text-center mb-12">
        Use Cases
      </h2>
      <div className="flex flex-wrap justify-center gap-4 pb-36">
        <a
          // href="#"
          class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Budgeting
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            Set unlimited daily, weekly, monthly, or one-time budgets.
          </p>
        </a>
        <a
          // href="#"
          class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Expense control
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            See every transaction, synced and categorized automatically.
          </p>
        </a>
        <a
          // href="#"
          class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Planning
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            Get ahead of the curve. Automated upcoming payment notifications.{" "}
          </p>
        </a>
      </div>
    </>
  );
};

export default UseCases;
