'use client';

import { useRouter } from 'next/navigation';
import PromotionFormModal from '@/app/components/promotion-form-modal';

export default function Page({ params }: { params: { id: string } }) {
    const router = useRouter();

    return (
        <PromotionFormModal
            companyId={params.id}
            show={true}
            onClose={() => router.back()}
        />
    );
}
