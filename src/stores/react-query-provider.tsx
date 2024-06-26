// 'use client';

// import { useState } from 'react';
// // import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
// // import { QueryClientProvider, QueryClient, HydrationBoundary, dehydrate } from '@tanstack/react-query';

// export default function ReactQueryProviders({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
//   isDark: boolean;
// }>) {
//   const [client] = useState(
//     new QueryClient({
//       defaultOptions: {
//         queries: {
//           refetchOnWindowFocus: false, // 윈도우가 다시 포커스되었을때 데이터를 refetch
//           refetchOnMount: false, // 데이터가 stale 상태이면 컴포넌트가 마운트될 때 refetch
//           retry: 1, // API 요청 실패시 재시도 하는 옵션 (설정값 만큼 재시도)
//         },
//       },
//     })
//   );

//   return (
//     <QueryClientProvider client={client}>
//       <HydrationBoundary state={dehydrate(client)}>{children}</HydrationBoundary>
//       <ReactQueryDevtools initialIsOpen={false} />
//     </QueryClientProvider>
//   );
// }
