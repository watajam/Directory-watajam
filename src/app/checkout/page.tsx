// ⭕NestedSuspenseの例
// import { Suspense } from "react";
// import { Layout } from "./Layout";
// import { Spinner } from "./Spinner";
// import { FetchTasks } from "./FetchTasks";
// import { FetchUsers } from "./FetchUsers";

// export default function NestedSuspense = () => {
//   return (
//     <Layout>
//       <p className="mb-3 text-xl font-bold text-blue-500">Nested Suspense</p>
//       <Suspense
//         fallback={
//           <>
//             <p className="my-5 text-green-500">Showing outer skelton...</p>
//             <Spinner />
//           </>
//         }
//       >
//         //3秒遅延
//         <FetchUsers />
//         <Suspense
//           fallback={
//             <>
//               <p className="my-5 text-pink-500">Showing inner skelton...</p>
//               <Spinner />
//             </>
//           }
//         >
//           //5秒の遅延
//           <FetchTasks />
//         </Suspense>
//       </Suspense>
//     </Layout>
//   );
// };
