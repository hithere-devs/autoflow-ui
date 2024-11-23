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

export function AppSidebar() {
	// Menu items.
	const items = [
		{
			title: 'Pipelines',
			url: 'pipelines',
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
										<a href={item.url}>
											<item.icon />
											<span>{item.title}</span>
										</a>
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
