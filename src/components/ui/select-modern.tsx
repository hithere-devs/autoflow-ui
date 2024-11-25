// select-modern.tsx
import { Label } from '@/components/ui/label';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';

export default function SelectModern({
	data,
	selectLabel,
	defaultValue,
}: {
	data: { value: string; label: string }[];
	selectLabel: string;
	defaultValue?: string;
}) {
	return (
		<div className='space-y-2'>
			<Label className='text-sm font-medium text-gray-200'>{selectLabel}</Label>
			<Select defaultValue={defaultValue}>
				<SelectTrigger className='w-full bg-gray-700/50 border-gray-600 text-gray-100 hover:bg-gray-700 transition-colors'>
					<SelectValue placeholder='Select model' />
				</SelectTrigger>
				<SelectContent className='bg-gray-800 border-gray-700'>
					{data.map((item) => (
						<SelectItem
							key={item.value}
							value={item.value}
							className='text-gray-100 focus:bg-gray-700 focus:text-gray-100'
						>
							{item.label}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	);
}
