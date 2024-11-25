// text-area-limit.tsx
import { useCharacterLimit } from '@/hooks/use-character-limit';
import { Label } from './label';
import { Textarea } from './textarea';
import { cn } from '@/lib/utils';

export default function TextareaLimit({
	label,
	maxLength = 100,
	value: initialValue = '',
	className,
}: {
	label: string;
	maxLength?: number;
	value?: string;
	className?: string;
}) {
	const {
		value,
		characterCount,
		handleChange,
		maxLength: limit,
	} = useCharacterLimit({ maxLength, initialValue });

	return (
		<div className='space-y-2'>
			<Label className='text-sm font-medium text-gray-200'>{label}</Label>
			<Textarea
				value={value}
				maxLength={maxLength}
				onChange={handleChange}
				className={cn(
					'resize-none bg-gray-700/50 border-gray-600 focus:border-blue-500 transition-colors',
					'text-sm text-gray-100 placeholder-gray-400',
					className
				)}
				placeholder={`Enter ${label.toLowerCase()}...`}
			/>
			<div className='flex justify-end'>
				<span className='text-xs text-gray-400'>
					{limit - characterCount} characters remaining
				</span>
			</div>
		</div>
	);
}
