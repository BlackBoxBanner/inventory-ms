import Layout from "@/components/Layout";
import Head from "next/head";

export default function Product() {
  return (
    <div className="sm:ml-60">
      <Head>
      <title>Inventory MS - Product</title>
      </Head>
      {/* <Layout> */}
      <nav class="bg-white w-full z-20 top-0 left-0 border-b border-gray-200 ">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center">
            {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo"> */}
            <div className="mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-package"
              >
                <path d="M16.5 9.4 7.55 4.24"></path>
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.29 7 12 12 20.71 7"></polyline>
                <line x1="12" x2="12" y1="22" y2="12"></line>
              </svg>
            </div>
            <span class="self-center text-2xl font-semibold whitespace-nowrap ">
              Product
            </span>
          </div>
        </div>
      </nav>
      {/* </Layout> */}
    </div>
  );
}
