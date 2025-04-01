import { useState, useEffect } from 'react';

interface ImageBasic {
	id: number;
	path: string;
	width: string;
	height: string;
	type: string;
	image_group_id: number;
	version: string;
}

interface ImageGroup {
	id: number;
	entity: string;
	entity_id: string;
	images: {
		basic: ImageBasic;
	};
}

interface Service {
	id: number;
	title: string;
	duration: number;
	category_id: number;
	price_min: number;
	price_max: number;
	discount: number;
	active: number;
	comment: string;
	image_group?: ImageGroup;
}

export const useServices = () => {
	const [services, setServices] = useState<Service[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchServices = async () => {
			try {
				const response = await fetch(
					'https://api.yclients.com/api/v1/company/983433/services/',
					{
						headers: {
							Accept: 'application/vnd.yclients.v2+json',
							'Content-Type': 'application/json',
							Authorization:
								'Bearer yydmdt48pkmnmyj8h56s, User 51b604b4a09b6a4acda3cd72a370fd4c',
						},
					}
				);

				if (!response.ok) {
					throw new Error('Failed to fetch services');
				}

				const data = await response.json();
				setServices(data.data || []);
				setLoading(false);
			} catch (err) {
				setError(err instanceof Error ? err.message : 'An error occurred');
				setLoading(false);
			}
		};

		fetchServices();
	}, []);

	return { services, loading, error };
};
