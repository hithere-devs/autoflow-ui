'use client';

import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { SidebarProvider } from '@/components/ui/sidebar';

interface ProviderProps {
	children: React.ReactNode;
}

export default function Providers({ children }: ProviderProps) {
	const [queryClient] = useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						staleTime: 1000 * 60 * 5,
						refetchInterval: 1000 * 60 * 5,
					},
				},
			})
	);

	return (
		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools />
			<SidebarProvider>{children}</SidebarProvider>
		</QueryClientProvider>
	);
}
