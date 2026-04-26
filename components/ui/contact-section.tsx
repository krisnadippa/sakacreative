"use client";

import { ContactCard } from "@/components/ui/contact-card";
import { MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export function ContactSection() {
	return (
		<section className="relative flex size-full min-h-screen w-full items-center justify-center p-6 md:p-12 bg-black py-32">
			<div className="mx-auto max-w-7xl w-full">
				<ContactCard
					title="Let's build something amazing together."
					description="Have a project in mind or just want to say hi? Feel free to reach out. We're always open to new opportunities and interesting collaborations."
					contactInfo={[
						{
							icon: MailIcon,
							label: 'Email',
							value: 'hello@mysh.ui',
						},
						{
							icon: PhoneIcon,
							label: 'Phone',
							value: '+62 812 3456 7890',
						},
						{
							icon: MapPinIcon,
							label: 'Office',
							value: 'Bali, Indonesia',
							className: 'col-span-2 md:col-span-1',
						}
					]}
				>
					<form action="" className="w-full space-y-6">
						<div className="flex flex-col gap-2">
							<Label className="text-white/60 ml-1">Full Name</Label>
							<Input type="text" placeholder="John Doe" className="bg-white/5 border-white/10 text-white placeholder:text-white/20 h-12" />
						</div>
						<div className="flex flex-col gap-2">
							<Label className="text-white/60 ml-1">Email Address</Label>
							<Input type="email" placeholder="john@example.com" className="bg-white/5 border-white/10 text-white placeholder:text-white/20 h-12" />
						</div>
						<div className="flex flex-col gap-2">
							<Label className="text-white/60 ml-1">Your Message</Label>
							<Textarea placeholder="How can we help you?" className="bg-white/5 border-white/10 text-white placeholder:text-white/20 min-h-[120px] resize-none" />
						</div>
						<Button className="w-full h-12 bg-white text-black hover:bg-white/90 font-bold rounded-xl transition-all active:scale-[0.98]" type="button">
							Send Message
						</Button>
					</form>
				</ContactCard>
			</div>
		</section>
	);
}
