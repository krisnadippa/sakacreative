import React from 'react';
import { cn } from '@/lib/utils';
import {
	LucideIcon,
	PlusIcon,
} from 'lucide-react';

type ContactInfoProps = React.ComponentProps<'div'> & {
	icon: LucideIcon;
	label: string;
	value: string;
};

type ContactCardProps = React.ComponentProps<'div'> & {
	// Content props
	title?: string;
	description?: string;
	contactInfo?: ContactInfoProps[];
	formSectionClassName?: string;
};

export function ContactCard({
	title = 'Contact With Us',
	description = 'If you have any questions regarding our Services or need help, please fill out the form here. We do our best to respond within 1 business day.',
	contactInfo,
	className,
	formSectionClassName,
	children,
	...props
}: ContactCardProps) {
	return (
		<div
			className={cn(
				'bg-black text-white border border-white/10 relative grid h-full w-full shadow-2xl md:grid-cols-2 lg:grid-cols-3 rounded-3xl overflow-hidden',
				className,
			)}
			{...props}
		>
			<PlusIcon className="absolute -top-3 -left-3 h-6 w-6 text-white/20" />
			<PlusIcon className="absolute -top-3 -right-3 h-6 w-6 text-white/20" />
			<PlusIcon className="absolute -bottom-3 -left-3 h-6 w-6 text-white/20" />
			<PlusIcon className="absolute -right-3 -bottom-3 h-6 w-6 text-white/20" />
			<div className="flex flex-col justify-between lg:col-span-2">
				<div className="relative h-full space-y-4 px-4 py-8 md:p-12">
          <h2 className="text-xl font-medium uppercase tracking-widest text-white/40 mb-8">
            / GET IN TOUCH
          </h2>
					<h1 className="text-4xl font-bold md:text-5xl lg:text-6xl tracking-tighter">
						{title}
					</h1>
					<p className="text-white/60 max-w-xl text-sm md:text-base lg:text-lg">
						{description}
					</p>
					<div className="grid gap-6 pt-12 md:grid-cols-2 lg:grid-cols-3">
						{contactInfo?.map((info, index) => (
							<ContactInfo key={index} {...info} />
						))}
					</div>
				</div>
			</div>
			<div
				className={cn(
					'bg-white/5 backdrop-blur-md flex h-full w-full items-center border-t border-white/10 p-8 md:col-span-1 md:border-t-0 md:border-l',
					formSectionClassName,
				)}
			>
				{children}
			</div>
		</div>
	);
}

function ContactInfo({
	icon: Icon,
	label,
	value,
	className,
	...props
}: ContactInfoProps) {
	return (
		<div className={cn('flex items-center gap-4 py-3', className)} {...props}>
			<div className="bg-white/10 rounded-xl p-3 border border-white/10">
				<Icon className="h-5 w-5 text-white" />
			</div>
			<div>
				<p className="font-semibold text-sm text-white">{label}</p>
				<p className="text-white/40 text-xs mt-0.5">{value}</p>
			</div>
		</div>
	);
}
