'use client';
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from '@/components/ui/sidebar';
import {
	FileJson2,
	Files,
	GitFork,
	Search,
	Settings,
	Store,
} from 'lucide-react';
import { useRouter } from 'next/navigation';

export function AppSidebar() {
	// Menu items.
	const items = [
		{
			title: 'Pipelines',
			url: '/pipelines',
			icon: GitFork,
		},
		{
			title: 'Marketplace',
			url: '/marketplace',
			icon: Store,
		},
		{
			title: 'Scripts',
			url: '/scripts',
			icon: FileJson2,
		},
		{
			title: 'Files',
			url: '/files',
			icon: Files,
		},
		{
			title: 'Settings',
			url: '/settings',
			icon: Settings,
		},
	];

	const router = useRouter();

	// Navigate to a URL.
	const navigateToURL = (url: string) => () => {
		router.replace(url);
	};

	return (
		<Sidebar>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Application</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{items.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton asChild>
										<div onClick={navigateToURL(item.url)}>
											<item.icon />
											<span>{item.title}</span>
										</div>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}
