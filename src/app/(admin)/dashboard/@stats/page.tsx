import React from 'react';
import { getSummaryStats, SummaryStats } from '@/lib/api';
import StatCard, { StatCardType } from '@/app/components/stat-card';
import Link from "next/link";

const labelByStat: Record<keyof SummaryStats, string> = {
    promotions: 'Total promotions',
    categories: 'Total categories',
    newCompanies: 'New companies',
    activeCompanies: 'Total active companies',
};

export default async function Page() {
    const data = await getSummaryStats(
    //     {
    //     // Затримка на 5с для даних
    //     next: {
    //     revalidate: 5,
    // }
    // }
);

    return (
        <div className="grid grid-cols-12 gap-5">
            {(Object.keys(labelByStat) as (keyof SummaryStats)[]).map((key) => (
                <Link href={`/dashboard/${key}`} key={key} className="col-span-3">
                    <StatCard
                        type={StatCardType.Gradient}
                        label={labelByStat[key]}
                        counter={data[key]}
                    />
                </Link>
            ))}
        </div>
    );
}