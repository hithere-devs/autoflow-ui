// table.tsx
import { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Edit2, Trash2 } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';

interface TableItem {
	id: string;
	name: string;
	owner: string;
	updatedAt: Date;
}

interface DataTableProps<T extends TableItem> {
	data: T[];
	onEdit?: (item: T) => void;
	onDelete?: (item: T) => void;
	onSelect?: (selectedItems: T[]) => void;
	onRowClick?: (item: T) => void;
}

export function DataTable<T extends TableItem>({
	data,
	onEdit,
	onDelete,
	onSelect,
	onRowClick,
}: DataTableProps<T>) {
	const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());

	const toggleSelection = (id: string) => {
		const newSelection = new Set(selectedItems);
		if (newSelection.has(id)) {
			newSelection.delete(id);
		} else {
			newSelection.add(id);
		}
		setSelectedItems(newSelection);
		onSelect?.(data.filter((item) => newSelection.has(item.id)));
	};

	const toggleAll = () => {
		if (selectedItems.size === data.length) {
			setSelectedItems(new Set());
			onSelect?.([]);
		} else {
			setSelectedItems(new Set(data.map((item) => item.id)));
			onSelect?.(data);
		}
	};

	return (
		<div className='rounded-md border border-border'>
			<Table>
				<TableHeader>
					<TableRow className='bg-muted/50'>
						<TableHead className='w-[50px] text-center'>
							<Checkbox
								checked={selectedItems.size === data.length}
								onCheckedChange={toggleAll}
							/>
						</TableHead>
						<TableHead className='w-[57%] text-left'>Name</TableHead>
						<TableHead className='text-center w-[10%]'>Owner</TableHead>
						<TableHead className='text-center w-[10%]'>Last Updated</TableHead>
						<TableHead className='text-center w-[20%]'>Actions</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{data.map((item) => (
						<TableRow
							key={item.id}
							className={`
                    hover:bg-muted/50 transition-colors cursor-pointer
                    ${selectedItems.has(item.id) ? 'bg-muted/30' : ''}
                  `}
							onClick={(e) => {
								if (
									(e.target as HTMLElement).closest(
										'[data-prevent-row-click="true"]'
									)
								) {
									return;
								}
								onRowClick?.(item);
							}}
						>
							<TableCell className='text-center' data-prevent-row-click='true'>
								<Checkbox
									checked={selectedItems.has(item.id)}
									onCheckedChange={() => toggleSelection(item.id)}
								/>
							</TableCell>
							<TableCell className='font-medium text-left'>
								{item.name}
							</TableCell>
							<TableCell className='text-center'>
								<div className='flex items-center justify-center gap-2'>
									<Tooltip delayDuration={100}>
										<TooltipTrigger>
											<div
												className='w-7 h-7 rounded-full flex items-center justify-center text-white text-sm font-medium'
												style={{
													backgroundColor: `hsl(${
														item.id == 'p1' ? 20 : 80
													}, 70%, 45%)`,
												}}
											>
												{item.owner.split(' ')[0][0].toUpperCase()}
											</div>
										</TooltipTrigger>
										<TooltipContent>
											<p>{item.owner}</p>
										</TooltipContent>
									</Tooltip>
								</div>
							</TableCell>
							<TableCell className='text-center'>
								{formatDistanceToNow(item.updatedAt, { addSuffix: true })}
							</TableCell>
							<TableCell className='text-center' data-prevent-row-click='true'>
								<div className='flex justify-center gap-2'>
									<Button
										variant='ghost'
										size='icon'
										onClick={(e) => {
											e.stopPropagation();
											onEdit?.(item);
										}}
										className='hover:bg-blue-500/10 hover:text-blue-500'
									>
										<Edit2 className='h-4 w-4' />
									</Button>
									<Button
										variant='ghost'
										size='icon'
										onClick={(e) => {
											e.stopPropagation();
											onDelete?.(item);
										}}
										className='hover:bg-red-500/10 hover:text-red-500'
									>
										<Trash2 className='h-4 w-4' />
									</Button>
								</div>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
}
